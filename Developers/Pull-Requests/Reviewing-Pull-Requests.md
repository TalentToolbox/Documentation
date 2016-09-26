# Pull Requests and Code Reviews

#### What is a pull request and how do I create one?

Pull requests give us a structured way to submit a piece of work for code review, easily see the code changes made, record feedback, check that feedback has been implemented, and then accept the change into a particular branch. 

GitHub have a good page all about this, see [here](https://help.github.com/articles/about-pull-requests/).
At the moment code reviews have to be done via the web interface for github.com, however, they are working on [bringing this functionality to Visual Studio](https://github.com/github/VisualStudio/issues/491).

#### As the person creating the pull request...

- Use the [Pull Request Template](https://github.com/TalentToolbox/Documentation/blob/master/Developers/Pull-Requests/Pull-Request-Template.md) to give the details needed for the reviewer of the pull request. This uses markdown - [info here](https://help.github.com/enterprise/11.10.340/user/articles/github-flavored-markdown/).
- Keep your work focussed - don't submit a pull request that has changes doing more than one thing
- If there are multiple parts to a JIRA issue (e.g. backend admin page(s), frontend UI changes), then consider splitting that into multiple issues, each with the own pull request
- Ensure you've followed the [Definition of Done](https://github.com/TalentToolbox/Documentation/blob/master/Developers/Definition-of-Done.md) up until the code review step
- Assign the pull request to the person you'd like to review your code. If there's a known expert for the feature you've changed, choose that person to review the pull request
- Generally, your pull request will be into a release branch (e.g. `release\barmy-badger`)

#### As the person reviewing the pull request...

- Give feedback in the right way, help people learn and improve, be considerate when critiquing the work of others (consider iWAM profile)
- Make sure the pull request will eventually be merged into the correct destination branch (i.e. not in `master` if it should be going into a release branch)
- When reviewing work, ask the following questions...

1. Does it solve the problem as defined in the JIRA issue?
2. Does it fit into the overall application architecture?
3. Is it well architected as a whole?
4. Does it follow best practices (e.g. code guidelines)?
5. Does it improve or reduce the maintainability of the codebase?
6. Is it inline with — or does it enhance — the branding and styles?
