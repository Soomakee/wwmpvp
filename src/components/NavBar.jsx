import React from 'react'

/**
 * NavBar — top brand bar with grouped nav links + donate CTA.
 * Square corners, glass, neon-red glow on the donate button.
 *
 * On mobile (<md) the tab buttons deliberately live in <BottomNav>
 * (fixed bottom strip) instead of up here — keeps the top bar to just
 * brand + donate, and the active-tab indicator is more visible as a
 * thumb-reachable nav.
 */
export default function NavBar({ activeTab, onTabChange, tabs }) {
    return (
        <header className="relative z-30 glass border-b border-white/10 px-3 sm:px-6">
            <div className="h-14 flex items-center justify-between gap-2 sm:gap-4">
                {/* Brand — min-width shrinks on phones so donate has room */}
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="relative shrink-0">
                        <div className="h-8 w-8 border border-white/15 bg-blue-500/15 flex items-center justify-center mono font-bold text-blue-300">
                            W
                        </div>
                        {/* tiny pulsing core */}
                        <div className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 bg-blue-400 blink" />
                    </div>
                    <div className="flex flex-col leading-tight min-w-0">
                        <span className="text-[14px] sm:text-[15px] font-semibold tracking-[0.18em] truncate">WWM PvP</span>
                        <span className="hidden sm:inline text-[10px] mono uppercase tracking-[0.2em] text-white/40">
                            by Saia
                        </span>
                    </div>
                </div>

                {/* Center tabs — desktop only (md:flex). Mobile uses BottomNav. */}
                <nav className="flex-1 hidden md:flex items-center justify-center gap-1">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id
                        return (
                            <button
                                key={tab.id}
                                onClick={() => onTabChange(tab.id)}
                                className={`relative px-4 h-10 text-[12px] mono uppercase tracking-[0.22em] transition-colors border ${isActive
                                    ? 'border-blue-500/60 text-white bg-blue-500/10'
                                    : 'border-transparent text-white/60 hover:text-white hover:bg-white/[0.04]'
                                    }`}
                            >
                                {tab.label}
                                {isActive && (
                                    <span className="absolute -bottom-px left-0 right-0 h-px bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.7)]" />
                                )}
                            </button>
                        )
                    })}
                </nav>

                {/* Donate — compact on phones so the brand row never
                    overflows. h-9 px-3 text-[10px] mobile vs h-10 px-4
                    text-[11px] desktop. Pulsing red dot + heart icon + label. */}
                <a
                    href="https://streamelements.com/imsaia/tip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative shrink-0 inline-flex items-center gap-1.5 sm:gap-2 h-9 sm:h-10 px-3 sm:px-4 border border-red-400/60 bg-red-500/10 text-red-200 hover:bg-red-500/15 transition-colors group"
                    style={{ boxShadow: '0 0 14px rgba(248,113,113,0.35), 0 0 2px rgba(248,113,113,0.9) inset' }}
                >
                    <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 bg-red-400 blink" />
                    <svg className="h-3.5 w-3.5 sm:h-[14px] sm:w-[14px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="text-[10px] sm:text-[11px] mono uppercase tracking-[0.22em] font-semibold">Donate</span>
                </a>
            </div>
        </header>
    )
}
