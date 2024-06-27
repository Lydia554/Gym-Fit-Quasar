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
};

export const beforeRouteLeave = function (to, from, next) {
  this.$router.options.scrollBehavior = () => {
    return { x: 0, y: window.scrollY };
  };
  next();
};
