# Changelog

### 3.3.0

- Add High Contrast theme (light, no italics)

## 3.0.16

- Tweak notebook editor cell background to increase contrast.

## 3.0.15

- Fix missing CSS property/value styles.

## 3.0.14

- Fix missing theme files and readme.

## 3.0.13

- Remove unnecessary files from the package.

## 3.0.12

- Revert recent find match background change because it obscures selection.

## 3.2.11

- Add new action list colors.

## 3.2.10

- Correctly highlight JavaScript `of` operator.

## 3.2.9

- Fix Mdx highlighting.

## 3.2.8

- Improve readability of braces in JSX.
- Tweak color of JSDoc braces.

## 3.2.7

- Make the active find match more readable. VS Code selects the current line, so the text contrast becomes very low. Using a solid color instead of a semi-transparent fixes the issue.

## 3.2.6

- Darken Markdown headings to make them more noticeable.

## 3.2.5

- Add colors for pull request badges.

## 3.2.4

- Tweak colors for folds.

## 3.2.3

- Tweak colors for CSS at-rules.

## 3.2.2

- Change color of HTML entities to make them less distracting.

## 3.2.1

- Redo regular expression highlighting to make less distracting and more consistent.
- Make the yellow color a shade darker.

## 3.2.1

- Add input option hover background color.

## 3.2.0

- Tweak light contrast colors: make them less saturated, and allow lower contrast (3:1 instead of 4:1) for orange and yellow contrast colors.
- Define panel section header background color.

## 3.1.10

- Update the dark terminal colors.

## 3.1.9

- Add colors for conflicts in merge editor.
- Support Node.js’ `import.meta`.

## 3.1.8

- Show classes the same ways as functions.
- Show enum properties the same way as object properties.
- Don't show generic types in bold in some cases.

## 3.1.7

- Fix a few inconsistencies between JSX in Markdown and TSX.

## 3.1.6

- Fix a few inconsistencies between JSX and TSX.

## 3.1.5

- Improve Markdown styles a bit.
- Fix indent guides.
- Add minimap colors.
- Add inline hints colors.

## 3.1.4

- Make links markup in Markdown lighter

## 3.1.3

- Make diff inserted/removed indicators on the scrollbar more noticeable

## 3.1.2

- Fix dark terminal theme colors

## 3.1.1

- Revert changes to squiggles’ colors (errors, warning, etc.): they shouldn’t be so dark

## 3.1.0

- Add light theme with dark terminal (`Squirrelsong Light (Dark Terminal)`)
- Add colors for testing
- Add colors for debugging
- Make scrollbar slider colors a bit softer

## 3.0.2

One more step to create the best low-contrast, non-distracting and neurodiverse-friendly theme that is comfortable for all-day coding without sensory overstimulation, and perfect for developers with ADHD, autism or highly sensitive people (HSP). No bright colors, no super high contrast, no distractions. Soft colors but still enough legibility for different part of the code and UI.

- New grayscale palette
  - All colors have the same hue with a subtle blueish tint, saturation is slightly higher for light colors
  - Colors look more cohesive without jumps in hue, saturation and lightness
  - Add missing shades
- Slightly adjusted color palette
  - All shades of the same color have the same hue
  - Adjust some contrast and base colors to have more similar lightness and saturation
- Overall, colors are more cohesive
- Better readability and visual hierarchy in the UI, and at the same time fewer distractions
- Add loooooots of missing colors to the Visual Studio theme

[See screenshots](https://github.com/sapegin/squirrelsong/pull/12)

## 2.0.14

- Make primary button colors more subtle
- Make diff editor colors more subtle
- Make active panel tab titles more distinguishable

## 2.0.13

- Make badge colors semitransparent so they look better on different backgrounds

## 2.0.12

- More subtle badge colors

## 2.0.11

- Make the search highlight color semi-transparent to avoid it from swallowing selection

## 2.0.10

- Fix incorrect colors
- Fix required semi-transparent colors

## 2.0.9

- Add terminal colors.

## 2.0.8

- Tweak secondary colors a bit.
- Add symbol icon and light bulb colors.

## 2.0.7

- Softer focus border, tweak activity bar colors.

## 2.0.6

- Add progress bar and extension page colors.

## 2.0.5

- Style title bar and activity bar.
- Add bracket highlight colors.

## 2.0.4

- A few more UI color adjustments.

## 2.0.3

- Fix a few more bright UI colors.

## 2.0.2

- Significantly more UI color adjustments.

## 2.0.1

- Fix the screenshot in the readme.

## 2.0.0

Almost complete rebuild of the theme, though most of the colors are the same.

- Better code readability: fewer bright colors (red, orange) but more color variation (fewer long pieces of code of the same color), introduction of bold and italic.
- Lots of customizations for different languages to improve readability and to make highlighting more consistent between different languages (for example, “this” in TypeScript is styled the same way as “$this” in PHP and “self” in Python or Rust, variables are styled the same in all languages, and HTML is styled the same way as JSX).
- Much better and consistent UI colors.

## 1.0.1

- Fix JSON syntax (to make it work with [Shiki](https://shiki.matsu.io/)
- Add license file

## 1.0.0

- Fix invisible selection inside word highlight issue (https://github.com/sapegin/squirrelsong/issues/1)
