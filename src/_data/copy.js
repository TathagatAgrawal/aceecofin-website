// Exposes content/*.md to templates as `copy.<file name>`, e.g. copy.hero.heading, copy.about.body.
import { loadSections } from "../../scripts/load-content.js";

export default function () {
  return loadSections();
}
