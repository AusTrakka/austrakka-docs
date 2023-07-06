
# AusTrakka CLI guide - sequence upload 

This documentation is designed for users who are designated uploaders. 
Please contact the AusTrakka development team if you require uploader permissions.

Uploaders are users who are able to upload sequence and metadata associated with the sequences. 
Download of sequence data is not permitted. 

This guide helps you get started using the CLI to upload sequence data and, optionally, 
metadata. If you only need to upload metadata and would prefer to use the browser for metadata upload 
rather than the command line, you probably do not need this documentation. 

## Install

You may wish to use conda to install Python, install the CLI, and save the necessary environment variables. In most cases, this is recommended. If you 
do not already have a version of conda installed, you can install 
Miniconda, which can be found at [https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html) . 

The AusTrakka CLI can be found at [https://github.com/AusTrakka/austrakka2-cli](https://github.com/AusTrakka/austrakka2-cli) . 
Follow the instructions on this page to install the CLI. The CLI requires Python to run. 

**1. Download test data.**

Download the AusTrakka CLI starter kit [here](at-cli.zip)

This contains a collection of reads for testing your set-up.

**2. Login to AusTrakka**

If you are using a conda environment, run
```
conda activate austrakka
```

Then run 
```
at-login
```

If you have not set up the login command, and are on a Mac/Linux system, you will need to instead run 
```
export AT_TOKEN=$(austrakka auth user)
```

If you are using Windows, you can run  
```
austrakka auth user
```
and then use 
```
set AT_TOKEN=<output of previous command>
```
to set the AT_TOKEN environment variable.

There will be a short pause and a message will be printed to the screen - follow the instructions by navigating to the link provided and pasting the password in to the window. 

```
2022:10:17 10:13:15.234 | WARNING | NOTE: This may take some time to return a token after authenticating in the browser
To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code SOMECODEHERE to authenticate.
```

Once you have completed this step a window will appear in your browser with a message 

```
AusTrakka
You have signed in to the AusTrakka application on your device. You may now close this window.
```

Congratulations - you have signed in to Austrakka!! You can now head back to the terminal window.

Each time you log into your computer or open a new terminal window, in order to enable and log in to the 
AusTrakka CLI, run
```
conda activate austrakka
at-login
```
This will prompt you to use a browser to log in using your AusTrakka account
(i.e. your institutional credentials), logging you in for command-line access.

## Upload of sequence data.

Uploading of sequences is a two-step process.

1. Create a sample in Austrakka
2. Add sequences to that sample

### Creating a sample

Creating a sample in Austrakka requires at least minimal meta-data, in order to establish ownership. 
An Owner_group column must be supplied, to specify the data owner. 
A Shared_groups column may be supplied to specify which project(s), or other groups, the samples will initially be viewable by.

The data should be supplied in the form of a comma-separated file with the following minimal data 
(Shared_groups is optional).

| Header |                                                                                         Description                                                                                          |
|:---:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Seq_ID |                                                 The name of the sample. This is the key to which further data and sequences will be attached                                                 | 
| Owner_group |                                   This is the group that has control over the sequence and data. The uploader does not have to be part of the Owner-group                                    | 
| Shared_groups | Groups which this sample is a part of. Can be more than one, separated by ';'. If you need other users in your organisation to be able to view the sample please use `<OrgAbbrev>-Everyone`. |

* Seq_ID must either refer to a new sample, or to a sample which you are allowed to write to. 
You cannot write to a sample owned by another organisation unless you have explicitly been granted permission to do so. 
This means that for testing, you should try to use Seq_ID values that have not been used before. 
For test purposes, you can create Seq_IDs appended with your organisation and/or name - for instance, 
`TestSample1-MDU-KH` or `SRR3020613-MDU-KH`.

* Owner_group takes the format of `<OrgAbbrev>-Owner`, where `OrgAbbrev` is capitalised. For example `FSS-Owner`.

* For testing please use `XYZ-Group` for the `Share_groups` value - this is a special group to which users will be given access for testing and training.

**Note:** A starter `samples.csv` file has been provided, which you can optionally use.
If you use this file, you must change the `Owner_group` values to match the owner group of
your own organisation, and you must change the `Seq_ID` values to something unique to you
so that you do not overlap with the samples being created by other users.

Depending on which pro forma is used, additional metadata values can be supplied in this file. Here we will 
use the "minimal" pro forma, with the minimum possible columns. This pro forma has abbreviation `min`, by supplying `-p min`.

If you are interested, you can see the spec of the minimal pro forma by running

```
austrakka proforma show min
```

Having created a `samples.csv`, you can create the sample records in AusTrakka by running 

```
austrakka metadata add -p min samples.csv
```

### Adding FASTQ sequences to a sample

Uploading of sequences is undertaken using a comma-separated file to map Seq_IDs (from previous step) 
to sequences. You can upload `*.fa(sta)` and/or `*.fastq.gz`. 
**Please note the size of uploaded files cannot exceed 4GB.**

The input CSV file for fastq should have three columns:

| Header |                           Description                            |
|:---:|:----------------------------------------------------------------:|
|Seq_ID| the sample name - must match a sample added in the previous step |
|filepath1|           The local path of the read 1 to be uploaded            |
|filepath2|           The local path of the read 2 to be uploaded            |

**Note:** A starter `files.csv` file has been provided, which you can optionally use.
If you use it, you must set the Seq_ID column values to values matching those you used
when creating sample records with the `austrakka metadata add` command.

Having created a `files.csv`, you can upload the sequence files listed in your CSV file by running: 

```
austrakka seq add fastq --csv files.csv
```

## Uploading metadata

If you are uploading epidemiological metadata, you can upload metadata spreadsheets
or CSV files using the same command we used to upload the "minimal metadata" in the section 
_Creating a sample_. You will need to specify the proforma that matches the proforma template you are using.

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
values should also be listed in extra tabs of the spreadsheet template.

Metadata can be uploaded against a chosen proforma specification by running
```
austrakka metadata add -p <proforma-abbreviation> <metadata-file>
```
where `metadata-file` may be a CSV or Excel (xlsx) file. Note that when uploading an Excel file, only
the first worksheet will be read; the other sheets are assumed to be human-readable explanatory information
such as the data dictionary or type dictionary, and will be ignored.

You can also run the data validation against the specified proforma without saving anything to the database, 
by running
```
austrakka metadata validate -p <proforma-abbreviation> <metadata-file>
