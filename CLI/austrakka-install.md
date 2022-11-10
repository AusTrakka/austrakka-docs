![at-logo](AusTrakka_Logo_cmyk.png)

# Austrakka CLI documentation 
This documentation is designed for users who are designated uploaders. Please contact the austrakka development team if you require uploader permissions.

Uploaders are users who are able to upload sequence and metadata associated with the sequences. Download of sequence data is not permitted. 


## Install


You MUST have conda installed and setup on your system in order to use the AT-CLI

**1. Download installation and test data.**

Download the AT CLI starter-kit [here](https://bioinformatics.mdu.unimelb.edu.au/~khhor/austrakka/at-cli-docs/at-cli.tar)

This contains installation scripts and a collection of reads for testing your set up.

**2. Install AT-CLI**

```
unzip at-cli.zip
cd at-cli
bash install-austrakk-cli.sh
```

This will use conda to install and setup all dependencies required for the `at-cli`


**3. Login to AT**

The  installation script will print some directions to the screen.

```
conda activate austrakka
source austrakka-login.sh
austrakka -h"
```

There will be a short pause and a message will be printed to the screen - follow the instructions by navigating to the link provided and pasting the password in to the window. 

```
2022:10:17 10:13:15.234 | WARNING | NOTE: This may take some time to return a token after authenticating in the browser
To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code SOMECODEHERE to authenticate.
```

Once you have completed this step a window will appear in your browser with a message 

```AAP- AusTrakka
You have signed in to the AAP- AusTrakka application on your device. You may now close this window.
```

Congratulations - you have signed in to Austrakka!! You can now head back to the terminal window.


**Note** the `source austrakka-login.sh` will need to be run in the directory where this script is stored. In order to expedite the process, you can add an alias to you `.bashrc` or `.bash_profile` ie

```
alias at-login="source /<path_to_login_script>/austrakka-login.sh"
```

So that you can simply run 
```
at-login
```
whilst in your activated `austrakka` env from anywhere in your file system.

## Upload of sequence data.

Uploading of sequences is a two-step process.

1. Create a sample in Austrakka
2. Add sequences to that sample

### Creating a sample

Creating a sample in Austrakka requires minimal meta-data, in order to establish onwership, and projects for which sequences and data can be included in. 

The data should be supplied in the form of a comma-separeated file with the following minimal data.

| Header | Description |
|:---:|:---:|
| Seq_ID | The name of the sample. This is the key to which further data and sequences will be attached | 
| Owner_group | This is the group that has control over the sequence and data. The uploader does not have to be part of the Owner-group | 
| Shared_groups | Project groups which this sample is a part of. Can be more than one, separated by ';'. If you need other users in your organisation to be able to view the sample please use `<OrgAbbrev>-Everyone`.|

* **Owner_group takes the format of `<OrgAbbrev>-Owner`, where `OrgAbbrev` is capitalised. For example `FSS-Owner`.**

* **For testing please use `XYZ-Group` for the `Share_groups` value - this is a special group to which new users will be given immediate access**

Additional values can also be supplied in this file or at a later date - dependent upon the proforma of the project.

```
austrakka metdata add file.csv
```

### Adding sequences to a sample

Uploading of sequences is undertaken using a comma-separated file to map sample names (from previous step) to sequences. You can upload `*.fa(sta)` and/or `*.fastq.gz`. **Please note the size of each sequence type cannot exceed 4GB.**

The input file for fastq should have three columns

| Header | Description |
|:---:|:---:|
|Seq_ID| the sample name - should have been added in the previous step|
|filepath1|The local path of the read 1 to be uploaded|
|filepath2|The local path of the read 2 to be uploaded|

```
austrakka seq add -t fastq file.csv
```




