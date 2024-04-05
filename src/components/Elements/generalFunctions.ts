export function removeQuotesFromKeys(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(removeQuotesFromKeys);
    }

    return Object.keys(obj).reduce((acc, key) => {
        const newKey = key.replace(/"/g, ""); // Remove quotes from key
        acc[newKey] = removeQuotesFromKeys(obj[key]);
        return acc;
    }, {});
}