import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WeaponGrid from './WeaponGrid.jsx'

/**
 * WeaponPicker — full-screen slide-up modal for mobile weapon selection.
 *
 * Why this exists: the desktop layout has the master `WeaponGrid` living
 * in a sticky left column alongside the priority column + preview panel.
 * On phones (<768px) there's no room for that sidebar, so we surface the
 * master grid here inside a modal. Tapping a weapon auto-dismisses the
 * modal and updates the underlying panels; tapping the backdrop or the
 * "✕" also dismisses.
 *
 * The modal renders the existing `WeaponGrid` in `density="compact"` so
 * the 18 weapons display in a tight 3-column grid (vs. the desktop's 2
 * columns) with shorter card heights — the icon + colored rail + name
 * stay perfectly legible on a ~320–767px viewport. No duplicated state.
 */

export default function WeaponPicker({
    open,
    onClose,
    selected,
    onSelect,
    title = 'Weapons',
    groups,
    setOverride,
    hideSectionHeaders = false,
    expectedTotal,
}) {
    // Lock body scroll while modal is open
    useEffect(() => {
        if (!open) return
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = prev
        }
    }, [open])

    // Close on Escape key
    useEffect(() => {
        if (!open) return
        const handler = (e) => {
            if (e.key === 'Escape') onClose?.()
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [open, onClose])

    // When a weapon is tapped, propagate the selection then close.
    // The .catch-all here is intentional: the parent uses deselect-on-tap
    // for re-selection feedback (re-clicking the active one is harmless).
    const handleSelect = (name) => {
        onSelect(name)
        onClose?.()
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="picker-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex flex-col"
                    onClick={(e) => {
                        // Backdrop clicks dismiss; clicks inside the sheet
                        // stop here so they don't reach the backdrop.
                        if (e.target === e.currentTarget) onClose?.()
                    }}
                >
                    <motion.div
                        key="picker-sheet"
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 280, mass: 0.7 }}
                        className="absolute inset-x-0 bottom-0 top-[5vh] glass-strong border-t border-white/15 flex flex-col overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Sheet header */}
                        <div className="flex items-center justify-between gap-2 px-3 py-2.5 border-b border-white/12 bg-midnight-900/85 shrink-0">
                            <span className="text-[11px] mono uppercase tracking-[0.22em] text-white/85 font-semibold">
                                {title}
                            </span>
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close weapon picker"
                                title="Close (Esc)"
                                className="h-8 w-8 border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 flex items-center justify-center mono text-[14px] transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Grid container — fills remaining vertical space
                            inside the sheet so all 18 weapons are scrollable */}
                        <div className="flex-1 min-h-0 overflow-hidden">
                            <WeaponGrid
                                selected={selected}
                                onSelect={handleSelect}
                                title={title}
                                groups={groups}
                                setOverride={setOverride}
                                hideSectionHeaders={hideSectionHeaders}
                                expectedTotal={expectedTotal}
                                density="compact"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
