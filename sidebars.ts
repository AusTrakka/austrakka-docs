import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'getting-started',
    },
    {
      type: 'category',
      label: 'AusTrakka CLI',
      items: [
        {
          type: 'doc',
          label: 'Getting started with the CLI',
          id: 'CLI/CLI-introduction',
        },
        {
          type: 'doc',
          label: 'Uploading sequence data',
          id: 'CLI/CLI-sequence-upload',
        },
        {
          type: 'doc',
          label: 'Uploading metadata',
          id: 'CLI/CLI-metadata-upload',
        },
        {
          type: 'doc',
          label: 'Disabling samples and sequences',
          id: 'CLI/CLI-disabling',
        },
        {
          type: 'doc',
          label: 'Managing sample sharing',
          id: 'CLI/CLI-sharing-records',
        },
      ],
    },
  ]
}

export default sidebars;
