
# Sequence uploads

This page covers sequence upload in the Trakka web interface. For information on uploading data from the 
command-line, see the [CLI sequence upload](/CLI/CLI-sequence-upload.md) page.

To upload sequence data, click on the `Upload` entry in the sidebar, and then select the `Upload Sequences` option.

import nav from '/img/upload_screenshots/Upload_navigation.png';

<p align="center">
<img src={nav} class="border" alt="Upload navigation screenshot" style={{width: 500}}/>
</p>

On the sequence upload page, you will see three main sections:

* The **Data ownership** section, where you can select the organisation which will own the uploaded data, and which projects to share data with.
* The **Upload options** section
* The **Select files** section, where you can drag-and-drop or browse for files to upload, and adjust sample names once files are selected.

### Data ownership

import dataowner from '/img/upload_screenshots/Upload_sequence_dataownership.png';

<p align="center">
<img src={dataowner} class="border" alt="Data ownership screenshot" style={{width: 400}}/>
</p>

**Data owner:** The data owner will by default be set to your own organisation if you have Uploader rights within it. 
If you have permission to upload data on behalf of other organisations, 
you can select a different owner organisation from the dropdown menu. 
It is important to set the data owner correctly, as any new samples created as part of the upload will be owned by this organisation.
Note that at any time after upload you can request to have sample ownership changed to another organisation, but cannot change it via this interface.

**Create new sample records:** By default, sequences are expected to be attached to existing sample records. If you need to
create new sample records as part of the upload, tick the `Create new sample records` checkbox. This will create new entries,
indexed by Seq_ID, within the Trakka database. These new records will not have any metadata values until a metadata upload is carried out.

**Share with projects:** If you have selected `Create new sample records`, you can also select one or more projects to share samples with.
All Seq_IDs in the upload will be shared, even if they are not new. If you are creating new sample records and do not share 
with any projects, the sequence data will not be accessible for any project analyses.

### Upload options

import options from '/img/upload_screenshots/Upload_sequence_options.png';

<p align="center">
<img src={options} class="border" alt="Options screenshot" style={{width: 400}}/>
</p>

**Sequence type:** Select the type of sequence data you are uploading. 
The sequence data types recognised by Trakka are described on the [Sequence data](/Reference/sequence-data.md) page. 
For most sequence data types, Trakka will attempt to extract the Seq_ID from the filename. The exception is 
consensus FASTA sequences, where the Seq_ID is expected to be the FASTA ID within the FASTA file.

**Skip samples with sequences:** By default, Trakka expects a single fileset per Seq_ID. If you try to upload sequences to a sample 
which already has sequences of the same type, you will get an error. If you are carrying out a bulk upload and would like to silently
skip samples which already have sequences, tick this checkbox.

**Overwrite existing sequences:** By default, Trakka will not allow you to upload sequences to a Seq_ID which already has sequence data
of the same type. If you need to replace existing sequences, tick this checkbox. This will not delete the old sequence files from storage, 
but will disable them so they are no longer accessible. Please contact an admin if you need to completely purge sequence data from Trakka storage.

**Use file listing CSV:** By default, Trakka will determine the sample names for given files by parsing either the filename or the contents of the file itself (in the case of Consensus FASTA). This option allows you to upload a CSV file with predetermined sample names matched to one or more files depending on the sequence type. This can make it simpler to upload files which may have naming schemes that cannot be automatically parsed, without requiring the user to change the actual file names. For more information please see the relevant section below.

### File selection and upload

import fileselect from '/img/upload_screenshots/Upload_sequence_fileselect.png';

<p align="center">
<img src={fileselect} alt="File selector screenshot" style={{width: 300}}/>
</p>

You can select files to upload by either drag-and-drop onto the file upload area, 
or by clicking on the Browse button within this area. Once you have selected files to upload, you will see a listing of 
either single or paired files, depending on the FASTQ type you selected. 

import filelist from '/img/upload_screenshots/Upload_sequence_filelist.png';

<p align="center">
<img src={filelist} class="border" alt="File listing screenshot"/>
</p>

Trakka will assume that the Seq_ID is the filename up to the first underscore (`_`) character.
If the displayed Seq_IDs are not correct, you can edit them before uploading. 
Be careful to make sure that the Seq_IDs entered exactly match Seq_IDs used for metadata upload, particularly when selecting
`Create new sample records`.

Once you click `Upload all`, you will see the state of each file or file pair update as files are uploaded. 
If there are any upload errors, you can click on the Error status to see more details.

### File listing CSV

import file_listing_option_upload from '/img/upload_screenshots/Upload_sequence_file_listing_option_uploaded.png';
import csv_file_example_csv from '/img/upload_screenshots/Upload_sequence_csv_file_example_csv.png';
import csv_file_results from '/img/upload_screenshots/Upload_sequence_csv_file_resulting_table.png';
import csv_errors from '/img/upload_screenshots/Upload_sequence_csv_file_errors.png';

Trakka supports a file listing CSV in order to pre-define which sample names are linked to which filenames, as an alternative to manually setting them in the UI or changing the filenames to accomodate the naming requirements. This is an optional, but powerful option that will allow greater flexibility when uploading sequence files. 

<p align="center">
    <img src={file_listing_option_upload} alt="CSV file upload screenshot" style={{width: 600}}/>
</p>

Once the CSV is uploaded and enabled, it will parse the file to match sample names against one or more files depending on the sequence type selected. Illumina Paired-End FASTQ supports pairing two files to a sample name, with all other sequence types operating the same but with only one filepath required per sample name (Consensus FASTA always extracts the sample name from the file content, so does not support CSV file matching). 

#### CSV Format

The CSV format is identical to that used by the CLI, and requires the following columns based on the sequence type:


##### Paired Format (Illumina Paired-End FASTQ)
| Header |                           Description                         |
|:---:|:----------------------------------------------------------------:|
|Seq_ID| the sample name|
|filepath1|           The local path of the read 1 to be uploaded        |
|filepath2|           The local path of the read 2 to be uploaded        |

##### Single Format (All other types EXCEPT Consensus FASTA)
| Header |                           Description                         |
|:---:|:----------------------------------------------------------------:|
|Seq_ID| the sample name |
|filepath|           The local path of the sequence file to be uploaded  |

Please ensure the required column names for your sequence type are present in the CSV file, and that the casing for the header names are correct. If any of the headers cannot be found or there are missing values for a row, the file will fail to parse. 

To ensure cross-compatibility with the CLI, directories in filepaths will removed automatically without requiring user intervention. Below is an example of a sequence type with multiple files per Seq_ID, notice that the mixture of full file paths and filenames are fully supported.

<p align="center">
    <img src={csv_file_example_csv} alt="CSV file excel example" style={{width: 850}}/>
</p>

When the CSV file listing option is checked, uploading any files referenced by the CSV file will generate a table that demonstrates that the matching was successful. 

<p align="center">
    <img src={csv_file_results} alt="CSV file result example" style={{width: 900}}/>
</p>

#### Handling Errors

An errors table will be presented in the event that either files declared in the CSV are missing, or files have been included that were not present in the CSV. 

<p align="center">
    <img src={csv_errors} alt="CSV file result errors" style={{width: 900}}/>
</p>

If such errors occur, you will not be able to proceed with the upload until either every error has been resolved, or you have chosen to remove the errors. Removing the errors will allow upload to proceed, but be aware that any removed items will no longer be included in the upload, so please use this feature with caution.
