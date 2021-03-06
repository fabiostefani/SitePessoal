module.exports = {
    source: 'src/content',
    destination: 'dist',
    assets: {
      source: 'src/assets',
      destination: '.'
    },
    filemetadata: [
      {
        pattern: 'articles/*.md',
        metadata: {
          collection: 'articles',
          layout: 'article.html'
        }
      }
    ],
    collections: {
      articles: {
        pattern: 'articles/*.md',
        sortBy: 'date',
        reverse: false
      },
      homeArticles: {
        pattern: 'articles/*.md',
        sortBy: 'date',
        reverse: false,
        limit: 3
      }
    },
    dateFormatter: {
      format: 'MMM DD, YYYY',
    },
    permalinks: {
      linksets: [{
        pattern: ':slug',
        match: {
          collection: 'articles'
        }
      }]
    },
    layouts: {
      engine: 'handlebars',
      directory: 'src/layouts',
      partials: {
        footer: '../partials/footer',
        header: '../partials/header',
        navbar: '../partials/navbar'
      }
    },
    inPlace: {
      directory: 'src/layouts',
      engine: 'handlebars'
    },
    serve: {
      port: process.env.PORT || 8000,
      verbose: true
    },
    watch: {
      paths: {
        "${source}/**/*": true,
        "src/assets/**/*": "**/*",
        "src/content/**/*": "**/*",
        "src/layouts/**/*": "**/*.html",
        "src/partials/**/*": "**/*.html"
      }
    }
  };
  