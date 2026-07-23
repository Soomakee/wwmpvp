import React from 'react'
import { motion } from 'framer-motion'

/**
 * BottomNav — fixed-position bottom navigation strip, mobile only.
 *
 * On phones (<md) the top NavBar carries the brand and Donate button
 * but no longer carries the tab buttons — they live here so the top bar
 * stays uncluttered. Active tab gets:
 *   • A 2px blue accent strip across the top of its cell
 *   • A 1.4px label text in blue-300
 *   • A subtle tinted background (bg-blue-500/10)
 *
 * The accent strip is animated with framer-motion's `layoutId` so it
 * smoothly slides from one tab to another when switching.
 *
 * Below the WeaponPicker (z-60) priority, above the main content (z<=20)
 * so it sits as a stable footer bar.
 */
const TAB_ICONS = {
    weapons: (
        // Sword silhouette
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M14.5 4.5l5 5-7.5 7.5-2.5-2.5 5-5-2-2 2-3zm-9 12.5L9 22l3-2 1.5-1.5L9 14l-3.5 3z" />
        </svg>
    ),
    mystic: (
        // 8-point star
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l1.8 5.6 5.2 1.4-4 3.8.9 5.6L12 16l-4.9 2.4.9-5.6-4-3.8 5.2-1.4L12 2z" />
        </svg>
    ),
    ruleset: (
        // Balance / equalizer
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3 4h18v2H3V4zm2 4h2v12H5V8zm6 0h2v12h-2V8zm6 0h2v12h-2V8z" />
        </svg>
    ),
}

export default function BottomNav({ activeTab, onTabChange, tabs }) {
    return (
        <nav
            aria-label="Primary navigation"
            className="md:hidden fixed inset-x-0 bottom-0 z-40 h-14 glass-strong border-t border-white/15 flex items-stretch"
        >
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => onTabChange(tab.id)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`relative flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors ${isActive
                            ? 'bg-blue-500/10 text-blue-300'
                            : 'text-white/55 hover:text-white hover:bg-white/[0.04]'
                            }`}
                    >
                        {/* Animated top accent strip — shares layoutId so it
                            slides from tab to tab on switch */}
                        {isActive && (
                            <motion.span
                                layoutId="bottomnav-active"
                                className="absolute top-0 left-2 right-2 h-[2px] bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.7)]"
                                transition={{ type: 'spring', damping: 28, stiffness: 320 }}
                            />
                        )}
                        <span className="h-5 w-5 block">{TAB_ICONS[tab.id]}</span>
                        <span className="text-[10px] mono uppercase tracking-[0.18em] font-semibold">
                            {tab.label.split(' ')[0]}
                        </span>
                    </button>
                )
            })}
        </nav>
    )
}
