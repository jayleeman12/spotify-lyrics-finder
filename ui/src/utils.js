export function parseUrl(urlHash) {
    const result = {};
    urlHash.substr(1).split('&').forEach(param => {
        var parts = param.split('=');
        result[parts[0]] = parts[1];
    })
    return result;
}