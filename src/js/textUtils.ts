// --------------------------------------------------------
/**
 * * returns "slugified" text.
 * @param text: string - text to slugify
 */
export function slugify(text: string): string {
	return text
		.toString()
		.toLowerCase() // convert to lowercase
		.replace(/\s+/g, "-") // replace spaces with -
		.replace(/[^\w-]+/g, "") // remove all non-word chars
		.replace(/--+/g, "-") // replace multiple dashes with single dash
		.replace(/^-+/, "") // trim dash from start of text
		.replace(/-+$/, ""); // trim dash from end of text
}

/**
 * * returns "humanized" text. runs slugify() and then replaces - with space and upper case first letter of every word, and lower case the rest
 * @param text: string - text to humanize
 */
export function humanize(text: string): string {
	const slugifiedText = slugify(text);
	return (
		slugifiedText
			.replace(/-/g, " ") // replace "-" with space
			// .toLowerCase();
			.replace(
				// upper case first letter of every word, and lower case the rest
				/\w\S*/g,
				(w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(),
			)
	);
}

// --------------------------------------------------------
/**
 * * returns a nicely formatted string of the date passed
 * @param date: string | number | Date - date to format
 */
export function formatDate(date: string | number | Date): string {
	return new Date(date).toLocaleDateString("en-US", {
		timeZone: "UTC",
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}
