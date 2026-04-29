// =====================================================================
// Attunements modify skill stagger/defense values when equipped.
// Organized by gear slot: Weapon, Disc, Pendant, Helmet, Thumb Ring.
export const attunementData = {
    weapon: [
        {
            id: "weapon-counterattack-tenacity",
            label: "Divine Counter Tenacity",
            description: "Gain Tenacity for 1.5s and recover 30 endurance after damaging a target with Divine Counter.",
            gearSlot: "Weapon",
            affects: "All Weapons",
            skillType: "Divine Counter",
            effect: "tenacity",
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
            enabled: false,
            locked: true,
            modifies: { weapon: "Heavenquaker Spear", action: "Special Skill", stat: "D", value: 3 },
            conditional: "Heavenquaker Special Skill: Defense rises to Tenacity (3) on hit"
        },
        {
            id: "disc-thundercry-martial",
            label: "Thundercry Blade Super Armor (MA)",
            description: "Martial Art Skill gains Super Armor if hit within 1 second of casting.",
            gearSlot: "Disc",
            affects: "Thundercry Blade",
            skillType: "Martial Art",
            effect: "superArmor",
            enabled: false,
            locked: true,
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
            enabled: false,
            locked: false,
            modifies: { weapon: "Stormbreaker Spear", action: "Special Skill", stat: "D", value: 4 },
            conditional: "Stormbreaker Special Skill: Defense rises to Super Armor (4) on non-defending target"
        },
        {
            id: "disc-soulshade-martial",
            label: "Soulshade Umbrella Super Armor",
            description: "Martial Art Skill gains Super Armor on ally heal (Testing: self-heal may count).",
            gearSlot: "Disc",
            affects: "Soulshade Umbrella",
            skillType: "Martial Art",
            effect: "superArmor",
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
            enabled: false,
            locked: false,
            uninteractable: true
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
            enabled: false,
            locked: false,
            modifies: { mystic: "Bow Skill", stat: "D", value: 3 }
        }
    ]
};
// =====================================================================