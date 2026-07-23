import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PriorityBadge from './PriorityBadge.jsx'
import { attackStages, weaponData } from '../data.js'

// Map set-prefix → CSS class for the rail + accent
const SET_CLASS = {
    Bellstrike: 'cat-bellstrike bg-cat-bellstrike border-cat-bellstrike',
    Bamboocut:  'cat-bamboocut bg-cat-bamboocut border-cat-bamboocut',
    Stonesplit: 'cat-stonesplit bg-cat-stonesplit border-cat-stonesplit',
    Silkbind:   'cat-silkbind bg-cat-silkbind border-cat-silkbind',
}
function setClass(set) { return SET_CLASS[set] || 'bg-white/40 border-white/40' }
function setText(set)  { return SET_CLASS[set] ? SET_CLASS[set].split(' ')[0] : 'text-white/60' }

/** StageRow — one clickable attack row inside a category group.
 *  Fixed-width grid columns (`grid-cols-[1fr_4.5rem_4.5rem]`) guarantee
 *  the Stagger and Defense cells are exactly 72px wide on every row, so
 *  the badge box always anchors to the right edge of its cell via
 *  `justify-self-end pr-1`. The badge itself uses its default
 *  `align="center"` mode so the tier NUMBER is centered horizontally
 *  inside the badge box (symmetric `pl-N pr-N` + `justify-center`).
 *  The badge BOX sits at the right of its column, but the number sits
 *  in the middle of that box — no longer right-anchored to a fixed
 *  column rail. */
function StageRow({ category, stage, index, selected, onSelect }) {
    const hasSource = !!stage.source
    return (
        <button
            onClick={() => onSelect({ category, stage, index })}
            className={`group relative w-full text-left grid grid-cols-[1fr_3.5rem_3.5rem] sm:grid-cols-[1fr_4.5rem_4.5rem] gap-2 sm:gap-3 items-center px-2.5 sm:px-3 py-1.5 sm:py-2 border-y border-transparent transition-colors ${selected
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
                {hasSource && (
                    <span
                        className="text-[8.5px] mono uppercase tracking-[0.16em] px-1 py-px border border-amber-400/60 bg-amber-400/10 text-amber-300"
                        title={stage.source.title}
                    >
                        {stage.source.type.split(' ').map((w) => w[0]).join('').toUpperCase()}
                    </span>
                )}
            </div>
            <PriorityBadge value={stage.S} className="justify-self-end pr-1" />
            <PriorityBadge value={stage.D} className="justify-self-end pr-1" />
        </button>
    )
}

/** CategoryGroup — labeled vertical block of stages.
 *  Header is a thin set-colored bar showing only the category name —
 *  the stage-count pill was removed since users can count rows by eye. */
function CategoryGroup({ name, attackObj, selectedAttack, onSelectAttack, accent }) {
    const stages = attackStages(attackObj)
    return (
        <section className="border-b border-white/8 last:border-b-0">
            <header className={`sticky top-0 z-[2] px-3 py-1.5 bg-midnight-900/85 backdrop-blur-sm border-b ${accent ? accent.border : 'border-white/10'} flex items-center`}>
                <span className={`text-[10.5px] mono uppercase tracking-[0.22em] font-semibold ${accent ? accent.text : 'text-white/80'}`}>
                    {name}
                </span>
            </header>
            <div>
                {stages.map((stage, i) => (
                    <StageRow
                        key={`${name}-${i}-${stage.name}`}
                        category={name}
                        stage={stage}
                        index={i}
                        selected={
                            selectedAttack &&
                            selectedAttack.category === name &&
                            selectedAttack.index === i
                        }
                        onSelect={onSelectAttack}
                    />
                ))}
            </div>
        </section>
    )
}

/** ColumnHeader — sticky "STAGE / STAGGER / DEFENSE" header above the
 *  category list. Uses the same fixed-width grid columns as StageRow
 *  (`grid-cols-[1fr_4.5rem_4.5rem]`) so the cell width matches exactly.
 *  Stagger/Defense labels are wrapped in a div with `justify-self-end
 *  pr-1 text-right` so the label anchors to the same `cell_right − 4px`
 *  position as the badge number inside the row below. */
function ColumnHeader() {
    return (
        <div className="sticky top-0 z-[3] grid grid-cols-[1fr_3.5rem_3.5rem] sm:grid-cols-[1fr_4.5rem_4.5rem] gap-2 sm:gap-3 items-center px-2.5 sm:px-3 py-1.5 sm:py-2 bg-midnight-900/95 backdrop-blur-sm border-b-2 border-white/12">
            <span className="text-[10.5px] mono uppercase tracking-[0.24em] font-bold text-white/85">Stage</span>
            <div className="justify-self-end pr-1 text-right">
                <span className="text-[10.5px] mono uppercase tracking-[0.24em] font-bold text-white/85">Stagger</span>
            </div>
            <div className="justify-self-end pr-1 text-right">
                <span className="text-[10.5px] mono uppercase tracking-[0.24em] font-bold text-white/85">Defense</span>
            </div>
        </div>
    );
}

/**
 * PriorityColumn — middle column.
 * When a weapon is chosen, displays its attack categories as labeled
 * groups, each containing stages with their S/D tier-colored badges.
 * Picks the right accent class from the weapon's `category` set prefix.
 */
export default function PriorityColumn({ weaponName, selectedAttack, onSelectAttack }) {
    const weapon = weaponName ? weaponData[weaponName] : null
    const setPrefix = weapon?.category?.split(' - ')[0]
    const accent = setPrefix && SET_CLASS[setPrefix]
        ? { rail: SET_CLASS[setPrefix].split(' ')[1], text: SET_CLASS[setPrefix].split(' ')[0], border: 'border-' + (SET_CLASS[setPrefix].split(' ')[2] || 'white/20').replace('border-', 'cat-') }
        : null

    return (
        <div className="flex flex-col h-full w-full overflow-hidden">
            {/* Header strip */}
            <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-white/10 bg-midnight-900/60">
                <div className="flex items-center gap-2 min-w-0">
                    <span className={`h-1.5 w-1.5 ${accent ? accent.rail : 'bg-violet-300'} ${accent ? '' : 'shadow-[0_0_8px_rgba(168,85,247,0.9)]'}`} aria-hidden="true" />
                    <span className={`text-[11px] mono uppercase tracking-[0.22em] font-semibold ${accent ? accent.text : 'text-white/85'}`}>
                        Priorities
                    </span>
                    {weapon && (
                        <span className="text-[10px] mono text-white/40 truncate ml-1 hidden sm:inline">
                            · {weapon.category}
                        </span>
                    )}
                </div>
                {weapon && (
                    <span className="text-[10px] mono text-white/40 truncate max-w-[50%]">
                        {weaponName}
                    </span>
                )}
            </div>

            {/* Empty state */}
            {!weapon && (
                <div className="flex-1 min-h-0 flex items-center justify-center p-6 text-center">
                    <div>
                        <div className="mx-auto mb-3 h-10 w-10 border border-white/15 mono flex items-center justify-center text-blue-300 text-[14px]">→</div>
                        <p className="text-[12px] mono uppercase tracking-[0.2em] text-white/40">
                            Select a weapon
                        </p>
                        <p className="text-[11px] text-white/30 mt-1">
                            Attack categories will populate here
                        </p>
                    </div>
                </div>
            )}

            {/* Categories */}
            {weapon && (
                <div className="flex-1 min-h-0 overflow-y-auto">
                    <ColumnHeader />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={weaponName}
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -16 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {Object.entries(weapon).filter(([, v]) =>
                                v && typeof v === 'object' && (Array.isArray(v.stages) || v.rpName)
                            ).map(([catName, attackObj]) => (
                                <CategoryGroup
                                    key={catName}
                                    name={catName}
                                    attackObj={attackObj}
                                    selectedAttack={selectedAttack}
                                    onSelectAttack={onSelectAttack}
                                    accent={accent}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
        </div>
    )
}
