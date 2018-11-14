let link = null;

function getPathname(url) {
  if (!link) {
    link = document.createElement('a');
  }
  link.href = url;
  let { pathname } = link;
  if (pathname && pathname[0] !== '/') {
    pathname = `/${pathname}`;
  }
  return pathname;
}


export default getPathname;
