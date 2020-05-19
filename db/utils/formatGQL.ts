export default function formatGQL(query: TemplateStringsArray) {
    if (query.length > 1) {
        throw new Error('Must not use template literals in formatGQL!');
    }
    return query.join('').replace(/\s+/g, ' ').trim();
}
