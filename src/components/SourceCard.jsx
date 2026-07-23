import React from 'react'

const TYPE_COPY = {
    innerway: { label: 'Innerway', colorClass: 'text-amber-300 border-amber-400/40 bg-amber-400/5' },
    resource: { label: 'Resource', colorClass: 'text-rose-300 border-rose-400/40 bg-rose-400/5' },
    'weapon combo': { label: 'Weapon Combo', colorClass: 'text-sky-300 border-sky-400/40 bg-sky-400/5' },
    'martial art talent': { label: 'Martial Art', colorClass: 'text-violet-300 border-violet-400/40 bg-violet-400/5' },
    attunement: { label: 'Attunement', colorClass: 'text-emerald-300 border-emerald-400/40 bg-emerald-400/5' },
}

const FALLBACK = { label: 'Source', colorClass: 'text-white/80 border-white/20 bg-white/5' }

/**
 * SourceCard — renders the contextual info card explaining why an attack
 * has a higher priority than its base form, including optional icon.
 */
export default function SourceCard({ source }) {
    if (!source) return null
    const meta = TYPE_COPY[source.type] || FALLBACK
    // encodeURI turns spaces into %20 and leaves apostrophes alone, so innerway
    // filenames like "Sword Horizon.png" / "Wolfchaser's Art.png" survive the
    // CSS url() parser (which would otherwise stop at the first space).
    const iconUrl = source.icon ? encodeURI(source.icon) : null
    return (
        <div className={`flex gap-3 border ${meta.colorClass} p-3 glass`}>
            {iconUrl ? (
                <div
                    className="h-14 w-14 shrink-0 bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${iconUrl}")` }}
                    aria-hidden="true"
                />
            ) : (
                <div className="h-14 w-14 shrink-0 border border-white/10 flex items-center justify-center mono text-[10px] uppercase tracking-widest text-white/60">
                    {meta.label}
                </div>
            )}
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] mono uppercase tracking-[0.18em] opacity-80">{meta.label}</span>
                    <span className="text-xs font-semibold truncate">{source.title}</span>
                </div>
                <p className="text-[12px] leading-snug text-white/70">{source.desc}</p>
            </div>
        </div>
    )
}
