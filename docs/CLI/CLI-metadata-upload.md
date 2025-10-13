
# Uploading metadata with the CLI

It is possible to upload metadata using either the CLI, or the AusTrakka web interface. 
This section covers the CLI. For instructions on the web interface refer to the 
[Metadata Upload](/Web-Interface/Uploads/metadata-uploads.md) page.

Metadata uploaded to AusTrakka may include epidemiological or sequence metadata. 
Metadata is uploaded against a chosen proforma validation spec, which specifies which fields are
allowed in the upload, and which are required. Metadata values will be validated against their field's 
expected type (date, string, controlled string, integer, or decimal number) and, for controlled strings, 
against their allowed values.

Metadata may be uploaded as a CSV or an Excel (XLSX) file. Usually, you will be supplied with an Excel 
template matching the expected proforma, which you can use if convenient.

You can see a list of all available proformas using 
```
austrakka proforma list
```
and can see the required and optional fields for a proforma of interest by running 
```
austrakka proforma show <proforma-abbreviation>
```

If you want to see details of the fields listed in the proformas, such as their types, you can run 
```
austrakka field list
```

To see valid values allowed for categorical fields, you can run 
```
austrakka fieldtype list
```

If you have been provided with an Excel proforma template, the expected fields and their allowed 
values should also be listed in the extra tabs of the spreadsheet template.

Metadata can be uploaded against a chosen proforma specification by running
```
austrakka metadata add -p <proforma-abbreviation> -o <org-abbreviation> -sp <project-abbreviation> <metadata-file>
```
where 

- `org-abbreviation` is the abbreviation of the organisation that will own all samples created by running the command.
- `project-abbreviation` is an abbreviation of a project which the sample will be shared to. Zero or more can be specified.
- `metadata-file` is a CSV or Excel (XLSX) file. Note that when uploading an Excel file, only
the first worksheet will be read; the other sheets are assumed to be human-readable explanatory information
such as the data dictionary or type dictionary, and will be ignored.

You can also run the data validation against the specified proforma without saving anything to the database, 
by running
```
austrakka metadata validate -p <proforma-abbreviation> -oo <org-abbreviation> <metadata-file>
```

Note that the `metadata validate` command does not accept `--shared-projects`.

To add metadata to existing records without creating new records (i.e. when using a proforma which does not include `Owner_group`), use the `metadata update` command instead of `metadata add`:
```
austrakka metadata update -p <proforma-abbreviation> -o <org-abbreviation> -sp <project-abbreviation> <metadata-file>
```

To performa a validation in update mode, run 
```
austrakka metadata validate --is-update -p <proforma-abbreviation> -o <org-abbreviation> -sp <project-abbreviation> <metadata-file>
```

