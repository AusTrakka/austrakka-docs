
# Roles and Permissions

A user's permissions to access and change data within the platform is controlled by their assigned roles.
Most user roles are assigned at the organisation level, or at the project level. 
Users may have multiple roles.

## Organisation roles

[Organisations](/Web-Interface/Organisations/orgs-overview.md) in the Trakka platform represent an institution or group which may own data, and may manage their own users.
An organisation may be, for instance, a public health laboratory.

A user may have multiple roles in an organisation. 

In some cases, an organisation may approve roles for a user external to the organisation. This may be done, for instance, 
in order to allow specific users from another jurisdiction to contribute sequence data or sample metadata to the organisation, when one 
jurisdiction is carrying out sequencing of cases belonging to a different jurisdiction.

The roles available within organisations are:

| Role              | Legacy name | Description                                                                                                                                                                                                                                                               |
|-------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **OrgMember**     | _None_      | This allows the user to see basic information about the organisation, and see other members of the organisation. A user must have this role in their home organisation, and may have it in others. It grants no access to sample or sequence data.                        |
| **OrgViewer**     | Viewer      | Grants the user visibility over _all_ sample records and sequence file listings for the organisation, and over organisation event logs. This does not allow the user to download the sequence data files, only to list them.                                              |
| **Downloader**    | SeqViewer   | Allow the user to list and download sequence data files, for _all_ sequences owned by the organisation.                                                                                                                                                                   |
| **Uploader**      | Uploader    | Allow the user to add, edit and share data owned by the organisation. This includes the ability to add new sample records, edit sample metadata, share sample records with projects, add new sequence data files, and disable/re-enable sample records and sequence data. |
| **GuestUploader** | _None_      | Allows the user to transfer sample ownership from some other organisation to this organisation. This role on its own confers no access or edit rights to the destination organisation's data.                                                                             |


## Project roles

[Projects](/Web-Interface/Projects/projects-overview.md) in the Trakka platform represent a collection of sample records, attached metadata, and analysis results including phylogenetic trees, together with tools for querying and visualising data.

A user may have multiple roles in a project, and may be a member of multiple projects.

The roles available within projects are:

| Role                   | Legacy name                | Description                                                                                                                                                                                                                                                                                                                                                                      |
|------------------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **ProjectViewer**      | Viewer                     | Grants the user visibility over sample records which have been shared with the project, and any of their metadata fields which have been approved for use in the project. Also grants visibility over project analysis outcomes, such as phylogenetic trees, visibility over project proformas, and allows the user to see other project members and their roles in the project. |
| **ProjectContributor** | Uploader                   | Allows the user to use proformas attached to the project to upload and validate sample metadata. Note that the user will also need uploader rights for a data-owning organisation in order to contribute data to the project.                                                                                                                                                    |
| **ProjectAnalyst**     | ProjectAnalyst + SeqViewer | Allows the user to access sequence data files attached to samples shared with the project, and allows the user to upload project datasets containing additional sample metadata which will be visible only within the project, and to upload analysis results such as phylogenetic trees. This role is usually restricted to the analysis team.                                  |                                                                                                                |

