# Squirrelsong Light Theme 🐿️

A low-contrast, non-distracting and neurodiverse-friendly theme that is comfortable for all-day coding without sensory overstimulation, and perfect for developers with ADHD, autism, or highly sensitive people (HSP). No bright colors, no super-high contrast, no distractions. Soft colors but still enough legibility for different part of the code and UI.

![Squirrelsong Light for Visual Studio Code](https://github.com/sapegin/squirrelsong/raw/HEAD/light/VSCode/SquirrelsongLight/screenshots/screenshot.jpg)

- Low contrast with great readability
- Made for web developers and highly sensitive people
- Monochrome Markdown styles
- Consistent highlighting for different programming languages
- Non-distracting UI

![Squirrelsong Light: editing code](https://github.com/sapegin/squirrelsong/raw/HEAD/light/VSCode/SquirrelsongLight/screenshots/screenshot-code.png)

![Squirrelsong Light: opening files](https://github.com/sapegin/squirrelsong/raw/HEAD/light/VSCode/SquirrelsongLight/screenshots/screenshot-files.jpg)

## How to make the integrated terminal dark?

To use the [Squirrelsong Dark](https://marketplace.visualstudio.com/items?itemName=sapegin.Theme-SquirrelsongDark) theme in the integrated terminal, add the following to your Visual Studio Code config:

```json5
{
  "workbench.colorCustomizations": {
    "terminal.ansiBlack": "#352a21",
    "terminal.ansiBlue": "#5d99cb",
    "terminal.ansiBrightBlack": "#6b503c",
    "terminal.ansiBrightBlue": "#64a1d3",
    "terminal.ansiBrightCyan": "#adccc5",
    "terminal.ansiBrightGreen": "#73a15c",
    "terminal.ansiBrightMagenta": "#a08ac2",
    "terminal.ansiBrightRed": "#db7666",
    "terminal.ansiBrightWhite": "#dcd5c0",
    "terminal.ansiBrightYellow": "#e2c54c",
    "terminal.ansiCyan": "#4f9593",
    "terminal.ansiGreen": "#558240",
    "terminal.ansiMagenta": "#7f61b3",
    "terminal.ansiRed": "#bc5248",
    "terminal.ansiWhite": "#c4a389",
    "terminal.ansiYellow": "#ceb250",
    "terminal.background": "#352a21",
    "terminal.border": "#574131",
    "terminal.findMatchBackground": "#ca5a8366",
    "terminal.findMatchBorder": "#ca5a83",
    "terminal.findMatchHighlightBackground": "#ca5a8366",
    "terminal.findMatchHighlightBorder": "#ca5a83",
    "terminal.foreground": "#9e8a74",
    "terminal.hoverHighlightBackground": "#9e8a7433",
    "terminal.inactiveSelectionBackground": "#41352a",
    "terminal.selectionBackground": "#41352a",
    "terminalCommandDecoration.defaultBackground": "#896b56",
    "terminalCommandDecoration.errorBackground": "#6c3b2f",
    "terminalCommandDecoration.successBackground": "#445536",
    "terminalCursor.background": "#352a21",
    "terminalCursor.foreground": "#9e8a74",
    "terminalOverviewRuler.cursorForeground": "#9e8a74",
    "terminalOverviewRuler.findMatchForeground": "#ca5a83",
    "terminalStickyScroll.background": "#352a21",
    "terminalStickyScrollHover.background": "#352a21"
  },
  // Without this line colors will be washed out
  "terminal.integrated.minimumContrastRatio": 1,
  // Use normal colors for bold text
  "terminal.integrated.drawBoldTextInBrightColors": false
}
```

## More information

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=sapegin.Theme-SquirrelsongLight).
- [GitHub repository](https://github.com/sapegin/squirrelsong).

## Sponsoring

Maintaining a color theme for multiple editors takes time and coffee, buy me one more cup to keep it going.

<a href="https://www.buymeacoffee.com/sapegin" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-orange.png" alt="Buy Me A Coffee" height="51" width="217" ></a>

## Authors and license

[Artem Sapegin](https://sapegin.me) and [contributors](https://github.com/sapegin/squirrelsong/graphs/contributors).

The MIT License, see the included [License.md](License.md) file.
