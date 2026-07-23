import React from 'react'
import { motion } from 'framer-motion'

/**
 * UpdatesView — site changelog.
 * Plain, date-ordered cards. Designed to be edited by hand each release:
 * just prepend a new object to RELEASES, leave older ones in place.
 *
 * Avoid the temptation to make this elaborate. Bullet points should be
 * one short line per change. If a release has more than ~5 bullets,
 * split it into two dates — the goal is glanceability, not docs.
 */
const RELEASES = [
    {
        date: '2026-07-23',
        tag: 'Latest',
        items: [
            'Mystic Skills now play video previews — Leaping Toad, Cloud Steps, Divine Counter, etc.',
            'Stage / Stagger / Defense column header text neutralized (matches Weapons tab).',
            'Removed per-category weapon count badges for a cleaner master panel.',
        ],
    },
    {
        date: '2026-07-15',
        tag: 'Mobile',
        items: [
            'Master-detail mobile workspace — picker drawer with all 18 weapons.',
            'Tab nav moved to a thumb-reachable bottom strip on phone widths.',
            'Weapon card icons sized to fit full names on Galaxy-class screens.',
        ],
    },
    {
        date: '2026-07-01',
        tag: 'Parity',
        items: [
            'Mystic Skills view added with the same 3-column layout as Weapons.',
            'Stagger / Defense legend consistent across views.',
            'Innerway / Resource / Attunement sources flagged on stage rows.',
        ],
    },
]

export default function UpdatesView() {
    return (
        <div className="flex flex-col h-full w-full overflow-hidden">
            {/* Header — same chrome as RulesetView for visual consistency */}
            <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-white/10 bg-midnight-900/60">
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" aria-hidden="true" />
                    <span className="text-[11px] mono uppercase tracking-[0.22em] text-white/85 font-semibold">
                        Updates
                    </span>
                </div>
                <span className="text-[10px] mono text-white/40">Site Changelog</span>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3">
                {RELEASES.map((rel, i) => (
                    <ReleaseCard key={rel.date} release={rel} index={i} />
                ))}

                <p className="text-center text-[10.5px] mono uppercase tracking-[0.22em] text-white/25 pt-2 pb-1">
                    End of changelog
                </p>
            </div>
        </div>
    )
}

function ReleaseCard({ release, index }) {
    const isLatest = release.tag === 'Latest'
    return (
        <motion.article
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.2 }}
            className={`glass-strong border ${isLatest ? 'border-amber-400/40' : 'border-white/10'} p-3.5 space-y-2.5`}
        >
            <header className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <span className={`px-1.5 py-0.5 text-[9.5px] mono uppercase tracking-[0.2em] border ${
                        isLatest
                            ? 'border-amber-400/60 text-amber-300 bg-amber-400/10'
                            : 'border-white/15 text-white/55 bg-white/[0.04]'
                    }`}>
                        {release.tag}
                    </span>
                    <span className="text-[12px] font-semibold text-white/85">{release.date}</span>
                </div>
                <span className="text-[10px] mono text-white/30 tabular-nums">
                    {release.items.length} change{release.items.length === 1 ? '' : 's'}
                </span>
            </header>

            <ul className="space-y-1 border-t border-white/8 pt-2 mt-1">
                {release.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12.5px] leading-snug text-white/80">
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-blue-400" aria-hidden="true" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </motion.article>
    )
}
