# \<id-form\>

Idaho form element

## Installation

Add the following to bower.json.

```JSON
{
  "id-form": "https://github.com/accessidaho/egov-id-form.git"
}
```

## Usage

Import the element:

```html
<link rel="import" href="bower_components/id-form/id-form.html">
```

Import form elements you wish to use:

```html
<link rel="import" href="bower_components/id-form/id-input.html">
<link rel="import" href="bower_components/id-form/id-radio.html">
<link rel="import" href="bower_components/id-form/id-select.html">
<link rel="import" href="bower_components/id-form/id-checkbox.html">
<link rel="import" href="bower_components/id-form/id-review.html">
```

Add the element and set properties:

The mask attribute maps to Jquery.inputmask. *For more information, see the [jquery.inputmask.js](http://robinherbots.github.io/Inputmask/) documentation.*


```html
<id-form data="{{data}}" constraints="[[constraints]]" action="/path/to/controller" method="[GET, POST, PUT, DELETE]">
  <id-input label="Name" bind-value="{{data.name}}" name="name" hint="Enter your first and last name" required class="sm"></id-input>
  <id-input label="Email" bind-value="{{data.email}}" name="email" type="email" class="md"></id-input>
  <id-input label="Phone" bind-value="{{data.phone}}" name="phone" type="text" hint="This input is masked" class="md" mask="(999) 999-9999"></id-input>
  <id-checkbox label="Checkbox" bind-value="{{data.checkbox}}" name="checkbox" hint="Check this box"></id-checkbox>
  <id-radio label="Agreement" bind-value="{{data.agreement}}" name="agreement" choices="[[choices]]"></id-radio>
  <id-select label="Select" bind-value="{{data.select}}" name="select" choices="[[choices]]"></id-select>
</id-form>
```


Then add data to the component's properties:

The constraints are used to validate the data. *For more information, see the [validate.js](https://validatejs.org) documentation.*

```js
static get properties() {
  return {
    choices: {
      type: Array,
      value: ['Agree', 'Disagree']
    },
    data: {
      type: Object,
      value: {
        name: null,
        email: null,
        phone: null,
        checkbox: null,
        agreement: null,
        select: null
      }
    },
    constraints: {
      type: Object,
      value: {
        name: {
          presence: true
        },
        email: {
          email: true
        },
        agreement: {
          presence: {message: "must be agreed to."},
          inclusion: {
            within: ['Agree'],
            message: "must be agreed to."
          }
        }
      }
    }
  }
}
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
