# Changelog

All notable user-facing changes to the AusTrakka platform will be documented here.

Release notes for the AusTrakka CLI can be found in the [CLI changelog](https://github.com/AusTrakka/austrakka2-cli/blob/master/CHANGELOG.md).

## Unrealeased

## Fixed
- Fixed a bug where if a plot control was changed with an active data filter, the filter would be lost when the plot was reloaded.
- Fixed a bug where the vicdh dashboard would break with a large number of legends presents for the ST count widget.
- Disabled plots will not longer be shown to non-admins.

## 2025-04-07

## Added
- Improvements to the user dashboard, including addition of latest sequence date.

## Changed
- Projects will now be listed in reverse chronological order by default, based on their creation date.

## 2025-03-25

## Added
- New dashboard templated and widgets available for config, including a pie chart widget for metadata values,
table widgets for any metadata values, and more configurable metadata/sequence count widgets. The epi curve widget
colour field is now more configurable.

## Changed
- The quick search in tables will now have a larger clickable area for accessibility reasons.

## Fixed
- If a dataset is uploaded with duplicate column headers, the uploader will now receive a useful error message.
- Newick parsing is now more robust and can handle more corner cases for uploaded trees.

## 2025-02-25

## Added
- The sequence data upload page now supports single-end FASTQ upload: Illumina and ONT.

## 2025-02-19

## Added
- FASTQ sequence data may now be uploaded via the web UI. For now, this is restricted to paired-end Illumina FASTQ.

## 2025-02-14

### Added
- Basic version of project dashboard available for use by projects; this dashboard is dependent only on system fields and not user-supplied metadata.

## 2025-02-11

### Added
- Admin UI for managing role assignments in new permissions system
- Dashboard widgets for sequence and metadata availability added to default project dashboard
- Colour scheme for Australian and NZ jurisdictions added for use in plots
- Project dashboard epi curve widget will colour by Owner_group if other jurisdiction fields are not available

### Fixed
- Fixed privilege escalation bug affecting admin users in the new permissions system
- Fixed bug where a user with no privileges would not see the web UI at all

## 2025-01-28

### Added
- Introduced a `type` property to projects, enabling better organisation and filtering.
- Added a filter on the project list page to allow filtering by project type.
- Sequence listings, for instance via the CLI, will now include information on sequence file sizes.

## 2025-01-17

### Fixed
- Fixed bug where a project dashboard would not display properly if the project contained no sample records.

## 2025-01-13

### Added
- New widgets are now available for project dashboards:
  - Accession counts (reads accession and assembly accession) availability per organisation.
  - Counts of samples with and without sequences, per organisation.
  - Counts of samples with a Date_coll value, per organisation. The date of collection is a proxy for a sample having _any_ metadata; samples without a date of collection generally have no metadata values uploaded at all, as this field is mandatory.

### Changed
- The project dashboard Organisation sample count widget is now sorted by counts.

## 2024-12-17

### Added
- A new slice for managing users and their roles, with a warning to signify that it is a work-in-progress system (admin only).
- Splash loading screen on initial load.
- UI elements in the client are now able to reflect the permissions assigned to users via dynamically-created roles. This means that assigning fine-grained permissions to users will now enable, disable, or display the relevant UI elements as appropriate.

### Fixed
- In sample metadata tables, filtering by is-null-or-empty or not-null-or-empty on a date field now works correctly again.
- User list export to CSV is fixed (admin only).
- Deleting a user's role in the user detail page will not now trigger reordering (admin only).

### Changed
- Quick Search in tables will stay open if it contains an input, so that the filter state is visible.
- In the project proformas tab, clicking on a proforma will now take the user to the proforma detail page, rather than opening a modal. It is still possible to download a pro forma template directly from the project proformas view.
- An Admin is now able to select multiple group targets for their role selections for a user (admin only).
- Users now require explicit permission for core functionality, and the client makes use of this updated functionality. This means that in order to use the AusTrakka front-end, a user must be assigned an AusTrakkaUser or similar role granting them these basic permissions.
- Larger page sizes for table pagination may now be selected, so that more rows may be displayed in Samples tables and the Fields table.

## 2024-12-11

### Added
- Link to the AusTrakka documentation

## 2024-11-21

### Fixed
- Removed reference to unsupported `.xls` files on the upload page.
- Fixed issue where clicking on a user would not navigate correctly to the user details page.
- In the admin view for editing user roles, selections will now clear after changes are submitted.

### Changed
- The default colour scheme for heatmaps is now a sequential scheme (greens).

## 2024-10-24

### Added
- AusTrakka deployed instances now support configurable themes.
- Project fields can now be configured to be initially hidden, and will be hidden by default in the project sample table view.
- The default project dashboard now includes an epi curve chart. If ANZ jurisdictions or states are present in the project
metadata, an appropriate colour scheme will be applied to this chart.

### Changed
- The default colour scheme in plots is now Set3.
- Epi curve plots will now select a reasonable date bin size when first loaded. This bin size may still be adjusted by the user.

### Fixed
- Project dashboards can no longer filter on upload date if Date_created is not included as a project field.
- If a field with too many unique values is selected for the facets of a plot, resulting in the plot being too large to render,
the plot will now display an error message instead of crashing.

## 2024-09-17

### Added
- Ability to submit support requests in the UI.

## 2024-09-12

### Fixed
- Filtered sample counts now display correctly when the filters are loaded from the URL.

## 2024-09-11

### Added
- Added new discrete colour schemes for plots and trees, includes a colourblind-friendly scheme.

### Changed
- Colour Scheme Selector now groups colour schemes by type and has a more organised look.

### Fixed
- Fixed an issue where applying a date filter could cause a crash.
- Fixed an issue where the "after" date filter filtered to timestamps after 00:00:00 on the selected date, rather than after 23:59:59.
- Fixed an issue where boolean filters such as is-null-or-empty were not parsed correctly from the URL.
- Improved reliability of sequence upload by requiring the client to send the file hash at the start of upload.

## 2024-09-05

### Added
- A Fields page, listing all defined AusTrakka fields, is now available to all users.

### Changed
- Minor plot tweaks: update preferred fields, smaller cluster timeline point size
- The condition `on and after` and `on and before` have been changed to just be `After` and `Before` respectively.
This is due to a change in available table component filters.
- Table column layout and appearance improvements, including darker cell separator lines for accessibility.

### Fixed
- Plots in projects in show-all mode will select their preferred fields when they exist, independent of dataset analysis label.

## 2024-08-16

### Changed
- Org page now appears at org-specific URL rather than a universal /org URL.

## 2024-08-07

### Added
- Display Analysis Server Username for users.
- Clicking on the AusTrakka logo will navigate home.

## 2024-08-01

### Added
- Added filter information to the url of all queryable table pages. This allows users to share a link to a table or plot with the current filter settings applied.
- Plot colour legends are now interactive; click a legend item to highlight the corresponding data in the plot.
- Cluster timeline plots are now able to bin samples by date and represent the number of samples via point size.
- Cluster timeline plots now have the option of setting the colour to None.
- Epi curve plots with a row facet now allow independent Y axes (and X axes) for each row.

## 2024-07-08

### Added
- Server-side support for more sequence data types: ONT FASTQ and multi-contig FASTA assemblies (fastq-ont and fasta-asm).

### Changed
- The existing fastq sequence data type is now split explicitly into fastq-ill-pe and fastq-ill-se; the existing fasta sequence data type, representing single-contig consensus genomes, is now named fasta-cns. Existing data has been migrated to the new types.

## 2024-06-27

### Added
- A colour scheme selector has been added to plots
- Plot settings such as fields and colours will update the URL dynamically; they will persist on page reload and can be shared with others via URL
- Sample tables in projects now show the field source (sourced from organisation sample metadata, or project datasets)
- Hide all / show all columns buttons have been added to the column selector for the sample metadata tables
- Admin UI for editing field details

### Fixed
- Fix to admin functionality to search users by name

## 2024-06-06

### Added
- Colour scheme is now selectable per field on the tree view.

## 2024-05-28

### Fixed
- Fixed broken sample view

## 2024-05-21

### Added

- Admin view of all AusTrakka field details.

### Fixed

- Organisation sample table view now correctly shows all rows.
- User's name in the sidebar now draws on the AusTrakka-set display name, which we can update, rather than drawing directly on the Azure display name.

## 2024-05-11

### Fixed

- SVG export of trees now correctly renders the tree nodes in the SVG file.

## 2024-05-06

### Added

- Admin user management interface added. Admins can now view and edit user details, including display name, contact email, organisation, group-role assignments, and activation status. Easier access for admins to a user's objectID.

## 2024-05-03

### Changed
- All legends (trees and plots) now list only values present in the data itself, even if the field is a categorical field with additional valid values.
- Plot and tree legends will now be sorted in natural sort order (ST1, ST5, ST11 rather than ST1, ST11, ST5).
- Plot colouring now uses a neutral (grey) value for null metadata values.

### Fixed
- Has_sequences field will no longer display "false" values while the field is still loading; instead it will appear, correctly, as empty
- Reinstate using a neutral (grey) value for null metadata values on trees.

## 2024-04-23

### Fixed
- Performance issues when loading users page

### Changed
- Plots may now optionally be specified as Vega, instead of Vega-Lite.

## 2024-04-12

### Added
- User management page for admins.

### Fixed
- Bug with quick search in tree view.

## 2024-04-11

### Fixed
- Dashboard table rows are now clickable.

## 2024-04-04

### Fixed

- Fixes an issue where the Projects table did not occupy the full height of the browser window, and adds a minimum height regardless of window size.

## 2024-03-27

### Added

- The functionality of tabular displays has been updated:
  - Tables containing many rows, for instance sample table views for large projects, will now have significantly improved performance.
  - CSV export of sample data should now correctly escape values containing quotes.
  - A control is now available to toggle vertical rendering of table columns in the sample table. This allows column widths to be made very narrow, if desired, without hiding column headers.
  - Default column widths now better adapt to the data.
  - Column sort controls are now a toggle, rather than a dropdown, and are quicker to use.
  - The pagination controls have been moved to the bottom-left of the table to make it more obvious when the current table view does not show all available items.

### Fixed

- The data filter component on tables, plots and trees now correctly makes available numerical operators (e.g. greater than, less than) for floating-point numerical fields. Previously numerical operators were only appearing for integer numerical fields.

## 2024-03-21

### Added

- Override mode for project analysis metadata is now available. In the case of multiple active project datasets containing calculated values for the same field, AusTrakka will display only the most recent values of the metadata for that field. All values for a field (including nulls) will be sourced from the latest project dataset containing that field.

### Changed

- The project merge algorithm ("override" or "show all") is now shown on the Datasets tab.
- When a project is in "show all" mode, and no datasets have yet been uploaded for a particular metadata field, no columns will be displayed for that field. Previously, an empty column would display.

## 2024-03-15

### Added

- Release of project analysis metadata (show-all mode):
  - A new project role, ProjectAnalyst, has been added. This role manages analysis-generated result data for the project.
  - The AusTrakka backend now supports new CLI commands for configuring project settings and field sources, and for uploading and managing datasets.
  - A Datasets tab has been added, visible to ProjectAnalysts and Viewers. This shows the analysis metadata datasets currently active within the project. Viewers may list datasets, but not alter them.
  - Each project field will now be configured to be sourced from either organisation-owned sample metadata (usually epi sample/case metadata, or sequence metadata), or project-owned dataset metadata. Seq_ID is always be sourced from both, as it is used to merge sample and dataset metadata; no other field in a project may be sourced from both.
  - The project Samples table, all trees, and all plots, will display metadata fields derived from both organisation-owned metadata and project-owned analysis metadata as a unified view.
  - Projects may now be configured to preferentially load high-priority fields by defining "project provisions" of a specified subset of fields, to improve client performance. Any client functionality which requires only certain fields will be available as soon as the relevant fields are loaded; for instance search on Seq_ID is available as soon as Seq_ID is loaded, and rendering of an epi curve should occur as soon as the relevant date field is loaded.
  - In the case of multiple active project datasets containing calculated values for the same field, AusTrakka will display a version of the field for each dataset, with the analysis label added to the field name to disambiguate results. This project mode is "show-all", intended primarily for research use. An "override" mode for public health will be implemented in a future release.

### Changed

- As a part of the project analysis metadata release, project data is now retrieved as a whole and queried client-side, and cached as the user navigates between pages. As a part of this change:
  - Users may see longer load times on the initial load of large projects.
  - Users should see faster page loads on all successive page views for a project, including any tree or plot pages.
  - It is now possible to sort columns in natural sort order (ST1, ST5, ST11 rather than ST1, ST11, ST5).
  - Quick search is now available on sample metadata tables.
- Tree colouring of nodes or metadata blocks now uses a neutral (grey) value for null metadata values. This improvement has not yet been made for plots.
- Allowed values are now returned when listing available metadata fields. As a result, the `austrakka field list` CLI command will now display allowed values for categorical (i.e. controlled) fields.

### Fixed

- Additional checks have been added to guard against simultaneous upload of sequences to the same Seq_ID, which could previously, in rare cases, lead to more than one active version of a sequence or sequence file pair for the same Seq_ID.


## 2024-02-14

### Changed

- Performance improvements when navigating between project tabs in large projects; this will make only a small difference to current behaviour but will support future changes.

### Fixed

- Buxfix display of booleans (Has_sequences) on the sample detail page; do not display timestamps on dates which should not have timestamps on the sample detail page (e.g. date of collection).
