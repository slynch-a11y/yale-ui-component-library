module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('dist/css');
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
