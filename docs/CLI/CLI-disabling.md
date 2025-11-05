
# Disabling samples and sequences with the CLI

If you have uploaded data in error, you can soft-delete it so that it will not be visible to other AusTrakka users, 
regardless of sharing settings. If for legal or other reasons you need a full delete rather than a soft delete, 
so that data is completely purged from the servers, please contact an admin.

## Disabling a sample record

If you have uploaded a sample record in error, you can immediately disable it with 
```
austrakka sample disable -s <seq-id>
```

This acts as a soft delete and means that the metadata and sequences associated with this Seq_ID will be invisible to 
all except administrators. You can re-enable a disabled record with 
```
austrakka sample enable -s <seq-id>
```

Both the `enable` and `disable` commands can take multiple `-s <seq-id>` arguments to enable or disable multiple records at once. 
Alternatively, the `--file` parameter can be used to specify a file containing a list of Seq_IDs to enable or disable, one per line.

If a sample record has already been used in an analysis and appears in a phylogenetic tree view, and is then disabled, 
it will be redacted from any trees in which it appears. The node name in the tree will be replaced with "Redacted" 
and no metadata will be accessible. The tree itself will only be regenerated when a new analysis is run, so you will 
need to contact the project lead or analysts to request this.

Note that you cannot re-upload metadata to a disabled Seq_ID. You must first re-enable it, or have it completely purged 
by an admin. This is to avoid disabled metadata values being accidentally and silently re-enabled by a subsequent upload.

 ## Replacing incorrect sequence files

If you do not want to remove all data associated with a Seq_ID, but have uploaded the wrong sequence files, 
you can simply replace them with the correct files by uploading to the same Seq_ID. Use the `--force` option by running, 
for instance (for paired-end Illumina data):
```
austrakka seq add fastq-ill-pe <files.csv> --owner <org-abbreviation> --force 
```
where `org-abbreviation` is the owning organisation of the Seq_IDs in question.

This will disable the original sequence files and replace them with the new files. If you need the original files to be 
completely purged from the servers, please contact an administrator as described above.

Note that you must upload to the same Seq_ID and the same sequence data type in order to replace the files.
