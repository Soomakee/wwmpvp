# ⚔️ WWM PvP Priority Dashboard

[![Live Site](https://img.shields.io/badge/Live%20Site-wwmpvp.com-blueviolet?style=for-the-badge)](https://wwmpvp.com)
[![Status](https://img.shields.io/badge/Status-Beta-orange?style=for-the-badge)](https://wwmpvp.com)

A premium, high-density **Combat Analysis Dashboard** designed for high-level competitive play in WWM. This tool functions as a tactical command center where players can verify frame-perfect technical priorities, simulate combat trades, and study complex weapon synergies.

---

## 🚀 Key Features

### 🧩 Combat Ruleset Documentation
The engine follows a strict "Stagger vs. Defense" logic. The documentation provides a clear, color-coded breakdown of how interactions are resolved, explaining the 0-4 priority scale:
- **0 - No Stagger/Defense**: Neutral state.
- **1 - Low**: Basic attacks and light skills.
- **2 - Mid**: Most Martial Arts and standard Special Skills.
- **3 - High (Tenacity)**: Heavy skills or buffed states.
- **4 - Extreme (Super Armor)**: Unstaggerable frames and ultimate-tier priorities.

### 🧮 Interactive Combat Calculator
Simulate any "Skill vs. Skill" scenario. Select two weapons or mystic skills and determine the winner based on simultaneous hit timings. The calculator accounts for:
- **Victory/Defeat**: Clean breaks where one player's Stagger exceeds the other's Defense.
- **Both Staggered (Clash)**: High-stakes trades where animation speed and ping dictate the winner.
- **Both Defend (Draw)**: Stalemate scenarios where both players take damage but neither is staggered.

### 🔍 Dynamic Matchup Finder
Reverse-engineer combat solutions. Select a target skill, and the dashboard instantly filters all possible counters and weapons that possess enough Stagger to break through its Defense.

### 📚 Skill Priority Registry
A comprehensive compendium of all **Weapon Skills** and **Mystic Skills**. Each entry features:
- **Bento Card Layout**: Clean, modular data presentation.
- **Video Previews**: Hover over or click skills to see frame-data visualizations.
- **WIP Tracking**: Real-time status on skills currently undergoing meta-verification.

---

## 🛠️ Technical Implementation

- **Architecture**: Vanilla Javascript engine with a centralized data object for rapid updates and high-performance calculations.
- **Aesthetics**: Premium "Glassmorphism" design system using CSS variables, backdrop filters, and a responsive grid layout.
- **Standardization**: Statistics are mapped to a "Competitive Standard," accounting for common Meta-Synergies (Attunements and Inner Ways).

---

## 💡 Competitive Insights
The dashboard includes an **Important Information** section documenting subtle nuances that shift priority:
- **Inner Way Modifiers**: How specific paths (e.g., Wolfchaser) elevate Defense to Tenacity.
- **Attunement Synergies**: Interaction between gear buffs and skill priorities.
- **Animation Nuances**: Differences between Melee and Ranged hitboxes for weapons like Fans and Umbrellas.

---

## 🛠️ Development

This is a static web application. To run it locally:
1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. No build step or dependencies required.

---

## 🤝 Support the Project

This project is maintained by **Saia** to support the competitive WWM community. If you find the tool useful, consider supporting development:

- **Donate**: [Support via StreamElements](https://streamelements.com/imsaia/tip) ❤️
- **Feedback**: Found an issue? [Create a Ticket](https://wwmpvp.com#contact) directly on the dashboard.

---

*WWM PvP Priority is currently in **Beta**. Ongoing testing is in progress for all synergistic additions.*
