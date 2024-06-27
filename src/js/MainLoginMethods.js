export default {
  userMainLogin: function () {
    this.$axios
      .post(this.MainLoginUrl, this.user)
      .then((response) => {
        if (response.data.status == 200) {
          localStorage.setItem("usertoken", response.data.token);
          this.user.email = this.user.password = "";
          this.$root.successMsg("MainLogin Successfully !!!");
          this.$router.push({ name: "admin.dashboard" });
        } else {
          this.$root.warningMsg(response.data.error);
        }
      })
      .catch(() => {
        this.$root.errorMsg();
      })
      .finally(() => {
        console.log("loading false");
      });
  },
};
