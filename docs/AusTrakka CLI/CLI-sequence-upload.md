---
sidebar_position: 3
---

# Uploading sequence data with the CLI

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

Uploading of FASTQ sequences is undertaken using a comma-separated file to map Seq_IDs
to sequences; if these are new samples these can be optionally created with the `seq add` commands. 

You can upload `*.fa(sta)` and/or `*.fastq.gz`. 
**Please note the size of uploaded files cannot exceed 4GB.**

The input CSV file for paired-end FASTQ should have three columns:

| Header |                           Description                            |
|:---:|:----------------------------------------------------------------:|
|Seq_ID| the sample name|
|filepath1|           The local path of the read 1 to be uploaded            |
|filepath2|           The local path of the read 2 to be uploaded            |

Having created a `files.csv`, you can upload the sequence files listed in your CSV file by running: 

```
austrakka seq add fastq-ill-pe --csv files.csv
```

This assumes that the `Seq_ID` values map to existing samples. If these are new samples, you can create them by
appending the `--create`, `--owner-org` and `--shared-projects` to the `seq add` command:

```
austrakka seq add fastq-ill-pe --csv files.csv --create --owner-org <org-abbreviation> --shared-projects <project-abbreviation>
```
where 

- `org-abbreviation` is the abbreviation of the organisation that will own all samples created by running the command.
- `project-abbreviation` is ab abbreviation of a project which the sample will be shared to.


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
|Seq_ID| the sample name |
|filepath|           The local path of the sequence file to be uploaded            |

You can upload sequences of type `fastq-ill-se`, `fastq-ont`, or `fasta-asm` by running 
```
austrakka seq add <data-type> --csv files.csv
```
where `<data-type>` is one of `fastq-ill-se`, `fastq-ont`, or `fasta-asm`.
