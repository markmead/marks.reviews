module.exports = {
  siteName: 'Marks Reviews',
  siteUrl: 'https://marks.reviews',
  icon: './src/favicon.svg',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Review',
        path: './src/reviews/*.md',
        route: '/:path',
      },
    },
    {
      use: 'gridsome-plugin-robots',
      options: {
        host: 'https://marks.reviews',
        sitemap: 'https://marks.reviews/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Review',
        feedOptions: {
          title: 'Marks Reviews',
          feed_url: 'https://marks.reviews/rss.xml',
          site_url: 'https://marks.reviews',
        },
        feedItemOptions: (node) => ({
          title: node.title,
          url: 'https://marks.reviews' + node.path,
          date: node.date,
        }),
        output: {
          dir: './static',
          name: 'rss.xml',
        },
      },
    },
    { use: '@gridsome/plugin-sitemap' },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss')],
      },
    },
  },
}
