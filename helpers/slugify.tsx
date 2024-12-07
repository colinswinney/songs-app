
/**
 * Slugify a string.
 *
 * e.g. to convert a title to a URL slug.
 *
 * @param {string} str The string to slugify.
 * @returns {string}   The slugified string.
 */
export function slugify(str: string): string {

	// Trim leading/trailing whitespace.
	str = str.replace(/^\s+|\s+$/g, "");
	// Convert to lowercase.
	str = str.toLowerCase();

	str = str
		// Replace any non-alphanumeric characters with nothing (i.e. remove them).
		.replace(/[^a-z0-9 -]/g, "")
		// Replace one or more spaces with a single hyphen.
		.replace(/\s+/g, "-")
		// Replace one or more hyphens with a single hyphen.
		.replace(/-+/g, "-");

	return str;
}
