# GAMEVERSE — Gaming Zone Website

A 3-page responsive gaming website built with semantic HTML5 and CSS3.
JavaScript is used only for two simple interactions (mobile menu, genre chips).

## Files

| File         | Purpose                                              |
|--------------|------------------------------------------------------|
| `index.html` | Home — hero, featured games, why-us, footer          |
| `games.html` | Games — banner, filter chips, 6 game cards           |
| `about.html` | About Us — intro, mission/vision, features, contact  |
| `style.css`  | All styling for all three pages                      |
| `script.js`  | Mobile menu toggle + genre chip selection            |

## How to run

1. Put all five files in **one folder** named `gameverse`.
   Do not create subfolders — every link assumes the files sit side by side.
2. Double-click `index.html`. It opens in your default browser.
3. Use the navigation bar to move between Home, Games and About Us.

No server, no installation, no internet connection required
(fonts load from Google Fonts if you are online; the site still works offline
with fallback system fonts).

## Design

- Dark theme: black `#05050a` and dark navy `#0a0e1f`
- Accents: neon purple `#a855f7` and electric blue `#22d3ee`
- Fonts: Orbitron (headings), Rajdhani (body)
- Responsive breakpoints at 950px and 760px

## Game artwork

Game cards use CSS gradient panels, so the site works with no image files.
To use real screenshots instead, place images in an `images/` folder and add
an `<img>` inside the `.game-art` div:

```html
<div class="game-art art-valorant">
  <img src="images/valorant.jpg" alt="Valorant gameplay">
  <span class="genre-tag">Tactical FPS</span>
</div>
```

The CSS already positions and scales any `<img>` placed there.
