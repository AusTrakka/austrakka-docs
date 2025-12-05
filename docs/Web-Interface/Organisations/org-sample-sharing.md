# Managing Sample Sharing

import SharingOverview from '/img/sharing_screenshots/Org_sample_share_main.png';
import ShareIcon from '/img/sharing_screenshots/mui_share_icon.svg';
import ShareDialog from '/img/sharing_screenshots/Org_sample_share_dialog.png';
import ShareOutcome from '/img/sharing_screenshots/Org_sample_share_success.png';

<!-- TODO: Add links to viewer/upload etc permissions -->

This page covers sample sharing in the Trakka web interface. For information on sharing samples from the command-line, see the [CLI sample sharing](/docs/CLI/CLI-sharing-records.md) page. 

Sharing sample records will register sample as being part of the target destination, which is most often a project. This will share any assocaited sequence files with project analysts, and will share existing metdata with project members if those metadata variables appear in the target shairng destination.



### Selecting records for sharing

Samples can be shared directly from within the organisation's owner group sample view. The share button will only be visibile in the table if the selected organisation group is the organisation's owner group and you have the [Viewer role](/Reference/roles-and-permissions.md#organisation-roles) in your organisation's Owner group.

From within the organisation sample view, to select samples for sharing:
  1. Select your organisation's owner group
  2. Select the candidate samples from the table
  3. Click the share icon <ShareIcon style={{ paddingLeft: '4px', paddingRight: '4px', width: '20px' }} /> in the top right header of the sample table


<p align="center">
<img src={SharingOverview} class="border" alt="Sample sharing screenshot" style={{ width: '700px' }} />
</p>

### Sharing sample records

#### Selecting a destination
Once selected, samples can be shared via the dialog from your organisation's owner group to either projects, or organisation groups. There are two sharing "destination types":

  1. **Project** - You can share to any project in which you are have the [Uploader role](/Reference/roles-and-permissions.md#organisation-roles) in.
  2. **Organisation group** - You can only share to the Everyone group of your organisation, if you have the [Uploader role](/Reference/roles-and-permissions.md#organisation-roles) in your organisation's owner group.

#### Shared data preview
Once you have selected the destination type, and destination project or organisation group, you may see a "shared data preview" on the right hand side of the dialog. This lists the fields currently configured within the **sharing destination**. If these fields are populated for the samples you are sharing, they will also be shared. 

<p align="center">
<img src={ShareDialog} class="border" alt="Sample sharing screenshot" style={{ width: '700px' }} />
</p>

#### Shared outcome
The outcome should be presented shortly after the **SHARE** button has been clicked.

<p align="center">
<img src={ShareOutcome} class="border" alt="Sample sharing outcome screenshot" style={{ width: '350px' }} />
</p>


