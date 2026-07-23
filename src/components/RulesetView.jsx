import React from 'react'
import { motion } from 'framer-motion'

const EXAMPLES = [
    {
        outcome: 'win',
        title: 'Winning a Trade',
        me: { name: 'Martial Art', S: 2, D: 1 },
        them: { name: 'Light Attack', S: 1, D: 0 },
        checks: [
            { ok: true, text: 'Your S 2 > their D 0' },
            { ok: true, text: 'Your D 1 > their S 1' },
        ],
        footer: 'You win the trade cleanly.',
    },
    {
        outcome: 'lose',
        title: 'Losing a Trade',
        me: { name: 'Light Attack', S: 1, D: 0 },
        them: { name: 'Charged Heavy', S: 2, D: 3 },
        checks: [
            { ok: false, text: 'Your S 1 < their D 3' },
            { ok: false, text: 'Your D 0 < their S 2' },
        ],
        footer: 'You lose the trade — your Stagger fails to break their defense.',
    },
    {
        outcome: 'both',
        title: 'Both Stagger',
        me: { name: 'Your Skill', S: 2, D: 0 },
        them: { name: 'Their Skill', S: 3, D: 0 },
        checks: [
            { ok: true, text: 'Your S 2 > their D 0' },
            { ok: true, text: 'Their S 3 > your D 0' },
        ],
        footer: 'Both stagger. First to land wins. Ping & animation speed matter.',
    },
    {
        outcome: 'tenacity',
        title: 'Tenacity vs Stagger',
        me: { name: 'Tenacity Skill', S: 1, D: 3 },
        them: { name: 'Mid Stagger', S: 2, D: 1 },
        checks: [
            { ok: false, text: 'Your S 1 < their D 1' },
            { ok: true, text: 'Your D 3 > their S 2' },
        ],
        footer: 'High Defense holds — you trade no stagger neither way.',
    },
]

const OUTCOME_CLASSES = {
    win: { border: 'border-blue-500/40', text: 'text-blue-300', label: 'Win', bg: 'bg-blue-500/10' },
    lose: { border: 'border-rose-500/40', text: 'text-rose-300', label: 'Lose', bg: 'bg-rose-500/10' },
    both: { border: 'border-violet-500/40', text: 'text-violet-300', label: 'Both', bg: 'bg-violet-500/10' },
    tenacity: { border: 'border-amber-500/40', text: 'text-amber-300', label: 'Hold', bg: 'bg-amber-500/10' },
}

export default function RulesetView() {
    return (
        <div className="flex flex-col h-full w-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-white/10 bg-midnight-900/60">
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.9)]" aria-hidden="true" />
                    <span className="text-[11px] mono uppercase tracking-[0.22em] text-white/85 font-semibold">
                        Ruleset
                    </span>
                </div>
                <span className="text-[10px] mono text-white/40">How Trade Math Works</span>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4">
                {/* Main rule card */}
                <motion.section
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-strong border border-white/10 p-4 space-y-3"
                >
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 border border-blue-500/50 bg-blue-500/15 mono flex items-center justify-center text-blue-300 text-[11px] font-bold">π</div>
                        <span className="text-[12px] mono uppercase tracking-[0.22em] text-white/85 font-semibold">The Rule</span>
                    </div>
                    <p className="text-[14px] leading-relaxed text-white/85">
                        To <span className="text-blue-300 font-semibold">win a trade</span>, your{' '}
                        <span className="mono text-blue-300">Stagger</span> must be{' '}
                        <span className="font-semibold text-white">greater than</span> their{' '}
                        <span className="mono text-violet-300">Defense</span>, while your{' '}
                        <span className="mono text-violet-300">Defense</span> successfully{' '}
                        <span className="font-semibold text-white">holds</span> against their{' '}
                        <span className="mono text-blue-300">Stagger</span>.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-2 text-[12px]">
                        <Pill label="Win" text="S&gt;D and D&gt;S (yours)" tone="blue" />
                        <Pill label="Lose" text="S&lt;D or D&lt;S (yours)" tone="rose" />
                        <Pill label="Both Stagger" text="Both S&gt;D. Animation wins." tone="violet" />
                    </div>
                </motion.section>

                {/* Examples grid */}
                <section className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-[10.5px] mono uppercase tracking-[0.22em] text-white/55 font-semibold">
                            Example Scenarios
                        </span>
                        <span className="text-[10px] mono text-white/30">{EXAMPLES.length} cases</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                        {EXAMPLES.map((ex, i) => {
                            const cls = OUTCOME_CLASSES[ex.outcome]
                            return (
                                <motion.article
                                    key={ex.outcome}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`glass border ${cls.border} p-3 space-y-2`}
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <span className={`px-1.5 py-0.5 text-[9.5px] mono uppercase tracking-[0.2em] border ${cls.border} ${cls.text} ${cls.bg}`}>
                                            {cls.label}
                                        </span>
                                        <span className="text-[12px] font-semibold">{ex.title}</span>
                                    </div>
                                    <div className="space-y-1.5">
                                        <ScenarioRow name={ex.me.name} S={ex.me.S} D={ex.me.D} label="You" tone="blue" />
                                        <div className="text-center text-[9.5px] mono uppercase tracking-[0.3em] text-white/30">vs</div>
                                        <ScenarioRow name={ex.them.name} S={ex.them.S} D={ex.them.D} label="Opp" tone="violet" />
                                    </div>
                                    <div className="space-y-1 pt-1">
                                        {ex.checks.map((c, j) => (
                                            <div key={j} className="flex items-center gap-2 text-[11.5px]">
                                                <span className={`h-3.5 w-3.5 mono flex items-center justify-center text-[10px] font-bold border ${c.ok ? 'text-blue-300 border-blue-400/50 bg-blue-500/10' : 'text-rose-300 border-rose-400/40 bg-rose-500/10'}`}>
                                                    {c.ok ? '✓' : '✗'}
                                                </span>
                                                <span className={c.ok ? 'text-white/85' : 'text-white/65 line-through decoration-rose-400/40'}>
                                                    {c.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-2 border-t border-white/8 text-[11.5px] text-white/65 leading-snug">
                                        {ex.footer}
                                    </div>
                                </motion.article>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}

function Pill({ label, text, tone }) {
    const tones = {
        blue: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
        rose: 'border-rose-500/40 text-rose-300 bg-rose-500/10',
        violet: 'border-violet-500/40 text-violet-300 bg-violet-500/10',
    }
    return (
        <div className={`border ${tones[tone]} p-2`}>
            <div className="text-[9.5px] mono uppercase tracking-[0.2em] opacity-80">{label}</div>
            <div className="text-[11.5px] mt-0.5">{text}</div>
        </div>
    )
}

function ScenarioRow({ name, S, D, label, tone }) {
    const Sclr = `bg-tier-${String(S).toLowerCase()}`
    const Dclr = `bg-tier-${String(D).toLowerCase()}`
    return (
        <div className={`flex items-center justify-between gap-2 border ${tone === 'blue' ? 'border-blue-500/20' : 'border-violet-500/20'} px-2 py-1.5`}>
            <div className="flex items-center gap-2 min-w-0">
                <span className={`text-[8.5px] mono uppercase tracking-[0.18em] ${tone === 'blue' ? 'text-blue-300' : 'text-violet-300'}`}>{label}</span>
                <span className="text-[12px] truncate">{name}</span>
            </div>
            <div className="flex items-center gap-1.5">
                <span className={`mono inline-flex items-center justify-center min-w-6 h-6 px-1.5 text-[10px] ${Sclr}`}>S {S}</span>
                <span className={`mono inline-flex items-center justify-center min-w-6 h-6 px-1.5 text-[10px] ${Dclr}`}>D {D}</span>
            </div>
        </div>
    )
}
