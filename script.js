// =====================================================================
// === WEAPON DATA START ===============================================
// =====================================================================
// Define only the attacks that exist for each weapon.
// Do not define an attack if the weapon does not possess it.
const weaponData = {
    "Strategic Sword": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 2, D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged": { S: 1, D: 1 } },
    "Nameless Sword": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 2, D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged": { S: 1, D: 1 } },
    "Heavenquaker Spear": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 2, D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged Skill": { S: 1, D: 3 } },
    "Nameless Spear": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 4, D: 1 }, "Special Skill": { S: 2, D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged": { S: 1, D: 1 } },
    "Infernal Twinblades": { "Light Attack": { S: 1, D: 0 }, "Burst Skill": { S: 1, D: 3 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 2, D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 } },
    "Mortal Ropedart": { "Light Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 'X', D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Charging Stance": { S: 'X', D: 3 }, "Light Charged Varied Combo": { S: 1, D: 1 }, "Heavy Charged Varied Combo": { S: 1, D: 1 } },
    "Everspring Umbrella": { "Light Attack": { S: 0, D: 0 }, "Heavy Attack": { S: 0, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 2, D: 3 }, "Dual Weapon Skill": { S: 0, D: 1 }, "Heavy Charged": { S: 0, D: 1 } },
    "Unfettered Rope Dart": { "Light Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 2, D: 3 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Charging Stance": { S: 0, D: 3 }, "Heavy Charged Skill": { S: 2, D: 1 } },
    "Thundercry Blade": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 'X', D: 3 }, "Special Skill": { S: 2, D: 3 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Light Charged Skill": { S: 1, D: 3 }, "Heavy Charged Skill": { S: 1, D: 3 }, "Light Charged Varied Combo": { S: 2, D: 3 }, "Heavy Charged Varied Combo": { S: 2, D: 3 }, "Martial Art Perception Skill": { S: 'X', D: 3 } },
    "Stormbreaker Spear": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 3 }, "Special Skill": { S: 2, D: 4 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged Skill": { S: 1, D: 3 } },
    "Phalanxbane Blade": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 0, D: 3 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged Skill": { S: 1, D: 3 }, "Martial Art Charged": { S: 2, D: 3 } },
    "Snowparting Blade": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 4, D: 3 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Light Charged": { S: 1, D: 1 }, "Light Varied Combo": { S: 1, D: 1 }, "Heavy Varied Combo": { S: 1, D: 3 } },
    "Vernal Umbrella": { "Light Attack": { S: 0, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 4, D: 1 }, "Special Skill": { S: 0, D: 1 }, "Dual Weapon Skill": { S: 0, D: 1 }, "Light Charged Skill": { S: 0, D: 1 }, "Heavy Charged Skill": { S: 1, D: 3 }, "Light Attack Varied Combo": { S: 0, D: 0 }, "Heavy Attack Varied Combo": { S: 0, D: 1 } },
    "Soulshade Umbrella": { "Light Attack": { S: 0, D: 0 }, "Heavy Attack": { S: 0, D: 0 }, "Martial Art": { S: 0, D: 1 }, "Special Skill": { S: 0, D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged Skill": { S: 0, D: 1 } },
    "Inkwell Fan": { "Light Attack": { S: 0, D: 0 }, "Heavy Attack": { S: 0, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 2, D: 1 }, "Dual Weapon Skill": { S: 0, D: 1 }, "Light Charged Skill": { S: 1, D: 1 }, "Heavy Charged Skill": { S: 1, D: 1 }, "Pursuit Skill": { S: 2, D: 1 } },
    "Panacea Fan": { "Light Attack": { S: 0, D: 0 }, "Healing Skill": { S: 'X', D: 1 }, "Martial Art": { S: 'X', D: 1 }, "Martial Art Perception Skill": { S: 'X', D: 1 }, "Special Skill": { S: 0, D: 1 }, "Special Perception Skill": { S: 0, D: 1 }, "Dual Weapon Skill": { S: 0, D: 1 } }
};
// =====================================================================
// === WEAPON DATA END =================================================
// =====================================================================

// =====================================================================
// === MYSTIC SKILLS DATA START ========================================
// =====================================================================
const mysticSkillsData = {
    "Meridian Touch": { S: 2, D: 1 },
    "Cloud Steps": { S: 4, D: 3 },
    "Lions Roar": { S: 2, D: 3 },
    "Leaping Toad": { S: 2, D: 2 },
    "Guardians Palm": { S: 2, D: 1 },
    "Flaming Meteor": { S: 2, D: 4 },
    "Flute of the Tides": { S: 0, D: 1 },
    "Talon Strike": { S: 2, D: 0 },
    "Yaksha Rush": { S: 2, D: 0 },
    "Free Morph": { S: 2, D: 1 },
    "Wolflike Frenzy": { S: 2, D: 2 },
    "Soaring Spin": { S: 2, D: 3 },
    "Dragons Breath": { S: 2, D: 3 },
    "Drunken Poet": { S: 2, D: 3 },
    "Dragon Head": { S: 2, D: 4 },
    "Serene Breeze": { S: 2, D: 4 },
    "Golden Body": { S: 'X', D: 1 },
    "Ghostly Steps": { S: 'X', D: 0 },
    "Divine Counter": { S: 4, D: 3 },
    "Bow Skill": { S: 0, D: 0 },
    "Goosey Slide": { S: 0, D: 0, isWIP: true },
    "Mighty Drop": { S: 0, D: 0, isWIP: true }
};
// =====================================================================
// === MYSTIC SKILLS DATA END ==========================================
// =====================================================================

// =====================================================================
// === ATTUNEMENT DATA START ===========================================
// =====================================================================
// Attunements modify skill stagger/defense values when equipped.
// Organized by gear slot: Weapon, Disc, Pendant, Helmet, Thumb Ring.
const attunementData = {
    weapon: [
        {
            id: "weapon-counterattack-tenacity",
            label: "Divine Counter Tenacity",
            description: "Gain Tenacity for 1.5s and recover 30 endurance after damaging a target with Divine Counter.",
            gearSlot: "Weapon",
            affects: "All Weapons",
            skillType: "Divine Counter",
            effect: "tenacity",
            effectDuration: "1.5s",
            enabled: false,
            locked: true
        }
    ],
    disc: [
        {
            id: "disc-nameless-spear-special",
            label: "Nameless Spear Qi Bonus",
            description: "Special Skill deals 20 bonus Qi damage to units with Tenacity, Immobilizes for 0.5 seconds.",
            gearSlot: "Disc",
            affects: "Nameless Spear",
            skillType: "Special Skill",
            effect: "immobilize",
            effectDuration: "0.5s",
            enabled: false,
            locked: true
        },
        {
            id: "disc-phalanx-martial-charged",
            label: "Phalanxbane Blade Tenacity",
            description: "Martial Art Charged Skill gains Tenacity for 3 seconds.",
            gearSlot: "Disc",
            affects: "Phalanxbane Blade",
            skillType: "Martial Art Charged",
            effect: "tenacity",
            effectDuration: "3s",
            enabled: false,
            locked: false,
            modifies: { weapon: "Phalanxbane Blade", action: "Martial Art Charged", stat: "D", value: 3 }
        },
        {
            id: "disc-twinblades-special",
            label: "Twinblades Tenacity",
            description: "Special Skill gains Tenacity during skill.",
            gearSlot: "Disc",
            affects: "Infernal Twinblades",
            skillType: "Special Skill",
            effect: "tenacity",
            effectDuration: "During Skill",
            enabled: false,
            locked: false,
            modifies: { weapon: "Infernal Twinblades", action: "Special Skill", stat: "D", value: 3 }
        },
        {
            id: "disc-heavenquaker-special",
            label: "Heavenquaker Spear Tenacity",
            description: "Special Skill gains Tenacity on hit.",
            gearSlot: "Disc",
            affects: "Heavenquaker Spear",
            skillType: "Special Skill",
            effect: "tenacity",
            effectDuration: "On Hit",
            enabled: false,
            locked: true
        },
        {
            id: "disc-thundercry-martial",
            label: "Thundercry Blade Super Armor (MA)",
            description: "Martial Art Skill gains Super Armor if hit within 1 second of casting.",
            gearSlot: "Disc",
            affects: "Thundercry Blade",
            skillType: "Martial Art",
            effect: "superArmor",
            effectDuration: "If hit within 1s",
            enabled: false,
            locked: false,
            modifies: { weapon: "Thundercry Blade", action: "Martial Art", stat: "D", value: 4 }
        },
        {
            id: "disc-thundercry-special",
            label: "Thundercry Blade Super Armor (SS)",
            description: "Special Skill gains Super Armor on the final hit.",
            gearSlot: "Disc",
            affects: "Thundercry Blade",
            skillType: "Special Skill",
            effect: "superArmor",
            effectDuration: "Final Hit",
            enabled: false,
            locked: true,
            modifies: { weapon: "Thundercry Blade", action: "Special Skill", stat: "D", value: 4 }
        },
        {
            id: "disc-stormbreaker-special",
            label: "Stormbreaker Super Armor",
            description: "Special Skill gains Super Armor if hit on a non-defending target.",
            gearSlot: "Disc",
            affects: "Stormbreaker Spear",
            skillType: "Special Skill",
            effect: "superArmor",
            effectDuration: "On non-defending target",
            enabled: false,
            locked: false,
            modifies: { weapon: "Stormbreaker Spear", action: "Special Skill", stat: "D", value: 4 }
        },
        {
            id: "disc-soulshade-martial",
            label: "Soulshade Umbrella Super Armor",
            description: "Martial Art Skill gains Super Armor on ally heal (Testing: self-heal may count).",
            gearSlot: "Disc",
            affects: "Soulshade Umbrella",
            skillType: "Martial Art",
            effect: "superArmor",
            effectDuration: "On Ally Heal",
            enabled: false,
            locked: true
        },
        {
            id: "disc-panacea-special",
            label: "Panacea Fan Tenacity (SS)",
            description: "Special Skill grants Tenacity on target if staggered or crowd controlled (Testing: self-cast).",
            gearSlot: "Disc",
            affects: "Panacea Fan",
            skillType: "Special Skill",
            effect: "tenacity",
            effectDuration: "On Stagger/CC Target",
            enabled: false,
            locked: true
        },
        {
            id: "disc-everspring-martial",
            label: "Everspring Umbrella Tenacity",
            description: "Martial Art Skill gains Tenacity on non-defending unit hit.",
            gearSlot: "Disc",
            affects: "Everspring Umbrella",
            skillType: "Martial Art",
            effect: "tenacity",
            effectDuration: "On Non-Defending Hit",
            enabled: false,
            locked: true
        }
    ],
    pendant: [
        {
            id: "pendant-stormbreaker-heavy",
            label: "Stormbreaker Immobilize",
            description: "Heavy Charged Skill Immobilizes if unit is below 30% Qi.",
            gearSlot: "Pendant",
            affects: "Stormbreaker Spear",
            skillType: "Heavy Charged Skill",
            effect: "immobilize",
            effectDuration: "Below 30% Qi",
            enabled: false,
            locked: true
        },
        {
            id: "pendant-panacea-heavy",
            label: "Panacea Fan Tenacity (Heal)",
            description: "Healing Skill grants Tenacity if staggered or controlled.",
            gearSlot: "Pendant",
            affects: "Panacea Fan",
            skillType: "Healing Skill",
            effect: "tenacity",
            effectDuration: "On Stagger/Control",
            enabled: false,
            locked: true
        },
        {
            id: "pendant-soulshade-heavy",
            label: "Soulshade Umbrella Tenacity",
            description: "Heavy Charged Skill gains Tenacity on hit.",
            gearSlot: "Pendant",
            affects: "Soulshade Umbrella",
            skillType: "Heavy Charged Skill",
            effect: "tenacity",
            effectDuration: "On Hit",
            enabled: false,
            locked: true
        },
        {
            id: "pendant-unfettered-charged",
            label: "Unfettered Rope Dart Tenacity",
            description: "Heavy Charged Skill gains Tenacity on hit.",
            gearSlot: "Pendant",
            affects: "Unfettered Rope Dart",
            skillType: "Heavy Charged Skill",
            effect: "tenacity",
            effectDuration: "On Hit",
            enabled: false,
            locked: true
        }
    ],
    helmet: [
        {
            id: "helmet-control-remove-tenacity",
            label: "Post-Super Armor Tenacity",
            description: "When removing stagger or control effect with Control-Removing Skill, gain Tenacity after Super Armor wears off.",
            gearSlot: "Helmet",
            affects: "All Weapons",
            skillType: "Control-Removing Skill",
            effect: "tenacity",
            effectDuration: "After Super Armor",
            enabled: false,
            locked: true
        }
    ],
    thumbRing: [
        {
            id: "thumbring-bow-tenacity",
            label: "Bow Tenacity",
            description: "Every 10 seconds, gain Tenacity for 3 seconds when triggering Bow and Arrow Skill.",
            gearSlot: "Thumb Ring",
            affects: "Bow Skill",
            skillType: "Bow and Arrow Skill",
            effect: "tenacity",
            effectDuration: "3s / 10s CD",
            enabled: false,
            locked: false,
            modifies: { mystic: "Bow Skill", stat: "D", value: 3 }
        }
    ]
};
// =====================================================================
// === ATTUNEMENT DATA END =============================================
// =====================================================================

// =====================================================================
// === INNER WAYS DATA START ===========================================
// =====================================================================
// Inner Ways will modify skill priorities similarly to attunements.
// Placeholder for future data.
const innerWayData = [
    {
        id: "iw-wolfchasers-art-3",
        label: "Wolfchasers Art Tier 3",
        description: "While casting Martial Art skill, gain Tenacity during the duration.",
        affects: "All Weapons",
        skillType: "Martial Art",
        effect: "tenacity",
        effectDuration: "During Cast",
        enabled: false,
        locked: false,
        modifies: { weapon: "Heavenquaker Spear", action: "Martial Art", stat: "D", value: 3 }
    }
];
// =====================================================================
// === INNER WAYS DATA END =============================================
// =====================================================================

// =====================================================================
// === SITE UPDATES DATA START =========================================
// =====================================================================
const siteUpdates = [
    {
        date: "April 11, 2026",
        version: "v3.0",
        type: "Feature",
        title: "Combat Lab Overhaul",
        changes: [
            "Launched the Combat Lab: A unified workspace combining the Calculator, Counter Search, and Build Testing.",
            "Added Advanced Analysis Toggles: You can now choose to include or exclude Mystic Skills in Build Testing for focused weapon comparisons.",
            "Data Polish: Fixed the missing icon for the Dragon Head Mystic Skill."
        ]
    }
];
// =====================================================================
// === SITE UPDATES DATA END ===========================================
// =====================================================================

const initApp = () => {
    // --- App State ---
    let appState = {
        activeSlot: null, // 'A' or 'B'
        activeCategory: 'weapons',
        activeTab: 'home',
        activeLabTab: 'calc',
        skillA: { type: 'weapon', name: 'Strategic Sword', action: 'Light Attack' },
        skillB: { type: 'weapon', name: 'Nameless Sword', action: 'Light Attack' },
        skillMatchup: { type: 'weapon', name: 'Strategic Sword', action: 'Light Attack' },
        // --- Testing Tab Build State ---
        playerBuild: {
            weapons: [
                { name: 'Strategic Sword' },
                { name: 'Nameless Sword' }
            ],
            skills: [
                { name: 'Meridian Touch' },
                { name: 'Cloud Steps' },
                { name: 'Lions Roar' },
                { name: 'Leaping Toad' },
                { name: 'Guardians Palm' },
                { name: 'Flaming Meteor' },
                { name: 'Flute of the Tides' },
                { name: 'Talon Strike' }
            ]
        },
        enemyBuild: {
            weapons: [
                { name: 'Heavenquaker Spear' },
                { name: 'Nameless Spear' }
            ]
        },
        activeAnalysisFilter: 'both',
        lastAnalysisResults: null,
        // --- Attunement Toggle State ---
        attunements: {},
        innerWays: {}
    };

    // Initialize attunement toggle state from registry
    const initAttunementState = () => {
        Object.values(attunementData).flat().forEach(att => {
            appState.attunements[att.id] = att.locked ? false : att.enabled;
        });
    };
    initAttunementState();

    // Initialize inner way toggle state from registry
    const initInnerWayState = () => {
        innerWayData.forEach(iw => {
            appState.innerWays[iw.id] = iw.locked ? false : iw.enabled;
        });
    };
    initInnerWayState();

    // --- Elements ---
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    const trigger1 = document.getElementById('triggerA');
    const trigger2 = document.getElementById('triggerB');
    const aA = document.getElementById('aA');
    const aB = document.getElementById('aB');
    const sA = document.getElementById('sA');
    const pA = document.getElementById('pA');
    const sB = document.getElementById('sB');
    const pB = document.getElementById('pB');

    const compareBtn = document.getElementById('compareBtn');
    const resultOutput = document.getElementById('resultOutput');
    const resultText = document.getElementById('resultText');
    const resultNote = document.getElementById('resultNote');

    const selectionModal = document.getElementById('selectionModal');
    const closeModal = document.getElementById('closeModal');
    const modalSearch = document.getElementById('modalSearch');
    const modalTabs = document.querySelectorAll('.modal-tab');
    const modalGrid = document.getElementById('modalGrid');

    // --- Helpers ---
    const getBadgeClass = (val) => {
        const value = (val === 'X') ? 0 : Number(val);
        if (value >= 4) return 'b-4';
        if (value === 3) return 'b-3';
        if (value === 2) return 'b-2';
        if (value === 1) return 'b-1';
        return 'b-0';
    };

    const getImageFileName = (name) => {
        if (name === 'Mortal Ropedart') return 'Mortal Rope Dart';
        if (name === 'Dragon Head') return 'Dragons Head';
        return name;
    };

    const getStats = (slotData) => {
        let stats;
        if (slotData.type === 'weapon') {
            const weapon = weaponData[slotData.name];
            stats = (weapon && weapon[slotData.action]) ? { ...weapon[slotData.action] } : { S: 0, D: 0 };

            // Apply active attunement modifiers
            Object.values(attunementData).flat().forEach(att => {
                if (!att.modifies || !appState.attunements[att.id]) return;
                const mod = att.modifies;
                if (mod.weapon === slotData.name && mod.action === slotData.action) {
                    const baseVal = (stats[mod.stat] === 'X') ? 0 : Number(stats[mod.stat]);
                    if (mod.value > baseVal) {
                        stats[mod.stat] = mod.value;
                    }
                }
            });

            // Apply active inner way modifiers
            innerWayData.forEach(iw => {
                if (!iw.modifies || !appState.innerWays[iw.id]) return;
                const mod = iw.modifies;
                if (mod.action === slotData.action && (!mod.weapon || mod.weapon === slotData.name)) {
                    const baseVal = (stats[mod.stat] === 'X') ? 0 : Number(stats[mod.stat]);
                    if (mod.value > baseVal) {
                        stats[mod.stat] = mod.value;
                    }
                }
            });
        } else {
            stats = { ...(mysticSkillsData[slotData.name] || { S: 0, D: 0 }) };

            // Apply active attunement modifiers to mystic skills
            Object.values(attunementData).flat().forEach(att => {
                if (!att.modifies || !appState.attunements[att.id]) return;
                const mod = att.modifies;
                if (mod.mystic === slotData.name) {
                    const baseVal = (stats[mod.stat] === 'X') ? 0 : Number(stats[mod.stat]);
                    if (mod.value > baseVal) {
                        stats[mod.stat] = mod.value;
                    }
                }
            });
        }
        return stats;
    };

    // --- UI Updaters ---
    const updateDisplay = () => {
        const statsA = getStats(appState.skillA);
        sA.innerHTML = (statsA.isWIP || statsA.wipS) ? '<span class="text-error">X</span>' : statsA.S;
        sA.className = `badge ${(statsA.isWIP || statsA.wipS) ? 'b-0' : getBadgeClass(statsA.S)}`;
        pA.innerHTML = (statsA.isWIP || statsA.wipD) ? '<span class="text-error">X</span>' : statsA.D;
        pA.className = `badge ${(statsA.isWIP || statsA.wipD) ? 'b-0' : getBadgeClass(statsA.D)}`;

        const statsB = getStats(appState.skillB);
        sB.innerHTML = (statsB.isWIP || statsB.wipS) ? '<span class="text-error">X</span>' : statsB.S;
        sB.className = `badge ${(statsB.isWIP || statsB.wipS) ? 'b-0' : getBadgeClass(statsB.S)}`;
        pB.innerHTML = (statsB.isWIP || statsB.wipD) ? '<span class="text-error">X</span>' : statsB.D;
        pB.className = `badge ${(statsB.isWIP || statsB.wipD) ? 'b-0' : getBadgeClass(statsB.D)}`;

        resultOutput.classList.add('hidden');
        resultNote.textContent = '';
    };

    const updateSkillUI = (slot) => {
        let slotData;
        if (slot === 'A' || slot === 'B') {
            slotData = appState[`skill${slot}`];
        } else if (slot === 'Matchup') {
            slotData = appState.skillMatchup;
        } else {
            // Build slots: PW1, PW2, PS1, PS2, PS3, EW1, EW2
            const buildType = slot.startsWith('P') ? 'playerBuild' : 'enemyBuild';
            const category = slot.includes('W') ? 'weapons' : 'skills';
            const index = parseInt(slot.charAt(slot.length - 1)) - 1;
            slotData = appState[buildType][category][index];
            if (!slotData.type) slotData.type = category === 'weapons' ? 'weapon' : 'skill';
        }

        const nameEl = document.getElementById(`name${slot}`);
        const iconEl = document.getElementById(`icon${slot}`);
        const attackGroup = document.getElementById(`attackGroup${slot}`);
        const attackSelect = document.getElementById(`a${slot}`);

        if (nameEl) nameEl.textContent = slotData.name;
        if (iconEl) iconEl.src = `Icons/${getImageFileName(slotData.name)}.png`;

        if (slotData.type === 'weapon') {
            if (attackGroup) attackGroup.style.display = 'flex';
            if (attackSelect) {
                const attacks = Object.keys(weaponData[slotData.name] || {});
                attackSelect.innerHTML = '';
                attacks.forEach(atk => attackSelect.add(new Option(atk, atk)));
                attackSelect.value = slotData.action || attacks[0];
            }
        } else {
            if (attackGroup) attackGroup.style.display = 'none';
        }

        if (slot === 'A' || slot === 'B') {
            updateDisplay();
        } else if (slot === 'Matchup') {
            updateMatchupDisplay();
        }
    };

    const updateMatchupDisplay = () => {
        const stats = getStats(appState.skillMatchup);
        const sEl = document.getElementById('sMatchup');
        const pEl = document.getElementById('pMatchup');

        sEl.innerHTML = (stats.isWIP || stats.wipS) ? '<span class="text-error">X</span>' : stats.S;
        sEl.className = `badge-mini ${(stats.isWIP || stats.wipS) ? 'b-0' : getBadgeClass(stats.S)}`;
        pEl.innerHTML = (stats.isWIP || stats.wipD) ? '<span class="text-error">X</span>' : stats.D;
        pEl.className = `badge-mini ${(stats.isWIP || stats.wipD) ? 'b-0' : getBadgeClass(stats.D)}`;

        renderMatchups();
    };

    const renderMatchups = () => {
        const targetStats = getStats(appState.skillMatchup);
        const targetD = (targetStats.D === 'X' || targetStats.isWIP || targetStats.wipD) ? 0 : Number(targetStats.D);
        const grid = document.getElementById('matchupGrid');
        const countText = document.getElementById('matchupCountText');

        let grouped = {};
        let totalCount = 0;

        // Check Weapons
        for (const [weaponName, actions] of Object.entries(weaponData)) {
            for (const [actionName, baseStats] of Object.entries(actions)) {
                const stats = getStats({ type: 'weapon', name: weaponName, action: actionName });
                const s = (stats.S === 'X' || baseStats.isWIP || baseStats.wipS) ? 0 : Number(stats.S);
                if (s > targetD) {
                    if (!grouped[weaponName]) grouped[weaponName] = { name: weaponName, type: 'weapon', items: [] };
                    grouped[weaponName].items.push({ action: actionName, stats });
                    totalCount++;
                }
            }
        }

        // Check Mystic Skills
        for (const [skillName, stats] of Object.entries(mysticSkillsData)) {
            const s = (stats.S === 'X' || stats.isWIP || stats.wipS) ? 0 : Number(stats.S);
            if (s > targetD) {
                if (!grouped[skillName]) grouped[skillName] = { name: skillName, type: 'skill', items: [] };
                grouped[skillName].items.push({ action: 'Mystic Skill', stats });
                totalCount++;
            }
        }

        countText.textContent = `Found ${totalCount} counter-move${totalCount !== 1 ? 's' : ''} across ${Object.keys(grouped).length} categories.`;

        grid.innerHTML = Object.values(grouped).map(group => {
            const hasWip = group.items.some(i => i.stats.isWIP || i.stats.wipS || i.stats.wipD);
            return `
            <div class="weapon-ref-card ${hasWip ? 'wip-card-partial' : ''}">
                <div class="ref-card-header">
                    <img src="Icons/${getImageFileName(group.name)}.png" class="weapon-icon" alt="${group.name}" onerror="this.style.display='none'">
                    <div class="header-text-wrap">
                        <div class="ref-card-name">${group.name}</div>
                    </div>
                </div>
                <div class="matchup-action-list">
                    ${group.items.map(i => {
                const videoPath = group.type === 'weapon' ?
                    `Weapon Previews/${group.name}/${i.action}.mp4` :
                    `Weapon Previews/${group.name}/${group.name}.mp4`;
                return `
                        <div class="matchup-action-item clickable-preview" data-preview="${videoPath}" title="Click to view full preview">
                            <span class="m-action-name">
                                ${i.action}
                            </span>
                            <span class="m-badge ${getBadgeClass(i.stats.S)}">${i.stats.S === 'X' ? 'X' : i.stats.S}</span>
                        </div>
                    `}).join('')}
                </div>
            </div>
        `}).join('');
    };

    // --- Modal Logic ---
    const renderModalItems = () => {
        const query = modalSearch.value.toLowerCase();
        let items = [];

        const weapons = Object.keys(weaponData).map(name => ({ name, type: 'weapon' }));
        const skills = Object.keys(mysticSkillsData).map(name => ({ name, type: 'skill' }));

        if (query) {
            // If searching, search EVERYTHING
            items = [...weapons, ...skills];
        } else {
            // If NOT searching, respect the active tab
            items = (appState.activeCategory === 'weapons') ? weapons : skills;
        }

        const filtered = items.filter(i => i.name.toLowerCase().includes(query));

        modalGrid.innerHTML = filtered.map(item => `
            <div class="modal-item" data-name="${item.name}" data-type="${item.type}">
                <img src="Icons/${getImageFileName(item.name)}.png" class="modal-item-icon" alt="${item.name}" onerror="this.style.display='none'">
                <div class="modal-item-info">
                    <span class="modal-item-name">${item.name}</span>
                    ${query ? `<span class="modal-item-category">${item.type === 'weapon' ? 'Weapon' : 'Skill'}</span>` : ''}
                </div>
            </div>
        `).join('');

        // Item click listeners
        document.querySelectorAll('.modal-item').forEach(el => {
            el.addEventListener('click', () => {
                const name = el.getAttribute('data-name');
                const type = el.getAttribute('data-type');
                const slot = appState.activeSlot;

                let targetSlot;
                if (slot === 'A' || slot === 'B') {
                    targetSlot = appState[`skill${slot}`];
                } else if (slot === 'Matchup') {
                    targetSlot = appState.skillMatchup;
                } else {
                    const buildType = slot.startsWith('P') ? 'playerBuild' : 'enemyBuild';
                    const category = slot.includes('W') ? 'weapons' : 'skills';
                    const index = parseInt(slot.charAt(slot.length - 1)) - 1;
                    targetSlot = appState[buildType][category][index];
                }

                targetSlot.type = type;
                targetSlot.name = name;

                if (type === 'weapon') {
                    targetSlot.action = Object.keys(weaponData[name])[0];
                }

                updateSkillUI(slot);
                selectionModal.classList.add('hidden');
                modalSearch.value = '';
            });
        });
    };

    const openPicker = (slot) => {
        appState.activeSlot = slot;
        selectionModal.classList.remove('hidden');
        renderModalItems();
        modalSearch.focus();
    };

    // --- Listeners ---
    if (trigger1) trigger1.addEventListener('click', () => openPicker('A'));
    if (trigger2) trigger2.addEventListener('click', () => openPicker('B'));
    const triggerMatchup = document.getElementById('triggerMatchup');
    if (triggerMatchup) triggerMatchup.addEventListener('click', () => openPicker('Matchup'));

    // Testing Tab Triggers
    ['PW1', 'PW2', 'PS1', 'PS2', 'PS3', 'PS4', 'PS5', 'PS6', 'PS7', 'PS8', 'EW1', 'EW2'].forEach(slot => {
        const trig = document.getElementById(`trigger${slot}`);
        if (trig) trig.addEventListener('click', () => openPicker(slot));
    });

    if (closeModal) closeModal.addEventListener('click', () => selectionModal.classList.add('hidden'));

    modalSearch.addEventListener('input', renderModalItems);

    modalTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            modalTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            appState.activeCategory = tab.getAttribute('data-category');
            renderModalItems();
        });
    });

    aA.addEventListener('change', (e) => {
        appState.skillA.action = e.target.value;
        updateDisplay();
    });

    aB.addEventListener('change', (e) => {
        appState.skillB.action = e.target.value;
        updateDisplay();
    });

    const aMatchup = document.getElementById('aMatchup');
    aMatchup.addEventListener('change', (e) => {
        appState.skillMatchup.action = e.target.value;
        updateMatchupDisplay();
    });

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            if (!targetTab) return; // Ignore links like Donate that don't have a tab

            navBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            appState.activeTab = targetTab;

            if (targetTab === 'updates') renderUpdates();
            if (targetTab === 'attunements') { renderAttunements(); renderInnerWays(); }
        });
    });

    // --- Registry Sub-nav Logic ---
    const subBtns = document.querySelectorAll('.sub-btn');
    const subPanes = document.querySelectorAll('.sub-pane');

    const switchSubTab = (subType) => {
        subBtns.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-sub') === subType);
        });
        subPanes.forEach(p => {
            p.classList.toggle('active', p.id === `registry-${subType}`);
        });
    };

    subBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchSubTab(btn.getAttribute('data-sub'));
        });
    });

    // --- Laboratory Sub-nav Logic ---
    const subLabBtns = document.querySelectorAll('.lab-sub-btn');
    const subLabPanes = document.querySelectorAll('.lab-sub-pane');

    const switchLabTab = (subType) => {
        subLabBtns.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-lab-tab') === subType);
        });
        subLabPanes.forEach(p => {
            p.classList.toggle('active', p.id === `lab-${subType}`);
        });
        appState.activeLabTab = subType;
    };

    subLabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchLabTab(btn.getAttribute('data-lab-tab'));
        });
    });

    window.openLab = (subType) => {
        // Activate main lab tab
        const labBtn = document.querySelector('[data-tab="lab"]');
        if (labBtn) {
            labBtn.click();
        }

        // Activate specific sub-tab
        if (subType) switchLabTab(subType);
    };

    // Global Registry Router
    window.openRegistry = (type) => {
        // Switch main tab to registry
        navBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === 'registry'));
        tabPanes.forEach(p => p.classList.toggle('active', p.id === 'registry'));

        // Switch sub tab
        switchSubTab(type);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- Core Logic Evaluator ---
    compareBtn.addEventListener('click', () => {
        const statsA = getStats(appState.skillA);
        const statsB = getStats(appState.skillB);

        const parseVal = (v) => (v === 'X' ? 0 : Number(v));
        const sa = parseVal(statsA.S); const da = parseVal(statsA.D);
        const sb = parseVal(statsB.S); const db = parseVal(statsB.D);

        const isX_A = statsA.S === 'X';
        const isX_B = statsB.S === 'X';

        const aWins = (sa > db) && (sb <= da || isX_B);
        const bWins = (sb > da) && (sa <= db || isX_A);
        const bothStaggered = (sa > db) && (sb > da) && !isX_A && !isX_B;
        const bothHitNoStagger = (sa <= db) && (sb <= da) && !isX_A && !isX_B;
        const defensiveExchange = (isX_A !== isX_B) && ((isX_A && sb <= da) || (isX_B && sa <= db));
        const noInteraction = isX_A && isX_B;

        const iconWrap = document.querySelector('.winner-icon-wrap');
        const winnerIcon = document.getElementById('winnerIcon');

        iconWrap.style.display = 'none';

        if (aWins) {
            resultText.textContent = `${appState.skillA.name} Wins`;
            resultText.style.color = 'var(--w1-color)';
            resultOutput.style.borderColor = 'var(--w1-color)';
            resultNote.textContent = '';

            iconWrap.style.display = 'flex';
            iconWrap.style.borderColor = 'var(--w1-color)';
            winnerIcon.src = `Icons/${getImageFileName(appState.skillA.name)}.png`;
        } else if (bWins) {
            resultText.textContent = `${appState.skillB.name} Wins`;
            resultText.style.color = 'var(--w2-color)';
            resultOutput.style.borderColor = 'var(--w2-color)';
            resultNote.textContent = '';

            iconWrap.style.display = 'flex';
            iconWrap.style.borderColor = 'var(--w2-color)';
            winnerIcon.src = `Icons/${getImageFileName(appState.skillB.name)}.png`;
        } else if (bothStaggered) {
            resultText.textContent = 'Both Staggered';
            resultText.style.color = 'var(--badge-3)';
            resultOutput.style.borderColor = 'var(--badge-3)';
            resultNote.textContent = 'Whoever casts first wins the trade. Ping can impact this and cause variations.';
        } else if (bothHitNoStagger) {
            resultText.textContent = 'Draw';
            resultText.style.color = 'var(--text-muted)';
            resultOutput.style.borderColor = 'var(--border-color)';
            resultNote.textContent = '';
        } else if (defensiveExchange) {
            resultText.textContent = 'Defensive Exchange';
            resultText.style.color = 'var(--badge-1)';
            resultOutput.style.borderColor = 'var(--badge-1)';
            resultNote.textContent = 'The attack that can hit will hit, and the X will not.';
        } else if (noInteraction) {
            resultText.textContent = 'No Combat Interaction';
            resultText.style.color = 'var(--text-muted)';
            resultOutput.style.borderColor = 'var(--border-color)';
            resultNote.textContent = 'Both participants used non-attacking utility skills.';
        }

        resultOutput.classList.remove('hidden');

        // Auto-scroll to result for better UX
        setTimeout(() => {
            resultOutput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    });

    // --- Dashboard Renders ---
    const renderWeaponCompendium = () => {
        const grid = document.getElementById('referenceGrid');
        if (!grid) return;
        let htmlBuffer = '';
        const weapons = Object.keys(weaponData);
        for (const w of weapons) {
            const anyWip = Object.values(weaponData[w]).some(st => st.isWIP || st.wipS || st.wipD);
            htmlBuffer += `
                <div class="weapon-ref-card ${anyWip ? 'wip-card-status' : ''}">
                    <div class="ref-card-header">
                        <img src="Icons/${getImageFileName(w)}.png" class="weapon-icon" alt="${w}" onerror="this.style.display='none'">
                        <div class="header-text-wrap">
                            ${w} ${anyWip ? '<span class="wip-tag">TESTING</span>' : ''}
                        </div>
                    </div>
                    <div class="ref-card-body">
                        <div class="ref-column-headers">
                            <span class="col-label">Attack Name</span>
                            <div class="col-stats">
                                <span class="col-label text-stagger">Stagger</span>
                                <div class="col-divider"></div>
                                <span class="col-label text-defense">Defense</span>
                            </div>
                        </div>
            `;
            const attacks = Object.keys(weaponData[w]);
            for (const a of attacks) {
                const baseSt = weaponData[w][a];
                const st = getStats({ type: 'weapon', name: w, action: a });
                // Preserve WIP flags from base data
                st.isWIP = baseSt.isWIP;
                st.wipS = baseSt.wipS;
                st.wipD = baseSt.wipD;
                htmlBuffer += `
                    <div class="ref-attack-row ${st.isWIP ? 'wip-row' : ''}" data-preview="Weapon Previews/${w}/${a}.mp4" title="Click to view full preview">
                        <span class="ref-attack-name">
                            ${a}
                        </span>
                        <div class="ref-attack-stats">
                            <div class="mini-badge"><span class="b-dot ${(st.isWIP || st.wipS) ? 'b-0' : getBadgeClass(st.S)}">${(st.isWIP || st.wipS) ? '<span class="text-error">X</span>' : st.S}</span></div>
                            <div class="col-divider"></div>
                            <div class="mini-badge"><span class="b-dot ${(st.isWIP || st.wipD) ? 'b-0' : getBadgeClass(st.D)}">${(st.isWIP || st.wipD) ? '<span class="text-error">X</span>' : st.D}</span></div>
                        </div>
                    </div>
                `;
            }
            htmlBuffer += `</div></div>`;
        }
        grid.innerHTML = htmlBuffer;
    };

    const renderMysticCompendium = () => {
        const grid = document.getElementById('mysticGrid');
        if (!grid) return;
        let htmlBuffer = '';
        const mystics = Object.keys(mysticSkillsData);
        for (const m of mystics) {
            const st = mysticSkillsData[m];
            if (st.isWIP) {
                htmlBuffer += `
                    <div class="weapon-ref-card wip-card">
                        <div class="ref-card-header">
                            <img src="Icons/${getImageFileName(m)}.png" class="weapon-icon" alt="${m}" onerror="this.style.display='none'">
                            <div class="header-text-wrap">${m}</div>
                        </div>
                        <div class="ref-card-body wip-body">
                            <div class="wip-overlay">
                                <span class="wip-icon">🔒</span>
                                <span class="wip-label">Coming Soon</span>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                const isPartiallyWip = st.wipS || st.wipD;
                htmlBuffer += `
                    <div class="weapon-ref-card ${isPartiallyWip ? 'wip-card-partial' : ''}">
                        <div class="ref-card-header">
                            <img src="Icons/${getImageFileName(m)}.png" class="weapon-icon" alt="${m}" onerror="this.style.display='none'">
                            <div class="header-text-wrap">
                                ${m} ${isPartiallyWip ? '<span class="wip-tag">TESTING</span>' : ''}
                            </div>
                        </div>
                        <div class="mystic-stat-body clickable-preview" data-preview="Weapon Previews/${m}/${m}.mp4" title="Click to view full preview">
                            <div class="mystic-stat-block">
                                <span class="b-dot ${st.wipS ? 'b-0' : getBadgeClass(st.S)} mystic-stat-num">${st.wipS ? '<span class="text-error">X</span>' : st.S}</span>
                                <span class="mystic-stat-label text-stagger">Stagger</span>
                            </div>
                            <div class="mystic-stat-divider"></div>
                            <div class="mystic-stat-block">
                                <span class="b-dot ${st.wipD ? 'b-0' : getBadgeClass(st.D)} mystic-stat-num">${st.wipD ? '<span class="text-error">X</span>' : st.D}</span>
                                <span class="mystic-stat-label text-defense">Defense</span>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
        grid.innerHTML = htmlBuffer;
    };

    const renderUpdates = () => {
        const feed = document.getElementById('updatesFeed');
        if (!feed) return;

        feed.innerHTML = siteUpdates.map(update => `
            <div class="update-card">
                <div class="update-header">
                    <div class="update-title-group">
                        <span class="update-date">${update.date} • ${update.version}</span>
                        <h3 class="update-title">${update.title}</h3>
                    </div>
                    <span class="update-type-badge badge-type-${update.type.toLowerCase()}">${update.type}</span>
                </div>
                <ul class="update-list">
                    ${update.changes.map(change => `<li>${change}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    };

    const setupContactForm = () => {
        const contactForm = document.querySelector('.contact-form');
        const iframe = document.getElementById('contact-target');
        const successMsg = document.getElementById('contactSuccess');
        const submitBtn = document.getElementById('contactSubmit');

        if (contactForm && iframe) {
            contactForm.addEventListener('submit', () => {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // When iframe loads, submission is complete
                iframe.onload = () => {
                    contactForm.classList.add('hidden');
                    successMsg.classList.remove('hidden');

                    // Reset after 5 seconds to allow new submissions
                    setTimeout(() => {
                        contactForm.reset();
                        contactForm.classList.remove('hidden');
                        successMsg.classList.add('hidden');
                        submitBtn.textContent = 'Contact';
                        submitBtn.disabled = false;
                    }, 5000);
                };
            });
        }
    };

    // --- Attunements & Inner Ways Rendering ---
    const gearSlotConfig = {
        weapon: {
            label: 'Weapon',
            icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="m13 19 2 2 5-5-2-2Z"/></svg>`,
            color: '#3b82f6'
        },
        disc: {
            label: 'Disc',
            icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>`,
            color: '#a855f7'
        },
        pendant: {
            label: 'Pendant',
            icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>`,
            color: '#10b981'
        },
        helmet: {
            label: 'Helmet',
            icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
            color: '#f59e0b'
        },
        thumbRing: {
            label: 'Thumb Ring',
            icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>`,
            color: '#ef4444'
        }
    };

    const highlightKeywords = (text) => {
        return text
            .replace(/\bSuper Armor\b/g, '<span class="color-superarmor">Super Armor</span> <span class="badge-mini b-4">4</span>')
            .replace(/\bTenacity\b/g, '<span class="color-tenacity">Tenacity</span> <span class="badge-mini b-3">3</span>')
            .replace(/\bImmobilize(?:s|d)?\b/g, (match) => `<span class="color-immobilize">${match}</span>`);
    };

    const getEffectBadge = (effect) => {
        if (effect === 'tenacity') return '<span class="att-effect-badge att-tenacity">Tenacity</span>';
        if (effect === 'superArmor') return '<span class="att-effect-badge att-superarmor">Super Armor</span>';
        if (effect === 'immobilize') return '<span class="att-effect-badge att-immobilize">Immobilize</span>';
        return '';
    };

    const renderAttunements = () => {
        const container = document.getElementById('attunementCards');
        if (!container) return;

        let html = '';

        for (const [slotKey, slotCfg] of Object.entries(gearSlotConfig)) {
            const items = attunementData[slotKey];
            if (!items || items.length === 0) continue;

            html += `
                <div class="att-gear-section">
                    <div class="att-gear-header">
                        <div class="att-gear-icon" style="color: ${slotCfg.color}; border-color: ${slotCfg.color}40">${slotCfg.icon}</div>
                        <h3 class="att-gear-title">${slotCfg.label}</h3>
                        <span class="att-gear-count">${items.length} attunement${items.length !== 1 ? 's' : ''}</span>
                    </div>
                    <div class="att-card-grid">
            `;

            for (const att of items) {
                const isEnabled = appState.attunements[att.id] || false;
                const isLocked = att.locked;
                const weaponIcon = att.affects !== 'All Weapons' && att.affects !== 'Bow Skill'
                    ? `<img src="Icons/${getImageFileName(att.affects)}.png" class="att-weapon-icon" alt="${att.affects}" onerror="this.style.display='none'">`
                    : '';

                html += `
                    <div class="att-card ${isLocked ? 'att-locked' : ''} ${isEnabled ? 'att-enabled' : ''}" data-att-id="${att.id}">
                        <div class="att-card-top">
                            <div class="att-card-weapon-wrap">
                                ${weaponIcon}
                                <div class="att-card-info">
                                    <span class="att-card-weapon">${att.affects}</span>
                                    <span class="att-card-skill">${att.skillType}</span>
                                </div>
                            </div>
                            <div class="att-card-toggle-area">
                                ${isLocked
                        ? '<span class="att-testing-badge">🔒 TESTING</span>'
                        : `<label class="att-toggle">
                                        <input type="checkbox" ${isEnabled ? 'checked' : ''} data-att-id="${att.id}">
                                        <span class="att-toggle-slider"></span>
                                    </label>`
                    }
                            </div>
                        </div>
                        <div class="att-card-body">
                            <p class="att-card-desc">${highlightKeywords(att.description)}</p>
                        </div>
                        <div class="att-card-footer">
                            <span class="att-gear-badge" style="background: ${slotCfg.color}20; color: ${slotCfg.color}; border-color: ${slotCfg.color}40">${slotCfg.label}</span>
                            ${getEffectBadge(att.effect)}
                            <span class="att-duration-badge">${att.effectDuration}</span>
                        </div>
                    </div>
                `;
            }

            html += '</div></div>';
        }

        container.innerHTML = html;

        // Attach toggle listeners
        container.querySelectorAll('input[data-att-id]').forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                const id = e.target.getAttribute('data-att-id');
                appState.attunements[id] = e.target.checked;
                const card = e.target.closest('.att-card');
                card.classList.toggle('att-enabled', e.target.checked);
                updateAttunementCounts();
                refreshAttunedViews();
            });
        });

        updateAttunementCounts();
    };

    const updateAttunementCounts = () => {
        const allAtts = Object.values(attunementData).flat();
        const toggleable = allAtts.filter(a => !a.locked);
        const enabledCount = toggleable.filter(a => appState.attunements[a.id]).length;
        const countEl = document.getElementById('attEnabledCount');
        if (countEl) countEl.textContent = `${enabledCount} / ${toggleable.length} active`;
    };

    // Re-render all views that depend on weapon stats when attunements change
    const refreshAttunedViews = () => {
        renderWeaponCompendium();
        updateDisplay();
        updateMatchupDisplay();
    };

    const setupAttunementControls = () => {
        const enableAllBtn = document.getElementById('attEnableAll');
        const resetAllBtn = document.getElementById('attResetAll');

        if (enableAllBtn) {
            enableAllBtn.addEventListener('click', () => {
                Object.values(attunementData).flat().forEach(att => {
                    if (!att.locked) appState.attunements[att.id] = true;
                });
                renderAttunements();
                refreshAttunedViews();
            });
        }

        if (resetAllBtn) {
            resetAllBtn.addEventListener('click', () => {
                Object.values(attunementData).flat().forEach(att => {
                    appState.attunements[att.id] = false;
                });
                renderAttunements();
                refreshAttunedViews();
            });
        }
    };

    const renderInnerWays = () => {
        const container = document.getElementById('innerWayCards');
        if (!container) return;

        if (innerWayData.length === 0) {
            container.innerHTML = `
                <div class="iw-placeholder">
                    <div class="iw-placeholder-icon">🔮</div>
                    <h3>Inner Ways Coming Soon</h3>
                    <p>Inner Way modifiers are being documented and tested. They will appear here once ready.</p>
                </div>
            `;
            return;
        }

        let html = `
            <div class="att-master-controls iw-master-controls">
                <div class="att-master-left">
                    <h3>Active Inner Ways</h3>
                    <span class="att-enabled-count" id="iwEnabledCount">0 / 0 active</span>
                </div>
                <div class="att-master-right">
                    <button class="att-control-btn att-enable-all" id="iwEnableAll">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Enable All
                    </button>
                    <button class="att-control-btn att-reset-all" id="iwResetAll">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                            <path d="M3 3v5h5" />
                        </svg>
                        Reset All
                    </button>
                </div>
            </div>
            <div class="att-card-grid">
        `;

        for (const iw of innerWayData) {
            const isEnabled = appState.innerWays[iw.id] || false;
            const isLocked = iw.locked;

            html += `
                <div class="att-card iw-card ${isLocked ? 'att-locked' : ''} ${isEnabled ? 'att-enabled' : ''}" data-iw-id="${iw.id}">
                    <div class="att-card-top">
                        <div class="att-card-weapon-wrap">
                            <div class="iw-card-icon-wrap">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
                                </svg>
                            </div>
                            <div class="att-card-info">
                                <span class="att-card-weapon">${iw.label}</span>
                                <span class="att-card-skill">${iw.skillType}</span>
                            </div>
                        </div>
                        <div class="att-card-toggle-area">
                            ${isLocked
                    ? '<span class="att-testing-badge">🔒 TESTING</span>'
                    : `<label class="att-toggle iw-toggle">
                                    <input type="checkbox" ${isEnabled ? 'checked' : ''} data-iw-id="${iw.id}">
                                    <span class="att-toggle-slider"></span>
                                </label>`
                }
                        </div>
                    </div>
                    <div class="att-card-body">
                        <p class="att-card-desc">${highlightKeywords(iw.description)}</p>
                    </div>
                    <div class="att-card-footer">
                        <span class="iw-badge-label">Inner Way</span>
                        ${getEffectBadge(iw.effect)}
                        <span class="att-duration-badge">${iw.effectDuration}</span>
                    </div>
                </div>
            `;
        }

        html += '</div>';
        container.innerHTML = html;

        // Attach toggle listeners
        container.querySelectorAll('input[data-iw-id]').forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                const id = e.target.getAttribute('data-iw-id');
                appState.innerWays[id] = e.target.checked;
                const card = e.target.closest('.att-card');
                card.classList.toggle('att-enabled', e.target.checked);
                updateInnerWayCounts();
                refreshAttunedViews();
            });
        });

        // Add master control listeners
        const enableAll = document.getElementById('iwEnableAll');
        const resetAll = document.getElementById('iwResetAll');

        if (enableAll) {
            enableAll.addEventListener('click', () => {
                innerWayData.forEach(iw => {
                    if (!iw.locked) appState.innerWays[iw.id] = true;
                });
                renderInnerWays();
                refreshAttunedViews();
            });
        }

        if (resetAll) {
            resetAll.addEventListener('click', () => {
                innerWayData.forEach(iw => {
                    appState.innerWays[iw.id] = false;
                });
                renderInnerWays();
                refreshAttunedViews();
            });
        }

        updateInnerWayCounts();
    };

    const updateInnerWayCounts = () => {
        const toggleable = innerWayData.filter(iw => !iw.locked);
        const enabledCount = toggleable.filter(iw => appState.innerWays[iw.id]).length;
        const countEl = document.getElementById('iwEnabledCount');
        if (countEl) countEl.textContent = `${enabledCount} / ${toggleable.length} active`;
    };

    // --- Initial Init ---
    updateSkillUI('A');
    updateSkillUI('B');
    updateSkillUI('Matchup');
    ['PW1', 'PW2', 'PS1', 'PS2', 'PS3', 'PS4', 'PS5', 'PS6', 'PS7', 'PS8', 'EW1', 'EW2'].forEach(slot => updateSkillUI(slot));
    renderWeaponCompendium();
    renderMysticCompendium();
    setupContactForm();
    renderAttunements();
    renderInnerWays();
    setupAttunementControls();

    // --- Attunements Sub-nav Logic ---
    const attSubBtns = document.querySelectorAll('.att-sub-btn');
    const attSubPanes = document.querySelectorAll('.att-sub-pane');

    const switchAttTab = (subType) => {
        attSubBtns.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-att-tab') === subType);
        });
        attSubPanes.forEach(p => {
            p.classList.toggle('active', p.id === `att-${subType}`);
        });
    };

    attSubBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchAttTab(btn.getAttribute('data-att-tab'));
        });
    });

    // --- Build Analysis Logic ---
    const runAnalysisBtn = document.getElementById('runAnalysisBtn');
    const analysisResults = document.getElementById('analysisResults');
    const filterBtns = document.querySelectorAll('.filter-btn');

    const updateFilterLabels = () => {
        const f1 = document.getElementById('filterEW1');
        const f2 = document.getElementById('filterEW2');
        if (f1) f1.textContent = appState.enemyBuild.weapons[0].name;
        if (f2) f2.textContent = appState.enemyBuild.weapons[1].name;
    };

    if (runAnalysisBtn) {
        runAnalysisBtn.addEventListener('click', () => {
            const playerMoves = [];
            const enemyMoves = [];

            // Collect Player Moves
            appState.playerBuild.weapons.forEach(w => {
                const data = weaponData[w.name];
                Object.entries(data).forEach(([action, stats]) => {
                    playerMoves.push({ source: w.name, action, stats });
                });
            });

            const includeSkills = document.getElementById('includeSkillsToggle').checked;
            if (includeSkills) {
                appState.playerBuild.skills.forEach(s => {
                    const stats = mysticSkillsData[s.name];
                    playerMoves.push({ source: s.name, action: 'Mystic Skill', stats });
                });
            }

            // Collect Enemy Moves
            appState.enemyBuild.weapons.forEach(w => {
                const data = weaponData[w.name];
                Object.entries(data).forEach(([action, stats]) => {
                    enemyMoves.push({ source: w.name, action, stats });
                });
            });

            const results = playerMoves.map(pMove => {
                const pS = pMove.stats.S === 'X' ? 0 : Number(pMove.stats.S);
                const pD = pMove.stats.D === 'X' ? 0 : Number(pMove.stats.D);

                const analysis = enemyMoves.map(eMove => {
                    const eS = eMove.stats.S === 'X' ? 0 : Number(eMove.stats.S);
                    const eD = eMove.stats.D === 'X' ? 0 : Number(eMove.stats.D);

                    const pWins = (pS > eD) && (eS <= pD || eMove.stats.S === 'X');
                    const eWins = (eS > pD) && (pS <= eD || pMove.stats.S === 'X');
                    const bothStaggered = (pS > eD) && (eS > pD) && pMove.stats.S !== 'X' && eMove.stats.S !== 'X';
                    const bothDefend = (pS <= eD) && (eS <= pD) && pMove.stats.S !== 'X' && eMove.stats.S !== 'X';

                    let outcome = 'Draw';
                    let outcomeClass = 'outcome-draw';
                    if (pWins) { outcome = 'Victory'; outcomeClass = 'outcome-victory'; }
                    else if (eWins) { outcome = 'Defeat'; outcomeClass = 'outcome-defeat'; }
                    else if (bothStaggered) { outcome = 'Clash'; outcomeClass = 'outcome-clash'; }

                    return { eMove, outcome, outcomeClass };
                });

                return { pMove, analysis };
            });

            appState.lastAnalysisResults = results;
            updateFilterLabels();
            renderAnalysisResults();
        });
    }

    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                appState.activeAnalysisFilter = btn.getAttribute('data-filter');
                renderAnalysisResults();
            });
        });
    }

    const renderAnalysisResults = () => {
        if (!appState.lastAnalysisResults) return;
        analysisResults.classList.remove('hidden');

        const filter = appState.activeAnalysisFilter;
        let enemyFilterName = null;
        if (filter === 'ew1') enemyFilterName = appState.enemyBuild.weapons[0].name;
        if (filter === 'ew2') enemyFilterName = appState.enemyBuild.weapons[1].name;

        analysisResults.innerHTML = appState.lastAnalysisResults.map(res => {
            // Apply filtering to individual analysis rows
            const filteredAnalysis = enemyFilterName
                ? res.analysis.filter(a => a.eMove.source === enemyFilterName)
                : res.analysis;

            const wins = filteredAnalysis.filter(a => a.outcome === 'Victory').length;
            const losses = filteredAnalysis.filter(a => a.outcome === 'Defeat').length;
            const clashes = filteredAnalysis.filter(a => a.outcome === 'Clash').length;

            return `
                <div class="analysis-card">
                    <div class="analysis-card-header">
                        <img src="Icons/${getImageFileName(res.pMove.source)}.png" class="analysis-icon">
                        <div class="analysis-card-title-group">
                            <span class="analysis-p-action">${res.pMove.source}</span>
                            <span class="analysis-p-name">${res.pMove.action}</span>
                        </div>
                        <div class="analysis-summary-badges">
                            <span class="sum-badge win">${wins} W</span>
                            <span class="sum-badge loss">${losses} L</span>
                            <span class="sum-badge clash">${clashes} C</span>
                        </div>
                    </div>
                    <div class="analysis-card-body">
                        ${filteredAnalysis.map(a => `
                            <div class="analysis-row ${a.outcomeClass}">
                                <span class="a-enemy-move">${a.eMove.source} (${a.eMove.action})</span>
                                <span class="a-outcome-tag">${a.outcome}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');
    };

    // --- Skill Preview Tooltip ---
    const previewTooltip = document.createElement('div');
    previewTooltip.className = 'preview-tooltip hidden';
    previewTooltip.innerHTML = '<video class="preview-video" muted loop playsinline></video>';
    document.body.appendChild(previewTooltip);
    const previewVideo = previewTooltip.querySelector('video');

    // Hide tooltip if video fails to load
    previewVideo.addEventListener('error', () => {
        previewTooltip.classList.add('hidden');
    });

    const positionTooltip = (anchor) => {
        const rect = anchor.getBoundingClientRect();
        const tooltipWidth = 375;
        const tooltipHeight = 250;
        let left = rect.right + 12;
        if (left + tooltipWidth > window.innerWidth) {
            left = rect.left - tooltipWidth - 12;
        }
        let top = rect.top + window.scrollY - (tooltipHeight / 4);
        previewTooltip.style.top = `${top}px`;
        previewTooltip.style.left = `${left}px`;
    };

    let activePreviewRow = null;

    const closeTooltip = () => {
        previewVideo.pause();
        previewVideo.removeAttribute('src');
        previewTooltip.classList.add('hidden');
        activePreviewRow = null;
    };

    document.addEventListener('click', (e) => {
        if (!previewTooltip.classList.contains('hidden')) {
            const isClickInsideRow = e.target.closest('[data-preview]');
            const isClickInsideTooltip = e.target.closest('.preview-tooltip');

            if (isClickInsideRow || isClickInsideTooltip) return;
            closeTooltip();
        }
    });

    const attachPreviewListeners = (gridId) => {
        const grid = document.getElementById(gridId);
        if (!grid) return;

        grid.addEventListener('click', (e) => {
            const row = e.target.closest('[data-preview]');
            if (!row) return;

            if (activePreviewRow === row) {
                closeTooltip();
                return;
            }

            activePreviewRow = row;
            previewVideo.src = row.dataset.preview;
            previewVideo.play().catch(() => { });
            previewTooltip.classList.remove('hidden');
            positionTooltip(row);
        });
    };

    attachPreviewListeners('referenceGrid');
    attachPreviewListeners('mysticGrid');
    attachPreviewListeners('matchupGrid');
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}