import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#f8f8ff",
  "--my-black": "#1a1a1a",
  "--mp-dev-brand": "#0d6efd",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

export default buildLegacyTheme({
  // base theme colors
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  // brand
  "--brand-primary": props["--mp-dev-brand"],

  // Default button
  "--default-button-color": "white",
  "--default-button-primary-color": props["--mp-dev-brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  // State
  "--state-info-color": props["--mp-dev-brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  // Navbar
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--mp-dev-brand"],
});
