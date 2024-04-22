# Squirrelsong Light Theme 🐿️

A low contrast light theme for web developers.

![Squirrelsong Light](https://github.com/sapegin/squirrelsong/raw/master/light/VSCode/SquirrelsongLight/screenshot.png)

- Low contrast with great readability
- Made for web developers
- Monochrome Markdown styles
- Consistent highlighting for different programming languages
- Non-distracting UI

## How to make the integrated terminal dark?

To use the [Squirrelsong Dark](https://marketplace.visualstudio.com/items?itemName=sapegin.Theme-SquirrelsongDark) theme in the integrated terminal, add the following to your Visual Studio Code config:

```json
{
  "workbench.colorCustomizations": {
    "terminal.ansiBlack":"#352a21",
    "terminal.ansiBlue":"#5d99cb",
    "terminal.ansiBrightBlack":"#6b503c",
    "terminal.ansiBrightBlue":"#64a1d3",
    "terminal.ansiBrightCyan":"#adccc5",
    "terminal.ansiBrightGreen":"#73a15c",
    "terminal.ansiBrightMagenta":"#a08ac2",
    "terminal.ansiBrightRed":"#db7666",
    "terminal.ansiBrightWhite":"#dcd5c0",
    "terminal.ansiBrightYellow":"#e2c54c",
    "terminal.ansiCyan":"#4f9593",
    "terminal.ansiGreen":"#558240",
    "terminal.ansiMagenta":"#7f61b3",
    "terminal.ansiRed":"#ac493e",
    "terminal.ansiWhite":"#c4a389",
    "terminal.ansiYellow":"#e2c54c",
    "terminal.background":"#352a21",
    "terminal.foreground":"#9e8a74",
    "terminalCursor.background":"#352a21",
    "terminalCursor.foreground":"#9e8a74",
    "terminal.selectionBackground": "#41352a",
    "terminal.inactiveSelectionBackground": "#41352a",
    "terminal.findMatchBackground": "#ca5a8366",
    "terminal.findMatchBorder": "#ca5a83",
    "terminal.findMatchHighlightBackground": "#ca5a8366",
    "terminal.findMatchHighlightBorder": "#ca5a83",
    "terminalCommandDecoration.defaultBackground": "#896b56",
    "terminalCommandDecoration.successBackground": "#445536",
    "terminalCommandDecoration.errorBackground": "#6c3b2f",
  },
  // Without this line colors will be washed out
  "terminal.integrated.minimumContrastRatio": 1,
  // Use normal colors for bold text
  "terminal.integrated.drawBoldTextInBrightColors": false,
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
