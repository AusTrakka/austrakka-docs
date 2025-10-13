
# Projects

Projects on the Trakka platform are collections of sequence and metadata
records, together with analysis results where available. 

These projects may be records associated with specific outbreaks or ongoing disease investigations, and are usually pathogen-specific.

Users can contribute to a project by uploading sequence or metadata through the web interface or via the command line interface (CLI).
Instructions on uploading can be found on the [Sequence Uploads](../Uploads/sequence-uploads.md) and [Metadata Uploads](../Uploads/metadata-uploads.md) pages.

To view your list of projects, click on the `Projects` link in the sidebar. Only projects in which you have a Viewer role will be listed. 
Click on a project name to access the project view.

In project views, you will find:

* Views of metadata submitted by participating organisations, which may include sequence, sample and case metadata. 
These views include a searchable tabular samples view, interactive plots, and the ability to incorporate
metadata onto phylogenetic trees.
* Analysis results, both in the form of derived metadata values incorporated into the sample 
metadata table, and as phylogenetic trees in the Trees view.
* Approved proforma templates for uploading new sample records intended for use in this project. 
* Project members together with their project roles and permissions.

### Dashboard

The Dashboard tab gives an overview of the current state of data in the project. 
This dashboard is configurable on request.
You can click on most plots and tables to be taken to a pre-filtered Samples view 
showing the relevant samples from that particular section of the plot or table.

### Samples

The Samples tab lists all samples which have been shared with this project. 
This view aggregates data owned by various organisations participating in the project. 
The table columns will include any metadata fields approved for sharing in this project, 
as well as any extra fields supplied as Project Datasets (see Datasets, below).
You can hover over a column header to see the project field type.
You can drag and drop column headers to reorder them, and drag to change their width.
You can click on a column header to sort by that column.

Above the Samples table is a collapsible filter widget which you can use to filter data. 

In the header of the Samples table itself you will find:
* A field sources indicator - click to list which columns are sourced from organisation-owned sample metadata vs project-owned datasets.
* A column selector, for hiding or showing selected columns
* A header rotation option, to allow for vertical headers in narrow columns
* A CSV export button to download a CSV containing displayed data

### Trees

The Trees tab lists any phylogenetic trees that have been added to the project by project 
analysts. Click on a tree to access the interactive phylogenetic tree viewer.

### Plots

The Plots tab lists any visualisations assigned to the project. These may for instance include 
epidemiological curves, cluster timeline diagrams, bar charts, maps, etc. Click on an item to access
the interactive plot. Plots are real-time and will reflect the current state of metadata within 
the project, as shown in the Samples tab.

### Members


The Members tab lists all members of the project and their assigned roles in the project.
See [Roles and Permissions](/Reference/roles-and-permissions.md#project-roles) for an explanation of project roles.

### Proformas

The Proformas tab lists all proformas assigned to the project. 
These are used for metadata upload, as described in [Metadata Uploads](/Web-Interface/Uploads/metadata-uploads.md).
Proformas specify which fields are expected for data uploads intended for this project.
Click on a proforma to access the proforma detail page, which lists expected and required 
fields, and provides an Excel template for download if one is available.

### Datasets

Project datasets allow project analysts to attach extra metadata fields to the project. 
This metadata is not owned by any participating organisation, but is instead owned 
by the project itself and managed by project analysts. It cannot be re-shared into in other 
projects or investigations.
Dataset metadata is often used for the outputs of project analyses, for instance, 
MLST or SNP_cluster values, which may only be meaningful within the context of a project-specific 
cohort analysis. 

The Datasets tab shows the date at which particular datasets were uploaded to the project, 
and allows project analysts to manage datasets.
The metadata from these datasets is incorporated into the samples table shown in the 
Samples tab (above).
