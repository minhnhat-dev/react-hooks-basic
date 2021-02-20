function buildQuery(url, query) {
    const { page, limit } = query;
    return `${url}?_page=${page}&_limit=${limit}`;
}

export default { buildQuery };
