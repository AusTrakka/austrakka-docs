
# Sequence data

Sequence data refers to files containing nucleic acid sequences generated from genomic sequencing of 
pathogens of interest. In Trakka, these are stored as FASTQ or FASTA files.

The current sequence data types recognised by Trakka are:

| Data type | Description |
|:---:|:---:|
| fastq-ill-pe | Paired-end Illumina FASTQ sequences; two read files per record |
| fastq-ill-se | Single-end Illumina FASTQ sequences; one read file per record |
| fastq-ont | Oxford Nanopore (ONT) FASTQ sequences; one read file per record |
| fasta-cns | Single-contig consensus FASTA sequences |
| fasta-asm | FASTA assemblies, which may be multi-contig |

Every set of sequence data files should be associated with a unique Seq_ID, which will also be used to link relevant metadata values.

In the case of consensus single-contig FASTA sequences, a single FASTA file may be uploaded containing multiple
Seq_IDs provided as FASTA IDs, and the relevant sequences will be attached to the relevant Seq_IDs in the database. 
For all other sequence data types, the Seq_ID must be specified per uploaded file, or in the case of paired-end FASTQ data, per file pair.

Sequence data files can be uploaded through either the web application or from the command-line. 
For instructions on uploading sequence data files, see either the [Sequence Upload](../Uploads/sequence-uploads.md)
page in the web application, or the instructions on [Uploading sequence data in the CLI](../CLI/CLI-sequence-upload.md).
Sequence data can be uploaded via the Sequence Upload page in the web interface, or from the command-line 
using the sequence upload commands in the CLI.