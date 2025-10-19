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
      label: 'Web interface',
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'Web-Interface/web-introduction',
        },
        {
          type: 'category',
          label: 'Project views',
          items: [
            {
              type: 'doc',
              label: 'Overview',
              id: 'Web-Interface/Projects/projects-overview',
            },
            // {
            //   type: 'doc',
            //   label: 'Project dashboards',
            //   id: 'Web-Interface/Projects/project-dashboard',
            // },
            // {
            //   type: 'doc',
            //   label: 'Samples table',
            //   id: 'Web-Interface/Projects/samples-table',
            // },
            // {
            //   type: 'doc',
            //   label: 'Tree viewer',
            //   id: 'Web-Interface/Projects/tree-viewer',
            // },
            // {
            //   type: 'doc',
            //   label: 'Plots',
            //   id: 'Web-Interface/Projects/plots',
            // },
            // {
            //   type: 'doc',
            //   label: 'Members',
            //   id: 'Web-Interface/Projects/members',
            // },
          ],
        },
        {
          type: 'category',
          label: 'Organisation views',
          items: [
            {
              type: 'doc',
              label: 'Overview',
              id: 'Web-Interface/Organisations/orgs-overview',
            },
            // {
            //   type: 'doc',
            //   label: 'Members',
            //   id: 'Web-Interface/Organisations/members',
            // },
            // {
            //   type: 'doc',
            //   label: 'Data view',
            //   id: 'Web-Interface/Organisations/data-views',
            // }
          ],
        },
        {
          type: 'category',
          label: 'Data uploads',
          items: [
            {
              type: 'doc',
              label: 'Metadata uploads',
              id: 'Web-Interface/Uploads/metadata-uploads',
            },
            {
              type: 'doc',
              label: 'Sequence uploads',
              id: 'Web-Interface/Uploads/sequence-uploads',
            }
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Command-line interface',
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
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'doc',
          label: 'Sequence data',
          id: 'Reference/sequence-data'
        },
        {
          type: 'doc',
          label: 'Roles and permissions',
          id: 'Reference/roles-and-permissions'
        },
      ],
    },
  ]
}

export default sidebars;
