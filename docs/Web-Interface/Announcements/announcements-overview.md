# Announcements

The announcements page allows an adminstrator to send a new email to a desired set of users. The primary use case is simplifying the process of contacting multiple users by grouping.

The user is expected to supply the following values in order to create a new announcement.

| Property |                           Description                          |
|:--------:|:--------------------------------------------------------------:|
|To       | Can be 'system', or any combination of users, organisations or               projects                                               |
| Subject | The topic of the announcement, will be sent as the email subject                |
|Body | The email content, supporting basic text and hyperlinks                    |

## Recipient Types

With the exception of `system`, all recipient types can be mixed and matched where needed. Switching between `users`/`projects`/`organisations` in the search interface will preserve all previously selected recipients regardless of category. 

><strong>WARNING: Switching to `system` will clear all previous selections.</strong>

### System (all users)

When selecting `system` as the recipient type, the announcement will be sent to every active user on the platform. Due to the wide scope of this recipient type, you will be prompted to confirm this action when attempting to send in order to mitigate the risk of unintentional wide reaching announcements.

### Users

When switching to `users`, you will be able to search and select from a list of all active users in the platform. 

### Organisations & Projects

When switching either `organisations` or `projects`, you will be able to search and select from a list of those that are active in the platform. Upon adding your selection the list of existing project or organisation members will be retrieved from the server, after which the count of members will be displayed alongside them. 

After adding an organisation or project you can click on it to inspect the current members. In the event that no members exist there will be a clear warning and the announcement will refuse to send until that target is removed as a recipient.

## FAQ

### Will recipients see each others email addresses?
No, the current design is that each recipient is added in the `BCC` section of the email and therefore have no knowledge of the other recipients.

### Does the email say it's from me?
No, the email itself will be sent from an address linked to the mailserver (e.g. noreply@trakka.org). If the sender is important for the email, you should make this clear in the announcement body.

As an additional note, a support email address will be supplied in the `CC` section of the email for users to contact for additional information or support.

### Can I add styles to the text?
Currently this is not possible. In order to ensure consistent presentation and user safety, the announcement is HTML encoded prior to sending out to recipients. Because of this, any attempts to apply HTML tags (e.g. to display italic or bold text) will simply render escaped characters.

### Can I add links to an announcement?
Yes! While all content is normally encoded, an exception to this rule is made for `http`/`https`/`mailto:` links, which will be presented to recipients as valid hyperlinks rather than raw text.

### Can I attach documents?
Attachments (e.g .docx, .png) are not supported. You will also be unable to embed any images in the announcement body. 

If external content needs to be shared, it is recommended that safe links are added to the announcement body. 