# Regular Expressions (RegEx)

A regular expression, also known as a rational expression, or regex, is a sequence of characters that can be included in code, or search algorithms, to match certain patterns of characters within your code, or text. This string-searching algorithm is typically used to find and replace specific character strings but can also be used to validate unique inputs. We will get more into the details about both of these usages in the next paragraph but first let's take a look at a sample regex.

```
/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
```

The example above is a regular expression that can be used to match an email address. This regex would likely be used to validate a user's email input to ensure that the email begins with a certain pattern of characters, followed by an "@" symbol, domain and extension.

Also, the regex could be used to find and replace certain parts of your code, or text, that includes a pattern of characters similar to an email. For example, imagine if you needed to redact all the email addresses in specific document. You could `Ctrl F` all "@gmail.com", "@yahoo.com", "@aol.net", etc., and manually redact each address, or you could use a regex to effectively open your search to `[any name]@[any domain].[any extension]`.

Overall, a regular expression is an important tool used across many programming languages that circumvents many limitations of a basic search. To get more experience with regular expressions check out https://regexr.com/.

## Summary

In this Gist, we will be covering the Javascript regular expression used for matching an email. We will break down each character and/or section, one by one, and explain the significance of each component.

```
/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
```

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)
- [Author](#author)

## Regex Components

### Anchors

"***/^***([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})***$/***"

Anchors in a regular expression, such as `^` and `$`, are use to identify the specific position of the string being searched. Using the regular expression referenced above as an example (matching an email), we utilize the caret `^` character as an anchor to match the beginning of a string and the dollar sign `$` character as an anchor to match the end of a string.

These anchors are important for multiple reasons. Probably the most important reason is to clearly define the beginning and end of a string being searched, so you do not include extra spaces, or characters, before and after the string. It also eliminates any confusion as to which part of the string should be selected when the search criteria is met for similar instances within the same string.

Note: It is also important to call out that a regular expression is enclosed with delimiters, such as a forward slash `/` at the beginning and end of the regex, but otherwise does not alter the search's functionality.

#### Example

Since it is tricky to show exactly how anchors work on an email, let's use the regular expression `/cat/` globally on the string `cats like to catch birds and play with other cats`. In this example, the regex will find "***cat***s like to ***cat***ch birds and play with other ***cat***s". As you can see, without anchors the search with return all instances of the letter combination `cat` within the string regardless of positioning. However, a search of `/cats$/` will take the ending position into account and return "cats like to catch birds and play with other ***cats***" while `/^cats/` will take the beginning position into account and return "***cats*** like to catch birds and play with other cats". Although this is a very unique example, and does not relate to matching an email, you can see how the anchors play a key role in finding specific patterns in specific locations.

When matching or validating an email, this will ensure there are no extra spaces or non-defined characters before or after the email.

### Quantifiers

"/^([a-z0-9_\.-]***+***)@([\da-z\.-]***+***)\.([a-z\.]***{2,6}***)$/"

Quantifiers in a regular expression, such as `+` and `{...}`, are use to quantify the number of preceding characters in the character set that should be matched in the search. In the email match regex, we utilize the plus sign `+` character as a quantifier to ensure there is at least one specified character in the preceding character set as well as the brackets `{2,6}` to ensure there are between 2 and 6 (inclusive) characters in the preceding character set.

These quantifiers are important to ensure certain parts of the string are not left blank, or do not include the necessary number of characters.

#### Example

Let's use the regular expression `/^[a-z]+@[a-z]{2,6}\.com$/` on the email strings `helloworld@gmail.com`, `helloworld@codingclass.com` and `1@gmail.com`. In this example, if we focus on only the quantifiers, the only email string that will match would be `helloworld@gmail.com` since ***helloworld*** consists of at least one of the defined characters, specified by the `+`, and ***gmail*** consists of 5 characters (between 2 and 6), specified by the `{2,6}`. The `helloworld@codingclass.com` email will not be matched because ***codingclass*** consists of 11 characters and the `1@gmail.com` email will not be matched since ***1*** is not an `[a-z]` defined character(s).

### Character Classes


"/^([***a-z0-9_\.-***]+)@([***\da-z\.-***]+)\.([***a-z\.***]{2,6})$/"

Character classes in a regular expression, such as `a-z` and `\d`, are use to identify a set of characters to be matched in a specified part of the expression. In the email match regex, we utilize the following character classes:

- `a-z` Match any ***lowercase*** letter from a-z.
- `0-9` Match any number from 0-9.
- `_` Match an underscore.
- `\.` Match a period. Note that a "\" is used to escape the "." since "." has it's own function in regex.
- `_` Match a hyphen.
- `@` Match an "@" character.
- `\d` Match any digit.

Note: Character classes are typically enclosed with brackets `[]` and defined as a bracket expression. More details below.

#### Example

Let's use the regular expression `/^([a-z0-9_\.-]+)@([\da-z]+)\.com$/` on the email strings `hello-world42@gmail.com`, `Hello-World42@gmail.com` and `hello-world42@gmail_yahoo.com`. In this example, if we focus on only the character classes, the only email string that will match would be `hello-world42@gmail.com` since ***hello-world42*** consists of only lowercase letters, digits, and hyphen, specified by the `[a-z0-9_\.-]`, and ***gmail*** consists of only lowercase letters, specified by the `[\da-z]`. The `Hello-World42@gmail.com` email will not be matched because ***Hello-World42*** includes uppercase letters and the `hellow-word42@gmail_yahoo.com` email will not be matched since ***gmail_yahoo*** includes an underscore.

### Flags

Flags, also known as modifiers or options, in a regular expression are additional parameters that can be used in the matching process and typically appear outside of the delimiters `/.../`.

#### Example

Since there are no flags in the email matching regex, we won't get into too much detail. Here are a few examples:
- `g` Enables global mapping (i.e., matches the whole string rather than the first match).
- `i` Removes case sensitivity.
- `m` Enables multiline mode (i.e., ^ and $ anchors match the start and end of lines instead of the entire string).

### Grouping and Capturing

"/^***(***[a-z0-9_\.-]+***)***@***(***[\da-z\.-]+***)***\.***(***[a-z\.]{2,6}***)***$/"

Grouping and capturing, or also known as a capturing group, in a regular expression, noted as `(...)`, are use to match one or more occurrences of the contents within (typically bracket expressions). In the email match regex, we utilize three capturing groups `(...)@(...).(...)`.

Note: The parentheses `()` do not affect the functionality of the regex; however, they do group specific patterns together as a single unit to allow for certain groups to be referenced as needed.

#### Example

Since the capturing group is rather self-explanatory, let's see how capturing groups are useful when trying to reference specific groups via a `console.log()`. Let's use the regular expression `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/` on the email string `helloworld@gmail.com`.

In Javascript, if we wrote `const email = 'helloworld@gmail.com'` followed by `const regex = email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)` and logged the results with `console.log(regex[0])`, `console.log(regex[1])`, `console.log(regex[2])`, `console.log(regex[3])`, and `console.log(regex[4])`, we would get the following results: ***helloworld@gmail.com***, ***helloworld***, ***gmail***, ***com***, and ***undefined***. Note that the first object is the full string.

### Bracket Expressions

"/^(***[a-z0-9_\.-]***+)@(***[\da-z\.-]***+)\.(***[a-z\.]***{2,6})$/"

Bracket Expressions in a regular expression, noted as `[...]`, are use to contain a character, or character class, that should be matched in the search. In the email match regex, we utilize three bracket expressions including `[a-z0-9_\.-]`,`[\da-z\.-]`, and `[a-z\.]`.

These bracket expressions are important to ensure certain character sets are grouped properly.

#### Example

If we were to remove the brackets from the previous example and use the regular expression `/^(a-z0-9_\.-+)@(\da-z+)\.com$/` on the email strings `hello-world42@gmail.com`, we would return nothing since we are not matching a character set.

### Greedy and Lazy Match

Greedy and Lazy Match in a regular expression are a form of quantifiers that will specify how many times a character, or character class, will match and is typically noted by a `.+` or `.*` for greedy and `.+?` or `.*?` for lazy.

#### Example

Since there are no greedy or lazy matches in the email matching regex, we won't get into too much detail. Let's use the regular expression `<.+>` and `<.+?>` on the string `<a>hello world</a>`. The greedy match will include the whole string `<a>hello world</a>` while the lazy match will only include the `<a>` and `</a>`.

### Boundaries

Boundaries in a regular expression, such as `^` or `\b`, represent the position of a character, or character set, in a string. Similar to anchors, boundaries are important to define where a specific match should occur.

#### Example

Since we have reviewed anchors previously and no other boundaries occur in the email matching regex, we won't get into too much detail. Here are a few examples:
- `\b` Matches the position between a character(s) and non-character (e.g., `\bcat\b` will only match the exact word "cat" and not if cat is part of a large word)
- `^` and `$` Match the beginning and end of the string, respectively.

### Back-references

### Look-ahead and Look-behind

Look-ahead and Look-behind are features in a regular expression that matches specific patterns that are followed by other specific patterns without including the other pattern. There are four main expressions including positive `?=` and negative `?!` look-ahead and positive `?<=` and negative `?<!` look-behind.

#### Example

There are no positive/negative look-ahead/behind features in the email matching regex, but the concept is very intriguing, so there are a few examples below. Feel free to skip this section if needed.

- `Positive Look-Ahead` Matches a specific pattern only if another specific pattern follows it, but only includes the original pattern. For example, the regex `/apple(?= pie)/` would return ***apple*** if the string was `apple pie` and would return nothing if the string was `apple slices`. 
- `Negative Look-Ahead` Doesn't match a specific pattern if another specific pattern follows it. For example, the regex `/apple(?! pie)/` would return nothing if the string was `apple pie` and would return ***apple*** if the string was `apple slices`.
- `Positive Look-Behind` Matches a specific pattern only if another specific pattern precedes it, but only includes the original pattern. For example, the regex `/(?<=cookie\s)dough/` would return ***dough*** if the string was `cookie dough` and would return nothing if the string was `bread dough`. 
- `Negative Look-Ahead` Doesn't match a specific pattern if another specific pattern precedes it. For example, the regex `/(?<!cookie\s)dough/` would return nothing if the string was `cookie dough` and would return ***dough*** if the string was `bread dough`.

## Author

This Gist was written and published by Stephen Rossetti, an aspiring coder and full-stack developer attending the UMN Coding Bootcamp. A link to my GitHub profile can be found [here](https://github.com/stephenrossetti). Please reach out with any questions, comments, or concerns!