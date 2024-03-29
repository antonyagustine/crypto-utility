function validURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '(([a-z0-9A-Z]\\.)*[a-z0-9-]+\\.([a-z0-9]{2,})+(\\.[a-z]{2,}\\.([a-z]{2,})|\\.([a-z]{2,}))|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  )
  return Boolean(pattern.test(str));
}

function hasInvalidFilepathNaming(filepath) {
  const validFilePathRegex = new RegExp(
    "^(\\/[-a-z\\d%_.~+]*)*" + // path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$"
  );

  const matchResult = filepath.match(validFilePathRegex);
  return matchResult === null;
}
// Available region list
const regions = {
  NA: { cma: 'https://api.contentstack.io', cda: 'https://cdn.contentstack.io', name: 'NA' },
  EU: { cma: 'https://eu-api.contentstack.com', cda: 'https://eu-cdn.contentstack.com', name: 'EU' },
  'AZURE-NA': { cma: 'https://azure-na-api.contentstack.com', cda: 'https://azure-na-cdn.contentstack.com', name: 'AZURE-NA' },
};