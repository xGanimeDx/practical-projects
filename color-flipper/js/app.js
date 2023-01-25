import { btn, color, colors, getPredifinedColor } from "./utils";

btn.addEventListener("click", () => {
  document.body.style.background = getPredifinedColor(colors);
  color.textContent = getPredifinedColor(colors);
});
