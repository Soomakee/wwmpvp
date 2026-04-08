// =====================================================================
// === WEAPON DATA START ===============================================
// =====================================================================
// Define only the attacks that exist for each weapon.
// Do not define an attack if the weapon does not possess it.
const weaponData = {
    "Strategic Sword": { "Light Attack": {S:1, P:0}, "Heavy Attack": {S:1, P:0}, "Martial Art": {S:2, P:1}, "Special Skill": {S:2, P:1}, "Dual Weapon Skill": {S:2, P:1}, "Heavy Charged": {S:1, P:1} },
    "Nameless Sword": { "Light Attack": {S:1, P:0}, "Heavy Attack": {S:1, P:0}, "Martial Art": {S:2, P:1}, "Special Skill": {S:2, P:1}, "Dual Weapon Skill": {S:2, P:1}, "Heavy Charged": {S:1, P:1} },
    "Heavenquaker Spear": { "Light Attack": {S:1, P:0}, "Heavy Attack": {S:1, P:0}, "Martial Art": {S:2, P:1}, "Special Skill": {S:2, P:1}, "Dual Weapon Skill": {S:2, P:1}, "Heavy Charged": {S:2, P:3} },
    "Nameless Spear": { "Light Attack": {S:1, P:0}, "Heavy Attack": {S:1, P:0}, "Martial Art": {S:4, P:1}, "Special Skill": {S:2, P:1}, "Dual Weapon Skill": {S:2, P:1}, "Heavy Charged": {S:2, P:1} },
    "Infernal Twinblades": { "Light Attack": {S:1, P:0}, "Heavy Attack": {S:1, P:3}, "Martial Art": {S:2, P:1}, "Special Skill": {S:2, P:1}, "Dual Weapon Skill": {S:2, P:1} },
    "Mortal Ropedart": { "Light Attack": {S:1, P:0}, "Martial Art": {S:2, P:1}, "Special Skill": {S:0, P:1}, "Dual Weapon Skill": {S:2, P:1}, "Heavy Charged": {S:0, P:3}, "Light Varied Combo": {S:1, P:1}, "Heavy Varied Combo": {S:1, P:1} },
    "Everspring Umbrella": { "Light Attack": {S:0, P:0}, "Heavy Attack": {S:1, P:0}, "Martial Art": {S:2, P:1}, "Special Skill": {S:2, P:3}, "Dual Weapon Skill": {S:1, P:1}, "Heavy Charged": {S:1, P:1} },
    "Unfettered Rope Dart": { "Light Attack": {S:1, P:0}, "Martial Art": {S:2, P:1}, "Special Skill": {S:2, P:3}, "Dual Weapon Skill": {S:2, P:1}, "Heavy Charged": {S:2, P:1} },
    "Thundercry Blade": { "Light Attack": {S:1, P:0}, "Heavy Attack": {S:1, P:0}, "Martial Art": {S:0, P:3}, "Special Skill": {S:2, P:3}, "Dual Weapon Skill": {S:2, P:1}, "Light Charged": {S:1, P:3}, "Heavy Charged": {S:1, P:3}, "Light Varied Combo": {S:2, P:3}, "Heavy Varied Combo": {S:2, P:3}, "Martial Perception Skill": {S:0, P:3} },
    "Stormbreaker Spear": { "Light Attack": {S:1, P:0}, "Heavy Attack": {S:1, P:0}, "Martial Art": {S:2, P:3}, "Special Skill": {S:2, P:3}, "Dual Weapon Skill": {S:2, P:1}, "Heavy Charged": {S:1, P:3} },
    "Phalanxbane Blade": { "Light Attack": {S:1, P:0}, "Heavy Attack": {S:1, P:0}, "Martial Art": {S:2, P:1}, "Special Skill": {S:0, P:3}, "Dual Weapon Skill": {S:2, P:1}, "Heavy Charged": {S:1, P:3}, "Martial Perception Skill": {S:2, P:3} },
    "Snowparting Blade": { "Light Attack": {S:1, P:0}, "Heavy Attack": {S:1, P:0}, "Martial Art": {S:2, P:1}, "Special Skill": {S:2, P:3}, "Dual Weapon Skill": {S:2, P:1}, "Light Charged": {S:1, P:1}, "Light Varied Combo": {S:1, P:1} },
    "Vernal Umbrella": { "Light Attack": {S:0, P:0}, "Heavy Attack": {S:1, P:0}, "Martial Art": {S:4, P:1}, "Special Skill": {S:0, P:1}, "Dual Weapon Skill": {S:0, P:1}, "Light Charged": {S:0, P:1}, "Heavy Charged": {S:1, P:3}, "Light Varied Combo": {S:1, P:0}, "Heavy Varied Combo": {S:1, P:1} },
    "Soulshade Umbrella": { "Light Attack": {S:0, P:0}, "Heavy Attack": {S:1, P:0}, "Martial Art": {S:0, P:1}, "Special Skill": {S:0, P:1}, "Dual Weapon Skill": {S:2, P:1}, "Heavy Charged": {S:1, P:1} },
    "Inkwell Fan": { "Light Attack": {S:0, P:0}, "Heavy Attack": {S:1, P:0}, "Martial Art": {S:2, P:1}, "Special Skill": {S:2, P:1}, "Dual Weapon Skill": {S:0, P:1}, "Light Charged": {S:1, P:1}, "Heavy Charged": {S:1, P:1} },
    "Panacea Fan": { "Light Attack": {S:0, P:0}, "Heavy Attack": {S:0, P:0}, "Martial Art": {S:0, P:1}, "Special Skill": {S:0, P:1}, "Dual Weapon Skill": {S:0, P:1}, "Martial Perception Skill": {S:0, P:1}, "Special Perception Skill": {S:0, P:1} }
};
// =====================================================================
// === WEAPON DATA END =================================================
// =====================================================================

// =====================================================================
// === MYSTIC SKILLS DATA START ========================================
// =====================================================================
const mysticSkillsData = {
    "Meridian Touch": {S: 2, P: 1},
    "Cloud Steps": {S: 4, P: 3},
    "Lions Roar": {S: 2, P: 3},
    "Leaping Toad": {S: 2, P: 2},
    "Guardians Palm": {S: 2, P: 1},
    "Flaming Meteor": {S: 2, P: 4},
    "Flute of the Tides": {S: 0, P: 1},
    "Talon Strike": {S: 2, P: 1},
    "Yaksha Rush": {S: 2, P: 1},
    "Free Morph": {S: 2, P: 1},
    "Wolflike Frenzy": {S: 2, P: 2},
    "Soaring Spin": {S: 2, P: 1},
    "Dragons Breath": {S: 2, P: 3},
    "Drunken Poet": {S: 2, P: 3},
    "Dragons Head": {S: 2, P: 4},
    "Serene Breeze": {S: 2, P: 4},
    "Golden Body": {S: 0, P: 3},
    "Ghostly Steps": {S: 0, P: 0},
    "Divine Counter": {S: 4, P: 3},
    "Goosey Slide": {S: 0, P: 0, isWIP: true},
    "Mighty Drop": {S: 0, P: 0, isWIP: true}
};
// =====================================================================
// === MYSTIC SKILLS DATA END ==========================================
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- App State ---
    let appState = {
        activeFighter: null, // 1 or 2
        activeCategory: 'weapons',
        fighter1: { type: 'weapon', name: 'Strategic Sword', action: 'Light Attack' },
        fighter2: { type: 'weapon', name: 'Nameless Sword', action: 'Light Attack' }
    };

    // --- Elements ---
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    const trigger1 = document.getElementById('trigger1');
    const trigger2 = document.getElementById('trigger2');
    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');
    const s1 = document.getElementById('s1');
    const p1 = document.getElementById('p1');
    const s2 = document.getElementById('s2');
    const p2 = document.getElementById('p2');
    
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

    const getStats = (fighter) => {
        if (fighter.type === 'weapon') {
            const weapon = weaponData[fighter.name];
            return (weapon && weapon[fighter.action]) ? weapon[fighter.action] : {S:0, P:0};
        } else {
            return mysticSkillsData[fighter.name] || {S:0, P:0};
        }
    };

    // --- UI Updaters ---
    const updateDisplay = () => {
        const stats1 = getStats(appState.fighter1);
        s1.textContent = stats1.S; s1.className = `badge ${getBadgeClass(stats1.S)}`;
        p1.textContent = stats1.P; p1.className = `badge ${getBadgeClass(stats1.P)}`;

        const stats2 = getStats(appState.fighter2);
        s2.textContent = stats2.S; s2.className = `badge ${getBadgeClass(stats2.S)}`;
        p2.textContent = stats2.P; p2.className = `badge ${getBadgeClass(stats2.P)}`;
        
        resultOutput.classList.add('hidden');
    };

    const updateFighterUI = (num) => {
        const fighter = appState[`fighter${num}`];
        const nameEl = document.getElementById(`name${num}`);
        const iconEl = document.getElementById(`icon${num}`);
        const attackGroup = document.getElementById(`attackGroup${num}`);
        const attackSelect = document.getElementById(`a${num}`);

        nameEl.textContent = fighter.name;
        iconEl.src = `Icons/${getImageFileName(fighter.name)}.png`;

        if (fighter.type === 'weapon') {
            attackGroup.style.display = 'flex';
            const attacks = Object.keys(weaponData[fighter.name] || {});
            attackSelect.innerHTML = '';
            attacks.forEach(atk => attackSelect.add(new Option(atk, atk)));
            attackSelect.value = fighter.action;
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
                const fighterNum = appState.activeFighter;
                const type = appState.activeCategory === 'weapons' ? 'weapon' : 'skill';
                
                appState[`fighter${fighterNum}`].type = type;
                appState[`fighter${fighterNum}`].name = name;
                
                if (type === 'weapon') {
                    appState[`fighter${fighterNum}`].action = Object.keys(weaponData[name])[0];
                }

                updateFighterUI(fighterNum);
                selectionModal.classList.add('hidden');
                modalSearch.value = '';
            });
        });
    };

    const openPicker = (fighterNum) => {
        appState.activeFighter = fighterNum;
        selectionModal.classList.remove('hidden');
        renderModalItems();
        modalSearch.focus();
    };

    // --- Listeners ---
    if (trigger1) trigger1.addEventListener('click', () => openPicker(1));
    if (trigger2) trigger2.addEventListener('click', () => openPicker(2));
    
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

    a1.addEventListener('change', (e) => {
        appState.fighter1.action = e.target.value;
        updateDisplay();
    });
    
    a2.addEventListener('change', (e) => {
        appState.fighter2.action = e.target.value;
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
        const statsA = getStats(appState.fighter1);
        const statsB = getStats(appState.fighter2);

        const sa = Number(statsA.S); const pa = Number(statsA.P);
        const sb = Number(statsB.S); const pb = Number(statsB.P);

        const aWins = (sa > pb) && (sb <= pa);
        const bWins = (sb > pa) && (sa <= pb);
        const mutualStagger = (sa > pb) && (sb > pa);
        const clashNeutral = (sa <= pb) && (sb <= pa);

        const iconWrap = document.querySelector('.winner-icon-wrap');
        const winnerIcon = document.getElementById('winnerIcon');
        
        iconWrap.style.display = 'none';

        if (aWins) {
            resultText.textContent = `${appState.fighter1.name} Wins`;
            resultText.style.color = 'var(--w1-color)';
            resultOutput.style.borderColor = 'var(--w1-color)';
            
            iconWrap.style.display = 'flex';
            iconWrap.style.borderColor = 'var(--w1-color)';
            winnerIcon.src = `Icons/${getImageFileName(appState.fighter1.name)}.png`;
        } else if (bWins) {
            resultText.textContent = `${appState.fighter2.name} Wins`;
            resultText.style.color = 'var(--w2-color)';
            resultOutput.style.borderColor = 'var(--w2-color)';
            
            iconWrap.style.display = 'flex';
            iconWrap.style.borderColor = 'var(--w2-color)';
            winnerIcon.src = `Icons/${getImageFileName(appState.fighter2.name)}.png`;
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
            `;
            const attacks = Object.keys(weaponData[w]);
            for (const a of attacks) {
                const st = weaponData[w][a];
                htmlBuffer += `
                    <div class="ref-attack-row">
                        <span class="ref-attack-name">${a}</span>
                        <div class="ref-attack-stats">
                            <div class="mini-badge"><span class="text-stagger">S:</span><span class="b-dot ${getBadgeClass(st.S)}">${st.S}</span></div>
                            <div class="mini-badge"><span class="text-protection">P:</span><span class="b-dot ${getBadgeClass(st.P)}">${st.P}</span></div>
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
                                <span class="b-dot ${getBadgeClass(st.P)} mystic-stat-num">${st.P}</span>
                                <span class="mystic-stat-label text-protection">Protection</span>
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
        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const submitBtn = contactForm.querySelector('.btn-submit');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                try {
                    const response = await fetch(contactForm.action, {
                        method: 'POST',
                        headers: { 'Accept': 'application/json' },
                        body: new FormData(contactForm)
                    });
                    if (response.ok) {
                        contactForm.reset();
                        submitBtn.textContent = 'Message Sent!';
                        submitBtn.style.backgroundColor = 'var(--badge-1)';
                    } else {
                        submitBtn.textContent = 'Error Sending';
                    }
                } catch (error) { submitBtn.textContent = 'Error Sending'; }
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                }, 3000);
            });
        }
    };

    // --- Initial Init ---
    updateFighterUI(1);
    updateFighterUI(2);
    renderWeaponCompendium();
    renderMysticCompendium();
    setupContactForm();
});
