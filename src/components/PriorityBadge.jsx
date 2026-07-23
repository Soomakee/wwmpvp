import React from 'react'

const TIER_LABELS = {
    X: 'No Attack',
    0: 'None',
    1: 'Low',
    2: 'Mid',
    3: 'High',
    4: 'Extreme',
}

/**
 * PriorityBadge — square monospace pill showing a single stagger or defense
 * tier value.
 *
 * Layout modes (`align` prop, defaults to `center` for standalone use):
 *
 *   • `center` (default): value is centered inside the badge box. The badge
 *     has symmetric `px-N` horizontal padding so it looks balanced on its
 *     own (e.g. in the ActionPreviewPanel readout strip).
 *
 *   • `end`: value is right-anchored to `badge_right − small_padding`. The
 *     badge uses `pr-N` only (no left padding) and `justify-end` so the
 *     number's right-edge sits at a known offset from the badge's right
 *     edge. This mode is REQUIRED inside the Priority column: the column
 *     header label is also right-anchored with the same offset (pr-1 =
 *     4px) so the visual right-edge of "STAGGER" exactly matches the
 *     visual right-edge of the number "1".
 *
 * The fill+border tier color comes from `bg-tier-N` and the text color
 * from `tier-N`. No S/D letter prefix — the column header provides it.
 */
export default function PriorityBadge({ value, size = 'md', mode = 'fill', align = 'center', title, className = '' }) {
    const isEnd = align === 'end'
    // Offset note: when `align="end"` is used inside the Priority column,
    // the badge is positioned at the cell's right edge via
    // `justify-self-end` (caller passes it via `className`). The badge's
    // own internal right padding MUST match the header label cell's right
    // padding (`pr-1` = 4px in PriorityColumn.jsx and MysticSkillsView.jsx)
    // so the number's right edge and the label's right edge land on the
    // same vertical axis. Mismatching this by even 2px causes the visible
    // "kink" where the column rail no longer lines up.
    const padL = isEnd ? '' : (size === 'lg' ? 'pl-2.5' : size === 'sm' ? 'pl-1.5' : 'pl-2')
    const padR = isEnd ? (size === 'lg' ? 'pr-1' : size === 'sm' ? 'pr-1' : 'pr-1') : (size === 'lg' ? 'pr-2.5' : size === 'sm' ? 'pr-1.5' : 'pr-2')
    const dims = size === 'lg'
        ? `h-9 min-w-9 ${padL} ${padR} text-base`
        : size === 'sm'
            ? `h-6 min-w-6 ${padL} ${padR} text-[10px]`
            : `h-8 min-w-8 ${padL} ${padR} text-sm`
    const justify = isEnd ? 'justify-end' : 'justify-center'

    if (value === undefined || value === null) {
        return (
            <span className={`inline-flex items-center ${justify} mono font-semibold bg-white/[0.04] text-white/30 border border-white/10 ${dims} ${className}`}>—</span>
        )
    }
    const tier = String(value).toLowerCase()
    const fill = `bg-tier-${tier} tier-${tier}`
    const outline = `border tier-${tier} bg-transparent`
    return (
        <span
            className={`inline-flex items-center ${justify} mono font-bold ${mode === 'outline' ? outline : fill} border-current ${dims} ${className}`}
            title={title || `Tier ${value} (${TIER_LABELS[value] || ''})`}
        >
            {value}
        </span>
    )
}
