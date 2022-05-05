// Constructor.

export class Interface {
  constructor(name, methods) {
    if (arguments.length != 2) {
      throw new Error(
        'Interface constructor called with ' +
          arguments.length +
          'arguments, but expected exactly 2.'
      );
    }

    this.name = name;
    this.methods = [];
    for (var i = 0, len = methods.length; i < len; i++) {
      if (typeof methods[i] !== 'string') {
        throw new Error(
          'Interface constructor expects method names to be ' +
            'passed in as a string.'
        );
      }
      this.methods.push(methods[i]);
    }
  }
  // Static class method.
  static ensureImplements(object) {
    if (arguments.length < 2) {
      throw new Error(
        'Function Interface.ensureImplements called with ' +
          arguments.length +
          'arguments, but expected at least 2.'
      );
    }

    for (var i = 1, len = arguments.length; i < len; i++) {
      var requiredInterface = arguments[i];
      if (requiredInterface.constructor !== Interface) {
        throw new Error(
          'Function Interface.ensureImplements expects arguments ' +
            'two and above to be instances of Interface.'
        );
      }

      for (
        var j = 0,
          methodsLen = requiredInterface.methods.length;
        j < methodsLen;
        j++
      ) {
        var method = requiredInterface.methods[j];
        if (
          !object[method] ||
          typeof object[method] !== 'function'
        ) {
          throw new Error(
            'Function Interface.ensureImplements: object ' +
              'does not implement the ' +
              requiredInterface.name +
              ' interface. Method ' +
              method +
              ' was not found.'
          );
        }
      }
    }
  }
}

/*


// Example usage: 

// Interfaces.

var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
var FormItem = new Interface('FormItem', ['save']);

// CompositeForm class

var CompositeForm = function(id, method, action) { // implements Composite, FormItem
	...
};

...

function addForm(formInstance) {
    Interface.ensureImplements(formInstance, Composite, FormItem);
    // This function will throw an error if a required method is not implemented, halting execution.
    // All code beneath this line will be executed only if the checks pass.
    ...
}

*/
