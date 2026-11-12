# Transferring Organisation Samples

import DisableOverview from '/img/sample_disable_screenshots/Org_sample_disable_main.png';
import ConfigureIcon from '/img/sample_transfer_screenshots/mui_settings_icon.svg';
import DisableDialog from '/img/sample_disable_screenshots/Org_sample_disable_dialog_1.png';
import ConfirmDisableDialog from '/img/sample_disable_screenshots/Org_sample_disable_dialog_2.png';

This page covers disabling organisation samples in the Trakka web interface. Disabling sample records will remove them from the organisation line list and from any projects the sample records have been shared with. 

> Note: This action cannot easily be undone in the user interface.

### Selecting samples for disabling

Samples can be disabled directly from within the organisation's sample view. You can only disable samples if you have the [Uploader role](/Reference/roles-and-permissions.md#organisation-roles) in the organisation.

From within the organisation sample view, to select samples for disabling:
1. Select the candidate samples from the table
2. Click the <ConfigureIcon style={{ paddingLeft: '4px', paddingRight: '4px', width: '30px' }} />**Configure selected samples** in the top right header of the sample table
3. Click **Disable samples** from the menu

<p align="center">
<img src={DisableOverview} class="border" alt="Sample disable screenshot" style={{ width: '700px' }} />
</p>

### Disabling samples
Once selected, samples can be disabled via the pop up dialog. You will also be asked to confirm your selection before being able to proceed as this action cannot easily be undone in the user interface.

<p align="center">
<img src={DisableDialog} class="border" alt="Sample transfer screenshot" style={{ width: '400px' }} />
</p>
<p align="center">
<img src={ConfirmDisableDialog} class="border" alt="Confirm sample transfer screenshot" style={{ width: '400px' }} />
</p>

#### Outcome

The disable outcome should be presented shortly after the **DISABLE SAMPLES** button has been clicked.
