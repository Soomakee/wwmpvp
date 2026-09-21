import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PriorityBadge from './PriorityBadge.jsx'
import { weaponData, mysticSkillsData } from '../data.js'

const SKILL_ICON_BASE = `${import.meta.env.BASE_URL}assets/Icons/Weapon%20Skill%20Icons/`

/**
 * SkillIcon — the per-skill icon from /assets/Weapon Skill Icons/<weapon>/.
 * Files are auto-detected by name: drop a PNG named after the
 * category + stage combination ("Martial Art 1st Cast.png" — needed when
 * stage names like "1st Cast" repeat across categories), the stage name
 * alone ("Heavy Attack.png"), the category ("Martial Art.png"), or the
 * rpName into the weapon's folder and it appears with no code changes.
 * We try candidates most-specific-first and advance on 404.
 *
 * The black backing is pure CSS on the tile — never baked into the PNGs.
 * The tile is hidden until an image actually loads, so weapons without
 * icons yet show nothing instead of an empty black box.
 */
function SkillIcon({ weaponName, category, stage }) {
    const combo = category && stage?.name ? `${category} ${stage.name}` : null
    // "Special Skill 1st Cast" → "Special 1st Cast" (common file shorthand)
    const comboShort = combo?.replace(' Skill ', ' ')
    const candidates = []
    for (const name of [combo, comboShort, stage?.name, category, stage?.rpName]) {
        if (name && !candidates.includes(name)) candidates.push(name)
    }
    const [idx, setIdx] = useState(0)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => { setIdx(0); setLoaded(false) }, [weaponName, category, stage?.name])
    if (!candidates.length || idx >= candidates.length) return null
    const src = `${SKILL_ICON_BASE}${encodeURIComponent(weaponName)}/${encodeURIComponent(candidates[idx])}.png`
    return (
        <span
            className={`shrink-0 flex items-center justify-center h-14 w-14 bg-black border border-white/10 transition-opacity duration-200 ${
                loaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <img
                src={src}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-contain antialiased"
                onLoad={() => setLoaded(true)}
                onError={() => setIdx((i) => i + 1)}
            />
        </span>
    )
}

function previewUrlFor(weaponName, category, index, stage) {
    if (!weaponName || index === undefined) return null
    // Mystic skills live at /assets/Mystic%20Skill%20Previews/<skill>/<skill>_<idx+1>.mp4
    // — each skill has its own subdirectory named after itself (matches
    // the Weapon Previews convention for weapons, so URL routing is
    // symmetric). MysticSkillsView always synthesizes category='Cast'
    // for mystic stages, so we route by that discriminator. A future
    // weapon with a real category named 'Cast' would route incorrectly,
    // but no such weapon exists in data.js today and adding an explicit
    // prop here would overweight the change.
    if (category === 'Cast') {
        const enc = encodeURIComponent(weaponName)
        // A stage may declare its own video path (absolute "/assets/..." for
        // clips shared across weapons, e.g. Divine Counter) or filename
        // (e.g. to share one clip across multiple stages of the same skill).
        // Falls back to the standard `<skill>_<index+1>.mp4` convention.
        if (stage?.video?.startsWith('/')) return `${import.meta.env.BASE_URL}${stage.video.slice(1)}`
        const file = stage?.video || `${enc}_${index + 1}.mp4`
        return `${import.meta.env.BASE_URL}assets/Mystic%20Skill%20Previews/${enc}/${file}`
    }
    if (!category) return null
    // A stage may declare its own video path (absolute "/assets/..." for clips
    // shared across weapons) or filename (e.g. a fractional index like
    // "Martial Art_1.5.mp4" for a ranged variant that sits between two
    // integer-indexed casts). Falls back to the standard
    // `<category>_<index+1>.mp4` convention otherwise.
    if (stage?.video?.startsWith('/')) return `${import.meta.env.BASE_URL}${stage.video.slice(1)}`
    const safeCat = encodeURIComponent(category)
    const file = stage?.video || `${safeCat}_${index + 1}.mp4`
    return `${import.meta.env.BASE_URL}assets/Weapon%20Previews/${encodeURIComponent(weaponName)}/${file}`
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
    // Mystic skills aren't in weaponData; a whole-skill WIP flag (e.g.
    // Bursting Nine — Testing) means no clip yet, so honor it the same
    // way a weapon's `wip` flag is honored in the preview block below.
    const mysticEntry = !weapon && weaponName ? mysticSkillsData[weaponName] : null
    const skillWip = !!weapon?.wip || !!mysticEntry?.wip
    const stage = selectedAttack?.stage
    const previewSrc = selectedAttack && weaponName
        ? previewUrlFor(weaponName, selectedAttack.category, selectedAttack.index, selectedAttack.stage)
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
                                <div className="flex items-start gap-3">
                                    <SkillIcon
                                        weaponName={weaponName}
                                        category={selectedAttack.category}
                                        stage={stage}
                                    />
                                    <div className="min-w-0 flex-1 space-y-1.5">
                                        <div className="text-[10px] mono uppercase tracking-[0.22em] text-white/50">
                                            {selectedAttack.category}
                                        </div>
                                        <div className="text-[16px] leading-tight font-semibold">{stage.name}</div>
                                        <div className="mono text-[12px] text-blue-300 truncate">{stage.rpName || '—'}</div>
                                    </div>
                                </div>
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
                                                src={`${import.meta.env.BASE_URL}assets/Icons/Mystic%20Skill%20Icons/${encodeURIComponent(weaponName)}.png`}
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
                                    ) : (skillWip || stage?.wip) ? (
                                        <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                                            <div>
                                                <div className="text-[10px] mono uppercase tracking-[0.22em] text-amber-300 mb-2">Work In Progress</div>
                                                <div className="text-[12px] text-white/60 max-w-xs">
                                                    Preview videos for this move are not yet available.
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

