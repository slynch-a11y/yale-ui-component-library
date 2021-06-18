/* eslint-disable no-unused-expressions */
const localPath = 'http://localhost:8080/components/';
const urlList = [
  'accessible-flyout-menu',
  'alert',
  'background-colors',
  'badges',
  'breadcrumbs',
  'buttons',
  'cards',
  'carousel',
  'code',
  'collapse',
  'dropdowns',
  'forms',
  'images',
  'input-group',
  'jumbotron',
  'list-group',
  'media-object',
  'modalDialogs',
  'navs',
  'pagination',
  'progress',
  'spinners',
  'tables',
  'text',
  'toasts',
  'tooltips',
  'typography',
];
const pages = [];
for (let i = 0; i < urlList.length; i++) {
  const currentPage = urlList[i];
  pages.push(localPath + currentPage);
}

// pages.forEach((page) => {
//   describe(page.replace('http://localhost:8080/components/', ''), () => {
//     it('should be accessible', () => {
//       cy.checkPageA11y(page);
//     });
//   });
// });


describe(('http://localhost:8080/components/jumbotron'), () => {
  it('should be accessible', () => {
    cy.checkPageA11y('http://localhost:8080/components/jumbotron');
  });
});