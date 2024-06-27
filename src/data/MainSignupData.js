export default function () {
  return {
    user: {
      name: null,
      email: null,
      password: null,
      retypePassword: null,
      agree: false,
    },
    registerMessage: "Register a new membership",
    orMessage: "- OR -",
    accountMessage: "Already have an account?",
  };
}
