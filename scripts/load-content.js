// Reads everything in content/: site.yml (settings) and one .md file per section.
// Used by the Eleventy data files and by the content check.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import yaml from "js-yaml";

export const CONTENT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../content");

export function loadSite() {
  return yaml.load(fs.readFileSync(path.join(CONTENT_DIR, "site.yml"), "utf8")) || {};
}

export function loadSections() {
  const out = {};
  for (const file of fs.readdirSync(CONTENT_DIR).sort()) {
    if (!file.endsWith(".md")) continue;
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    // Pass an options object so gray-matter doesn't serve a stale cached copy during --serve.
    const { data, content } = matter(raw, {});
    out[file.replace(/\.md$/, "")] = { ...data, body: content.trim(), _file: file };
  }
  return out;
}
