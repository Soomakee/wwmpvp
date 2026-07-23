import React from 'react'

const TIERS = [
    { v: 'X', desc: 'No Attack',            tone: 'border border-white/18 bg-transparent text-white/40' },
    { v: '0', desc: 'None',                 tone: 'bg-tier-0 tier-0' },
    { v: '1', desc: 'Low',                  tone: 'bg-tier-1 tier-1' },
    { v: '2', desc: 'Mid',                  tone: 'bg-tier-2 tier-2' },
    { v: '3', desc: 'High (Tenacity)',      tone: 'bg-tier-3 tier-3' },
    { v: '4', desc: 'Extreme (Super Armor)', tone: 'bg-tier-4 tier-4' },
]

/**
 * LegendBar — single horizontal strip just under the nav, defining the meanings
 * of the X / 0-4 priority values used throughout the data. Tier X renders with
 * a transparent fill + soft border so it visually matches the in-app badges
 * that mark "no attack" / unset entries.
 */
export default function LegendBar({ hidden = false }) {
    if (hidden) return null
    return (
        <div className="relative z-20 px-3 sm:px-6 py-1.5 sm:py-2 border-b border-white/8 bg-midnight-900/60 backdrop-blur-md">
            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1.5">
                <div className="text-[10px] mono uppercase tracking-[0.22em] text-white/40">Legend</div>
                <div className="h-3 w-px bg-white/10 mx-0.5 sm:mx-1" aria-hidden="true" />
                <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-[10.5px] sm:text-[11px]">
                    {TIERS.map((t) => (
                        <div key={t.v} className="flex items-center gap-1.5 sm:gap-2">
                            <span
                                className={`mono font-semibold inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-[10px] ${t.tone}`}
                            >
                                {t.v}
                            </span>
                            <span className="hidden sm:inline text-white/70">{t.desc}</span>
                        </div>
                    ))}
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-3 text-[10px] mono uppercase tracking-[0.2em] text-white/40">
                    <span className="flex items-center gap-1.5">
                        <span className="tier-2 mono font-bold">S</span> Stagger
                    </span>
                    <span className="h-3 w-px bg-white/10" aria-hidden="true" />
                    <span className="flex items-center gap-1.5">
                        <span className="tier-4 mono font-bold">D</span> Defense
                    </span>
                </div>
            </div>
        </div>
    )
}
