import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const assets = fileURLToPath(new URL("../assets/", import.meta.url));
const pages = ["index.html", "about-me.html", "work.html"];
const readPage = (page) => readFileSync(resolve(assets, page), "utf8");
const plainText = (html) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

for (const page of pages) {
  test(`${page} provides a main landmark and keyboard skip link`, () => {
    const html = readPage(page);
    assert.equal((html.match(/<main\b/g) || []).length, 1);
    assert.match(html, /<main\b[^>]*id="main-content"/);
    assert.match(html, /<a\b[^>]*href="#main-content"[^>]*>Skip to content<\/a>/);
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
  });

  test(`${page} exposes work, about, and résumé in labelled navigation`, () => {
    const html = readPage(page);
    const nav = html.match(/<nav\b[^>]*aria-label="Primary"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
    assert.ok(nav, "Primary navigation must have an accessible label");
    for (const href of ["work.html", "about-me.html", "cv.pdf"]) {
      assert.ok(nav.includes(`href="${href}"`), `${href} must be in the navigation`);
    }
    assert.match(html, /href="mailto:dimitur2204@gmail.com"/);
  });

  test(`${page} keeps local links and fragment destinations valid`, () => {
    for (const [, href] of readPage(page).matchAll(/href="([^"]+)"/g)) {
      if (/^(https?:|mailto:)/.test(href)) continue;
      const [path, fragment] = href.split("#");
      const target = path.startsWith("/")
        ? resolve(assets, path.slice(1) || "index.html")
        : path ? resolve(assets, dirname(page), path) : resolve(assets, page);
      assert.ok(existsSync(target), `${href} must resolve to an existing asset`);
      if (fragment) {
        assert.ok(readFileSync(target, "utf8").includes(`id="${fragment}"`), `${href} must have a destination`);
      }
    }
  });
}

test("the homepage explains the speciality before visitors choose a page", () => {
  const html = readPage("index.html");
  const heading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1];
  assert.ok(heading, "The homepage needs an actual page heading");
  assert.match(plainText(heading), /I build the layer other developers build on\./);
  assert.match(html, /work.html#uniwise/);
  assert.match(html, /work.html#podkrepi/);
  assert.match(plainText(html), /10 microfrontends/);
  assert.match(plainText(html), /73 merged/);
});

test("the homepage uses native navigation without animation dependencies", () => {
  const html = readPage("index.html");
  assert.doesNotMatch(html, /<script[^>]+(?:gsap|particles\.js|cursor\.js|animation\.js)/);
  assert.doesNotMatch(readFileSync(resolve(assets, "css/style.css"), "utf8"), /cursor:\s*none/);
});

test("work sections have headings rather than visual-only labels", () => {
  const html = readPage("work.html");
  for (const title of ["Experience", "Projects", "Education", "Skills"]) {
    assert.match(html, new RegExp(`<h2[^>]*>${title}</h2>`));
  }
});
