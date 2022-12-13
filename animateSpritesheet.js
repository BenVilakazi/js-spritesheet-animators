export const METHODS = {
  auto: "auto",
  onScroll: "onScroll",
};

export const animateSpritesheet = (element, settings) => {
  const {
    path,
    mobile_path,
    method = METHODS.auto,
    sprite_width,
    sprite_height,
    sprite_width_mobile,
    sprite_height_mobile,
    sprites_per_line,
    number_of_sprites,
    fps = 24,
    onScrollSensitivity = 0.1,
  } = settings;

  const lines = Math.ceil(number_of_sprites / sprites_per_line);
  let intervalCounter = 0;
  let intervalSpeed = 1000 / fps;
  let interval;
  let width = sprite_width;
  let height = sprite_height;
  let img_path = path;
  let positions = [];

  if (mobile_path && sprite_width_mobile && sprite_height_mobile) {
    const isMobile = window.matchMedia("(max-width: 1024px)");
    if (isMobile.matches) {
      width = sprite_width_mobile;
      height = sprite_height_mobile;
      img_path = mobile_path;
    }
    isMobile.addEventListener("change", () => {
      clearInterval(interval);
      document.removeEventListener("scroll", onWindowScroll);
      if (isMobile.matches) {
        width = sprite_width_mobile;
        height = sprite_height_mobile;
        img_path = mobile_path;
      } else {
        width = sprite_width;
        height = sprite_height;
        img_path = path;
      }
      init();
      setMethod(document.querySelector("form")?.querySelector("input:checked")?.id || method);
    });
  }

  const onWindowScroll = () => {
    const index = parseInt((window.scrollY * onScrollSensitivity) % number_of_sprites);
    element.style.backgroundPosition = `${positions[index][0]}px ${positions[index][1]}px`;
  };

  const onInterval = () => {
    if (intervalCounter >= number_of_sprites) {
      intervalCounter = 0;
    }
    element.style.backgroundPosition = `${positions[intervalCounter][0]}px ${positions[intervalCounter][1]}px`;
    intervalCounter++;
  };

  function setMethod(method) {
    switch (method) {
      case METHODS.onScroll:
        clearInterval(interval);
        document.addEventListener("scroll", onWindowScroll);
        break;
      case METHODS.auto:
        document.removeEventListener("scroll", onWindowScroll);
        interval = setInterval(onInterval, intervalSpeed);
        break;
      default:
        break;
    }
  }

  function init() {
    if (element) {
      element.style.width = width + "px";
      element.style.height = height + "px";
      element.style.backgroundImage = `url(${img_path})`;
      element.style.backgroundPosition = "0px 0px";

      let line_counter = 0;
      let sprite_position = 0;
      positions = [];

      for (let i = 0; i < number_of_sprites; i++) {
        let x = sprite_position * width * -1;
        let y = line_counter * height * -1;
        positions.push([x, y]);
        if (sprite_position === sprites_per_line - 1) {
          sprite_position = 0;
          if (line_counter === lines - 1) {
            line_counter = 0;
          } else {
            line_counter++;
          }
        } else {
          sprite_position++;
        }
      }
    }
  }
  init();
  setMethod(method);

  return {
    setMethod,
  };
};
