// =====================================================================
// === WEAPON DATA START ===============================================
// =====================================================================
// Define only the attacks that exist for each weapon.
// Do not define an attack if the weapon does not possess it.
const weaponData = {
    "Strategic Sword": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 2, D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged": { S: 1, D: 1 } },
    "Nameless Sword": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 2, D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged": { S: 1, D: 1 } },
    "Heavenquaker Spear": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 3 }, "Special Skill": { S: 2, D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged": { S: 1, D: 3 } },
    "Nameless Spear": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 4, D: 1 }, "Special Skill": { S: 2, D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged": { S: 1, D: 1 } },
    "Infernal Twinblades": { "Light Attack": { S: 1, D: 0 }, "Heavy (Rage Mode)": { S: 1, D: 3 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 2, D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 } },
    "Mortal Ropedart": { "Light Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 'X', D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged": { S: 'X', D: 3 }, "Light Varied Combo": { S: 1, D: 1 }, "Heavy Varied Combo": { S: 1, D: 1 } },
    "Everspring Umbrella": { "Light Attack": { S: 0, D: 0 }, "Heavy Attack": { S: 0, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 2, D: 3 }, "Dual Weapon Skill": { S: 0, D: 1 }, "Heavy Charged": { S: 0, D: 1 } },
    "Unfettered Rope Dart": { "Light Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 2, D: 3 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged": { S: 0, D: 3 } },
    "Thundercry Blade": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 'X', D: 3 }, "Special Skill": { S: 2, D: 3 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Light Charged": { S: 1, D: 3 }, "Heavy Charged": { S: 1, D: 3 }, "Light Varied Combo": { S: 2, D: 3 }, "Heavy Varied Combo": { S: 2, D: 3 }, "Martial Art (Charged)": { S: 'X', D: 3 } },
    "Stormbreaker Spear": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 3 }, "Special Skill": { S: 2, D: 4 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged": { S: 1, D: 3 } },
    "Phalanxbane Blade": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 0, D: 3 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged": { S: 1, D: 3 }, "Martial Art (Charged)": { S: 2, D: 3 } },
    "Snowparting Blade": { "Light Attack": { S: 1, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 4, D: 3 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Light Charged": { S: 1, D: 1 }, "Light Varied Combo": { S: 1, D: 1 }, "Heavy Varied Combo": { S: 2, D: 3 } },
    "Vernal Umbrella": { "Light Attack": { S: 0, D: 0 }, "Heavy Attack": { S: 1, D: 0 }, "Martial Art": { S: 4, D: 1 }, "Special Skill": { S: 0, D: 1 }, "Dual Weapon Skill": { S: 0, D: 1 }, "Light Charged": { S: 0, D: 1 }, "Heavy Charged": { S: 1, D: 3 }, "Light Varied Combo": { S: 0, D: 0 }, "Heavy Varied Combo": { S: 0, D: 1 } },
    "Soulshade Umbrella": { "Light Attack": { S: 0, D: 0 }, "Heavy Attack": { S: 0, D: 0 }, "Martial Art": { S: 0, D: 1 }, "Special Skill": { S: 0, D: 1 }, "Dual Weapon Skill": { S: 2, D: 1 }, "Heavy Charged": { S: 0, D: 1 } },
    "Inkwell Fan": { "Light Attack": { S: 0, D: 0 }, "Heavy Attack": { S: 0, D: 0 }, "Martial Art": { S: 2, D: 1 }, "Special Skill": { S: 2, D: 1 }, "Dual Weapon Skill": { S: 0, D: 1 }, "Light Charged": { S: 1, D: 1 }, "Heavy Charged": { S: 1, D: 1 } },
    "Panacea Fan": { "Light Attack": { S: 0, D: 0 }, "Heavy Attack": { S: 'X', D: 1 }, "Martial Art": { S: 'X', D: 1 }, "Special Skill": { S: 0, D: 1 }, "Dual Weapon Skill": { S: 0, D: 1 }, "Martial Art (Charged)": { S: 'X', D: 1 }, "Special Skill (Charged)": { S: 'X', D: 1 } }
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
    "Dragons Head": { S: 2, D: 4 },
    "Serene Breeze": { S: 2, D: 4 },
    "Golden Body": { S: 'X', D: 1 },
    "Ghostly Steps": { S: 'X', D: 0 },
    "Divine Counter": { S: 4, D: 3 },
    "Goosey Slide": { S: 0, D: 0, isWIP: true },
    "Mighty Drop": { S: 0, D: 0, isWIP: true }
};
// =====================================================================
// === MYSTIC SKILLS DATA END ==========================================
// =====================================================================

const initApp = () => {
    // --- App State ---
    let appState = {
        activeSlot: null, // 'A' or 'B'
        activeCategory: 'weapons',
        skillA: { type: 'weapon', name: 'Strategic Sword', action: 'Light Attack' },
        skillB: { type: 'weapon', name: 'Nameless Sword', action: 'Light Attack' },
        skillMatchup: { type: 'weapon', name: 'Strategic Sword', action: 'Light Attack' }
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
        return name;
    };

    const getStats = (slotData) => {
        if (slotData.type === 'weapon') {
            const weapon = weaponData[slotData.name];
            return (weapon && weapon[slotData.action]) ? weapon[slotData.action] : { S: 0, D: 0 };
        } else {
            return mysticSkillsData[slotData.name] || { S: 0, D: 0 };
        }
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
        const slotData = (slot === 'A' || slot === 'B') ? appState[`skill${slot}`] : appState.skillMatchup;
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

        if (slot === 'A' || slot === 'B') {
            updateDisplay();
        } else {
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
            for (const [actionName, stats] of Object.entries(actions)) {
                const s = (stats.S === 'X' || stats.isWIP || stats.wipS) ? 0 : Number(stats.S);
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
                    ${group.items.map(i => `
                        <div class="matchup-action-item">
                            <span class="m-action-name">${i.action}</span>
                            <span class="m-badge ${getBadgeClass(i.stats.S)}">${i.stats.S === 'X' ? 'X' : i.stats.S}</span>
                        </div>
                    `).join('')}
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
                const targetSlot = (slot === 'A' || slot === 'B') ? appState[`skill${slot}`] : appState.skillMatchup;

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
            navBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
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
            resultText.textContent = 'Both hits, but no Stagger';
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
                const st = weaponData[w][a];
                htmlBuffer += `
                    <div class="ref-attack-row ${st.isWIP ? 'wip-row' : ''}">
                        <span class="ref-attack-name">${a}</span>
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
                const isPartiallyWip = st.wipS || st.wipD;
                htmlBuffer += `
                    <div class="weapon-ref-card ${isPartiallyWip ? 'wip-card-partial' : ''}">
                        <div class="ref-card-header">
                            <img src="Icons/${getImageFileName(m)}.png" class="weapon-icon" alt="${m}" onerror="this.style.display='none'">
                            <div class="header-text-wrap">
                                ${m} ${isPartiallyWip ? '<span class="wip-tag">TESTING</span>' : ''}
                            </div>
                        </div>
                        <div class="mystic-stat-body">
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
    updateSkillUI('Matchup');
    renderWeaponCompendium();
    renderMysticCompendium();
    setupContactForm();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}