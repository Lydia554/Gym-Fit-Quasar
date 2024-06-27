export const mounted = function () {
  const observerSlideUp = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-up");
      }
    });
  });

  this.$nextTick(() => {
    document.querySelectorAll(".slide-up-section").forEach((section) => {
      observerSlideUp.observe(section);
    });
  });
};

export const beforeRouteLeave = function (to, from, next) {
  this.$router.options.scrollBehavior = () => {
    return { x: 0, y: window.scrollY };
  };
  next();
};
