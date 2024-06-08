export function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')          // Replace spaces with -
        .replace(/[^\w\-]+/g, '')      // Remove all non-word chars
        .replace(/\-\-+/g, '-')        // Replace multiple - with single -
        .replace(/^-+/, '')            // Trim - from start of text
        .replace(/-+$/, '');           // Trim - from end of text
}

export function slugifyLink(text:string, prefix:string = "/") {
    return `${prefix}${slugify(text)}`
}

export function unslugify(slug: string): string {
    return slug
        .split('-')           // Split the slug by hyphens
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize the first letter of each word
        .join(' ');           // Join the words back together with spaces
}