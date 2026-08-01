export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")           // Replace spaces with -
    .replace(/&/g, "and")           // Replace & with and
    .replace(/[^\w\-]+/g, "")       // Remove all non-word chars
    .replace(/\-\-+/g, "-");        // Replace multiple - with single -
}

export function matchSlug(itemText: string, slug: string): boolean {
  if (!itemText || !slug) return false;
  return slugify(itemText) === slugify(slug);
}
