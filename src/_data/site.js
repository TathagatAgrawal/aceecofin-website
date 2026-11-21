// Exposes content/site.yml to templates as `site`.
import { loadSite } from "../../scripts/load-content.js";

export default function () {
  return loadSite();
}
