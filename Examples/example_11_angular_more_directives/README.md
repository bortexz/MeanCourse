#Other directives
In this example we will see other directives that might be useful in some situations.

##ngShow and ngHide
ngShow and ngHide are used to show or hide an element depending of the result of an expression. With ngShow, if the expression evaluates to true, it will be showed, and if it evaluates to false, it will be hidden by CSS. The ngHide is the same behaviour but reversed.

    <div ng-show="expression">Will be shown if expression evaluates to true</div>

##ngIf
ngIf is similar to ngShow, because it shows a content if the expression evaluates to true, and hides it otherwise. The main difference is that ng-if **removes** the HTML if the expression evaluates to false, and creates it from scratch when evaluated to true. Careful with that, so bindings are also removed from elements.

    <div ng-if="expression">This div only exists when expression evaluates to true </div>

##ngInclude
The ngInclude directive, includes the html template specified inside the element that uses it.

app.html

    <div ng-include="'title.html'"></div>

title.html

    <h1>Title</h1>

result:

    <div><h1>Title</h1></div>