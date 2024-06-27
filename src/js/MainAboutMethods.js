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

export const methods = {
  nextSlide() {
    if (this.currentSlide < this.testimonialGroups.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // go back to the first slide if it's the last slide
    }
  },
  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.testimonialGroups.length - 1; // go to the last slide if it's the first slide
    }
  },
};

export const computed = {
  testimonialGroups() {
    let groups = [];
    for (let i = 0; i < this.testimonials.length; i += 3) {
      groups.push(this.testimonials.slice(i, i + 3));
    }
    return groups;
  },
};
