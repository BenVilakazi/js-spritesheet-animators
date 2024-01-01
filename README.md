# spritesheet-animate
[![npm version](https://badge.fury.io/js/spritesheet-animate.svg)](https://badge.fury.io/js/spritesheet-animate)
# Demo
"https://spritesheetanimator.netlify.app/"
# Usage
```js
import { animateSpritesheet, METHODS } from "./animateSpritesheet.js";
const spritesheet = document.getElementById("spritesheet");

const settings = {
  path: "./spritesheet.png",
  mobile_path: "./spritesheet_small.png",
  method: METHODS.auto,
  sprite_width: 500,
  sprite_height: 500,
  sprite_width_mobile: 300,
  sprite_height_mobile: 300,
  sprites_per_line: 7,
  number_of_sprites: 47,
};

const animation = animateSpritesheet(spritesheet, settings);
```

## `animateSpritesheet`
| Parameter  | Default              | Type          | Description                                             |
|------------|----------------------|---------------|---------------------------------------------------------|
| `element`  | null                 | `HTMLElement` | The target element you want to display the animation in |
| `settings` | see `settings` below | `Object`      | Settings for initializing the animation                 |

### `settings`
| Field                  | Default  | Type                | Description                                                                                     |
|------------------------|----------|---------------------|-------------------------------------------------------------------------------------------------|
| `path`                 | null     | `string`            | Path to the spritesheet                                                                         |
| `mobile_path`          | null     | `string (optional)` | Path to the mobile version of the spritesheet (should be the same spritesheet, but scaled down) |
| `method`               | `"auto"` | `string`            | `"auto"`: autoplay the animation<br>`"onScroll"`: animate on scroll                             |
| `sprite_width`         | null     | `number`            | Width of an individual sprite (px)                                                              |
| `sprite_height`        | null     | `number`            | Height of an individual sprite (px)                                                             |
| `sprite_width_mobile`  | null     | `number`            | Width of an individual sprite in the mobile spritesheet (if provided)                           |
| `sprite_height_mobile` | null     | `number`            | Height of an individual sprite in the mobile spritesheet (if provided)                          |
| `sprites_per_line`     | null     | `number`            | Number of sprites in each line of the spritesheet                                               |
| `number_of_sprites`    | null     | `number`            | Total number of sprites in the spritesheet                                                      |
| `fps`                  | 24       | `number`            | Frames per second of the animation                                                              |
| `onScrollSensitivity`  | 0.1      | `number`            | Number greater than 0. Increase this if you want the animation to play faster on scroll         |
