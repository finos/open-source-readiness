module.exports={
  "title": "FINOS Open Source Readiness",
  "tagline": "OVERCOMING OBSTACLES TO OPEN SOURCE",
  "url": "https://osr.finos.org/",
  "baseUrl": "/",
  "trailingSlash": false,
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
        "alt": "FINOS Logo",
        "src": "/img/finos_light.svg",
        "srcDark": "/img/finos_dark.svg"
      },
      "items": [
		  {
			  "label": "Getting Started",
			  "to": "/GettingStarted",
			  "position": "right",
		  },
		  {
			  "label": "Open Source Readiness",
			  "to": "/OpenSourceReadiness",
			  "position": "right",
		  },
		  {
			  "label": "InnerSource",
			  "to": "/InnerSource",
			  "position": "right",
		  },
		  {
			  "label": "Training",
			  "to": "/Training",
			  "position": "right",
		  },
		  {
			  "label": "Strategy",
			  "to": "/Strategy",
			  "position": "right",
		  }
      ]
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "links": [
        {
          "title": "RESOURCES",
          "items": [
            {
              "label": "Getting Started",
              "to": "/GettingStarted"
            },
            {
              "label": "Presentations",
              "to": "Presentations"
            },
            {
              "label": "Training",
              "to": "/Training"
            },
            {
              "label": "InnerSource",
              "to": "/InnerSource"
            },            
          ]
        },
         {
          "title": "DOCS",
          "items": [
            {
              "label": "Artifacts",
              "to": "/docs/bok/Artifacts/Introduction"
            },
            {
              "label": "Activities",
              "to": "docs/bok/Activities/Introduction"
            },
            {
              "to": "docs/bok/Matutity/Introduction",
              "label": 'Maturity',
            },
            {
              "to": "docs/bok/Roles/Introduction",
              "label": 'Roles',
            },
            {
              "to": "docs/bok/Regulations/Introduction",
              "label": 'Regulations',
            }
          ]
        },
         {
          "title": "EVENTS",
          "items": [
            {
              "label": "Meetings",
              "to": "docs/osr-resources"
            },
            {
              "label": "FINOS Events",
              "to": "https://www.finos.org/hosted-events"
            }
          ]
        },
        {
          "title": "COMMUNITY",
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
          "title": "UPDATES",
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
      "copyright": "<span class=\"footer-copyright\">Copyright © 2023 - FINOS</span>",
      "logo": {
        "src": "/img/finos_light.svg",
        "srcDark": "/img/finos_dark.svg",
        "alt": "FINOS Logo",
        "width": 50
      }
    }
  }
}
