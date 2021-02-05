---
id: lesson
title: Lesson
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Learning Objectives

By the end of this class, you should be able to:

- To _clone_ a repository using Git CLI
- To _commit_, _fork_ a repository, and _push_ changes using Git CLI
- To view Git's _history log_ using Git CLI

---

## Before you start

Make sure that you've got `Terminal` / `Git Bash` / `Windows WSL` working correctly. Open a terminal window and type

```
git
```

If you get a response that starts with

```
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]....
```

then everything is working!

If you see something different, make sure that git is installed correctly. You can find instructions for this [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## 1) Why use Git on the Command Line

_This section is taken from [this](https://gidgid.medium.com/why-you-should-use-git-from-the-command-line-7054150e7eb) excellent blog_

Up until now you've been using Git using Github Desktop quite happily - why are we confusing you with a different way to use Git.

Well, there a few really good reasons...

### You feel comfortable everywhere

A big advantage for using Git CLI is that you work comfortably everywhere, the experience of working on your local computer, a colleague computer or even a remote machine with a different OS feels more or less the same (minus your personal configurations perhaps).

### Fully utilizing Git

The big downside of using GUI for Git is that it exposes you to a relatively small interface (whatever part the GUI creator deemed important), this basically means you are not fully interacting with Git and are therefore not familiar with (at least) some of its capabilities. I’ve met some really good developers that used a certain GUI and were not even aware that Git has a staging area. When using the Git CLI you are using the entire Git interface and are therefore able to see the bigger picture, this makes you much more comfortable with Git and will almost certainly expose you to some useful utils like reflog, bisect & git grep (and many more).

The authors of The Pragmatic Programmer sum this idea much better than me:

> Many new programmers make the mistake of adopting a single power tool, such as a particular integrated development environment (IDE), and never leave its cozy interface. This really is a mistake. We need to be comfortable beyond the limits imposed by an IDE. The only way to do this is to keep the basic tool set sharp and ready to use.

### Git CLI gives you the power of the command line

We often try to reuse & build on top of existing tools and this is no different since you’re already using the command line, you are able to compose your Git flow with many useful command-line tools. From looping over each commit and running tests on it, through easily adding files using FZF to using Ag on your logs — the only limit here is your creativity.

### Git CLI enables easier automation & deployment

After using the Git CLI, it’s natural to start automating and scripting your workflow. You can use Git hooks to fail a commit if your tests didn’t pass and even add your Jira ticket ID to the beginning of the commit. This added power allows you to write better deployment script.

## Coursework

You can find this weeks coursework [here](./homework).

## Feedback

It's really helpful if you give us feedback for this lesson. This helps us improve it for future students!

<Feedback module="Git" week="Week 2" />