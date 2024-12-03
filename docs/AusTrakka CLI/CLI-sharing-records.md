---
sidebar_position: 6
---

# Managing sample sharing with the CLI

### Sharing sample records with projects and groups

Sharing settings for a sample record control the sharing of metadata and sequence data associated with 
the specified Seq_ID. If a Seq_ID is shared with a project group, then:

* Any metadata fields enabled for the project will be visible to users with a Viewer role in the project.
* Sequence data will be available to users with a SeqViewer role in the project. This will only be approved analysts 
for the investigation in question.
* Project analysts may upload trees and datasets referring to the Seq_ID.

Initial sharing settings for a sample record are set during record creation (metadata upload) via the `Shared_groups` 
field in the CSV. It is also possible to change sharing settings for a sample record via the `sample share` and 
`sample unshare` commands. 

To share a sample with a group, run
```
austrakka sample share -g <group-name> -s <seq-id>
```

Usually, you will want to share with a project. In this case, the group name is the project abbreviation plus `-Group`, so for instance
```
austrakka sample share -g MyProject-Group -s DemoSample
```

Multiple Seq_IDs can be specified like 
```
austrakka sample unshare -g <group-name> -s <seq-id1> -s <seq-id2> -s <seq-id3> ...
```

### Removing sample records from projects or groups

Un-sharing (redacting) a sample from a project is rare but may be needed if a sample has been added to a project in error. 

To unshare a sample record, run 
```
austrakka sample unshare -g <group-name> -s <seq-id>
```

When a Seq_ID is unshared from a project:
* The sample record will no longer appear in the project Samples table or in any plots.
* Associated sequence files will no longer be available to project analysts, and sequence files will be automatically deleted from any project context on the analysis servers on the next sync.
* Existing trees containing this Seq_ID may still exist in the project, but the metadata for the record in question will no longer be searchable or viewable on the tree, and the tree node will be identified with a "Redacted" label instead of being labelled with the Seq_ID.
* Existing project datasets referring to this Seq_ID may still exist in the project, but their metadata will not be available to Viewers as it will not be able to be linked to a project Seq_ID.

If you need all analyses which were run using this sequence data (such as trees and datasets) to be completely deleted, you will need to contact the project lead.




