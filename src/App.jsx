import React, { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { weaponData } from './data.js'

import NavBar from './components/NavBar.jsx'
import LegendBar from './components/LegendBar.jsx'
import WeaponGrid from './components/WeaponGrid.jsx'
import PriorityColumn from './components/PriorityColumn.jsx'
import ActionPreviewPanel from './components/ActionPreviewPanel.jsx'
import MysticSkillsView from './components/MysticSkillsView.jsx'
import RulesetView from './components/RulesetView.jsx'
import UpdatesView from './components/UpdatesView.jsx'
import FloatingSocials from './components/FloatingSocials.jsx'
import BottomNav from './components/BottomNav.jsx'
import WeaponPicker from './components/WeaponPicker.jsx'

const TABS = [
    { id: 'weapons', label: 'Weapons' },
    { id: 'mystic', label: 'Mystic Skills' },
    { id: 'ruleset', label: 'Ruleset' },
    { id: 'updates', label: 'Updates' },
] 

const DEFAULT_WEAPON = 'Strategic Sword'

export default function App() {
    const [tab, setTab] = useState('weapons')
    const [selectedWeapon, setSelectedWeapon] = useState(DEFAULT_WEAPON)
    const [selectedAttack, setSelectedAttack] = useState(null)
    const [selectedMystic, setSelectedMystic] = useState(null)

    useEffect(() => {
        if (tab !== 'weapons') setSelectedAttack(null)
        if (tab !== 'mystic') setSelectedMystic(null)
    }, [tab])

    useEffect(() => { setSelectedAttack(null) }, [selectedWeapon])

    useEffect(() => {
        const titles = {
            weapons: 'WWM PvP — Weapons',
            mystic: 'WWM PvP — Mystic Skills',
            ruleset: 'WWM PvP — Ruleset',
        }
        document.title = titles[tab] || 'WWM PvP'
    }, [tab])

    const handleWeapon = useCallback((name) => {
        if (!weaponData[name]) return
        setSelectedWeapon(name)
    }, [])

    return (
        <div className="relative z-10 flex flex-col h-screen w-screen overflow-hidden text-white">
            <NavBar activeTab={tab} onTabChange={setTab} tabs={TABS} />
            <LegendBar hidden={tab === 'ruleset' || tab === 'updates'} />

            {/* On mobile the fixed BottomNav (h-14) sits over the bottom
                of <main>; pad-bottom on mobile so the last preview row
                isn't covered by the nav strip. Desktop unchanged. */}
            <main className="flex-1 min-h-0 relative px-2 sm:px-3 pb-16 md:pb-3 pt-2 sm:pt-3">
                <AnimatePresence mode="wait">
                    {tab === 'weapons' && (
                        <motion.div
                            key="weapons"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                            className="h-full"
                        >
                            <DesktopWorkspace
                                selectedWeapon={selectedWeapon}
                                selectedAttack={selectedAttack}
                                onSelectWeapon={handleWeapon}
                                onSelectAttack={setSelectedAttack}
                                previewable
                            />
                        </motion.div>
                    )}
                    {tab === 'mystic' && (
                        <motion.div
                            key="mystic"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                            className="h-full"
                        >
                            <MysticSkillsView
                                selectedMystic={selectedMystic}
                                onSelectMystic={setSelectedMystic}
                            />
                        </motion.div>
                    )}
                    {tab === 'ruleset' && (
                        <motion.div
                            key="ruleset"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                            className="h-full"
                        >
                            <RulesetView />
                        </motion.div>
                    )}
                    {tab === 'updates' && (
                        <motion.div
                            key="updates"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                            className="h-full"
                        >
                            <UpdatesView />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <FloatingSocials />
            <BottomNav activeTab={tab} onTabChange={setTab} tabs={TABS} />
        </div>
    )
}

/**
 * DesktopWorkspace — desktop 3-column grid (master weapons / priority /
 * preview) plus a mobile (<md) master-detail layout.
 *
 * Mobile layout (the new piece):
 *   1. A compact WEAPONS header strip shows the currently selected
 *      weapon name + a "Change" button.
 *   2. Tapping Change opens a `WeaponPicker` modal that slides up from
 *      the bottom, showing the full `WeaponGrid` in `density="compact"`
 *      (3-col, ~56px cards) so all 18 weapons are visible and identifiable
 *      by icon + category color rail.
 *   3. Below the header strip, PriorityColumn + ActionPreviewPanel
 *      stack vertically, sharing the remaining vertical space. Priorities
 *      gets slightly more (`flex-[1.4]`) because the user actively
 *      interacts with it; preview gets `flex-1`.
 *
 * Wireframe:
 *   NavBar           — "WWM PvP" brand + mobile tabs + Donate
 *   LegendBar        — tier legend (compressed on mobile)
 *   ┌─ Current Weapon                    ──────── Change ─┐
 *   ┌─ Priorities  (flex-[1.4]) ─────────────────────────┐
 *   │  Light Attack                          1  0         │
 *   │  Light Sprint Attack                    1  0         │  scrolls
 *   │  ...                                                 │
 *   └────────────────────────────────────────────────────┘
 *   ┌─ Action Preview (flex-1) ──────────────────────────┐
 *   │  [identity card] [S/D readouts] [video 16:9]       │  scrolls
 *   └────────────────────────────────────────────────────┘
 */
function DesktopWorkspace({ selectedWeapon, selectedAttack, onSelectWeapon, onSelectAttack, previewable }) {
    const [pickerOpen, setPickerOpen] = useState(false)
    return (
        <>
            <div className="hidden md:grid h-full grid-cols-[2fr_2fr_3fr] gap-2">
                <div className="glass border border-white/10 min-h-0 overflow-hidden">
                    <WeaponGrid selected={selectedWeapon} onSelect={onSelectWeapon} />
                </div>
                <div className="glass border border-white/10 min-h-0 overflow-hidden">
                    <PriorityColumn
                        weaponName={selectedWeapon}
                        selectedAttack={selectedAttack}
                        onSelectAttack={onSelectAttack}
                    />
                </div>
                <div className="glass border border-white/10 min-h-0 overflow-hidden">
                    <ActionPreviewPanel
                        weaponName={selectedWeapon}
                        selectedAttack={selectedAttack}
                        previewable={previewable}
                    />
                </div>
            </div>

            <div className="md:hidden flex flex-col h-full gap-2">
                {/* Mobile: current-weapon header strip + Change button */}
                <div className="glass border border-white/10 shrink-0">
                    <div className="flex items-center justify-between gap-2 px-3 py-2.5 bg-midnight-900/60">
                        <div className="flex items-center gap-2 min-w-0">
                            <span className="h-1.5 w-1.5 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" aria-hidden="true" />
                            <span className="text-[11px] mono uppercase tracking-[0.22em] text-white/50 font-semibold">
                                Weapon
                            </span>
                            <span className="text-[12.5px] font-semibold text-white/90 truncate min-w-0">
                                {selectedWeapon}
                            </span>
                            {weaponData[selectedWeapon]?.wip && (
                                <span className="shrink-0 text-[8.5px] mono uppercase tracking-[0.18em] text-amber-300 font-bold">
                                    WIP
                                </span>
                            )}
                        </div>
                        <button
                            type="button"
                            onClick={() => setPickerOpen(true)}
                            className="shrink-0 px-3 h-8 mono text-[10px] uppercase tracking-[0.2em] border border-blue-500/40 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20 hover:border-blue-500/60 transition-colors"
                        >
                            Change
                        </button>
                    </div>
                </div>

                {/* Priorities — gets a slight flex edge over the preview */}
                <div className="glass border border-white/10 flex-[1.4] min-h-0 overflow-hidden">
                    <PriorityColumn
                        weaponName={selectedWeapon}
                        selectedAttack={selectedAttack}
                        onSelectAttack={onSelectAttack}
                    />
                </div>

                {/* Action preview */}
                <div className="glass border border-white/10 flex-1 min-h-0 overflow-hidden">
                    <ActionPreviewPanel
                        weaponName={selectedWeapon}
                        selectedAttack={selectedAttack}
                        previewable={previewable}
                    />
                </div>

                {/* Full-screen weapon picker modal */}
                <WeaponPicker
                    open={pickerOpen}
                    onClose={() => setPickerOpen(false)}
                    selected={selectedWeapon}
                    onSelect={onSelectWeapon}
                    title="Weapons"
                    expectedTotal={Object.keys(weaponData).length}
                />
            </div>
        </>
    )
}
