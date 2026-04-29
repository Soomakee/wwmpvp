import { attunementData } from './data/attunements.js';
import { innerWayData } from './data/innerWays.js';
import { weaponData } from './data/weapons.js';

// --- App State ---
    export const appState = {
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

const initAttunementState = () => {
        Object.values(attunementData).flat().forEach(att => {
            appState.attunements[att.id] = (att.locked || att.uninteractable) ? false : att.enabled;
        });
    };
    initAttunementState();

const initInnerWayState = () => {
        innerWayData.forEach(iw => {
            appState.innerWays[iw.id] = (iw.locked || iw.uninteractable) ? false : iw.enabled;
        });
    };
    initInnerWayState();

export const syncInnerWaySkills = () => {
        innerWayData.forEach(iw => {
            if (!iw.addsSkills) return;
            const { weapon, skills } = iw.addsSkills;
            const isEnabled = appState.innerWays[iw.id];
            if (isEnabled) {
                Object.entries(skills).forEach(([skillName, stats]) => {
                    weaponData[weapon][skillName] = { ...stats };
                });
            } else {
                Object.keys(skills).forEach(skillName => {
                    delete weaponData[weapon][skillName];
                });
            }
        });
    };
    syncInnerWaySkills();