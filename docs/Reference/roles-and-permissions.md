
# Roles and Permissions

A user's permissions to access and change data within the platform is controlled by their assigned roles.
Most user roles are assigned at the organisation level, or at the project level. 
Users may have multiple roles.

## Organisation roles

[Organisations](/Web-Interface/Organisations/orgs-overview.md) in the Trakka platform represent an institution or group which may own data, and may manage their own users.
An organisation may be, for instance, a public health laboratory.

A user may have multiple roles in an organisation. 

In some cases, an organisation may approve roles for a user external to the organisation. This may be done, for instance, 
in order to allow specific users from another jurisdiction to upload sequence data on behalf of the organisation, when one 
jurisdiction is carrying out sequencing of cases belonging to a different jurisdiction.

The roles available within organisations are:

| Role          | Description                                                                                                                                                                                                                                                               |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Viewer**    | Grants the user visibility over _all_ sample records and sequence file listings for the organisation. This does not allow the user to download the sequence data files, only to list them.                                                                                |
| **SeqViewer** | Allow the user to list and download sequence data files, for _all_ sequences owned by the organisation.                                                                                                                                                                   |
| **Uploader**   | Allow the user to add, edit and share data owned by the organisation. This includes the ability to add new sample records, edit sample metadata, share sample records with projects, add new sequence data files, and disable/re-enable sample records and sequence data. |


## Project roles

[Projects](/Web-Interface/Projects/projects-overview.md) in the Trakka platform represent a collection of sample records, attached metadata, and analysis results including phylogenetic trees, together with tools for querying and visualising data.

A user may have multiple roles in a project, and may be a member of multiple projects.

The roles available within projects are:

| Role               | Description                                                                                                                                                                                                                                                                                                                                                                      |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Viewer**         | Grants the user visibility over sample records which have been shared with the project, and any of their metadata fields which have been approved for use in the project. Also grants visibility over project analysis outcomes, such as phylogenetic trees, visibility over project proformas, and allows the user to see other project members and their roles in the project. |
| **Uploader**       | Allows the user to use proformas attached to the project to upload and validate sample metadata. Note that the user will also need uploader rights for a data-owning organisation in order to contribute data to the project.                                                                                                                                                    |
| **ProjectAnalyst** | Allows the user to upload project datasets containing additional sample metadata which will be visible only within the project, and to upload analysis results such as phylogenetic trees. This role is usually restricted to the analysis team.                                                                                                                                 |
| **SeqViewer**      | Allows the user to access sequence data files attached to samples shared with the project. This role is usually restricted to the analysis team.                                                                                                                                                                                                                                 |

