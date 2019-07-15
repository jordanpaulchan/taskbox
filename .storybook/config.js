import { configure, addParameters, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import requireContext from "require-context.macro";
import "react-chromatic/storybook-addon";

import "../src/index.css";

addDecorator(withA11y);
addParameters({
  options: {
    name: "CRA Taskbox",
    isFullscreen: false,
    showPanel: true
    // more configuration here
  }
});

const req = requireContext("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
