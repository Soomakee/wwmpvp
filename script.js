// =====================================================================
// === WEAPON DATA START ===============================================
// =====================================================================
// Define only the attacks that exist for each weapon.
// Do not define an attack if the weapon does not possess it.
const weaponData = {
    "Strategic Sword": { "Light Attack": {S:1, D:0}, "Heavy Attack": {S:1, D:0}, "Martial Art": {S:2, D:1}, "Special Skill": {S:2, D:1}, "Dual Weapon Skill": {S:2, D:1}, "Heavy Charged": {S:1, D:1} },
    "Nameless Sword": { "Light Attack": {S:1, D:0}, "Heavy Attack": {S:1, D:0}, "Martial Art": {S:2, D:1}, "Special Skill": {S:2, D:1}, "Dual Weapon Skill": {S:2, D:1}, "Heavy Charged": {S:1, D:1} },
    "Heavenquaker Spear": { "Light Attack": {S:1, D:0}, "Heavy Attack": {S:1, D:0}, "Martial Art": {S:2, D:1}, "Special Skill": {S:2, D:1}, "Dual Weapon Skill": {S:2, D:1}, "Heavy Charged": {S:2, D:3} },
    "Nameless Spear": { "Light Attack": {S:1, D:0}, "Heavy Attack": {S:1, D:0}, "Martial Art": {S:4, D:1}, "Special Skill": {S:2, D:1}, "Dual Weapon Skill": {S:2, D:1}, "Heavy Charged": {S:2, D:1} },
    "Infernal Twinblades": { "Light Attack": {S:1, D:0}, "Heavy Attack": {S:1, D:3}, "Martial Art": {S:2, D:1}, "Special Skill": {S:2, D:1}, "Dual Weapon Skill": {S:2, D:1} },
    "Mortal Ropedart": { "Light Attack": {S:1, D:0}, "Martial Art": {S:2, D:1}, "Special Skill": {S:0, D:1}, "Dual Weapon Skill": {S:2, D:1}, "Heavy Charged": {S:0, D:3}, "Light Varied Combo": {S:1, D:1}, "Heavy Varied Combo": {S:1, D:1} },
    "Everspring Umbrella": { "Light Attack": {S:0, D:0}, "Heavy Attack": {S:1, D:0}, "Martial Art": {S:2, D:1}, "Special Skill": {S:2, D:3}, "Dual Weapon Skill": {S:1, D:1}, "Heavy Charged": {S:1, D:1} },
    "Unfettered Rope Dart": { "Light Attack": {S:1, D:0}, "Martial Art": {S:2, D:1}, "Special Skill": {S:2, D:3}, "Dual Weapon Skill": {S:2, D:1}, "Heavy Charged": {S:2, D:1} },
    "Thundercry Blade": { "Light Attack": {S:1, D:0}, "Heavy Attack": {S:1, D:0}, "Martial Art": {S:0, D:3}, "Special Skill": {S:2, D:3}, "Dual Weapon Skill": {S:2, D:1}, "Light Charged": {S:1, D:3}, "Heavy Charged": {S:1, D:3}, "Light Varied Combo": {S:2, D:3}, "Heavy Varied Combo": {S:2, D:3}, "Martial Perception Skill": {S:0, D:3} },
    "Stormbreaker Spear": { "Light Attack": {S:1, D:0}, "Heavy Attack": {S:1, D:0}, "Martial Art": {S:2, D:3}, "Special Skill": {S:2, D:3}, "Dual Weapon Skill": {S:2, D:1}, "Heavy Charged": {S:1, D:3} },
    "Phalanxbane Blade": { "Light Attack": {S:1, D:0}, "Heavy Attack": {S:1, D:0}, "Martial Art": {S:2, D:1}, "Special Skill": {S:0, D:3}, "Dual Weapon Skill": {S:2, D:1}, "Heavy Charged": {S:1, D:3}, "Martial Perception Skill": {S:2, D:3} },
    "Snowparting Blade": { "Light Attack": {S:1, D:0}, "Heavy Attack": {S:1, D:0}, "Martial Art": {S:2, D:1}, "Special Skill": {S:2, D:3}, "Dual Weapon Skill": {S:2, D:1}, "Light Charged": {S:1, D:1}, "Light Varied Combo": {S:1, D:1} },
    "Vernal Umbrella": { "Light Attack": {S:0, D:0}, "Heavy Attack": {S:1, D:0}, "Martial Art": {S:4, D:1}, "Special Skill": {S:0, D:1}, "Dual Weapon Skill": {S:0, D:1}, "Light Charged": {S:0, D:1}, "Heavy Charged": {S:1, D:3}, "Light Varied Combo": {S:1, D:0}, "Heavy Varied Combo": {S:1, D:1} },
    "Soulshade Umbrella": { "Light Attack": {S:0, D:0}, "Heavy Attack": {S:1, D:0}, "Martial Art": {S:0, D:1}, "Special Skill": {S:0, D:1}, "Dual Weapon Skill": {S:2, D:1}, "Heavy Charged": {S:1, D:1} },
    "Inkwell Fan": { "Light Attack": {S:0, D:0}, "Heavy Attack": {S:1, D:0}, "Martial Art": {S:2, D:1}, "Special Skill": {S:2, D:1}, "Dual Weapon Skill": {S:0, D:1}, "Light Charged": {S:1, D:1}, "Heavy Charged": {S:1, D:1} },
    "Panacea Fan": { "Light Attack": {S:0, D:0}, "Heavy Attack": {S:0, D:0}, "Martial Art": {S:0, D:1}, "Special Skill": {S:0, D:1}, "Dual Weapon Skill": {S:0, D:1}, "Martial Perception Skill": {S:0, D:1}, "Special Perception Skill": {S:0, D:1} }
};
// =====================================================================
// === WEAPON DATA END =================================================
// =====================================================================

// =====================================================================
// === MYSTIC SKILLS DATA START ========================================
// =====================================================================
const mysticSkillsData = {
    "Meridian Touch": {S: 2, D: 1},
    "Cloud Steps": {S: 4, D: 3},
    "Lions Roar": {S: 2, D: 3},
    "Leaping Toad": {S: 2, D: 2},
    "Guardians Palm": {S: 2, D: 1},
    "Flaming Meteor": {S: 2, D: 4},
    "Flute of the Tides": {S: 0, D: 1},
    "Talon Strike": {S: 2, D: 1},
    "Yaksha Rush": {S: 2, D: 1},
    "Free Morph": {S: 2, D: 1},
    "Wolflike Frenzy": {S: 2, D: 2},
    "Soaring Spin": {S: 2, D: 1},
    "Dragons Breath": {S: 2, D: 3},
    "Drunken Poet": {S: 2, D: 3},
    "Dragons Head": {S: 2, D: 4},
    "Serene Breeze": {S: 2, D: 4},
    "Golden Body": {S: 0, D: 3},
    "Ghostly Steps": {S: 0, D: 0},
    "Divine Counter": {S: 4, D: 3},
    "Goosey Slide": {S: 0, D: 0, isWIP: true},
    "Mighty Drop": {S: 0, D: 0, isWIP: true}
};
// =====================================================================
// === MYSTIC SKILLS DATA END ==========================================
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- App State ---
    let appState = {
        activeSlot: null, // 'A' or 'B'
        activeCategory: 'weapons',
        skillA: { type: 'weapon', name: 'Strategic Sword', action: 'Light Attack' },
        skillB: { type: 'weapon', name: 'Nameless Sword', action: 'Light Attack' }
    };

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
    
    const selectionModal = document.getElementById('selectionModal');
    const closeModal = document.getElementById('closeModal');
    const modalSearch = document.getElementById('modalSearch');
    const modalTabs = document.querySelectorAll('.modal-tab');
    const modalGrid = document.getElementById('modalGrid');

    // --- Helpers ---
    const getBadgeClass = (value) => {
        if (value >= 4) return 'b-4';
        if (value === 3) return 'b-3';
        if (value === 2) return 'b-2';
        if (value === 1) return 'b-1';
        return 'b-0';
    };

    const getImageFileName = (name) => {
        if (name === 'Mortal Ropedart') return 'Mortal Rope Dart';
        return name;
    };

    const getStats = (slotData) => {
        if (slotData.type === 'weapon') {
            const weapon = weaponData[slotData.name];
            return (weapon && weapon[slotData.action]) ? weapon[slotData.action] : {S:0, D:0};
        } else {
            return mysticSkillsData[slotData.name] || {S:0, D:0};
        }
    };

    // --- UI Updaters ---
    const updateDisplay = () => {
        const statsA = getStats(appState.skillA);
        sA.textContent = statsA.S; sA.className = `badge ${getBadgeClass(statsA.S)}`;
        pA.textContent = statsA.D; pA.className = `badge ${getBadgeClass(statsA.D)}`;

        const statsB = getStats(appState.skillB);
        sB.textContent = statsB.S; sB.className = `badge ${getBadgeClass(statsB.S)}`;
        pB.textContent = statsB.D; pB.className = `badge ${getBadgeClass(statsB.D)}`;
        
        resultOutput.classList.add('hidden');
    };

    const updateSkillUI = (slot) => {
        const slotData = appState[`skill${slot}`];
        const nameEl = document.getElementById(`name${slot}`);
        const iconEl = document.getElementById(`icon${slot}`);
        const attackGroup = document.getElementById(`attackGroup${slot}`);
        const attackSelect = document.getElementById(`a${slot}`);

        nameEl.textContent = slotData.name;
        iconEl.src = `Icons/${getImageFileName(slotData.name)}.png`;

        if (slotData.type === 'weapon') {
            attackGroup.style.display = 'flex';
            const attacks = Object.keys(weaponData[slotData.name] || {});
            attackSelect.innerHTML = '';
            attacks.forEach(atk => attackSelect.add(new Option(atk, atk)));
            attackSelect.value = slotData.action;
        } else {
            attackGroup.style.display = 'none';
        }
        updateDisplay();
    };

    // --- Modal Logic ---
    const renderModalItems = () => {
        const query = modalSearch.value.toLowerCase();
        let items = [];
        
        if (appState.activeCategory === 'weapons') {
            items = Object.keys(weaponData).map(name => ({ name, type: 'weapon' }));
        } else {
            items = Object.keys(mysticSkillsData).map(name => ({ name, type: 'skill' }));
        }

        const filtered = items.filter(i => i.name.toLowerCase().includes(query));
        
        modalGrid.innerHTML = filtered.map(item => `
            <div class="modal-item" data-name="${item.name}">
                <img src="Icons/${getImageFileName(item.name)}.png" class="modal-item-icon" alt="${item.name}" onerror="this.style.display='none'">
                <span class="modal-item-name">${item.name}</span>
            </div>
        `).join('');

        // Item click listeners
        document.querySelectorAll('.modal-item').forEach(el => {
            el.addEventListener('click', () => {
                const name = el.getAttribute('data-name');
                const slot = appState.activeSlot;
                const type = appState.activeCategory === 'weapons' ? 'weapon' : 'skill';
                
                appState[`skill${slot}`].type = type;
                appState[`skill${slot}`].name = name;
                
                if (type === 'weapon') {
                    appState[`skill${slot}`].action = Object.keys(weaponData[name])[0];
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

    // --- Navigation ---
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
        });
    });

    // --- Core Logic Evaluator ---
    compareBtn.addEventListener('click', () => {
        const statsA = getStats(appState.skillA);
        const statsB = getStats(appState.skillB);

        const sa = Number(statsA.S); const da = Number(statsA.D);
        const sb = Number(statsB.S); const db = Number(statsB.D);

        const aWins = (sa > db) && (sb <= da);
        const bWins = (sb > da) && (sa <= db);
        const mutualStagger = (sa > db) && (sb > da);
        const clashNeutral = (sa <= db) && (sb <= da);

        const iconWrap = document.querySelector('.winner-icon-wrap');
        const winnerIcon = document.getElementById('winnerIcon');
        
        iconWrap.style.display = 'none';

        if (aWins) {
            resultText.textContent = `${appState.skillA.name} Wins`;
            resultText.style.color = 'var(--w1-color)';
            resultOutput.style.borderColor = 'var(--w1-color)';
            
            iconWrap.style.display = 'flex';
            iconWrap.style.borderColor = 'var(--w1-color)';
            winnerIcon.src = `Icons/${getImageFileName(appState.skillA.name)}.png`;
        } else if (bWins) {
            resultText.textContent = `${appState.skillB.name} Wins`;
            resultText.style.color = 'var(--w2-color)';
            resultOutput.style.borderColor = 'var(--w2-color)';
            
            iconWrap.style.display = 'flex';
            iconWrap.style.borderColor = 'var(--w2-color)';
            winnerIcon.src = `Icons/${getImageFileName(appState.skillB.name)}.png`;
        } else if (mutualStagger) {
            resultText.textContent = 'Mutual Stagger';
            resultText.style.color = 'var(--badge-3)';
            resultOutput.style.borderColor = 'var(--badge-3)';
        } else if (clashNeutral) {
            resultText.textContent = 'Clash / Neutral';
            resultText.style.color = 'var(--text-muted)';
            resultOutput.style.borderColor = 'var(--border-color)';
        }
        
        resultOutput.classList.remove('hidden');
    });

    // --- Dashboard Renders ---
    const renderWeaponCompendium = () => {
        const grid = document.getElementById('referenceGrid');
        if (!grid) return;
        let htmlBuffer = '';
        const weapons = Object.keys(weaponData);
        for (const w of weapons) {
            htmlBuffer += `
                <div class="weapon-ref-card">
                    <div class="ref-card-header">
                        <img src="Icons/${getImageFileName(w)}.png" class="weapon-icon" alt="${w}" onerror="this.style.display='none'">
                        ${w}
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
                const st = weaponData[w][a];
                htmlBuffer += `
                    <div class="ref-attack-row">
                        <span class="ref-attack-name">${a}</span>
                        <div class="ref-attack-stats">
                            <div class="mini-badge"><span class="b-dot ${getBadgeClass(st.S)}">${st.S}</span></div>
                            <div class="col-divider"></div>
                            <div class="mini-badge"><span class="b-dot ${getBadgeClass(st.D)}">${st.D}</span></div>
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
                            ${m}
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
                htmlBuffer += `
                    <div class="weapon-ref-card">
                        <div class="ref-card-header">
                            <img src="Icons/${getImageFileName(m)}.png" class="weapon-icon" alt="${m}" onerror="this.style.display='none'">
                            ${m}
                        </div>
                        <div class="mystic-stat-body">
                            <div class="mystic-stat-block">
                                <span class="b-dot ${getBadgeClass(st.S)} mystic-stat-num">${st.S}</span>
                                <span class="mystic-stat-label text-stagger">Stagger</span>
                            </div>
                            <div class="mystic-stat-divider"></div>
                            <div class="mystic-stat-block">
                                <span class="b-dot ${getBadgeClass(st.D)} mystic-stat-num">${st.D}</span>
                                <span class="mystic-stat-label text-defense">Defense</span>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
        grid.innerHTML = htmlBuffer;
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

    // --- Initial Init ---
    updateSkillUI('A');
    updateSkillUI('B');
    renderWeaponCompendium();
    renderMysticCompendium();
    setupContactForm();
});
