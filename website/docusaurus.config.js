module.exports={
  "title": "FINOS Open Source Readiness",
  "tagline": "OVERCOMING OBSTACLES TO OPEN SOURCE",
  "url": "https://osr.finos.org/",
  "baseUrl": "/",
  "organizationName": "FINOS",
  "projectName": "open-source-readiness",
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
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": false,
          "path": "../docs",
          "sidebarPath": "sidebars.json",
          "editUrl": "https://github.com/finos/open-source-readiness/edit/main/docs"
        },
        "blog": {},
        "theme": {
          "customCss": "src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [
    './src/plugin/category-listing'
  ],
  "themeConfig": {
    "algolia": {
      "appId": "LOYCC7X3U6",
      "apiKey": process.env.ALGOLIA_API_KEY ? process.env.ALGOLIA_API_KEY : "none",
      "indexName": "osr-finos",
    },
    "navbar": {
      "title": "FINOS Open Source Readiness",
      "logo": {
        "alt": "Open Source Readiness Logo",
        "src": "img/osr-icon-2019.png"
      },
      "items": [
      ]
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "OSR Resources",
              "to": "docs/osr-resources"
            },
            {
              "label": "Body of Knowledge",
              "to": "docs/bok/Body-of-Knowledge"
            },
            {
              "to": "https://survey.osmm.finos.org/551476",
              "label": 'Open Source Maturity Model Survey',
              "position": "left"
            }
          ]
        },
        {
          "title": "FINOS",
          "items" : [
            {
              "label": "FINOS Website",
              "to": "https://www.finos.org"
            },
            {
              "label": "Community Microsite",
              "to": "https://community.finos.org"
            },
            {
              "label": "Community Governance",
              "to": "https://www.finos.org/governance"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "html": "<a href=\"https://github.com/finos/open-source-readiness\"><img src=\"https://img.shields.io/github/stars/finos/open-source-readiness?label=Open%20Source%20Readiness&style=social\" /></a>"
            },
            {
              "html": "<a href=\"https://twitter.com/FINOSFoundation\"><img src=\"https://img.shields.io/twitter/follow/FinosFoundation?style=social\" ></a>"
            },
            {
              "label": "LinkedIn",
              "to": "https://www.linkedin.com/company/finosfoundation/"
            }
          ]
        }
      ],
      "copyright": "<span class=\"footer-strap\">Proud member of the Fintech Open Source Foundation</span><br/><br/><span class=\"footer-copyright\">Copyright © 2023 Open Source Readiness - FINOS</span>",
      "logo": {
        "src": "img/finos_wordmark.svg",
        "alt": "FINOS Logo",
        "width": 50
      }
    }
  }
}