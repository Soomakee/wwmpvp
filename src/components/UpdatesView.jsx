import React from 'react'
import { motion } from 'framer-motion'

/** =========================================================
 * UpdatesView — site changelog.
 *
 * Reader-facing copy, not dev notes.  Each release should
 * say what a player would notice.  Edit the RELEASES array
 * by prepending a new object and leaving older ones intact.
 * ========================================================= */

// Only the newest release carries the "Latest" tag — older entries keep
// their plain date/category tags. `isLatest` styling (amber border/chip)
// keys off that tag, so leave it off past entries when prepending.
const RELEASES = [
    {
        date: '2026-09-23',
        tag: 'Latest',
        items: [
            'Divine Counter is now part of every weapon — find it as its own category on each weapon\'s page with the counter clip for that weapon type (Sword, Spear, Fan, Umbrella, Dual Blades, Rope Dart, Blade, and Gauntlets).',
            'Contact the site owner directly: a new Contact button opens a quick form for bug reports, wrong skill data, or suggestions — no email app needed.',
            'On phones, the whole page now scrolls naturally instead of trapping you in fixed panels — weapon lists, priorities, and previews flow top to bottom.',
            'The Contact button on mobile lives in the bottom navigation bar alongside the other tabs.',
            'Snowparting Blade Special Skill casts renamed to Base Cast and Final Hit.',
        ],
    },
    {
        date: '2026-09-18',
        items: [
            'Panacea Fan Special Skill streamlined to a single cast — "Light Dust After Morning Rain" — instead of two separate casts.',
            'Every weapon and mystic skill now shows the final, approved moveset and stagger/defense numbers.',
            'Action previews play the correct video for each move, including Skystrike Gauntlets Special Skill and Panacea Fan\'s Special Skill.',
            'Stagger and Defense values match the latest patch: Skystrike Gauntlets Pursuit Skill (Nightwick - Grounddrift) is now level 4 stagger.',
            'Drinking Skill (Whaledraft) on Skystrike Gauntlets now shows the correct 1 Defense.',
        ],
    },
    {
        date: '2026-09-10',
        items: [
            'Skystrike Gauntlets Special Skill videos mapped correctly: Base Cast Instant and 0.5-second cast use the same preview, Defense Break Skill uses its own preview, Pursuit Skill uses its own preview.',
            'Pursuit Skill (Nightwick - Grounddrift) stagger corrected to level 4.',
        ],
    },
    {
        date: '2026-09-03',
        items: [
            'Riven Twinblades finalized — all 14 moves available to preview, including Blade Against Waves, Tidepour, Boundvessel, Reveldrift, Hero\'s Blood, and Dual Blades, each with a playable video and the final Stagger/Defense for the move.',
            'Skystrike Gauntlets finalized — all 16 moves available to preview, including Bloombreak, Whaledraft, Dragonquench - Inebriate, Peakfall - Jadeflush, and Nightwick, each with its own playable video.',
            'Binge Points now gate the Inebriate variants; Dragonquench - Inebriate requires the Skyspeak Innerway to use.',
            'Heavy Attacks split into two styles: Press / Hold for Twinblades and Drinking Skill / Quick Drink for Gauntlets.',
            'Nightwick splits into an instant cast and a 0.5-second delayed cast, where the delayed cast carries a higher Defense and a perfect-dodge window.',
            'Every weapon and mystic skill now has its own icon at a consistent size, so the picker and category headers read cleanly at a glance.',
            'Mystic skill names corrected to their real names: Guardian Palm, Lion\'s Roar, Dragon\'s Breath, Bursting Nine, and Tai Chi.',
            'New mystic casts in the works — Throw (Lion\'s Roar), Fury (Leaping Toad), Gather (Flaming Meteor), Tide (Dragon Head), Umbra (Ghostly Steps), and Feather Down (Honking Havoc) — plus the new skill Honking Havoc, marked as in progress until its moveset is finalized.',
        ],
    },
    {
        date: '2026-07-23',
        items: [
            'Mystic Skills now play video previews — Leaping Toad, Cloud Steps, Divine Counter, and others each show the move the moment you tap it.',
        ],
    },
    {
        date: '2026-07-15',
        tag: 'Mobile',
        items: [
            'Master-detail mobile workspace — a picker drawer lists all 18 weapons so you can jump between them without cluttering the screen.',
            'Tab navigation moved to a thumb-reachable bottom strip on phone widths.',
            'Weapon card icons sized so full names fit cleanly on Galaxy-class screens.',
        ],
    },
    {
        date: '2026-07-01',
        tag: 'Parity',
        items: [
            'Mystic Skills view mirrors the Weapons layout with the same 3-column priority and preview setup.',
            'Stagger / Defense legend reads the same in both views, so the numbers mean the same thing everywhere.',
            'Moves that require an Innerway, resource, or Attunement are flagged directly on the row, so you can tell at a glance what a move needs.',
        ],
    },
]

export default function UpdatesView() {
    return (
        // Mobile: the page scrolls, so the view just grows. Desktop (md+):
        // fixed-height pane with internal scroll.
        <div className="flex flex-col md:h-full w-full">
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

            <div className="md:flex-1 md:min-h-0 md:overflow-y-auto p-4 space-y-3">
                {RELEASES.map((release, index) => (
                    <ReleaseCard key={release.date} release={release} index={index} />
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
                    <span className={`px-1.5 py-0.5 text-[9.5px] mono uppercase tracking-[0.2em] border ${isLatest
                        ? 'border-amber-400/60 text-amber-300 bg-amber-400/10'
                        : 'border-white/15 text-white/55 bg-white/[0.04]'
                    }`}>
                        {release.tag || release.date}
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
