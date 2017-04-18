/*!
 * Repeat Validator.
 */

(function() {
  "use strict";

  if ("validate" in window) {
    validate.validators.repeat = function(values, options, key, attributes) {
      if (values.constructor !== Array) {
        return "must be an array."
      }

      return values.map(v => {
        if (v === '') v = null;
        let validation = validate.single(v, options);
        if (validation) {
          validation = validation.map(a => {
            return validate.capitalize(validate.prettify(key) + ' ' + a);
          })
        }
        return (validation || null);
      });
    };
  }
})();
