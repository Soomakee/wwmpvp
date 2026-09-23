import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Formspree endpoint — submissions are delivered as email to
// isaiahnbailey@gmail.com. Replace the placeholder form ID with the real
// one from https://formspree.io once the form is created (Form "New form"
// → copy the https://formspree.io/f/<FORM_ID> endpoint).
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_FORM_ID'

const TOPICS = [
    'Bug report',
    'Incorrect skill data',
    'Missing skill / asset',
    'Feature request',
    'Other',
]

/**
 * ContactModal — glass modal with a form that submits to Formspree, so
 * visitors never leave the site or hit a mailto prompt. Posts JSON via
 * fetch (Formspree's AJAX flow): 200 → success state, 4xx/5xx → error
 * state with the mailto fallback shown.
 */
export default function ContactModal({ open, onClose }) {
    const [status, setStatus] = useState('idle') // idle | sending | success | error
    const [errorMsg, setErrorMsg] = useState('')
    const firstFieldRef = useRef(null)

    // Focus the first field when the modal opens; ESC closes.
    useEffect(() => {
        if (!open) return
        setStatus('idle')
        setErrorMsg('')
        const t = setTimeout(() => firstFieldRef.current?.focus(), 60)
        const onKey = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', onKey)
        return () => { clearTimeout(t); window.removeEventListener('keydown', onKey) }
    }, [open, onClose])

    async function handleSubmit(e) {
        e.preventDefault()
        const form = e.currentTarget
        const data = Object.fromEntries(new FormData(form).entries())
        setStatus('sending')
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    topic: data.topic,
                    message: data.message,
                    _subject: `[WWM PvP] ${data.topic} — ${data.name || 'Anonymous'}`,
                }),
            })
            if (!res.ok) throw new Error(`Formspree responded ${res.status}`)
            setStatus('success')
            form.reset()
        } catch (err) {
            setErrorMsg(err?.message || 'Something went wrong.')
            setStatus('error')
        }
    }

    const inputCls = 'w-full bg-black/40 border border-white/15 focus:border-blue-500/70 focus:bg-black/60 outline-none px-3 py-2 text-[13px] text-white placeholder:text-white/30 transition-colors'
    const labelCls = 'block text-[10px] mono uppercase tracking-[0.2em] text-white/50 mb-1.5'

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Contact"
                >
                    <motion.div
                        className="glass-strong border border-white/15 w-full max-w-md max-h-[88vh] overflow-y-auto relative"
                        initial={{ opacity: 0, y: 14, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
                            <div>
                                <h2 className="text-[13px] mono uppercase tracking-[0.24em] font-bold text-white">
                                    Contact
                                </h2>
                                <p className="text-[11px] text-white/40 mt-1">
                                    Report an issue or send feedback — it lands in the site owner's inbox.
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                aria-label="Close contact form"
                                className="shrink-0 h-8 w-8 flex items-center justify-center border border-white/15 text-white/60 hover:text-white hover:border-white/40 transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Body */}
                        {status === 'success' ? (
                            <div className="px-5 py-10 text-center">
                                <div className="mx-auto mb-4 h-10 w-10 border border-blue-400/50 bg-blue-500/10 flex items-center justify-center text-blue-300 mono text-[16px]">
                                    ✓
                                </div>
                                <p className="text-[13px] font-semibold text-white">Message sent</p>
                                <p className="text-[11.5px] text-white/45 mt-1.5 max-w-[34ch] mx-auto">
                                    Thanks — it's on its way. You'll typically get a reply at the email you left.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="mt-6 h-9 px-4 border border-white/20 text-[11px] mono uppercase tracking-[0.2em] text-white/70 hover:text-white hover:border-white/40 transition-colors"
                                >
                                    Done
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="px-4 sm:px-5 py-4 flex flex-col gap-3.5">
                                {/* Name (optional) */}
                                <div>
                                    <label htmlFor="contact-name" className={labelCls}>Name <span className="text-white/25 normal-case tracking-normal">(optional)</span></label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        ref={firstFieldRef}
                                        placeholder="Anonymous"
                                        className={inputCls}
                                        autoComplete="name"
                                    />
                                </div>

                                {/* Email (required) */}
                                <div>
                                    <label htmlFor="contact-email" className={labelCls}>Email <span className="text-red-300">*</span></label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        className={inputCls}
                                        autoComplete="email"
                                    />
                                </div>

                                {/* Topic */}
                                <div>
                                    <label htmlFor="contact-topic" className={labelCls}>Topic</label>
                                    <select id="contact-topic" name="topic" className={inputCls} defaultValue="Bug report">
                                        {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="contact-message" className={labelCls}>Message <span className="text-red-300">*</span></label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="What's the weapon, skill, and what you saw vs what's expected…"
                                        className={`${inputCls} resize-y`}
                                    />
                                </div>

                                {/* Error state */}
                                {status === 'error' && (
                                    <div className="border border-red-400/40 bg-red-500/10 px-3 py-2.5 text-[11.5px] text-red-200">
                                        <p className="font-semibold">Couldn't send — {errorMsg}</p>
                                        <p className="text-red-200/70 mt-1">
                                            You can email directly instead:{' '}
                                            <a href="mailto:isaiahnbailey@gmail.com" className="underline hover:text-red-100">isaiahnbailey@gmail.com</a>
                                        </p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="mt-1 h-10 border border-blue-400/60 bg-blue-500/15 text-[11px] mono uppercase tracking-[0.24em] font-semibold text-blue-100 hover:bg-blue-500/25 disabled:opacity-50 disabled:cursor-wait transition-colors"
                                >
                                    {status === 'sending' ? 'Sending…' : 'Send message'}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
