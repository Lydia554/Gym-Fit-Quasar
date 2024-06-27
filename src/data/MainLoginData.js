export default function () {
  return {
    buttonTitle: "Register a new membership",
    MainLoginUrl: `${this.$serverUrl}MainLogin`,
    signInText: "Sign in to start your session",
    user: {
      email: "",
      password: "",
      remember: false,
    },
    forgotBtn: {
      label: "I forgot my password",
      link: "#",
    },
  };
}
