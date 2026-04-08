// =====================================================================
// === WEAPON DATA START ===============================================
// =====================================================================
// Define only the attacks that exist for each weapon.
// Do not define an attack if the weapon does not possess it.
const weaponData = {
    "Strategic Sword": { "Light": {S:1, P:0}, "Heavy": {S:1, P:0}, "Martial": {S:2, P:1}, "Special": {S:2, P:1}, "Dual": {S:2, P:1}, "H-Charged": {S:1, P:1} },
    "Nameless Sword": { "Light": {S:1, P:0}, "Heavy": {S:1, P:0}, "Martial": {S:2, P:1}, "Special": {S:2, P:1}, "Dual": {S:2, P:1}, "H-Charged": {S:1, P:1} },
    "Heavenquaker Spear": { "Light": {S:1, P:0}, "Heavy": {S:1, P:0}, "Martial": {S:2, P:1}, "Special": {S:2, P:1}, "Dual": {S:2, P:1}, "H-Charged": {S:2, P:3} },
    "Nameless Spear": { "Light": {S:1, P:0}, "Heavy": {S:1, P:0}, "Martial": {S:4, P:1}, "Special": {S:2, P:1}, "Dual": {S:2, P:1}, "H-Charged": {S:2, P:1} },
    "Infernal Twinblades": { "Light": {S:1, P:0}, "Heavy": {S:1, P:3}, "Martial": {S:2, P:1}, "Special": {S:2, P:1}, "Dual": {S:2, P:1} },
    "Mortal Ropedart": { "Light": {S:1, P:0}, "Martial": {S:2, P:1}, "Special": {S:0, P:1}, "Dual": {S:2, P:1}, "H-Charged": {S:0, P:3}, "L-Varied": {S:1, P:1}, "H-Varied": {S:1, P:1} },
    "Everspring Umbrella": { "Light": {S:0, P:0}, "Heavy": {S:1, P:0}, "Martial": {S:2, P:1}, "Special": {S:2, P:3}, "Dual": {S:1, P:1}, "H-Charged": {S:1, P:1} },
    "Unfettered Rope Dart": { "Light": {S:1, P:0}, "Martial": {S:2, P:1}, "Special": {S:2, P:3}, "Dual": {S:2, P:1}, "H-Charged": {S:2, P:1} },
    "Thundercry Blade": { "Light": {S:1, P:0}, "Heavy": {S:1, P:0}, "Martial": {S:0, P:3}, "Special": {S:2, P:3}, "Dual": {S:3, P:2}, "L-Charged": {S:1, P:3}, "H-Charged": {S:3, P:2}, "L-Varied": {S:2, P:3}, "H-Varied": {S:0, P:3} },
    "Stormbreaker Spear": { "Light": {S:1, P:0}, "Heavy": {S:1, P:0}, "Martial": {S:2, P:3}, "Special": {S:2, P:3}, "Dual": {S:2, P:1}, "H-Charged": {S:1, P:3} },
    "Phalanxbane Blade": { "Light": {S:1, P:0}, "Heavy": {S:1, P:0}, "Martial": {S:2, P:1}, "Special": {S:0, P:3}, "Dual": {S:2, P:1}, "H-Charged": {S:1, P:3}, "Martial-P": {S:2, P:3} },
    "Snowparting Blade": { "Light": {S:1, P:0}, "Heavy": {S:1, P:0}, "Martial": {S:2, P:1}, "Special": {S:2, P:3}, "Dual": {S:2, P:1}, "L-Charged": {S:1, P:1}, "L-Varied": {S:1, P:1} },
    "Vernal Umbrella": { "Light": {S:0, P:0}, "Heavy": {S:1, P:0}, "Martial": {S:4, P:1}, "Special": {S:0, P:1}, "Dual": {S:0, P:1}, "L-Charged": {S:0, P:1}, "H-Charged": {S:1, P:3}, "L-Varied": {S:1, P:0} },
    "Soulshade Umbrella": { "Light": {S:0, P:0}, "Heavy": {S:1, P:0}, "Martial": {S:0, P:1}, "Special": {S:0, P:1}, "Dual": {S:2, P:1}, "H-Charged": {S:1, P:1} },
    "Inkwell Fan": { "Light": {S:0, P:0}, "Heavy": {S:1, P:0}, "Martial": {S:2, P:1}, "Special": {S:2, P:1}, "Dual": {S:0, P:1}, "L-Charged": {S:1, P:1}, "H-Charged": {S:1, P:1} },
    "Panacea Fan": { "Light": {S:0, P:0}, "Martial": {S:1, P:0}, "Special": {S:1, P:0}, "Dual": {S:0, P:1}, "Special-P": {S:1, P:1} }
};
// =====================================================================
// === WEAPON DATA END =================================================
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- General Setup ---
    const weapons = Object.keys(weaponData);
    
    // --- Elements ---
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    const w1 = document.getElementById('w1');
    const a1 = document.getElementById('a1');
    const s1 = document.getElementById('s1');
    const p1 = document.getElementById('p1');
    
    const w2 = document.getElementById('w2');
    const a2 = document.getElementById('a2');
    const s2 = document.getElementById('s2');
    const p2 = document.getElementById('p2');
    
    const compareBtn = document.getElementById('compareBtn');
    const resultOutput = document.getElementById('resultOutput');
    const resultText = document.getElementById('resultText');
    const referenceGrid = document.getElementById('referenceGrid');

    // --- Tab Navigation ---
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
        });
    });

    // --- Dynamic Population Logic ---
    const populateAttacks = (weaponSelect, attackSelect) => {
        const weaponKey = weaponSelect.value;
        const attacksForWeapon = Object.keys(weaponData[weaponKey] || {});
        
        // Save current selection to restore if it still exists
        const currentSelection = attackSelect.value;
        attackSelect.innerHTML = '';
        
        attacksForWeapon.forEach(atk => {
            attackSelect.add(new Option(atk, atk));
        });

        // Try to keep same selection if possible
        if (attacksForWeapon.includes(currentSelection)) {
            attackSelect.value = currentSelection;
        } else if(attacksForWeapon.length > 0) {
            attackSelect.selectedIndex = 0;
        }
    };

    const initDropdowns = () => {
        weapons.forEach(w => {
            w1.add(new Option(w, w));
            w2.add(new Option(w, w));
        });

        if (weapons.length > 1) w2.selectedIndex = 1;

        populateAttacks(w1, a1);
        populateAttacks(w2, a2);
    };

    const getBadgeClass = (value) => {
        if (value >= 4) return 'b-4';
        if (value === 3) return 'b-3';
        if (value === 2) return 'b-2';
        if (value === 1) return 'b-1';
        return 'b-0';
    };

    const updateDisplay = () => {
        const stats1 = weaponData[w1.value][a1.value];
        s1.textContent = stats1.S; s1.className = `badge ${getBadgeClass(stats1.S)}`;
        p1.textContent = stats1.P; p1.className = `badge ${getBadgeClass(stats1.P)}`;

        const stats2 = weaponData[w2.value][a2.value];
        s2.textContent = stats2.S; s2.className = `badge ${getBadgeClass(stats2.S)}`;
        p2.textContent = stats2.P; p2.className = `badge ${getBadgeClass(stats2.P)}`;
        
        resultOutput.classList.add('hidden');
    };

    w1.addEventListener('change', () => { populateAttacks(w1, a1); updateDisplay(); });
    a1.addEventListener('change', updateDisplay);
    
    w2.addEventListener('change', () => { populateAttacks(w2, a2); updateDisplay(); });
    a2.addEventListener('change', updateDisplay);

    // --- Core Logic Evaluator ---
    compareBtn.addEventListener('click', () => {
        const statsA = weaponData[w1.value][a1.value];
        const statsB = weaponData[w2.value][a2.value];

        const sa = Number(statsA.S); const pa = Number(statsA.P);
        const sb = Number(statsB.S); const pb = Number(statsB.P);

        const aWins = (sa > pb) && (sb <= pa);
        const bWins = (sb > pa) && (sa <= pb);
        const mutualStagger = (sa > pb) && (sb > pa);
        const clashNeutral = (sa <= pb) && (sb <= pa);

        if (aWins) {
            resultText.textContent = 'Weapon A Wins';
            resultText.style.color = 'var(--w1-color)';
            resultOutput.style.borderColor = 'var(--w1-color)';
        } else if (bWins) {
            resultText.textContent = 'Weapon B Wins';
            resultText.style.color = 'var(--w2-color)';
            resultOutput.style.borderColor = 'var(--w2-color)';
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

    // --- Dashboard Renderer ---
    const renderDashboard = () => {
        let htmlBuffer = '';
        for (const w of weapons) {
            // Fix filename edge cases based on screenshots (e.g. Mortal Rope Dart)
            let imageFileName = w;
            if (w === 'Mortal Ropedart') imageFileName = 'Mortal Rope Dart';
            
            htmlBuffer += `
                <div class="weapon-ref-card">
                    <div class="ref-card-header">
                        <img src="Icons/${imageFileName}.png" class="weapon-icon" alt="${w}" onerror="this.style.display='none'">
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
                            <div class="mini-badge"><span>S:</span><span class="b-dot ${getBadgeClass(st.S)}">${st.S}</span></div>
                            <div class="mini-badge"><span>P:</span><span class="b-dot ${getBadgeClass(st.P)}">${st.P}</span></div>
                        </div>
                    </div>
                `;
            }
            htmlBuffer += `</div></div>`;
        }
        referenceGrid.innerHTML = htmlBuffer;
    };

    // Initialize all app states
    initDropdowns();
    updateDisplay();
    renderDashboard();
});
