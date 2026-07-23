import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PriorityBadge from './PriorityBadge.jsx'
import SourceCard from './SourceCard.jsx'
import { weaponData } from '../data.js'

function previewUrlFor(weaponName, category, index) {
    if (!weaponName || index === undefined) return null
    // Mystic skills live at /assets/Mystic%20Skills/<skill>/<skill>_<idx+1>.mp4
    // — each skill has its own subdirectory named after itself (matches
    // the Weapon Previews convention for weapons, so URL routing is
    // symmetric). MysticSkillsView always synthesizes category='Cast'
    // for mystic stages, so we route by that discriminator. A future
    // weapon with a real category named 'Cast' would route incorrectly,
    // but no such weapon exists in data.js today and adding an explicit
    // prop here would overweight the change.
    if (category === 'Cast') {
        const enc = encodeURIComponent(weaponName)
        return `${import.meta.env.BASE_URL}assets/Mystic%20Skills/${enc}/${enc}_${index + 1}.mp4`
    }
    if (!category) return null
    const safeCat = encodeURIComponent(category)
    return `${import.meta.env.BASE_URL}assets/Weapon%20Previews/${encodeURIComponent(weaponName)}/${safeCat}_${index + 1}.mp4`
}

/**
 * ActionPreviewPanel — right column.
 * Shows the full details for the currently selected attack stage, plus a
 * contextual preview box. When `previewable` is false (mystic skills),
 * the video block is replaced with a clean icon + text fallback.
 */
export default function ActionPreviewPanel({ weaponName, selectedAttack, previewable = true }) {
    const [videoStatus, setVideoStatus] = useState('idle')

    // Reset load tracking on selection change. The <video> element lives
    // inside AnimatePresence and carries its own `key={previewSrc}` —
    // React declaratively unmounts and remounts it whenever the src
    // changes, so we must NOT imperatively call pause()/removeAttribute/
    // load() here; doing so would strip the src on the very first click
    // before the autoplay-before-load window fires and leave the panel
    // stuck on the "Select a stage" overlay forever.
    useEffect(() => {
        setVideoStatus('idle')
    }, [weaponName, selectedAttack?.category, selectedAttack?.index])

    const weapon = weaponName ? weaponData[weaponName] : null
    const stage = selectedAttack?.stage
    const previewSrc = selectedAttack && weaponName
        ? previewUrlFor(weaponName, selectedAttack.category, selectedAttack.index)
        : null

    const handleCanPlay = () => setVideoStatus('ready')
    const handleError = () => {
        if (videoStatus === 'error') return
        setVideoStatus('error')
        // eslint-disable-next-line no-console
        console.warn('[preview] failed to load', previewSrc, `(${selectedAttack?.category} #${(selectedAttack?.index ?? 0) + 1})`)
    }
    const handleLoadStart = () => setVideoStatus('loading')

    return (
        <div className="flex flex-col h-full w-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-white/10 bg-midnight-900/60">
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" aria-hidden="true" />
                    <span className="text-[11px] mono uppercase tracking-[0.22em] text-amber-300 font-semibold">
                        Action Preview
                    </span>
                </div>
                {weapon && (
                    <span className="text-[10px] mono text-white/40 truncate max-w-[60%]">
                        {weaponName}{stage ? ` · ${selectedAttack.category}` : ''}
                    </span>
                )}
            </div>

            {/* Empty — fires when no stage is set AND (for weapons) no
                weapon is selected. The `(previewable ? !weapon : true)`
                clause guarantees mystic skills always reach the empty
                state when stage isn't selected, even though `weapon`
                is undefined for them. */}
            {!stage && (previewable ? !weapon : true) && (
                <div className="flex-1 min-h-0 flex items-center justify-center p-6 text-center">
                    <div>
                        <div className="mx-auto mb-3 h-12 w-12 border border-white/15 mono flex items-center justify-center text-amber-300">PRE</div>
                        <p className="text-[12px] mono uppercase tracking-[0.2em] text-white/40">Action preview</p>
                        <p className="text-[11px] text-white/30 mt-1 max-w-xs">
                            Pick a weapon, then a stage, to see full details and the attack clip.
                        </p>
                    </div>
                </div>
            )}

            {/* Content — fires whenever stage is set. We dropped the
                `(weapon || !previewable)` wrapper from the gate because
                once previewable is true and weapon is undefined for
                mystics, `(undefined || false) && stage` evaluates to
                false — leaving mystic entries with no content even
                though `stage` is fully populated. With just `stage`,
                the gate fires for both weapons and mystics; the inner
                `weapon?.wip` check still preserves the WIP placeholder
                path for weapons, and the inner `!previewable ? mystic
                fallback : video` decision still works for any future
                previewable=false caller (ruleset preview mode, etc.). */}
            {stage && (
                <div className="flex-1 min-h-0 overflow-y-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedAttack.category}-${selectedAttack.index}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="p-3 space-y-3"
                        >
                            {/* Identity */}
                            <div className="glass border border-white/10 p-3 space-y-1.5">
                                <div className="text-[10px] mono uppercase tracking-[0.22em] text-white/50">
                                    {selectedAttack.category}
                                </div>
                                <div className="text-[16px] leading-tight font-semibold">{stage.name}</div>
                                <div className="mono text-[12px] text-blue-300 truncate">{stage.rpName || '—'}</div>
                                <div className="flex flex-wrap gap-2 pt-1.5">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[9.5px] mono uppercase tracking-[0.22em] text-white/45">Stagger</span>
                                        <PriorityBadge value={stage.S} size="lg" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[9.5px] mono uppercase tracking-[0.22em] text-white/45">Defense</span>
                                        <PriorityBadge value={stage.D} size="lg" />
                                    </div>
                                </div>
                            </div>

                            {/* Source */}
                            <SourceCard source={stage.source} />

                            {/* Preview video (or mystic fallback) */}
                            <div className="glass border border-white/10 overflow-hidden">
                                <div className="flex items-center justify-between gap-2 px-3 py-1.5 border-b border-white/8 bg-midnight-900/50">
                                    <span className="text-[10px] mono uppercase tracking-[0.22em] text-white/60">Preview</span>
                                    <span className="text-[9.5px] mono uppercase tracking-[0.18em] text-white/30">
                                        {previewable
                                            ? (videoStatus === 'ready' ? 'Live' : videoStatus === 'loading' ? 'Loading…' : videoStatus === 'error' ? 'Unavailable' : 'Idle')
                                            : 'Mystic'}
                                    </span>
                                </div>
                                <div className="relative aspect-video bg-black/60 overflow-hidden">
                                    {!previewable ? (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 gap-3">
                                            <img
                                                src={`${import.meta.env.BASE_URL}assets/Icons/${encodeURIComponent(weaponName)}.png`}
                                                alt={weaponName}
                                                className="h-20 w-20 object-contain drop-shadow-[0_0_12px_rgba(250,204,21,0.4)]"
                                                onError={(e) => { e.currentTarget.style.display = 'none' }}
                                            />
                                            <div className="text-[10px] mono uppercase tracking-[0.24em] text-amber-300">
                                                Mystic Skill
                                            </div>
                                            <div className="text-[11px] text-white/55 max-w-xs">
                                                Mystic skills have no combat preview clip — stats above are the source of truth for PvP trade math.
                                            </div>
                                        </div>
                                    ) : weapon?.wip ? (
                                        <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                                            <div>
                                                <div className="text-[10px] mono uppercase tracking-[0.22em] text-amber-300 mb-2">Work In Progress</div>
                                                <div className="text-[12px] text-white/60 max-w-xs">
                                                    Preview videos for this weapon are not yet available.
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <video
                                                key={previewSrc}
                                                src={previewSrc}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className={`w-full h-full object-contain ${videoStatus === 'ready' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                                                onLoadStart={handleLoadStart}
                                                onCanPlay={handleCanPlay}
                                                onError={handleError}
                                            />
                                            {videoStatus !== 'ready' && (
                                                <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                                                    <div className="text-[11px] mono uppercase tracking-[0.2em] text-white/40">
                                                        {videoStatus === 'loading' ? 'Loading preview…' :
                                                            videoStatus === 'error' ? 'Preview unavailable' :
                                                                'Select a stage'}
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}

            {/* Weapon picked, stage not yet */}
            {weapon && !stage && (
                <div className="flex-1 min-h-0 flex items-center justify-center p-6 text-center">
                    <div>
                        <div className="mx-auto mb-3 h-12 w-12 border border-white/15 mono flex items-center justify-center text-amber-300">▣</div>
                        <p className="text-[12px] mono uppercase tracking-[0.2em] text-white/60 font-semibold">
                            {weaponName}
                        </p>
                        <p className="text-[11px] text-white/40 mt-1 max-w-xs">
                            Pick a stage from the Priorities column to see full attack details.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

