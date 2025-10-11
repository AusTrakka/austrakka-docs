
# Uploading sequence data with the CLI

The CLI can be used to upload all types of sequence data supported by Trakka.
Sequence data types are listed on the [Sequence data](/Reference/sequence-data.md) page.

FASTQ data may alternatively be uploaded via the web interface. 
Refer to the [Sequence Uploads](/Web-Interface/Uploads/sequence-uploads.md) page for instructions.

Uploading of sequences is a two-step process.

1. Create a sample record in Austrakka (if it does not already exist). This creates a record with a unique Seq_ID.
2. Add sequences to that Seq_ID.

## Creating a sample record

Creating a record in Austrakka requires at least minimal meta-data, in order to establish ownership. 
An `Owner_group` column must be supplied, to specify the data owner. 
A `Shared_groups` column may be supplied to specify which project(s), or other groups, the samples will initially be viewable by.

The data should be supplied in the form of a comma-separated file with the following minimal data 
(Shared_groups is optional).

| Header |                                                                                         Description                                                                                          |
|:---:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Seq_ID |                                                 The name of the sample. This is the key to which further data and sequences will be attached                                                 | 
| Owner_group |                                   This is the group that has control over the sequence and data. The uploader does not have to be part of the Owner-group                                    | 
| Shared_groups | Groups which this sample is a part of. Can be more than one, separated by `;`. If you need other users in your organisation to be able to view the sample please use `<OrgAbbrev>-Everyone`. |

* Seq_ID must either refer to a new sample, or to a sample which you are allowed to write to. 
You cannot write to a sample owned by another organisation unless you have explicitly been granted permission to do so. 

* Owner_group takes the format of `<OrgAbbrev>-Owner`, where `OrgAbbrev` the abbreviated name for the data-owning organisation. Usually, you should use your own organisation, or the organisation on whose behalf you are uploading data.

Depending on which proforma is specified for data validation, additional metadata values can be supplied in this file. Here we will use the "minimal" proforma, with the minimum possible columns. This proforma has abbreviation `min`, by supplying `-p min`.

If you are interested, you can see the spec of the minimal pro forma by running

```
austrakka proforma show min
```

Having created a `samples.csv`, you can create the sample records in AusTrakka by running 

```
austrakka metadata add -p min samples.csv
```

### Sequence data types

Sequence data types supported by AusTrakka are:

| Data type | Description |
|:---:|:---:|
| fastq-ill-pe | Paired-end Illumina FASTQ sequences; two read files per record |
| fastq-ill-se | Single-end Illumina FASTQ sequences; one read file per record |
| fastq-ont | Oxford Nanopore (ONT) FASTQ sequences; one read file per record |
| fasta-cns | Single-contig consensus FASTA sequences |
| fasta-asm | FASTA assemblies, which may be multi-contig |

### Adding paired-end Illumina FASTQ sequences to a sample

Uploading of FASTQ sequences is undertaken using a comma-separated file to map Seq_IDs (from previous step) 
to sequences. You can upload `*.fa(sta)` and/or `*.fastq.gz`. 
**Please note the size of uploaded files cannot exceed 4GB.**

The input CSV file for paired-end FASTQ should have three columns:

| Header |                           Description                            |
|:---:|:----------------------------------------------------------------:|
|Seq_ID| the sample name - must match a sample added in the previous step |
|filepath1|           The local path of the read 1 to be uploaded            |
|filepath2|           The local path of the read 2 to be uploaded            |

Having created a `files.csv`, you can upload the sequence files listed in your CSV file by running: 

```
austrakka seq add fastq-ill-pe files.csv
```

### Adding consensus FASTA sequences to a sample

Single-contig consensus FASTA sequences (e.g. viral genomes) are represented by the fasta-cns data type.

To upload FASTA sequences, we upload a FASTA file where the FASTA IDs must exactly match the Seq_IDs 
of the sample records we want the sequences to be stored against. Multiple FASTA sequences (for multiple
Seq_IDs) can be uploaded in a single file.

After doing this, you can upload the sequences in the FASTA file by running
```
austrakka seq add fasta-cns <sequence-file.fa>
```

### Adding other sequence data types to a sample

For other sequence data types, the process is similar to that for paired-end Illumina data, 
but only one sequence file is expected per sample.

The input file to the command should be a CSV file with two columns:

| Header |                           Description                            |
|:---:|:----------------------------------------------------------------:|
|Seq_ID| the sample name - must match a sample added in the previous step |
|filepath|           The local path of the sequence file to be uploaded            |

You can upload sequences of type `fastq-ill-se`, `fastq-ont`, or `fasta-asm` by running 
```
austrakka seq add <data-type> files.csv
```
where `<data-type>` is one of `fastq-ill-se`, `fastq-ont`, or `fasta-asm`.
