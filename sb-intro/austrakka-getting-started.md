---
fontfamily: dejavu
geometry: "left=4cm,right=4cm"
header-includes: 
- \usepackage[document]{ragged2e} 
- \pagenumbering{gobble}
- \usepackage[export]{adjustbox}
- \let\includegraphicsbak\includegraphics 
- \renewcommand*{\includegraphics}[2][]{\includegraphicsbak[frame,#1]{#2}}
---

# Getting started on AusTrakka

## Getting help

If you need technical help with AusTrakka itself, you can email `austrakka-support@unimelb.edu.au`, or contact your project lead, who will put you in touch.

## Invitation and logging in

AusTrakka uses Active Directory for authentication, which allows you to use your existing 
institutional credentials (i.e. your usual email address and password). Your credentials 
remain managed by your institution, which will authenticate you for us each time you log in.

The steps for accessing AusTrakka are:

1. You will receive an email invitation, with a link you can follow to accept the 
invitation. This will allow you to use your institutional credentials. Accepting this 
invitation will not grant AusTrakka or the University of Melbourne access to any information other 
than that shared publicly by your institution (usually, this is just your name and your 
email address.)
2. After accepting this invitation, log in at https://portalprod.austrakka.net.au/ . 
If you need to re-log in AusTrakka will take you to your institution's sign-in 
page to enter your username and password. 
Sometimes there may be a small delay between accepting the invitation and being able to log in.

## On your first log-in

You will find your institution's sample data under the `Samples` menu. Note that we are not 
currently using the `Projects` view for this data.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![](home_page_samples.png){ width=390px }

Sample data can be filtered, sorted, and exported using this tabular view.

On your first log-in, you may find that there are very few columns displayed in the 
samples table. If this is the case, select the `Column Picker` from the top-right-hand 
corner of the samples table. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Column picker](column_picker_location.png){ width=390px }

You can click on the columns you would like to activate 
from the list on the left, and then click the arrow icon to move these into the 
`Active Columns` list.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Column picker example](column_picker_example.png){ width=390px }

Similarly, you can remove columns from your display in this view by selecting them 
from the right-hand list and clicking the arrow icon to move them to the left. 

