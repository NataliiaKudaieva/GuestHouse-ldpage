const scrolls = () => {
  ScrollReveal().reveal(".intro", { delay: 250 });
  ScrollReveal().reveal([".history", ".motto", ".arrangements"], {
    delay: 250,
  });
  ScrollReveal().reveal(".motto", { delay: 250 });
  ScrollReveal().reveal(".arrangements", { delay: 250 });
};

export default scrolls;
