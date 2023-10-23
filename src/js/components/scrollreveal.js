const scrolls = () => {
  const slideUp = {
    distance: "150%",
    origin: "bottom",
    opacity: null,
    delay: 250,
    easing: "ease-in",
    interval: 600,
  };

  const slideRight = {
    distance: "150%",
    origin: "right",
    opacity: 0.1,
    delay: 500,
    easing: "ease-out",
    interval: 600,
  };

  ScrollReveal().reveal(".motto", slideUp);
  // ScrollReveal().reveal([".history", ".motto", ".arrangements"], {
  //   delay: 250,
  // });

  ScrollReveal().reveal(".arrangements__item", slideUp);

  ScrollReveal().reveal(".activities__item", slideRight);
};

export default scrolls;
