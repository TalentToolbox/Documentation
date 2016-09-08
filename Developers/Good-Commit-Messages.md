# Good Commit Messages

Any software project is a collaborative project. It has at least two developers, the original developer, and the original developer a few weeks or months later when the train of thought has long left the station. This later self needs to reestablish the context of a particular piece of code each time a new bug occurs or a new feature needs to be implemented. 

Re-establishing the context of a piece of code is wasteful. We can't avoid it completely, so our efforts should go to reducing it to as small as possible. Commit messages can do exactly that and as a result, a commit message shows whether a developer is a good collaborator.

Good commit messages are important because:

* They make it easier to understand why a change was made when we revisit that code many months/years down the line, avoiding the need to bother the original author to find out more about it
- Without a full understanding of why a piece of code was added, it's easier to add a bug without realising
- They make code reviewing easier
- They allow you to add more context around a change than it would make sense to in a code comment (e.g. you can link the JIRA issue number)

A good commit consists of:

1. The JIRA issue number at the start
2. A brief description of the change (approx 50 characters)
3. A more detailed description after a line break, ideally covering the **why** and the **how**
  - **Why** is it necessary? It may fix a bug, it may add a feature, it may improve performance, reliabilty, stability, or just be a change for the sake of correctness.
  - **How** does it address the issue? For short obvious commits this part can be omitted, but it should be a high level description of what the approach was.


## Examples

Good:
>`BUGS-890 employee names and external ref changed to be non-static in reports
>
> We needed these properties to be 'live' rather than static, so if a person changed their name, that would be reflected in reports This was achieved by pulling this data directly from the Employees table when loading report data.

Bad:
> Get employee details for report straight from employees table
