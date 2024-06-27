export const mounted = function () {
  const observerZoomIn = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("zoom-in");
      }
    });
  });

  document.querySelectorAll(".zoom-in-section").forEach((section) => {
    observerZoomIn.observe(section);
  });

  const observerAppear = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
      }
    });
  });

  document.querySelectorAll(".appear-section").forEach((section) => {
    observerAppear.observe(section);
  });

  const observerSlideUp = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-up");
      }
    });
  });

  document.querySelectorAll(".slide-up-section").forEach((section) => {
    observerSlideUp.observe(section);
  });
};

export const beforeRouteLeave = function (to, from, next) {
  this.$router.options.scrollBehavior = () => {
    return { x: 0, y: window.scrollY };
  };
  next();
};
