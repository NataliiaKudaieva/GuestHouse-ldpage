const slider = () => {
  const container = document.querySelector(".slider");
  const prev = document.querySelector(".slider__prev");
  const next = document.querySelector(".slider__next");
  const item = document.querySelectorAll(".slider__item");

  let offset = 1;

  const sizeOfItem = item[0].offsetWidth;

  const setWidth = (size, offset) => {
    let width = size * offset + "px";
    return (container.style.transform = `translateX(-${width})`);
  };

  next.addEventListener("click", () => {
    offset++;
    if (offset === item.length - 1) offset = 0;
    setWidth(sizeOfItem, offset);
  });

  prev.addEventListener("click", () => {
    offset--;

    if (offset <= -1) offset = 0;

    setWidth(sizeOfItem, offset);
  });
};

slider();
export default slider;
