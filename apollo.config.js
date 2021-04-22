module.exports = {
  includes: ["./src/**/*.{tsx,ts}"],
  tagName: "gql",
  client: {
    service: {
      name: "andand-backend",
      url: "http://localhost:4000/graphql",
    },
  },
};
