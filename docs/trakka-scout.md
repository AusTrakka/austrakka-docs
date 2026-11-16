
import FileDragDrop from '/img/standalone_client_screenshots/metadata_or_tree_upload.png'
import SelectFieldTypes from '/img/standalone_client_screenshots/field_type_selection.png'

# Trakka Scout

[Trakka Scout](https://scout.trakka.org/) is a standalone application that runs in your browser and allows you to query, summarise, and 
visualise data without uploading it to a server. It requires no login and can be accessed [here](https://scout.trakka.org/).

Trakka Scout gives you the same visualisations as are available in the Project view of the 
full [Trakka platform](/docs/Web-Interface/web-introduction.md).

:::note
Trakka Scout is currently in early beta and may be updated frequently. 
:::

## Adding data

You can add data by selecting `Add Data` from the left sidebar.

Files added to Trakka Scout are not uploaded to a server. All data remains in your web browser. Drag and drop a CSV or Newick
file to the upload widget, or click on it to browse files. Currently, only one file may be selected at a time, although you 
may add both a CSV and one or more trees by loading additional files once the current file is ingested.

<p align="center">
<img src={FileDragDrop} class="border" alt="Upload widget screenshot" style={{ width: '600px' }} />
</p>

### Adding metadata

Metadata may be added using CSV (comma-separated value) files.

If you wish to link your sample metadata to trees, the Seq_ID column must be present, and will be treated as the 
primary identifier for linking each row to a named tree node.

Adding a new CSV file will replace the currently-loaded metadata. Trakka Scout cannot currently combine metadata from multiple CSVs.

When you select a CSV file, Trakka will attempt to deduce the **type** of each column and allow you to manually change these 
types before adding the data. Field types affect how data is parsed, and how it is presented in visualisations and queries. Field types are:

* **Categorical:** Text values which can be used in visualisations as a categorical variable (e.g. on an axis, or as a 
discrete colour variable). "Categorical" columns are not validated in any way by Trakka Scout and may contain any values,
but selecting this type communicates that you expect the column to contain a feasible number of unique values.
* **Free text:** A field which may contain any text values, and is not expected to be used as a categorical variable in 
visualisation. The primary identifier field (Seq_ID) must always be free text, since these identifiers should be unique per row.
* **Numeric:** The value will be parsed as a number rather than a string. Values that cannot be parsed will raise an error.
* **Date:** The value will be parsed as a date rather than a string. Dates should be in ISO format (year-month-day). 
Values that cannot be parsed will raise an error.
* **Geo region (ISO):** A text value which is expected to correspond to a geographic ISO code at the Country level (ISO admin level 1)
or at ISO admin level 2 (State, Province, Territory, etc). These values will typically look like `AUS` or `AU-VIC`. <!-- Trakka
can also handle Australian Local Government Area (LGA) codes, however the field name must be set to "LGA" for it to be recognised.
Recognised geographical regions can be plotted on an appropriate map if one is available.  -->

<p align="center">
<img src={SelectFieldTypes} class="border" alt="Upload widget screenshot" style={{ width: '500px' }} />
</p>

You may optionally use Altair-style CSV header annotations to specify the intended data types for each column. These 
types are indicated by appending a type code to your CSV header name, separated by a colon. For instance, if one of your CSV
column headers is `Date_of_collection:T`, this indicates that `Date_of_collection` is a temporal (i.e. date) field. The field 
name in this case will be taken to be `Date_of_collection`, with the type code stripped off, and the type in the 
Detected Fields table will be set to `Date`.

Type codes are loosely based on the original Altair naming scheme. Recognised type codes for use in CSV headers are:

<p align="center">
| Type                                             | Code |
|--------------------------------------------------|--|
| Categorical (unordered categorical, or "Nominal") | N |
| Free text                                        | X |
| Numeric (Quantitative)                         | Q |
| Date (Temporal)                                | T |
| Geographic region                                | G |
</p>

### Adding trees

Trees may be added in Newick format. On adding a tree, you may select a name, or a default name will be selected for you.

Multiple trees may be added, and these will appear in the tree listing for visualisation, using the names specified when loading. 
If there is only one loaded tree, selecting the tree listing will automatically navigate directly to that tree.

Tree leaf nodes will automatically link to the metadata supplied in the CSV file if the primary identifier column in the CSV file matches
the name of the node. 

## Data visualisation

### Samples

The Samples tab lists all samples in your supplied CSV file.

Above the Samples table is a collapsible filter widget which you can use to filter data.

From the samples view one can also navigate to a data summary table, see the [Data summary table](/docs/Web-Interface/DataViews/data-summary-table.md) page for more details. 
This allows you to group data by variable values and compute aggregate statistics.

You can drag and drop column headers to reorder them, and drag to change their width.
You can click on a column header to sort by that column.

In the header of the Samples table itself you will find:
* A column selector, for hiding or showing selected columns
* A header rotation option, to allow for vertical headers in narrow columns
* A CSV export button to download a CSV containing displayed data

### Trees

The Trees tab lists any phylogenetic trees that you have supplied, identified by the names supplied when they were loaded.
If there is only one loaded tree, selecting the tree listing will automatically navigate directly to that tree.

The tree viewer allows navigation of the phylogenetic tree and annotation with metadata variables from the input CSV. 
The tree viewer includes a linked searchable table of metadata associated with samples corresponding to a 
tree node. If a metadata CSV has not been added, or does not include a primary identifier column with identifiers
matching some tree nodes, the tree metadata table will not be available.

### Plots

Plots allow you to visualise the the metadata values in your CSV file. The Plots tab lists all available plot types,
including epidemic curves, cluster timeline diagrams, bar charts, heatmaps and histograms.
The Maps link is also included in the plots listing. Click on an item to access the interactive plot. 
