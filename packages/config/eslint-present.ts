module.exports = {
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-debugger": "error",
      "eqeqeq": "error",
      "@typescript-eslint/no-unused-vars": [
        "error", 
        { "argsIgnorePattern": "^_" }
      ]
    },
    settings: {
      // Add shared settings here if needed
    }
  };