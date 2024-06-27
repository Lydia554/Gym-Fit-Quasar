import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";

export default async ({ app }) => {
  onMounted(() => {
    AOS.init();
  });
};

module.exports = function (/* ctx */) {
  return {
    // ...
    boot: [
      "aos",
      // ...
    ],
    // ...
  };
};
