export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[—–]/g, "-")           // Replace em-dash and en-dash with -
    .replace(/&/g, "and")            // Replace & with and
    .replace(/\s+/g, "-")            // Replace spaces with -
    .replace(/[^\w\-]+/g, "")        // Remove all non-word chars
    .replace(/\-\-+/g, "-")          // Replace multiple - with single -
    .replace(/^-+|-+$/g, "");        // Trim leading and trailing dashes
}

export function matchSlug(itemText: string, slug: string): boolean {
  if (!itemText || !slug) return false;
  const s1 = slugify(itemText);
  const s2 = slugify(slug);
  if (s1 === s2) return true;

  // Backwards compatibility aliases
  if (s2 === "polymer-column-drain-black-series" && s1 === "polymer-column-drain-industrial-marine-series") {
    return true;
  }
  return false;
}
