import { btn, color, hex, getHexColor } from "./utils";

btn.addEventListener("click", () => {
  document.body.style.background = getHexColor(hex);
  color.textContent = getHexColor(hex);
});
