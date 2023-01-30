module.exports={
  "title": "FINOS Open Source Readiness",
  "tagline": "OVERCOMING OBSTACLES TO OPEN SOURCE",
  "url": "https://open-source-readiness.netlify.app/",
  "baseUrl": "/",
  "organizationName": "FINOS",
  "projectName": "open-source-readiness",
  "noIndex": true,
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon/favicon-finos.ico",
  "customFields": {
    "repoUrl": "https://github.com/finos/open-source-readiness"
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "sidebars.json"
        },
        "blog": {},
        "theme": {
          "customCss": "./static/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "FINOS Open Source Readiness",
      "logo": {
        "src": "img/osr-icon-2019.png"
      },
      "items": [
        {
          "to": "docs/meetings",
          "label": "MEETINGS",
          "position": "left"
        },
        {
          "to": "docs/osr-resources/osr-resources",
          "label": "RESOURCES",
          "position": "left"
        },
        {
          "to": "docs/about",
          "label": "ABOUT",
          "position": "left"
        }
      ]
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Twitter",
              "to": "https://twitter.com/FinosFoundation"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023 Open Source Readiness - FINOS",
      "logo": {
        "src": "img/osr-icon-2019.png"
      }
    }
  }
}