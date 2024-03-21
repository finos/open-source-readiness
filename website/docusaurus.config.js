module.exports={
  "title": "FINOS",
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
        },
	"gtag": {
          "trackingID": "G-FK3GN7DZ2J"
        }
      }
    ]
  ],
  "plugins": [
    './src/plugin/category-listing',
    './src/plugin/checklist-listing',
    
  ],
  "themeConfig": {
    "algolia": {
      "appId": "LOYCC7X3U6",
      "apiKey": process.env.ALGOLIA_API_KEY ? process.env.ALGOLIA_API_KEY : "none",
      "indexName": "osr-finos",
    },
    "navbar": {
      "title": "FINOS",
      "logo": {
        "alt": "FINOS Logo",
        "src": "/img/finos_light.svg",
        "srcDark": "/img/finos_dark.svg"
      },
      "items": [
		  {
			  "label": "Open Source Readiness",
			  "to": "/docs/bok/Introduction",
			  "position": "right",
		  },
		  {
			  "label": "InnerSource",
			  "to": "/docs/InnerSource/Introduction",
			  "position": "right",
		  },
		  {
			  "label": "Strategy",
			  "to": "/docs/tags/strategy",
			  "position": "right",
		  }
      ]
    },
    "image": "img/bok/osr-header.svg",
    "footer": {
      "links": [
        {
          "title": "RESOURCES",
          "items": [
            {
              "label": "Open Source Readiness",
              "to": "/docs/bok/Introduction"
            },
            {
              "label": "Presentations",
              "to": "/docs/presentations/Introduction"
            },
            {
              "label": "Training",
              "to": "/docs/osr-resources/Training"
            },
            {
              "label": "InnerSource",
              "to": "/docs/InnerSource/Introduction"
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
              "to": "docs/bok/OSMM/Introduction",
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
              "label": "OSR Meetings",
              "to": "/docs/bok/Introduction#how-do-i-get-involved"
            },
            {
              "label": "InnerSource Meetings",
              "to": "/docs/InnerSource/Introduction#meetings"
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
              "html": "<a title=\"GitHub\" href=\"https://github.com/finos/open-source-readiness\"><img src=\"https://img.shields.io/github/stars/finos/open-source-readiness?label=Open%20Source%20Readiness&style=social\" /></a>"
            },
            {
              "html": "<a title=\"X\" href=\"https://twitter.com/FINOSFoundation\"><img src=\"https://img.shields.io/twitter/follow/FinosFoundation?style=social\" ></a>"
            },
            {
              "label": "LinkedIn",
              "to": "https://www.linkedin.com/company/finosfoundation/"
            },
            {
              "label": "OSR Mailing List",
              "to": "mailto:osr+subscribe@finos.org?subject=Subscribe%20Me&body=Please%20subscribe%20me%20to%20the%20OSR%20Mailing%20List"
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
