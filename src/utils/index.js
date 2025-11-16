export const createPageUrl = (pageName) => {
  const pages = {
    'Home': '/',
  };
  return pages[pageName] || '/';
};
