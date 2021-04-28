module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/dist/css/yale-ui.css',
  });
  eleventyConfig.addPassthroughCopy('dist/css');
  eleventyConfig.addPassthroughCopy('docs/assets/css');
  eleventyConfig.addPassthroughCopy('docs/assets/img');

  eleventyConfig.setTemplateFormats('html,njk,md');
  return {
    passthroughCopy: true,
    dir: {
      input: 'docs',
      output: '_site',
      include: 'includes',
    },
  };
};
