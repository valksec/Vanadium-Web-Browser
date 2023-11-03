const explicitWebsites = [
  "seegore.com",
  "goresee.com",
  "goregrish.com",
  "bestgore.com",
  "manbeef.com",
  "ogrish.com",
  "pornhub.com",
  "xhamster.com",
  "xvideos.com",
  "xnxx.com",
  "youporn.com",
  "porn.com",
  "redtube.com",
  "porn300.com",
  "pornhat.com",
  "porn-plus.com",
  "eporner.com",
  "xnxx2.com",
  "fuq.com",
  "xnxx.tv",
  "4porn.com",
  "redporn.porn",
];

const currentUrl = window.location.href;

if (isExplicitWebsite(currentUrl)) {
  blockWebsiteAccess();
}

function isExplicitWebsite(url) {
  return explicitWebsites.some(explicitUrl => url.includes(explicitUrl));
}

function blockWebsiteAccess() {
   window.location.href = "about:blank";
}
