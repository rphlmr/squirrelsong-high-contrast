# Squirrelsong Dark Theme for [WezTerm](https://wezfurlong.org/wezterm/index.html)

![Squirrelsong dark terminal color theme](./screenshot.png)

## Installation from GitHub

1. Copy the [squirrelsong-dark.lua](Squirrelsong%20Dark.lua) to `~/.config/wezterm/`.

2. Update your WezTerm config, `~/.wezterm.lua`, so it looks something like this:

```lua
local wezterm = require 'wezterm'
local config = wezterm.config_builder()

-- Colors
local colors = require 'squirrelsong-dark'
config.colors = colors

config.window_frame = {
	-- Fancy tab bar
	active_titlebar_bg = '#574131',
	inactive_titlebar_bg = '#352a21',
}

-- Command Palette
config.command_palette_bg_color = "#44382D"
config.command_palette_fg_color = "#c4a389"

return config
```
