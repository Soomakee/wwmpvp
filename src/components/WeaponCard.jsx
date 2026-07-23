import React from 'react'

/**
 * Per-set style fragments. Each entry is keyed by the SET FAMILY (the part
 * before the " - " in a weapon's category string, or "Mystic" for the mystic
 * skills view). Splitting these into discrete slots avoids the previous
 * fragile `css.split(' ')` parsing path that moved a bg-color class into the
 * border slot whenever whitespace drifted in `SET_CLASS`.
 *
 *  - `text`   : text-color utility for the weapon name when the card is active.
 *  - `rail`   : background utility for the 3px left rail (the full category color).
 *  - `border` : resting border-color utility (soft ~35% alpha of the category color).
 *  - `hover`  : Tailwind `:hover` variant that brightens the border to full color.
 */
const SET = {
    Bellstrike: {
        text:   'cat-bellstrike',
        rail:   'bg-cat-bellstrike',
        border: 'border-cat-bellstrike-soft',
        hover:  'hover:border-cat-bellstrike',
    },
    Bamboocut: {
        text:   'cat-bamboocut',
        rail:   'bg-cat-bamboocut',
        border: 'border-cat-bamboocut-soft',
        hover:  'hover:border-cat-bamboocut',
    },
    Stonesplit: {
        text:   'cat-stonesplit',
        rail:   'bg-cat-stonesplit',
        border: 'border-cat-stonesplit-soft',
        hover:  'hover:border-cat-stonesplit',
    },
    Silkbind: {
        text:   'cat-silkbind',
        rail:   'bg-cat-silkbind',
        border: 'border-cat-silkbind-soft',
        hover:  'hover:border-cat-silkbind',
    },
    Mystic: {
        text:   'cat-mystic',
        rail:   'bg-cat-mystic',
        border: 'border-cat-mystic-soft',
        hover:  'hover:border-cat-mystic',
    },
}

/**
 * WeaponCard — square glass tile with a 3px left rail in the card's
 * category color (Bellstrike blue, Bamboocut purple, Stonesplit red,
 * Silkbind green, Mystic gold). The rail makes the set identity
 * scannable across the whole master panel at a glance.
 *
 * The card body background stays neutral faint white so the category color
 * only appears on the outline (border + rail + active corner ticks).
 *
 * Active state: corner ticks in category color, z-10 lift.
 * WIP weapons get an amber WIP badge in the top-right.
 */
export default function WeaponCard({ weapon, active, onClick, iconAvailable, iconUrl, setOverride, compact = false }) {
    const wip = weapon.wip
    const setKey = setOverride || weapon.category?.split(' - ')[0] || 'Mystic'
    const set = SET[setKey] || SET.Mystic

    // Icon-on-the-left layout: icon + name sit side-by-side in a single
    // horizontal row. Icon is the visual anchor — bumped from 32→48px
    // (compact: 28→40px) so the icon reads as the dominant element of
    // each card at master-panel density. Both variants stay square.
    const iconBox = compact ? 'h-10 w-10' : 'h-12 w-12'
    const rowPad = compact ? 'pl-2.5 pr-2 py-2 gap-2' : 'pl-3 pr-3 py-2.5 gap-2.5'
    const nameText = compact ? 'text-[11px]' : 'text-[13px]'

    return (
        <button
            type="button"
            onClick={() => onClick(weapon.name)}
            aria-pressed={active}
            title={`${weapon.name} — ${weapon.category || setKey}`}
            className={
                `relative h-full w-full text-left flex flex-row items-center ${rowPad} transition-all duration-200 ` +
                `border ${set.border} ${set.hover} ` +
                (active
                    ? `bg-white/[0.08] z-10`
                    : `bg-white/[0.025] hover:bg-white/[0.05]`)
            }
        >
            {/* Left rail in full category color */}
            <span className={`absolute top-0 left-0 bottom-0 w-[3px] ${set.rail}`} aria-hidden="true" />

            {/* Weapon icon */}
            <div className={`${iconBox} border border-white/15 flex items-center justify-center bg-black/40 overflow-hidden shrink-0`}>
                {iconAvailable ? (
                    <img
                        src={iconUrl}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-contain"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none'
                            e.currentTarget.nextElementSibling?.classList.remove('hidden')
                        }}
                    />
                ) : null}
                <span className={`${iconAvailable ? 'hidden' : ''} mono text-[10px] text-white/40`}>
                    {(weapon.name || '?').slice(0, 1)}
                </span>
            </div>

            {/* Weapon name + optional WIP chip on the right.
                `whitespace-normal break-words leading-tight` lets any
                name that exceeds the available width wrap onto a second
                line instead of truncating with `…` — every weapon in
                the data fits in one line at the current grid (2-col on
                both densities) so this is a safety net for future
                additions or narrower viewports. */}
            <div className="flex-1 min-w-0 flex flex-row items-center gap-1.5">
                <div
                    className={`${nameText} leading-tight font-semibold whitespace-normal break-words ${active ? set.text : 'text-white/90'}`}
                >
                    {weapon.name}
                </div>
                {wip && (
                    <span className="text-[8.5px] mono uppercase tracking-[0.18em] font-bold px-1 py-0.5 border border-amber-400/60 bg-amber-400/10 text-amber-300 shrink-0">
                        WIP
                    </span>
                )}
            </div>

            {/* Active corner ticks in category accent color */}
            {active && (
                <>
                    <span className={`absolute top-0 right-0 w-1.5 h-1.5 ${set.rail}`} aria-hidden="true" />
                    <span className={`absolute bottom-0 right-0 w-1.5 h-1.5 ${set.rail}`} aria-hidden="true" />
                </>
            )}
        </button>
    )
}
