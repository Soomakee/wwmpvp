import React, { useMemo } from 'react'
import WeaponCard from './WeaponCard.jsx'
import { groupWeaponsByCategory, weaponData } from '../data.js'

const SET_TEXT = {
    Bellstrike: 'cat-bellstrike',
    Bamboocut:  'cat-bamboocut',
    Stonesplit: 'cat-stonesplit',
    Silkbind:   'cat-silkbind',
    Mystic:     'cat-mystic',
}
const SET_RAIL = {
    Bellstrike: 'bg-cat-bellstrike',
    Bamboocut:  'bg-cat-bamboocut',
    Stonesplit: 'bg-cat-stonesplit',
    Silkbind:   'bg-cat-silkbind',
    Mystic:     'bg-cat-mystic',
}

/**
 * WeaponGrid — left master panel.
 * Renders items grouped by FULL PATH (e.g. "Bellstrike - Umbra") rather
 * than by set prefix, so each path is its own row with weapons laid out
 * side-by-side horizontally — exactly two weapons per path line up in
 * one row of the 2-col grid.
 *
 * Color comes from `group.setKey` (the prefix), but the section header
 * displays the full `group.set` so the user can see both the set family
 * and the path variant at a glance.
 *
 * Reused by the Mystic Skills view (with a `groups` override + `setOverride`).
 */
export default function WeaponGrid({
    selected,
    onSelect,
    title = 'Weapons',
    groups,            // optional override: Array<{ set, setKey, weapons }>
    iconUrlFor,        // optional override: (item) => string
    setOverride,       // optional override when not derived from item.category
    hideSectionHeaders = false, // when true (e.g. Mystic Skills), skip per-group sub-headers
    expectedTotal = 18, // denominator for the right-side count chip ("n / total")
    density = 'normal', // 'normal' = desktop 2-col 72px cards; 'compact' = mobile 3-col 56px cards
}) {
    const computedGroups = useMemo(() => {
        if (groups) return groups
        return groupWeaponsByCategory()
    }, [groups])

    const totalCount = computedGroups.reduce((n, g) => n + g.weapons.length, 0)
    const defaultIconUrl = (item) => `${import.meta.env.BASE_URL}assets/Icons/${encodeURIComponent(item.name)}.png`

    // Density-aware grid classes: 2-col on both densities. Each set path
    // has exactly 2 weapons, so a 2-col grid uses every cell cleanly. The
    // old `grid-cols-3` on compact left a 3rd slot empty per row and
    // compressed the cards so weapon names truncated at ~6 chars on a
    // Galaxy S25 (412 CSS px wide). 2-col gives every card ~190 px of
    // horizontal space — enough to render "Heavenquaker Spear",
    // "Unfettered Rope Dart", and "Heavenwill Gauntlets" on a single
    // line at text-[11px].
    const isCompact = density === 'compact'
    const gridCols = 'grid-cols-2'
    const cardMin = isCompact ? 'min-h-[64px]' : 'min-h-[72px]'

    return (
        <div className="flex flex-col h-full w-full overflow-hidden relative">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-white/10 bg-midnight-900/60">
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" aria-hidden="true" />
                    <span className="text-[11px] mono uppercase tracking-[0.22em] text-white/85 font-semibold">
                        {title}
                    </span>
                </div>
                <span className="text-[10px] mono text-white/40">{totalCount}{expectedTotal ? ` / ${expectedTotal}` : ''}</span>
            </div>

            {/* Sections */}
            <div className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-[2px] bg-white/[0.025] [scrollbar-gutter:stable]">
                {computedGroups.map((group) => {
                    const key = group.setKey || group.set.split(' - ')[0] || 'Mystic'
                    const rail = SET_RAIL[key] || 'bg-white/40'
                    const text = SET_TEXT[key] || 'text-white/55'
                    return (
                        <section key={group.set} className="shrink-0 flex flex-col bg-midnight-950">
                            {!hideSectionHeaders && (
                                <div className="flex items-center gap-2 px-2 pt-1.5 pb-1">
                                    <span className="text-[9px] mono uppercase tracking-[0.24em] flex items-center gap-2">
                                        <span className={`h-2 w-2 ${rail}`} aria-hidden="true" />
                                        <span className={text}>{group.set}</span>
                                    </span>
                                </div>
                            )}
                            <div className={`grid ${gridCols} gap-[2px] bg-white/[0.04] ${hideSectionHeaders ? 'px-[2px] py-[2px]' : 'px-[2px] pb-[2px]'}`}>
                                {group.weapons.map((weapon) => (
                                    <div key={weapon.name} className={`bg-midnight-950 ${cardMin} min-w-0 relative`}>
                                        <WeaponCard
                                            weapon={weapon}
                                            active={selected === weapon.name}
                                            onClick={onSelect}
                                            iconAvailable
                                            iconUrl={(iconUrlFor || defaultIconUrl)(weapon)}
                                            setOverride={key}
                                            compact={isCompact}
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}
