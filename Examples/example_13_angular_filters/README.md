#Angular Filters
The angularjs official docs describes the filter as:

<cite>"A filter formats the value of an expression for display to the user. They can be used in view templates, controllers or services and it is easy to define your own filter.""</cite>

In other words, a filter is a function applied to an expression before showing it to the user. It can be used in many different ways, e.g:

- Single use filters: are used on one item. Some default single filters are:
    - Formatting Time and Date
    - Currency
    - lowercase and uppercase for strings
    - Number Formatting

- Filters for repeat: Used over an array (usually inside ng-repeat):
    - orderBy
    - limitTo
    - filter (Filters by matching)

More than one filter can be used at the same time. Use the following syntax for filters:

    {{expression | filter1 | filter2 |...}}

Some filters also have arguments:

    {{expression | filter:argument1:argument2:...}}

Here's an example of date formatting (single use filter), where 'today' is a variable of Date format:

    <span>{{today | date:'d-MM-yyyy'}}</span>

Go [here](https://docs.angularjs.org/api/ng/filter/date) for a detailed description of all the possible arguments for dates

See the example for better understanding on how the filters work.

Reference:
[Angular filters (official docs)](https://docs.angularjs.org/api/ng/filter)
