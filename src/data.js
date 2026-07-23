// =============================================================================
// data.js — WWM PvP game data
// Each weapon is intentionally kept in the same top-level shape the user
// provided: { category, wip?, "Light Attacks": ..., "Heavy Attacks": ... }
// so future edits to the source-of-truth file drop in unchanged.
// =============================================================================

export const weaponData = {
    "Strategic Sword": {
        category: "Bellstrike - Umbra",
        "Light Attacks": {
            stages: [
                { name: "Light Attack", rpName: "Sword - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Sword - Dash", S: 1, D: 0 }
            ]
        },
        "Heavy Attacks": {
            stages: [
                { name: "Heavy Attack", rpName: "Sword - Heavy Attack", S: 1, D: 0 },
                { name: "Heavy Charged", rpName: "Second Track Slash", S: 1, D: 1 },
                {
                    name: "Heavy Charged Crisscross",
                    rpName: "Sword Horizon",
                    S: 2, D: 1,
                    source: {
                        type: "innerway",
                        title: "Sword Horizon T0",
                        desc: "Requires the Innerway Sword Horizon T0 to unlock this skill.",
                        icon: "assets/Innerways/Sword Horizon.png"
                    }
                }
            ]
        },
        "Martial Art": {
            stages: [
                { name: "1st Cast", rpName: "Inner Track Slash", S: 2, D: 1 },
                { name: "2nd Cast", rpName: "Inner Track Slash", S: 2, D: 1 },
                {
                    name: "3rd Cast Crisscross",
                    rpName: "Sword Horizon",
                    S: 2, D: 1,
                    source: {
                        type: "innerway",
                        title: "Sword Horizon T0",
                        desc: "Requires the Innerway Sword Horizon T0 to unlock this skill.",
                        icon: "assets/Innerways/Sword Horizon.png"
                    }
                }
            ]
        },
        "Special Skill": {
            stages: [
                { name: "1st Cast", rpName: "Inner Balance Strike III", S: 2, D: 1 },
                {
                    name: "2nd Cast Crisscross",
                    rpName: "Sword Horizon",
                    S: 2, D: 1,
                    source: {
                        type: "innerway",
                        title: "Sword Horizon T0",
                        desc: "Requires the Innerway Sword Horizon T0 to unlock this skill.",
                        icon: "assets/Innerways/Sword Horizon.png"
                    }
                }
            ]
        },
        "Dual Weapon Skill": { rpName: "Sword", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Sword - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Sword - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Nameless Sword": {
        category: "Bellstrike - Splendor",
        "Light Attacks": {
            stages: [
                { name: "Light Attack", rpName: "Sword - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Sword - Dash", S: 1, D: 0 }
            ]
        },
        "Heavy Attacks": {
            stages: [
                { name: "Heavy Attack", rpName: "Sword - Heavy Attack", S: 1, D: 0 },
                { name: "Heavy Charged", rpName: "Vagrant Sword", S: 1, D: 1 },
                {
                    name: "Heavy Charged Energy Surge",
                    rpName: "Sword Morph",
                    S: 2, D: 1,
                    source: {
                        type: "innerway",
                        title: "Sword Morph T0",
                        desc: "Requires the Innerway Sword Morph T0 to unlock this skill.",
                        icon: "assets/Innerways/Sword Morph.png"
                    }
                }
            ]
        },
        "Martial Art": {
            stages: [
                { name: "1st Cast", rpName: "Daunting Strike", S: 2, D: 1 },
                { name: "2nd Cast", rpName: "Daunting Strike", S: 2, D: 1 },
                { name: "3rd Cast", rpName: "Daunting Strike", S: 2, D: 1 }
            ]
        },
        "Special Skill": {
            stages: [
                { name: "1st Cast", rpName: "Shadow Step", S: 2, D: 1 },
                { name: "2nd Cast", rpName: "Shadow Step", S: 2, D: 1 }
            ]
        },
        "Dual Weapon Skill": { rpName: "Sword", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Sword - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Sword - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Heavenquaker Spear": {
        category: "Bellstrike - Umbra",
        "Light Attacks": {
            stages: [
                { name: "Light Attack", rpName: "Spear - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Spear - Dash", S: 1, D: 0 }
            ]
        },
        "Heavy Attacks": {
            stages: [
                { name: "Heavy Attack", rpName: "Spear - Heavy Attack", S: 1, D: 0 },
                { name: "Heavy Charged Skill", rpName: "Drifting Thrust", S: 1, D: 3 }
            ]
        },
        "Martial Art": {
            stages: [
                { name: "Base Cast", rpName: "Sober Sorrow", S: 2, D: 1 },
                {
                    name: "Enhanced Cast",
                    rpName: "Wolfchaser's Art",
                    S: 2, D: 3,
                    source: {
                        type: "innerway",
                        title: "Wolfchaser's Art T3",
                        desc: "Requires the Innerway Wolfchaser's Art T3 to unlock this skill.",
                        icon: "assets/Innerways/Wolfchaser's Art.png"
                    }
                }
            ]
        },
        "Special Skill": { rpName: "Sweep All", S: 2, D: 1 },
        "Dual Weapon Skill": { rpName: "Spear", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Spear - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Spear - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Nameless Spear": {
        category: "Bellstrike - Splendor",
        "Light Attacks": {
            stages: [
                { name: "Light Attack", rpName: "Spear - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Spear - Dash", S: 1, D: 0 }
            ]
        },
        "Heavy Attacks": {
            stages: [
                { name: "Heavy Attack", rpName: "Spear - Heavy Attack", S: 1, D: 0 },
                { name: "Heavy Charged Attack", rpName: "Storm Dance", S: 1, D: 0 }
            ]
        },
        "Martial Art": { rpName: "Qiankun's Lock", S: 4, D: 1 },
        "Special Skill": { rpName: "Legion Crusher", S: 2, D: 1 },
        "Dual Weapon Skill": { rpName: "Spear", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Spear - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Spear - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Infernal Twinblades": {
        category: "Bamboocut - Wind",
        "Light Attacks": {
            stages: [
                { name: "Light Attack", rpName: "Dual Blades - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Dual Blades - Dash", S: 1, D: 0 },
                { name: "Light Flamelash Attack", rpName: "Flamelash", S: 1, D: 3 }
            ]
        },
        "Burst Skill": {
            rpName: "Flamelash", S: 'X', D: 3, source: {
                type: "resource",
                title: "Resource Required",
                desc: "Requires max Karmic Flame Resource to use Flamelash.",
                icon: "assets/Martial Art Talents/Flamelash.png"
            }
        },
        "Martial Art": { rpName: "Addled Mind", S: 2, D: 1 },
        "Special Skill": {
            stages: [
                { name: "1st Cast", rpName: "Calamity's Greed", S: 2, D: 1 },
                { name: "2nd Cast", rpName: "Calamity's Greed", S: 2, D: 1 }
            ]
        },
        "Dual Weapon Skill": { rpName: "Dual Blades", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Dual Blades - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Dual Blades - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Mortal Rope Dart": {
        category: "Bamboocut - Wind",
        "Light Attacks": {
            stages: [
                { name: "Light Attack", rpName: "Rope Dart - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Rope Dart - Dash", S: 1, D: 0 }
            ]
        },
        "Charging Stance": {
            stages: [
                { name: "Base Charge Stance", rpName: "Rodent's Resilience", S: "X", D: 3 },
                { name: "Charged Varied Combo", rpName: "Rodent's Resilience", S: 1, D: 1 }
            ]
        },
        "Martial Art": {
            stages: [
                { name: "1st Cast", rpName: "Bladebound Thread", S: 2, D: 1 },
                { name: "2nd Cast", rpName: "Bladebound Thread", S: 2, D: 1 }
            ]
        },
        "Special Skill": {
            rpName: "Rodent Rampage", S: 'X', D: 1, source: {
                type: "resource",
                title: "Resource Required",
                desc: "Requires 1 Stack of Token of Gratitude to use this skill.",
                icon: "assets/Martial Art Talents/Token of Gratitude.png"
            }
        },
        "Dual Weapon Skill": { rpName: "Rope Dart", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Rope Dart - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Rope Dart - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Everspring Umbrella": {
        category: "Bamboocut - Dust",
        "Light Attacks": {
            stages: [
                { name: "Ranged Light Attack", rpName: "Umbrella - Light Attack", S: 0, D: 0 },
                { name: "4th Ranged Light Attack", rpName: "Umbrella - Light Attack", S: 1, D: 0 },
                { name: "Melee Light Attack", rpName: "Umbrella - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Umbrella - Dash", S: 1, D: 0 }
            ]
        },
        "Heavy Attacks": {
            stages: [
                { name: "Heavy Attack", rpName: "Umbrella - Heavy Attack", S: 1, D: 0 },
                { name: "Heavy Charged Attack", rpName: "Dreamwrought Bubbles", S: 1, D: 1 }
            ]
        },
        "Martial Art": {
            rpName: "Scarlet Spin", S: 2, D: 3, source: {
                type: "resource",
                title: "Resource Required",
                desc: "Requires 1 Stack of Fading Crimson to cast this skill.",
                icon: "assets/Martial Art Talents/Fading Crimson.png"
            }
        },
        "Special Skill": { rpName: "Cyclone Waltz", S: 2, D: 3 },
        "Dual Weapon Skill": { rpName: "Umbrella", S: 0, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Umbrella - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Umbrella - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Unfettered Rope Dart": {
        category: "Bamboocut - Dust",
        "Light Attacks": {
            stages: [
                { name: "Light Attack", rpName: "Rope Dart - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Rope Dart - Dash", S: 1, D: 0 }
            ]
        },
        "Charging Stance": {
            stages: [
                { name: "Base Charge Stance", rpName: "Piercing Dart", S: "X", D: 3 },
                { name: "No Resource Charged Skill", rpName: "Piercing Dart", S: 2, D: 1 },
                {
                    name: "1 Resource Charged Skill", rpName: "Piercing Dart", S: 2, D: 1, source: {
                        type: "resource",
                        title: "Resource Required",
                        desc: "Requires 1 bar of Token of Gratitude to use this skill",
                        icon: "assets/Martial Art Talents/Token of Gratitude.png"
                    }
                },
                {
                    name: "Full Resource Charged Skill", rpName: "Piercing Dart", S: 2, D: 1, source: {
                        type: "resource",
                        title: "Resource Required",
                        desc: "Requires 2 bars of Token of Gratitude to use this skill",
                        icon: "assets/Martial Art Talents/Token of Gratitude.png"
                    }
                }
            ]
        },
        "Martial Art": { rpName: "Soul Sweep", S: 2, D: 1 },
        "Special Skill": { rpName: "Burn and Bury", S: 2, D: 3 },
        "Dual Weapon Skill": { rpName: "Rope Dart", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Rope Dart - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Rope Dart - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Thundercry Blade": {
        category: "Stonesplit - Might",
        "Light Attacks": {
            stages: [
                { name: "Light Attack", rpName: "Mo Blade - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Mo Blade - Dash", S: 1, D: 0 },
                { name: "Light Charged Attack", rpName: "Galecloud Cleave", S: 1, D: 3 },
                {
                    name: "Light Charged Varied Combo", rpName: "Vitality Slash", S: 2, D: 3, source: {
                        type: "resource",
                        title: "Battle Will Required",
                        desc: "Requires 1 bar of Battle Will to use this skill.",
                        icon: "assets/Martial Art Talents/Battle Will.png"
                    }
                }
            ]
        },
        "Heavy Attacks": {
            stages: [
                { name: "Heavy Attack", rpName: "Mo Blade - Heavy Attack", S: 1, D: 0 },
                { name: "Heavy Charged Attack", rpName: "Avalanche", S: 1, D: 3 },
                {
                    name: "Heavy Charged Varied Combo", rpName: "Stonebreaker Cleave", S: 2, D: 3, source: {
                        type: "resource",
                        title: "Battle Will Required",
                        desc: "Requires 1 bar of Battle Will to use this skill.",
                        icon: "assets/Martial Art Talents/Battle Will.png"
                    }
                }
            ]
        },
        "Martial Art": {
            stages: [
                { name: "Base Cast", rpName: "Predator's Shield", S: 'X', D: 3 },
                {
                    name: "Perception Skill",
                    rpName: "Heaven's Shift",
                    S: 'X', D: 3,
                    source: {
                        type: "weapon combo",
                        title: "Stormbreaker Spear Required",
                        desc: "Casting the Martial Art of Stormbreaker Spear equipped will provide a buff called 'Drumbeat' and change the ability of Thundercry Blade's Martial Art into the Perception Skill."
                    }
                }
            ]
        },
        "Special Skill": {
            rpName: "Sunrush Gale", S: 2, D: 3, source: {
                type: "resource",
                title: "Resource Required",
                desc: "Requires 2 bars of Battle Will to use this skill",
                icon: "assets/Martial Art Talents/Battle Will.png"
            }
        },
        "Dual Weapon Skill": { rpName: "Mo Blade", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Mo Blade - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Mo Blade - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Stormbreaker Spear": {
        category: "Stonesplit - Might",
        "Light Attacks": {
            stages: [
                { name: "Light Attack", rpName: "Spear - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Spear - Dash", S: 1, D: 0 }
            ]
        },
        "Heavy Attacks": {
            stages: [
                { name: "Heavy Attack", rpName: "Spear - Heavy Attack", S: 1, D: 0 },
                { name: "Heavy Charged Attack", rpName: "Fury Spear", S: 1, D: 3 }
            ]
        },
        "Martial Art": { rpName: "Storm Roar", S: 2, D: 3 },
        "Special Skill": {
            rpName: "Thunder Shock", S: 2, D: 3, source: {
                type: "resource",
                title: "Resource Required",
                desc: "Requires 2 bars of Battle Will to use this skill",
                icon: "assets/Martial Art Talents/Battle Will.png"
            }
        },
        "Dual Weapon Skill": { rpName: "Spear", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Spear - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Spear - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Phalanxbane Blade": {
        category: "Stonesplit - Strength",
        "Light Attacks": {
            stages: [
                { name: "Light Attack", rpName: "Mo Blade - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Mo Blade - Dash", S: 1, D: 0 }
            ]
        },
        "Heavy Attacks": {
            stages: [
                { name: "Heavy Attack", rpName: "Mo Blade - Heavy Attack", S: 1, D: 0 },
                { name: "Heavy Semi Charged Attack", rpName: "Burning Heart", S: 1, D: 3 },
                {
                    name: "Heavy Full Charged Attack", rpName: "Burning Heart", S: 1, D: 3, source: {
                        type: "resource",
                        title: "Blade Momentum Required",
                        desc: "Requires 2 bars of Blade Momentum to use this skill.",
                        icon: "assets/Martial Art Talents/Blade Momentum.png"
                    }
                }
            ]
        },
        "Martial Art": {
            stages: [
                { name: "1st Cast Running", rpName: "Soul Burning", S: 2, D: 3 },
                { name: "2nd Cast", rpName: "Soul Burning", S: 2, D: 3 }
            ]
        },
        "Special Skill": {
            rpName: "Legion Summoner", S: 'X', D: 3, source: {
                type: "resource",
                title: "Blade Momentum Required",
                desc: "Requires 2 bars of Blade Momentum to use this skill.",
                icon: "assets/Martial Art Talents/Blade Momentum.png"
            }
        },
        "Dual Weapon Skill": { rpName: "Mo Blade", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Mo Blade - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Mo Blade - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Snowparting Blade": {
        category: "Stonesplit - Strength",
        "Light Attacks": {
            stages: [
                { name: "Light Attack", rpName: "Heng Blade - Light Attack", S: 1, D: 0 },
                { name: "Light Charged", rpName: "Grave Frost", S: 1, D: 1 },
                { name: "Light Varied Combo", rpName: "Stygian Freeze", S: 1, D: 1 },
                { name: "Light Sprint Attack", rpName: "Heng Blade - Dash", S: 1, D: 0 }
            ]
        },
        "Heavy Attacks": {
            stages: [
                { name: "Heavy Attack", rpName: "Heng Blade - Heavy Attack", S: 1, D: 0 },
                {
                    name: "Heavy Attack Varied Combo", rpName: "Snowbreak Spring", S: 1, D: 3, source: {
                        type: "resource",
                        title: "Resource Required",
                        desc: "Requires 1 Bar of Blade Momentum to use this skill.",
                        icon: "assets/Martial Art Talents/Blade Momentum.png"
                    }
                }
            ]
        },
        "Martial Art": {
            stages: [
                { name: "1st Cast", rpName: "General's Bane", S: 2, D: 1 },
                { name: "2nd Cast", rpName: "General's Bane", S: 2, D: 1 },
                { name: "3rd Cast", rpName: "General's Bane", S: 2, D: 1 }
            ]
        },
        "Special Skill": {
            stages: [
                {
                    name: "1st Cast", rpName: "Fleeting Trace", S: 2, D: 3, source: {
                        type: "resource",
                        title: "Blade Momentum Required",
                        desc: "Requires 2 bars of Blade Momentum to use this skill.",
                        icon: "assets/Martial Art Talents/Blade Momentum.png"
                    }
                },
                {
                    name: "2nd Cast", rpName: "Fleeting Trace", S: 4, D: 3, source: {
                        type: "martial art talent",
                        title: "Special Skill Enhancement",
                        desc: "Requires a Martial Art Breakthrough to unlock this skill.",
                        icon: "assets/Martial Art Talents/Special Skill Enhancement.png"
                    }
                }
            ]
        },
        "Dual Weapon Skill": { rpName: "Heng Blade", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Heng Blade - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Heng Blade - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Vernal Umbrella": {
        category: "Silkbind - Jade",
        "Light Attacks": {
            stages: [
                { name: "Light Ranged Attack", rpName: "Umbrella - Light Attack", S: 0, D: 0 },
                { name: "Final Light Ranged Attack", rpName: "Umbrella - Light Attack", S: 1, D: 0 },
                { name: "Light Melee Attack", rpName: "Umbrella - Light Attack", S: 1, D: 0 },
                { name: "Light Charged Attack", rpName: "Spring Away", S: 0, D: 1 },
                { name: "Light Varied Combo", rpName: "Bamboo Breeze", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Umbrella - Dash", S: 1, D: 0 }
            ]
        },
        "Heavy Attacks": {
            stages: [
                { name: "Heavy Attack", rpName: "Umbrella - Heavy Attack", S: 1, D: 0 },
                { name: "Heavy Charged Attack", rpName: "Apricot Heaven", S: 1, D: 3 },
                { name: "Heavy Varied Combo", rpName: "Colorful Phoenix", S: 1, D: 1 }
            ]
        },
        "Martial Art": { rpName: "Spring Sorrow", S: 4, D: 1 },
        "Special Skill": {
            rpName: "Unfading Flower", S: 0, D: 1, source: {
                type: "resource",
                title: "Resource Required",
                desc: "Requires 2 bars of Blossom to use this skill."
            }
        },
        "Dual Weapon Skill": { rpName: "Umbrella", S: 0, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Umbrella - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Umbrella - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Soulshade Umbrella": {
        category: "Silkbind - Deluge",
        "Light Attacks": {
            stages: [
                { name: "Light Ranged Attack", rpName: "Umbrella - Light Attack", S: 0, D: 0 },
                { name: "Final Light Ranged Attack", rpName: "Umbrella - Light Attack", S: 1, D: 0 },
                { name: "Light Melee Attack", rpName: "Umbrella - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Umbrella - Dash", S: 1, D: 0 }
            ]
        },
        "Heavy Attacks": {
            stages: [
                { name: "Heavy Attack", rpName: "Umbrella - Heavy Attack", S: 0, D: 1 },
                { name: "Heavy Charged", rpName: "Pale Petal", S: 1, D: 1 }
            ]
        },
        "Martial Art": { rpName: "Floating Grace", S: 0, D: 1 },
        "Special Skill": { rpName: "Echoes of a Thousand Plants", S: 0, D: 1 },
        "Dual Weapon Skill": { rpName: "Umbrella", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Umbrella - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Umbrella - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Inkwell Fan": {
        category: "Silkbind - Jade",
        "Light Attacks": {
            stages: [
                { name: "Light Ranged Attack", rpName: "Fan - Light Attack", S: 0, D: 0 },
                { name: "Final Light Ranged Attack", rpName: "Fan - Light Attack", S: 1, D: 0 },
                { name: "Light Melee Attack", rpName: "Fan - Light Attack", S: 1, D: 0 },
                { name: "Light Charged Attack", rpName: "Forsaken Fame", S: 1, D: 1 },
                { name: "Light Sprint Attack", rpName: "Fan - Dash", S: 1, D: 0 }
            ]
        },
        "Heavy Attacks": {
            stages: [
                { name: "Heavy Attack", rpName: "Fan - Heavy Attack", S: 1, D: 0 },
                { name: "Heavy Charged Attack", rpName: "Glow & Flow", S: 1, D: 0 },
                { name: "Pursuit Skill", rpName: "Moon Shatter Spring", S: 1, D: 1 }
            ]
        },
        "Martial Art": { rpName: "Emerald Barrier", S: 2, D: 1 },
        "Special Skill": {
            stages: [
                { name: "Base Cast", rpName: "Peak's Springless Silence", S: 2, D: 1 },
                {
                    name: "Enhanced Cast",
                    rpName: "EXAMPLE",
                    S: 2, D: 3,
                    source: {
                        type: "attunement",
                        title: "Disc Attunement Required",
                        desc: "Requires an Attunement on the Disc. When [Special Skill: Peak's Springless Silence] staggers or controls a target, it increases their damage taken by 12% for 5s and grants you 2s of Tenacity.",
                        icon: "assets/Attunements/Discs/Fan_1.png"
                    }
                }
            ]
        },
        "Dual Weapon Skill": { rpName: "Fan", S: 0, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Fan - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Fan - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Panacea Fan": {
        category: "Silkbind - Deluge",
        "Light Attacks": {
            stages: [
                { name: "Light Ranged Attack", rpName: "Fan - Light Attack", S: 0, D: 0 },
                { name: "Final Light Ranged Attack", rpName: "Fan - Light Attack", S: 1, D: 0 },
                { name: "Light Melee Attack", rpName: "Fan - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Fan - Dash", S: 1, D: 0 }
            ]
        },
        "Healing Skill": { rpName: "Emerald Dewtouch", S: 'X', D: 1 },
        "Martial Art": {
            stages: [
                { name: "1st Cast", rpName: "Cloudburst Healing", S: 'X', D: 1 },
                {
                    name: "2nd Cast", rpName: "Endless Cloud", S: 'X', D: 1, source: {
                        type: "resource",
                        title: "Dew Resource Required",
                        desc: "Requires max Dew to use this skill",
                        icon: "assets/Martial Art Talents/Dew.png"
                    }
                }
            ]
        },
        "Special Skill": {
            stages: [
                {
                    name: "1st Cast", rpName: "Light Dust After Morning Rain", S: 'X', D: 1, source: {
                        type: "resource",
                        title: "Dew Resource Required",
                        desc: "Requires 2 Dew to use this skill",
                        icon: "assets/Martial Art Talents/Dew.png"
                    }
                },
                {
                    name: "2nd Cast", rpName: "Resurrection", S: 'X', D: 1, source: {
                        type: "resource",
                        title: "Dew Resource Required",
                        desc: "Requires 3 Dew to use this skill",
                        icon: "assets/Martial Art Talents/Dew.png"
                    }
                }
            ]
        },
        "Dual Weapon Skill": { rpName: "Fan", S: 0, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Fan - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Fan - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Heavenwill Gauntlets": {
        category: "Bamboocut - Kite",
        "Light Attacks": {
            stages: [
                { name: "Light Attack", rpName: "Righteous Reign", S: 1, D: 0 },
                {
                    name: "Light Varied Combo", rpName: "Wicked Defiance", S: 1, D: 0, source: {
                        type: "martial art talent",
                        title: "Martial Art Talent",
                        desc: "Requires Perfect Dodge Enhancement, Martial Art Talent to use this skill.",
                        icon: "assets/Martial Art Talents/Special Skill Enhancement.png"
                    }
                },
                { name: "Light Sprint Attack", rpName: "Gauntlets - Dash", S: 1, D: 0 }
            ]
        },
        "Heavy Attacks": {
            stages: [
                { name: "Heavy Attack", rpName: "Virtuous Enthroned", S: 2, D: 0 },
                {
                    name: "Heavy Charged Skill", rpName: "Vile Condemned", S: 2, D: 1, source: {
                        type: "resource",
                        title: "Resource Required",
                        desc: "Requires 1 stack of Heaven's Will to use this skill.",
                        icon: "assets/Martial Art Talents/Heaven's Will.png"
                    }
                }
            ]
        },
        "Martial Art": {
            stages: [
                { name: "1st Cast", rpName: "Heavenwill Declared", S: 2, D: 3 },
                { name: "2nd Cast", rpName: "Celestial Mandate", S: 2, D: 1 }
            ]
        },
        "Special Skill": { rpName: "All Under Justice", S: 2, D: 1 },
        "Dual Weapon Skill": { rpName: "Gauntlets", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Gauntlets - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Gauntlets - Jump Strike", S: 1, D: 0 }
            ]
        }
    },
    "Skygrasp Rope Dart": {
        category: "Bamboocut - Kite",
        "Light Attacks": {
            stages: [
                { name: "Light Attack", rpName: "Rope Dart - Light Attack", S: 1, D: 0 },
                { name: "Light Sprint Attack", rpName: "Rope Dart - Dash", S: 1, D: 0 }
            ]
        },
        "Heavy Attacks": {
            stages: [
                {
                    name: "With Resource", rpName: "Boundless Whirl", S: 1, D: 0, source: {
                        type: "resource",
                        title: "Resource Required",
                        desc: "Requires 1 stack of Heaven's Will to use this skill.",
                        icon: "assets/Martial Art Talents/Heaven's Will.png"
                    }
                },
                { name: "No Resource", rpName: "Boundless Whirl", S: 1, D: 0 }
            ]
        },
        "Martial Art": { rpName: "Snaring Lash", S: 2, D: 1 },
        "Special Skill": { rpName: "Sky-Snare Stance", S: 2, D: 1 },
        "Dual Weapon Skill": { rpName: "Rope Dart", S: 2, D: 1 },
        "Airborne Attacks": {
            stages: [
                { name: "Light Attack Airborne", rpName: "Rope Dart - Airborne Light Attack", S: 1, D: 0 },
                { name: "Heavy Attack Airborne", rpName: "Rope Dart - Jump Strike", S: 1, D: 0 }
            ]
        }
    }
};

// Mystic skills — original shape preserved: each entry is either
// { S, D } (single cast) or { stages: [{ name, S, D }, ...] } (multi-stage).
export const mysticSkillsData = {
    "Meridian Touch": { S: 2, D: 1 },
    "Cloud Steps": { S: 4, D: 3 },
    "Lions Roar": { S: 2, D: 3 },
    "Leaping Toad": {
        stages: [
            { name: "1st Cast", S: 2, D: 3 },
            { name: "2nd Cast", S: 2, D: 3 },
            { name: "3rd Cast", S: 2, D: 3 }
        ]
    },
    "Guardians Palm": { S: 2, D: 1 },
    "Flaming Meteor": { S: 2, D: 4 },
    "Flute of the Tides": { S: 0, D: 1 },
    "Talon Strike": { S: 2, D: 0 },
    "Yaksha Rush": {
        stages: [
            { name: "Base Cast", S: 2, D: 0 },
            { name: "Guard Break Cast", S: 2, D: 3 }
        ]
    },
    "Free Morph": { S: 2, D: 1 },
    "Wolflike Frenzy": { S: 2, D: 3 },
    "Soaring Spin": {
        stages: [
            { name: "Base Cast", S: 2, D: 1 },
            { name: "Dodge Enhancement", S: 2, D: 3 }
        ]
    },
    "Dragons Breath": { S: 2, D: 3 },
    "Drunken Poet": { S: 2, D: 3 },
    "Dragon Head": { S: 2, D: 4 },
    "Serene Breeze": { S: 2, D: 4 },
    "Golden Body": { S: 'X', D: 3 },
    "Ghostly Steps": { S: 'X', D: 0 },
    "Divine Counter": {
        stages: [
            { name: "Sword", S: 4, D: 3 },
            { name: "Spear", S: 4, D: 3 },
            { name: "Fan", S: 4, D: 3 },
            { name: "Umbrella", S: 4, D: 3 },
            { name: "Dual Blades", S: 4, D: 3 },
            { name: "Rope Dart", S: 4, D: 3 },
            { name: "Heng Blade", S: 4, D: 3 },
            { name: "Gauntlets", S: 4, D: 3 }
        ]
    },
    "Tai Chi": { S: 0, D: 1 },
    "Mighty Drop": { S: 0, D: 0 },
    "Bow Ring Skill": { S: 0, D: 3 }
};

// ===== Helpers ==============================================================

// Normalize a per-weapon attack-category object into [{ name, S, D, source }]
// Handles both shapes: a single-attack object (rpName, S, D) or a multi-stage
// object with stages[]. Pure data-only, no react.
export function attackStages(attackObj) {
    if (!attackObj) return []
    if (Array.isArray(attackObj.stages)) return attackObj.stages
    // Single-stage wire entries (e.g. `"Martial Art": { rpName: ..., S, D }`)
    // have no `stages` array. Their display `name` is forced to the
    // constant "Base Cast" so the row in the Priority column shows a
    // uniform label independent of the rp-name leak — the actual skill
    // identity (used for preview URLs and the identity card readout)
    // still comes from `rpName`.
    return [{
        name: 'Base Cast',
        rpName: attackObj.rpName,
        S: attackObj.S,
        D: attackObj.D,
        source: attackObj.source,
    }]
}

// Walk a weapon's entries and return only the attack-category ones.
// Filters out meta keys (category, wip) so future top-level edits can
// drop straight in.
export function attackEntriesFor(weapon) {
    if (!weapon) return []
    return Object.entries(weapon).filter(([, v]) =>
        v && typeof v === 'object' && (Array.isArray(v.stages) || v.rpName)
    )
}

// Group weapons by FULL PATH (e.g. "Bellstrike - Umbra") rather than just
// the set prefix. Each path renders as its own row in the master panel,
// so its 2 weapons appear side-by-side (horizontal flow) instead of being
// interleaved with weapons from sibling paths in a tall shared column.
//
// Returns Array<{ set: string, setKey: string, weapons: Weapon[] }>
//   - `set`   = full path string used as the section header label
//   - `setKey` = set prefix used to look up the category color (blue/purple/red/green)
export function groupWeaponsByCategory() {
    const SET_ORDER = ['Bellstrike', 'Bamboocut', 'Stonesplit', 'Silkbind']

    // Discover paths in insertion order, grouped by their set prefix.
    const setsSeen = []
    const pathsBySet = {} // setName -> [path1, path2, ...]
    for (const [, w] of Object.entries(weaponData)) {
        if (!w.category) continue
        const [setName, ...rest] = w.category.split(' - ')
        const pathName = w.category
        if (!setsSeen.includes(setName)) setsSeen.push(setName)
        if (!pathsBySet[setName]) pathsBySet[setName] = []
        if (!pathsBySet[setName].includes(pathName)) pathsBySet[setName].push(pathName)
    }

    // Bucket weapons by full path. Sort weapons within each path
    // alphabetically by name for stable rendering.
    const buckets = {}
    for (const [name, w] of Object.entries(weaponData)) {
        if (!w.category) continue
        if (!buckets[w.category]) buckets[w.category] = []
        buckets[w.category].push({ name, ...w })
    }
    Object.values(buckets).forEach((arr) => {
        arr.sort((a, b) => a.name.localeCompare(b.name))
    })

    // Preserve the canonical set order (Bellstrike → Bamboocut → Stonesplit → Silkbind)
    // and within each set use the order paths were first seen in the data.
    const sortedSets = SET_ORDER.filter((s) => setsSeen.includes(s))
    const result = []
    for (const setName of sortedSets) {
        for (const pathName of pathsBySet[setName] || []) {
            if (!buckets[pathName]) continue
            result.push({
                set: pathName,    // full path: "Bellstrike - Umbra"
                setKey: setName,  // prefix:   "Bellstrike" — drives color
                weapons: buckets[pathName],
            })
        }
    }
    return result
}

// Normalize a mystic entry into [{ name, S, D }]. Synthesized single-stage
// rows use the skill's own name so the detail list reads correctly
// (e.g. "Meridian Touch" instead of a generic "Cast").
export function mysticStages(entry, skillName) {
    if (!entry) return []
    if (Array.isArray(entry.stages)) return entry.stages
    // Single-stage mystic skills (e.g. `"Meridian Touch": { S, D }`)
    // have no `stages` array. Their display `name` is forced to the
    // constant "Base Cast" so the row in the Mystic priority column
    // shows a uniform label independent of the skill name.
    return [{ name: 'Base Cast', S: entry.S, D: entry.D }]
}
