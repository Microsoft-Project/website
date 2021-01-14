## API
1. Post request for label prediction
2. Get word embeddings
3. Get processed text(data)
4. Get data info, returns no of data points used for training and schema of the
	 training data.




#### Project notes:
Goal: Empirical analysis of usage of labels in software development by analyzing Github data.

Expected outcomes:
* A bot which we can deploy on Github.
* Publication at a top SE venue (MSR / IEEE Software / ...).

Reading material:

• Prior work by Nachi and me on Pull Request intents: https://www.eecs.yorku.ca/~wangsong/papers/promise19.pdf / see slides attached.

• Labels feature in Github

o https://docs.github.com/en/github/managing-your-work-on-github/about-labels

o Examples of labels in a real repository: https://github.com/microsoft/vscode/labels

• Good first issues by Github: https://github.blog/2020-01-22-how-we-built-good-first-issues/

Research questions:

• What are the different clusters of labels used in Pull Requests and Issues in Github?

o Possible approach: Embedding based similarity?

• Could we manually group these clusters into intuitive categories?

o Possible approach: Open coding?

• Is it possible to use Machine learning to automatically predict the labels?

Possible approach: Supervised ML?
