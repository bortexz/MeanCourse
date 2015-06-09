#Angular Forms
In this example, we are going to see how to use forms in angularJS.

##Binding to an object
In a form, it's useful to bind all the values to an object* in the controller.

html:

    <form>
        <input type="text" ng-model="myForm.firstName" name="firstName"/>
        <input type="text" ng-model="myForm.lastName" name="lastName"/>
    </form>

js:

    $scope.myForm = {};

\*Note that, if you use a variable directly (firstName instead of myForm.firstName) will not work. That's because form generates it's own $scope, different from the controller. Using an object, if it's not find inside the form's $scope, it will search in parent's $scope (the one we of the controller), and find our object. [More info about $scope hierarchy.](https://github.com/angular/angular.js/wiki/Understanding-Scopes)

##Some input types the angular way
### Checkbox
For checkboxes, you can use **ngModel**, and it will be put to true or false depending on checkbox. If you want other values on your model, like "yes" or "no" instead of boolean, you can set it with **ngTrueValue="yes"** and **ngFalseValue="no"**.

Also, if you want some code executed when the value of a checkbox changes, use **ngChange**.

### Radio buttons
Radio buttons are quite simple, use **ngModel** to specify the variable where to store the value if selected, and set **value** to the value to store.

    <input type="radio"  ng-model="myForm.color" value="red">

Use **ngValue** for using an expression to bind the value.

    <input type="radio"  ng-model="myForm.color" ng-value="someVariable">

### Select boxes
With select boxes, if you have a hardcoded number of options, it's very easy. Just bind ngModel on select, and add a value to each option:


    <select ng-model="myForm.car">
        <option value="nissan">Nissan</option>
        <option value="toyota">Toyota</option>
        <option value="fiat">Fiat</option>
    </select>

If you want enable multioption, then set multiple="true" inside the select.
If you need to take your options from the code, then use **ngOptions**.

    $scope.cars = [
        "Ford Fiesta"
        "Audi A4"
        "Mercedez CLS"
    ]

    <select multiple="true" ng-model="myForm.car" ng-options="car for car in cars">
    </select>

You can also use objects, and use the properties to define the string showed.

    $scope.cars = [
        {model:"Ford Fiesta", color:"red"},
        {model:"Audi A4", color:"blue"},
        {model:"Mercedez CLS", color:"grey"},
    ]

    <select ng-model="myForm.car" ng-options="car.model + '(' +car.color ')' for car in cars">
    </select>

You could use group by too. To see more examples of ngOptions go [here](http://odetocode.com/blogs/scott/archive/2013/06/19/using-ngoptions-in-angularjs.aspx) or visit the official docs [here](https://docs.angularjs.org/api/ng/directive/ngOptions).

##Submitting form
There are two ways to submit our form. First one is adding an ng-click directive to a button inside our form

    <button ng-click="submitForm()">Submit</button>

The other one is to put an input type submit with the directive ng-submit in our form.

    <form ng-submit="submitForm()">
        <input type="submit">
    </form>

##Form validation
You can validate your values before the value gets copied to it's model into the scope.

###Validation directives
**ngMinLength and ngMaxLength** sets the property minimum and maximum length to be a valid value. **ngPattern** evaluates it with a regular expression. **ngRequired** establishes that this value is required to be valid.

###Validation status
Each field of the form has four values to check if the values are valid or not. To access it, you must name the form and it's fields. Let's take this form:

    <form name="myNgForm" novalidate>
        <input type="text" name="firstName" ng-model="myFormData.firstName" ng-required>
    </form>

Note the 'novalidate' here. This prevents the HTML5 default validations.

We can access the following properties:

- **$dirty**: When it's true, it means that the form or field has been used.
- **$pristine**: Reverse from dirty, pristine is when the form or field hasn't been used.
- **$valid**: Set to true when all the validations are passed and the value is valid.
- **$invalid**: Reverse from valid, it's set to true when the validations are failed.

To access any of these properties, we can use $scope.formName.inputName.angularProperty ( $scope.myNgForm.firstName.$dirty) for the input one, and $scope.formName.angularProperty($scope.myNgForm.$dirty) for all the form.

###Adding behaviour after validation
####Disabling submit button
To disable the submit button if we have any error, we can use the directive ngDisabled:

    <button ng-disabled="myNgForm.$invalid">Submit</button>

####Adding error CSS classes
There's a directive, that is not exclusive for forms, that adds or removes a CSS class. It's ngClass, and has many types of evaluation. The one that it's useful now is evaluating an expression.

    <div class='form-control' ng-class="{ 'has-error': myNgForm.myInput.$invalid }">
        <input type="text" name="myInput" >
    </div>

\*has-error is a Bootstrap CSS class that changes the color of the input to red, and it's applied on his div parent with class form-control.

####Showing messages
(This resource in only available after angular 1.3) There's a directive to show messages on forms. It's (guess that!) ngMessages.

    <input type="text" ng-required ng-min-length="6" ng-max-length="16" name="myInput">
    <ng-messages for="userForm.myInput.$error" multiple>
      <ng-message when="required">The field is required</ng-message>
      <ng-message when="minlength">It must be minimum 6 characters long</ng-message>
      <ng-message when="maxlength">It must be maximum 16 characters long</ng-message>
    </ng-messages>
##Useful resources

- http://tutorials.jenkov.com/angularjs/forms.html
- http://www.yearofmoo.com/2014/05/how-to-use-ngmessages-in-angularjs.html
- http://angular-formly.com/#/ (Module to generate forms from json)
