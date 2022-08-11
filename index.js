function validURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    // Actual code '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '(([a-z0-9A-Z]\.)*[a-z0-9-]+\.([a-z0-9]{2,24})+(\.co\.([a-z0-9]{2,24})|\.([a-z0-9]{2,24}))|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return Boolean(pattern.test(str));
}

// Available region list
const regions = {
  NA: { cma: 'https://api.contentstack.io', cda: 'https://cdn.contentstack.io', name: 'NA' },
  EU: { cma: 'https://eu-api.contentstack.com', cda: 'https://eu-cdn.contentstack.com', name: 'EU' },
  'AZURE-NA': { cma: 'https://azure-na-api.contentstack.com', cda: 'https://azure-na-cdn.contentstack.com', name: 'AZURE-NA' },
};