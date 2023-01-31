import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '8fa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '547'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'b69'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'bfc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '74e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'abc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '827'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f32'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'a6b'),
        exact: true
      },
      {
        path: '/docs/about',
        component: ComponentCreator('/docs/about', '6f0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/activities/Developer-Training',
        component: ComponentCreator('/docs/bok/activities/Developer-Training', '6f5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/Body-Of-Knowledge',
        component: ComponentCreator('/docs/bok/Body-Of-Knowledge', 'd57'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/risks/Codebase-Risk',
        component: ComponentCreator('/docs/bok/risks/Codebase-Risk', 'e3a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/risks/Data-Leakage-Risk',
        component: ComponentCreator('/docs/bok/risks/Data-Leakage-Risk', 'c34'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/risks/Dependency-Risks',
        component: ComponentCreator('/docs/bok/risks/Dependency-Risks', '1da'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/risks/Financial-Risk',
        component: ComponentCreator('/docs/bok/risks/Financial-Risk', '48a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/risks/Legal-Risk',
        component: ComponentCreator('/docs/bok/risks/Legal-Risk', '018'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/risks/Staff-Risk',
        component: ComponentCreator('/docs/bok/risks/Staff-Risk', '4fc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/roles/CIO-CTO',
        component: ComponentCreator('/docs/bok/roles/CIO-CTO', '0d6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/roles/Developers',
        component: ComponentCreator('/docs/bok/roles/Developers', '3fd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/roles/HR-Training',
        component: ComponentCreator('/docs/bok/roles/HR-Training', '422'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/roles/Legal',
        component: ComponentCreator('/docs/bok/roles/Legal', '520'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/roles/OSPO-Leads',
        component: ComponentCreator('/docs/bok/roles/OSPO-Leads', '2fd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/roles/Risk-Officers',
        component: ComponentCreator('/docs/bok/roles/Risk-Officers', '358'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/bok/roles/Security-Experts',
        component: ComponentCreator('/docs/bok/roles/Security-Experts', '714'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/community-ecosystem/resources',
        component: ComponentCreator('/docs/community-ecosystem/resources', 'ad2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/corporate-alignment/resources',
        component: ComponentCreator('/docs/corporate-alignment/resources', 'e63'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/culture/resources',
        component: ComponentCreator('/docs/culture/resources', '263'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/goals-objectives/resources',
        component: ComponentCreator('/docs/goals-objectives/resources', 'cbc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/meetings',
        component: ComponentCreator('/docs/meetings', '1ad'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/operations/compliance-checklist',
        component: ComponentCreator('/docs/operations/compliance-checklist', 'a55'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/operations/compliance-workflows',
        component: ComponentCreator('/docs/operations/compliance-workflows', '053'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/operations/electronic-communications',
        component: ComponentCreator('/docs/operations/electronic-communications', '6cf'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/operations/foss-policy',
        component: ComponentCreator('/docs/operations/foss-policy', 'cf0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/operations/oslc',
        component: ComponentCreator('/docs/operations/oslc', 'cd9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/operations/project-access',
        component: ComponentCreator('/docs/operations/project-access', 'f02'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/operations/records-management',
        component: ComponentCreator('/docs/operations/records-management', '9c5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/operations/resources',
        component: ComponentCreator('/docs/operations/resources', 'f72'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/osr-resources/',
        component: ComponentCreator('/docs/osr-resources/', '7ba'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/osr-resources/external-resources',
        component: ComponentCreator('/docs/osr-resources/external-resources', '683'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/osr-resources/oslc-licenses',
        component: ComponentCreator('/docs/osr-resources/oslc-licenses', '54f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/osr-resources/trainings',
        component: ComponentCreator('/docs/osr-resources/trainings', '474'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/osr-resources/whitepaper',
        component: ComponentCreator('/docs/osr-resources/whitepaper', 'b8a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/playbook/code-duplication',
        component: ComponentCreator('/docs/playbook/code-duplication', '9bd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/playbook/common-problems',
        component: ComponentCreator('/docs/playbook/common-problems', '6b0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/playbook/risk-based-view',
        component: ComponentCreator('/docs/playbook/risk-based-view', '723'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/projects',
        component: ComponentCreator('/docs/projects', '4a3'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f38'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
