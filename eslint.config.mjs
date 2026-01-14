import js from "@eslint/js";
import globals from "globals";

export default js.flatConfig({
  globals: {
    ...globals.node,
  },
  rules: {
    // règles de base, tu peux ajouter/modifier selon ton style
    "no-unused-vars": "warn",
    "no-undef": "error",
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  },
});
