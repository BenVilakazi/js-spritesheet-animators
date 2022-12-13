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

document.querySelector("form").addEventListener("change", (e) => {
  animation.setMethod(e.target.id);
});
