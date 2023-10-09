const slider = () => {
  const container = document.querySelector(".slider");
  const prev = document.querySelector(".slider__prev");
  const next = document.querySelector(".slider__next");
  const down = document.querySelector(".slider__down");
  const item = document.querySelectorAll(".slider__item");

  let offset = 1;

  const widthOfItem = item[0].clientWidth;
  const heightOfItem = item[0].clientHeight;

  console.log(heightOfItem);
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
    if (offset === item.length - 1) offset = 0;
    setWidth(widthOfItem, offset);
  });

  prev.addEventListener("click", () => {
    offset--;

    if (offset <= -1) offset = 0;

    setWidth(widthOfItem, offset);
  });

  down.addEventListener("click", () => {
    offset++;
    if (offset === item.length - 1) offset = 0;
    setHeight(heightOfItem, offset);
  });
};

slider();
export default slider;
