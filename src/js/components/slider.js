const slider = () => {
  const container = document.querySelector(".slider");
  const prev = document.querySelector(".slider__prev");
  const next = document.querySelector(".slider__next");
  const down = document.querySelector(".slider__down");
  const items = document.querySelectorAll(".slider__item");

  let offset = 1;

  const widthOfItem = items[0].scrollWidth;
  const heightOfItem = items[0].scrollHeight;

  const setWidth = (size, offset) => {
    let width = size * offset + "px";
    return (container.style.transform = `translateX(-${width})`);
  };

  const setHeight = (size, offset) => {
    let height = size * offset + "px";
    return (container.style.transform = `translateY(-${height})`);
  };

  next.addEventListener("click", () => {
    offset++;
    if (offset === items.length - 1) offset = 0;
    setWidth(widthOfItem, offset);
  });

  prev.addEventListener("click", () => {
    offset--;

    if (offset <= -1) offset = 0;

    setWidth(widthOfItem, offset);
  });

  down.addEventListener("click", () => {
    offset++;

    if (offset === items.length) offset = 0;
    setHeight(heightOfItem, offset);
  });
};

slider();
export default slider;
