import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WeaponGrid from './WeaponGrid.jsx'
import PriorityBadge from './PriorityBadge.jsx'
import PriorityColumn from './PriorityColumn.jsx'
import ActionPreviewPanel from './ActionPreviewPanel.jsx'
import WeaponPicker from './WeaponPicker.jsx'
import { mysticSkillsData, mysticStages, attackStages } from '../data.js'

// Total count of mystic skills in data.js — drives the master-panel chip.
const MYSTIC_TOTAL = Object.keys(mysticSkillsData).length

/**
 * MysticSkillsView — same 3-column layout as the Weapons view, with a
 * mobile drawer fallback that matches the weapons mobile workspace.
 *
 * Each mystic skill is converted into a "synthetic weapon" with a single
 * "Cast" attack that contains the skill's stages. This lets us reuse
 * `WeaponGrid` (for the master) and `PriorityColumn` (for the middle).
 * The right column uses `previewable={false}` so it renders an icon +
 * explanation instead of a video clip.
 */
export default function MysticSkillsView({ selectedMystic, onSelectMystic }) {
    const [pickerOpen, setPickerOpen] = useState(false)
    // Index of the currently active stage within the active mystic skill's
    // "Cast" stage list. Drives which row is highlighted + which stage
    // detail the right-column panel renders. Without this, every click of
    // a stage row was a no-op because the syntheticSelectedAttack derived
    // value was hardcoded to stages[0].
    const [stageIndex, setStageIndex] = useState(0)

    const allSkills = useMemo(() => {
        return Object.entries(mysticSkillsData).map(([name, entry]) => ({
            name,
            category: null, // no subcategory — mystic skills aren't bucketed
            attacks: { Cast: { stages: mysticStages(entry, name) } },
        }))
    }, [])

    // Single flat group — WeaponGrid's `hideSectionHeaders` prop suppresses
    // the redundant per-group sub-header so the master panel just shows
    // the "Mystic Skills" title bar + a clean 2-col grid of all skills.
    const groups = useMemo(() => ([{
        set: 'Mystic Skills',
        setKey: 'Mystic',
        weapons: allSkills,
    }]), [allSkills])

    const selectedName = selectedMystic?.name || allSkills[0]?.name

    const syntheticWeapon = useMemo(() => {
        if (!selectedName) return null
        const entry = mysticSkillsData[selectedName]
        if (!entry) return null
        return {
            name: selectedName,
            category: null,
            attacks: { Cast: { stages: mysticStages(entry, selectedName) } },
        }
    }, [selectedName])

    const syntheticSelectedAttack = useMemo(() => {
        if (!syntheticWeapon) return null
        const stages = syntheticWeapon.attacks.Cast.stages
        if (!stages || stages.length === 0) return null
        // Lazy safety: if stages is shorter than stageIndex for any
        // reason, fall back to the last available row rather than throw.
        // Primary reset path is the useEffect below on selectedName change.
        const safeIndex = stageIndex < stages.length ? stageIndex : stages.length - 1
        return { category: 'Cast', stage: stages[safeIndex], index: safeIndex }
    }, [syntheticWeapon, stageIndex])

    const handleSelect = (name) => {
        if (onSelectMystic) {
            onSelectMystic({ name, stages: mysticStages(mysticSkillsData[name], name) })
        }
    }

    // Reset the active stage whenever the user picks a different mystic
    // skill from the picker modal. Without this, switching from a 5-stage
    // skill (Divine Counter) to a 1-stage skill (Meridian Touch) would
    // leave stageIndex pointing at row 4+ which doesn't exist; the clamp
    // inside syntheticSelectedAttack would silently snap to 0 anyway, but
    // explicit resets are clearer in state and intent.
    useEffect(() => {
        setStageIndex(0)
    }, [selectedName])

    return (
        <>
            {/* Desktop: 3-column master/detail/preview — exactly mirrors Weapons */}
            <div className="hidden md:grid h-full grid-cols-[2fr_2fr_3fr] gap-2">
                <div className="glass border border-white/10 min-h-0 overflow-hidden">
                    <WeaponGrid
                        selected={selectedName}
                        onSelect={handleSelect}
                        title="Mystic Skills"
                        groups={groups}
                        setOverride="Mystic"
                        hideSectionHeaders
                        expectedTotal={MYSTIC_TOTAL}
                    />
                </div>
                <div className="glass border border-white/10 min-h-0 overflow-hidden">
                    <MysticPriorityColumn weapon={syntheticWeapon} selectedAttack={syntheticSelectedAttack} onSelectStage={setStageIndex} />
                </div>
                <div className="glass border border-white/10 min-h-0 overflow-hidden">
                    <ActionPreviewPanel
                        weaponName={selectedName}
                        selectedAttack={syntheticSelectedAttack}
                        previewable={true}
                    />
                </div>
            </div>

            {/* Mobile: master-detail with picker modal — mirrors Weapons mobile workspace */}
            <div className="md:hidden flex flex-col h-full gap-2">
                {/* Selected-skill header strip + Change button */}
                <div className="glass border border-white/10 shrink-0">
                    <div className="flex items-center justify-between gap-2 px-3 py-2.5 bg-midnight-900/60">
                        <div className="flex items-center gap-2 min-w-0">
                            <span className="h-1.5 w-1.5 bg-cat-mystic shadow-[0_0_8px_rgba(250,204,21,0.7)]" aria-hidden="true" />
                            <span className="text-[11px] mono uppercase tracking-[0.22em] text-white/50 font-semibold">
                                Mystic Skill
                            </span>
                            <span className="text-[12.5px] font-semibold text-amber-300 truncate min-w-0">
                                {selectedName}
                            </span>
                        </div>
                        <button
                            type="button"
                            onClick={() => setPickerOpen(true)}
                            className="shrink-0 px-3 h-8 mono text-[10px] uppercase tracking-[0.2em] border border-amber-400/40 bg-amber-400/10 text-amber-200 hover:bg-amber-400/20 hover:border-amber-400/60 transition-colors"
                        >
                            Change
                        </button>
                    </div>
                </div>

                {/* Priorities (gold-accented) */}
                <div className="glass border border-white/10 flex-[1.4] min-h-0 overflow-hidden">
                    <MysticPriorityColumn weapon={syntheticWeapon} selectedAttack={syntheticSelectedAttack} onSelectStage={setStageIndex} />
                </div>

                {/* Action preview (no video for mystics) */}
                <div className="glass border border-white/10 flex-1 min-h-0 overflow-hidden">
                    <ActionPreviewPanel
                        weaponName={selectedName}
                        selectedAttack={syntheticSelectedAttack}
                        previewable={true}
                    />
                </div>

                {/* Picker modal — compact 2-col grid (renamed density class after
                    the truncation fix) + the mystic `groups` prop. Without
                    `groups={groups}`, WeaponGrid falls back to
                    `groupWeaponsByCategory()` and renders the WEAPONS master
                    instead of the mystic skill list, which was the bug. */}
                <WeaponPicker
                    open={pickerOpen}
                    onClose={() => setPickerOpen(false)}
                    selected={selectedName}
                    onSelect={handleSelect}
                    title="Mystic Skills"
                    groups={groups}
                    setOverride="Mystic"
                    hideSectionHeaders
                    expectedTotal={MYSTIC_TOTAL}
                />
            </div>
        </>
    )
}

/** Single-section Priority column for mystics — same visual contract as
 *  a weapon's column but with only one "Cast" category and a gold accent. */
function MysticPriorityColumn({ weapon, selectedAttack, onSelectStage }) {
    if (!weapon) {
        return (
            <div className="h-full flex items-center justify-center text-white/40 text-[11px] mono uppercase tracking-[0.22em]">
                Loading…
            </div>
        )
    }
    const stages = attackStages(weapon.attacks.Cast)
    return (
        <div className="flex flex-col h-full w-full overflow-hidden">
            <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-white/10 bg-midnight-900/60">
                <div className="flex items-center gap-2 min-w-0">
                    <span className="h-1.5 w-1.5 bg-cat-mystic" aria-hidden="true" />
                    <span className="text-[11px] mono uppercase tracking-[0.22em] text-amber-300 font-semibold">
                        Priorities
                    </span>
                </div>
                <span className="text-[10px] mono text-white/40 truncate max-w-[60%]">{weapon.name}</span>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto">
                <div className="sticky top-0 z-[3] grid grid-cols-[1fr_3.5rem_3.5rem] sm:grid-cols-[1fr_4.5rem_4.5rem] gap-2 sm:gap-3 items-center px-2.5 sm:px-3 py-1.5 sm:py-2 bg-midnight-900/95 backdrop-blur-sm border-b-2 border-cat-mystic/60">
                    <span className="text-[10.5px] mono uppercase tracking-[0.24em] font-bold text-white/85">Stage</span>
                    <div className="justify-self-end pr-1 text-right">
                        <span className="text-[10.5px] mono uppercase tracking-[0.24em] font-bold text-white/85">Stagger</span>
                    </div>
                    <div className="justify-self-end pr-1 text-right">
                        <span className="text-[10.5px] mono uppercase tracking-[0.24em] font-bold text-white/85">Defense</span>
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={weapon.name}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {stages.map((stage, i) => (
                            <MysticStageRow
                                key={`${weapon.name}-${i}-${stage.name}`}
                                stage={stage}
                                index={i}
                                selected={
                                    selectedAttack &&
                                    selectedAttack.category === 'Cast' &&
                                    selectedAttack.index === i
                                }
                                onSelect={onSelectStage}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

function MysticStageRow({ stage, index, selected, onSelect }) {
    return (
        <button
            type="button"
            onClick={() => onSelect?.(index)}
            className={`group relative w-full text-left grid grid-cols-[1fr_3.5rem_3.5rem] sm:grid-cols-[1fr_4.5rem_4.5rem] gap-2 sm:gap-3 items-center px-2.5 sm:px-3 py-1.5 sm:py-2 border-b border-transparent transition-colors ${selected
                ? 'bg-white/[0.08] border-white/30'
                : 'hover:bg-white/[0.04] border-b-white/5'
                }`}
        >
            <div className="min-w-0 flex items-center gap-2">
                <span className="text-[10px] mono text-white/30 w-5 shrink-0 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`text-[12.5px] truncate ${selected ? 'text-white' : 'text-white/85'}`}>
                    {stage.name}
                </span>
            </div>
            <PriorityBadge value={stage.S} className="justify-self-end pr-1" />
            <PriorityBadge value={stage.D} className="justify-self-end pr-1" />
        </button>
    )
}
