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

// Path icons are provided per PATH variant (Umbra, Splendor, Wind, Dust,
// Kite, Might, Strength, Jade, Deluge, Draught), not per set — e.g. the Dust
// icon sits next to "Bamboocut - Dust". The PNGs are transparent, so they
// render on a black tile (see the header button markup below).
const PATH_ICON_BASE = `${import.meta.env.BASE_URL}assets/Weapon Paths Icons/`
const pathIconUrl = (fullPath) => `${PATH_ICON_BASE}${encodeURIComponent(fullPath.split(' - ')[1] || fullPath)}.png`


/** Path icon on a black tile with a letter fallback for paths that
 * don't have an icon asset yet (e.g. the WIP "Ribbons" path). */
function PathIcon({ fullPath, size = 'w-9 h-9', iconSize = 'w-8 h-8' }) {
    const [failed, setFailed] = React.useState(false)
    const pathName = fullPath.split(' - ')[1] || fullPath
    return (
        <span className={`shrink-0 flex items-center justify-center ${size} bg-black border border-white/10`}>
            {failed ? (
                <span className={`text-[10px] mono font-bold text-white/45`} aria-hidden="true">
                    {pathName.charAt(0)}
                </span>
            ) : (
                <img
                    className={`${iconSize} antialiased`}
                    src={pathIconUrl(fullPath)}
                    alt=""
                    aria-hidden="true"
                    onError={() => setFailed(true)}
                />
            )}
        </span>
    )
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
    expectedTotal = Object.keys(weaponData).length, // denominator for the right-side count chip ("n / total")
    density = 'normal', // 'normal' = desktop 2-col 72px cards; 'compact' = mobile 3-col 56px cards
}) {
    const computedGroups = useMemo(() => {
        if (groups) return groups
        return groupWeaponsByCategory()
    }, [groups])

    const totalCount = computedGroups.reduce((n, g) => n + g.weapons.length, 0)
    // Icons are served straight from each type's home subfolder so the root
    // Icons folder stays clean (it holds only the two folders below).
    // WeaponGrid also renders the Mystic Skills grid (setOverride='Mystic'),
    // so the folder choice follows that flag.
    const iconFolder = setOverride === 'Mystic' ? 'Mystic Skill Icons' : 'Weapon Icons'
    const defaultIconUrl = (item) => `${import.meta.env.BASE_URL}assets/Icons/${iconFolder}/${encodeURIComponent(item.name)}.png`

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
                    // A section is under testing if any of its weapons carry
                    // the `wip` flag (placeholder category + placeholder names).
                    const testing = !hideSectionHeaders && group.weapons.some((w) => w.wip)

                    // Per-category collapse state. Each category path is independent
                    // so collapsing "Bellstrike - Umbra" does not collapse
                    // "Bellstrike - Splendor". Categories start COLLAPSED by
                    // default, except the one holding the currently selected
                    // weapon so the active selection is never hidden.
                    const [collapsed, setCollapsed] = React.useState(
                        !group.weapons.some((w) => w.name === selected)
                    )

                    return (
                        <section key={group.set} className="shrink-0 flex flex-col bg-midnight-950">
                            {!hideSectionHeaders && (
                                <button
                                    type="button"
                                    onClick={() => setCollapsed((v) => !v)}
                                    aria-expanded={!collapsed}
                                    className="flex items-center gap-3 px-3 py-2.5 w-full text-left hover:bg-white/[0.03] transition-colors"
                                >
                                    {/* Chevron — inline SVG so collapse state never
                                        depends on an image asset existing. */}
                                    <svg
                                        className={`shrink-0 w-3 h-3 text-white/40 transition-transform duration-150 ${collapsed ? '' : 'rotate-90'}`}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path d="M4 2.5 L8 6 L4 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {/* Path icon on a black tile — the source PNGs
                                        are transparent and need a dark backing. */}
                                    <PathIcon fullPath={group.set} />
                                    <span className={`text-[12px] mono uppercase tracking-[0.2em] font-semibold ${text}`}>{group.set}</span>
                                    {testing && (
                                        <span
                                            className="text-[8px] mono uppercase tracking-[0.18em] font-bold px-1 py-px border border-amber-400/60 bg-amber-400/10 text-amber-300"
                                            title="This category is still under testing — names and data are placeholders."
                                        >
                                            Testing
                                        </span>
                                    )}
                                </button>
                            )}
                            {testing && (
                                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-amber-400/10 border-y border-amber-400/25">
                                    <span className="text-[8px] mono uppercase tracking-[0.18em] font-bold text-amber-300">
                                        Placeholder
                                    </span>
                                    <span className="text-[9px] text-amber-200/70 truncate">
                                        Category &amp; weapon names are not final — data under testing.
                                    </span>
                                </div>
                            )}
                            {!collapsed && (
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
                            )}
                        </section>
                    )
                })}
            </div>
        </div>
    )
}
