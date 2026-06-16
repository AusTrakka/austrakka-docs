# Transferring Organisation Samples

import TransferOverview from '/img/sample_transfer_screenshots/Org_sample_transfer_main.png';
import TransferDialog from '/img/sample_transfer_screenshots/Org_sample_transfer_dialog.png';
import TransferIcon from '/img/sample_transfer_screenshots/mui_transfer_icon.svg';

This page covers transferring organisation samples in the Trakka web interface. Transferring sample records to a new organisation will remove organisation samples and register those samples as being part of the new organisation.

> Note: You will not be able to reverse this action yourself.

### Selecting samples for transfer

Samples can be transferred directly from within the organisation's sample view. Samples can only be transferred if you have the [Uploader role](/Reference/roles-and-permissions.md#organisation-roles) in the source organisation, and the [Contributor role](/Reference/roles-and-permissions.md#organisation-roles) in the destination organisation.

From within the organisation sample view, to select samples for transfer:
1. Select the candidate samples from the table
2. Click the transfer menu <TransferIcon style={{ paddingLeft: '4px', paddingRight: '4px', width: '30px' }} /> in the top right header of the sample table

<p align="center">
<img src={TransferOverview} class="border" alt="Sample sharing screenshot" style={{ width: '700px' }} />
</p>

### Transferring samples

#### Selecting a destination
Once selected, samples can be transferred to a new destination organisation via the pop up dialog. 

<p align="center">
<img src={TransferDialog} class="border" alt="Sample sharing screenshot" style={{ width: '400px' }} />
</p>

#### Outcome

The transfer outcome should be presented shortly after the **TRANSFER SAMPLES** button has been clicked.

When a sample is transferred to a new organisation, the sample record will no longer appear in the original organisation's sample table. 
