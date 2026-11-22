import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  // Markdown: no raw HTML from content files, smart quotes, only explicit links.
  const md = markdownIt({ html: false, linkify: true, typographer: true });
  md.linkify.set({ fuzzyLink: false, fuzzyEmail: false });

  // External links open in a new tab and don't leak the opener.
  const renderLinkOpen =
    md.renderer.rules.link_open ||
    ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const href = tokens[idx].attrGet("href") || "";
    if (/^https?:\/\//i.test(href)) {
      tokens[idx].attrSet("target", "_blank");
      tokens[idx].attrSet("rel", "noopener");
    }
    return renderLinkOpen(tokens, idx, options, env, self);
  };
  eleventyConfig.setLibrary("md", md);

  // {{ text | md | safe }} for paragraphs, {{ text | mdInline | safe }} for one-line fields.
  eleventyConfig.addFilter("md", (s) => (s ? md.render(String(s)) : ""));
  eleventyConfig.addFilter("mdInline", (s) => (s ? md.renderInline(String(s)) : ""));
  eleventyConfig.addFilter("digits", (s) => String(s || "").replace(/\D/g, ""));
  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets", "src/CNAME": "CNAME" });
  eleventyConfig.addWatchTarget("./content/");
  eleventyConfig.addWatchTarget("./src/assets/");

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
  };
}
