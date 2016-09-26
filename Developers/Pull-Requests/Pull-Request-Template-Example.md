#### JIRA Issue Number
TT-500

#### What does this PR do? _(please provide any background)_
This is the backend admin work, which is the first half of the work for TT-500, which allows the user to clear the translations cache

#### How can this be tested?
1. Log in to backend admin area
2. Change a translation key's default value on a given page, e.g. a page header
3. Load that page on the frontend
4. Repeat step 2 and change to something new
5. Repeat step 3 to see that nothing has changed
6. Go to Content > Translations and click the "Reset Translations Cache" button
7. Repeat step 3 and see that the new translation has taken effect

#### Any techical debt? _(if so, describe)_
Yes. I know we're replacing the underlying cache technology, so I've saved some time by customising XYZ in a non ideal way. If we decide to keep this underlying caching tech, we should fix this properly by doing ABC.

#### Screenshots / Screencast _(optional)_
None
