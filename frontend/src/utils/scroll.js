export const scrollToSection = (sectionId, navbarHeight = 64) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const sectionTop = section.offsetTop - navbarHeight;
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
};