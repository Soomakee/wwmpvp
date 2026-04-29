// =====================================================================
// Inner Ways will modify skill priorities similarly to attunements.
// Placeholder for future data.
export const innerWayData = [
    {
        id: "iw-wolfchasers-art-3",
        label: "Wolfchasers Art Tier 3",
        description: "While casting Martial Art skill, gain Tenacity during the duration.",
        affects: "All Weapons",
        skillType: "Martial Art",
        effect: "tenacity",
        enabled: false,
        locked: false,
        modifies: { weapon: "Heavenquaker Spear", action: "Martial Art", stat: "D", value: 3 }
    }
    , {
        id: "iw-swordhorizon",
        label: "Sword Horizon",
        description: "After casting Strategic Sword's Martial Art, Special Skill, or Charged Skill, press the skill button again at the perfect timing during the ending phase to cast Crisscrossing swords.",
        affects: "Strategic Sword",
        skillType: "Martial Art / Special / Charged",
        effect: "none",
        enabled: false,
        locked: false,
        modifies: { weapon: "Strategic Sword", action: "Martial Art", stat: "D", value: 3 },
        addsSkills: {
            weapon: "Strategic Sword",
            skills: {
                "Martial Art Horizon": { S: 2, D: 1 },
                "Special Skill Horizon": { S: 2, D: 1 },
                "Heavy Charged Horizon": { S: 2, D: 1 }
            }
        }
    }

];
// =====================================================================