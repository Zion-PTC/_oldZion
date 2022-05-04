////// CONSTRUCTOR ///////
let newObject = new Object({ a: 'ciao', b: 'goodbye' })
let iterable = ['ciao', 'bello']

console.log('////// STARTS HERE ///////\n////////////////////////');
console.log('////// CONSTRUCTOR ///////');
console.table({
  newObject
})
////// STATIC METHODS ///////
console.log('////// STATIC METHODS ///////');

/**
 * Copies the values of all enumerable own properties from one or
 * more source objects to a target object.
 */
let assign = Object.assign(newObject)
/** Creates a new object with the specified prototype object and properties. */
let emptyObj = {}
let create = Object.create(emptyObj, { a: { value: 'addio', enumerable: true }, b: { value: 'farewell', enumerable: true } })
/** Adds the named property described by a given descriptor to an object. */
let defineProperties = Object.defineProperties(create, {
  c: {
    value: 'this value was added 1',
    writable: true
  },
  d: {
    value: 'this value was added 2',
    writable: true
  }
})
/** Adds the named properties described by the given descriptors to an object. */
let defineProperty = Object.defineProperty(create, 'e',
  {
    value: 'this value was added 3'
  }
)
/**
 * Returns an array containing all of the [key, value] pairs of a
 * given object's own enumerable string properties.
 */
let entries = Object.entries(create)
/** Freezes an object. Other code cannot delete or change its properties. */
let freeze = Object.freeze(create)
/**
 * Returns a new object from an iterable of [key, value] pairs.
 * (This is the reverse of Object.entries).
 */
const mappedEntries = new Map([
  ['a', 'bar'],
  ['b', 42]
]);
let fromEntries = Object.fromEntries(mappedEntries)
/** Returns a property descriptor for a named property on an object. */
let getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(create, 'a')
/** Returns an object containing all own property descriptors for an object. */
let getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors(create)
/**
 * Returns an array containing the names of all of the given
 * object's own enumerable and non-enumerable properties.
 */
let getOwnPropertyNames = Object.getOwnPropertyNames(create)
/** Returns an array of all symbol properties found directly upon a given object. */
let create2 = Object.create(emptyObj, { a: { value: 'addio', enumerable: true }, b: { value: 'farewell', enumerable: true } })
let aSym = Symbol('a');
let bSym = Symbol.for('b');
create2[aSym] = "localSymbol";
create2[bSym] = "globalSymbol";
let getOwnPropertySymbols = Object.getOwnPropertySymbols(create2)
/** Returns the prototype (internal [[Prototype]] property) of the specified object. */
let prototype1 = { a: 'prototipo' };
let create3 = Object.create(prototype1);
let getPrototypeOf = Object.getPrototypeOf(create3)
/**
 * Compares if two values are the same value. Equates all NaN values (which differs from both
 * Abstract Equality Comparison and Strict Equality Comparison).
 */
let is = Object.is(create)
/** Determines if extending of an object is allowed. */
let isExtensible = Object.isExtensible(create)
/** Determines if an object was frozen. */
let isFrozen = Object.isFrozen(create3)
/** Determines if an object is sealed */
let isSealed = Object.isSealed(create)
/**
 * Returns an array containing the names of all of the given
 * object's own enumerable string properties.
 */
let keys = Object.keys(create)
/** Prevents any extensions of an object. */
let preventExtensions = Object.preventExtensions(create)
/** Prevents other code from deleting properties of an object. */
let seal = Object.seal(create)
/** Sets the object's prototype (its internal [[Prototype]] property). */
let setPrototypeOf = Object.setPrototypeOf(new Object({ a: 'ulallaa' }), newObject)
/**
 * Returns an array containing the values that correspond to all
 * of a given object's own enumerable string properties.
 */
let values = Object.values(create)

console.table({
  entries,
  getOwnPropertyNames,
  getOwnPropertySymbols,
  keys,
  values,
})
console.table({
  assign, create, defineProperties, defineProperty,
  freeze, fromEntries, create2aSym: create2[aSym], create2bSym: create2[bSym],
  getPrototypeOf,
  is, isExtensible, isFrozen, isSealed, preventExtensions,
  seal, setPrototypeOf,
})
console.table({
  getOwnPropertyDescriptor,
  getOwnPropertyDescriptorsa: getOwnPropertyDescriptors.a,
  getOwnPropertyDescriptorsb: getOwnPropertyDescriptors.b,
  getOwnPropertyDescriptorsc: getOwnPropertyDescriptors.c,
  getOwnPropertyDescriptorsd: getOwnPropertyDescriptors.d,
})

////// INSTANCE PROPERTIES ///////
console.log('////// INSTANCE PROPERTIES ///////')
class Tree {
  constructor(name) {
    this.description = 'This is a tree constructor'
    this.name = name;
  }
}

let redwood = new Tree('Redwood')
let treeConstructor = '' + redwood.constructor
let redwoodProto = Tree.prototype === redwood.__proto__ ? true : false
console.table({
  treeConstructor, redwoodProto
})

////// INSTANCE METHODS ///////
console.log('////// INSTANCE METHODS ///////')
////// Object.prototype.__defineGetter__() //////
/**
 * Warning: This feature is deprecated in favor of defining getters using
 * the object initializer syntax or the Object.defineProperty() API.
 * While this feature is widely implemented, it is only described in the
 * ECMAScript specification because of legacy usage.
 * This method should not be used since better alternatives exist. 
 */
/* Deprecated Method */
redwood.__defineGetter__('descBy__defineGetter__', function () { return this.description; });
/* Using the get operator */
redwood = { ...redwood, get descBy_getOperator() { return this.description } }
/* Using Object.defineProperty */
Object.defineProperty(redwood, 'descBy_defineProperty', {
  get: function () {
    return this.description
  }
})
////// Object.prototype.__defineSetter__() //////
/**
 * Warning: This feature is deprecated in favor of defining setters using the
 * object initializer syntax or the Object.defineProperty() API.
 * However, as it is widely implemented and used on the Web,
 * it is very unlikely that browsers will stop implementing it.
 */
/* Deprecated Method */
redwood.__defineSetter__('set__value__', function (val) { this.setBy__defineSetter__ = val })
redwood.set__value__ = 5
/* Using the set operator */
redwood = {
  ...redwood, descBy_defineProperty: redwood.descBy_defineProperty,
  /**
   * @param {any} val
   */
  set valueViaOperator(val) { this.setBy_setOperator = val }
}
redwood.valueViaOperator = 7
/* Using Object.defineProperty */
Object.defineProperty(redwood, 'set_setBy_defineProperty', {
  set: function (val) {
    this.setBy_defineProperty = val
  }
})
redwood.set_setBy_defineProperty = 10
////// Object.prototype.__lookupGetter__() //////
/**
 * Deprecated: This feature is no longer recommended.
 * Though some browsers might still support it, it may have already been
 * removed from the relevant web standards, may be in the process of being dropped,
 * or may only be kept for compatibility purposes. Avoid using it,
 * and update existing code if possible; see the compatibility table
 * at the bottom of this page to guide your decision. Be aware that this
 * feature may cease to work at any time.
 * // SYNTAX //
 * __lookupGetter__(sprop)
 * // DESCRIPTION //
 * If a getter has been defined for an object's property, it's not possible
 * to reference the getter function through that property,
 * because that property refers to the return value of that function.
 * __lookupGetter__ can be used to obtain a reference to the getter function.
 * It is now possible to do this in a standardized way using
 * Object.getOwnPropertyDescriptor() and Object.getPrototypeOf().
 */
redwood = {
  ...redwood,
  get foo() {
    return Math.random() > 0.5 ? 'foo' : 'bar'
  }
}
// Non-standard and deprecated way
let __lookupGetter__ = '' + redwood.__lookupGetter__('foo');
// Standard-compliant way
let fooBy_getOwnPropertyDescriptor = '' + Object.getOwnPropertyDescriptor(redwood, 'foo').get

/////// Object.prototype.__lookupSetter__() ////////
/**
 * Deprecated: This feature is no longer recommended.
 * Though some browsers might still support it, it may have already been
 * removed from the relevant web standards, may be in the process of being dropped,
 * or may only be kept for compatibility purposes.
 * Avoid using it, and update existing code if possible; see the compatibility
 * table at the bottom of this page to guide your decision.
 * Be aware that this feature may cease to work at any time.
 * The __lookupSetter__ method returns the function bound as a setter to the specified property.
 * // SYNTAX //
 * __lookupSetter__(sprop)
 * // Parameters
 * sprop
 *  A string containing the name of the property whose setter should be returned.
 * // Return value
 * The function bound as a setter to the specified property.
 * // Description
 * If a setter has been defined for an object's property,
 * it was not possible to reference the setter function through that property,
 * because that property refers to the return value of that
 * function. __lookupSetter__ can be used to obtain a reference to the setter function.
 * It is now possible to do this in a standardized way using Object.getOwnPropertyDescriptor().
 */
redwood = {
  ...redwood,
  /**
   * @param {any} value
   */
  set doo(value) {
    this.dar = value
  }
}
// Non-standard and deprecated way
let __lookupSetter__ = '' + redwood.__lookupSetter__('doo');
// Standard-compliant way
let dooBygetOwnPropertyDescriptor = '' + Object.getOwnPropertyDescriptor(redwood, 'doo').set

/////// Object.prototype.hasOwnProperty() ////////
/**
 * Returns a boolean indicating whether an object contains the specified
 * property as a direct property of that object and not inherited through
 * the prototype chain.
 * 
 * The hasOwnProperty() method returns a boolean indicating whether the
 * object has the specified property as its own property
 * (as opposed to inheriting it).
 * 
 * Note: Object.hasOwn() is recommended over hasOwnProperty(), in browsers where it is supported.
 * // SYNTAX
 * hasOwnProperty(prop)
 * @param {any} prop The String name or Symbol of the property to test.
 * @returns true if the object has the specified property as own property; false otherwise.
 */
let hasOwnProperty = (prop) => {
  return Object.prototype.hasOwnProperty(prop)
}
/**
 * // Description
 * The hasOwnProperty() method returns true if the specified property
 * is a direct property of the object — even if the value is null or undefined.
 * The method returns false if the property is inherited, or has not been declared at all.
 * Unlike the in operator, this method does not check for the specified property
 * in the object's prototype chain.
 * The method can be called on most JavaScript objects, because most
 * objects descend from Object, and hence inherit its methods.
 * For example Array is an Object, so you can use hasOwnProperty()
 * method to check whether an index exists:
 */
let fruits = ['Apple', 'Banana', 'Watermelon', 'Orange'];
let hasFourthElement = fruits.hasOwnProperty(3);   // true ('Orange')
let hasFifthElement = fruits.hasOwnProperty(4);   // false - not defined
/**
 * The method will not be available in objects where it is reimplemented,
 * or on objects created using Object.create(null) (as these don't inherit
 * from Object.prototype).
 * Examples for these cases are given below.
 */

/**
 * Examples
 * Using hasOwnProperty to test for an own property's existence
 * The following code shows how to determine whether the example object contains a property named prop
 */
let example = {};
let hasExampleInitiallyAPropCalled_prop_ = example.hasOwnProperty('prop');
example.prop = 'exists';
let hasExampleFinallyAPropCalled_prop_ = example.hasOwnProperty('prop');
example.prop = null;
let hasExampleFinallyANullPropCalled_prop_ = example.hasOwnProperty('prop');
example.prop = undefined;
let hasExampleFinallyAUndefinedPropCalled_prop_ = example.hasOwnProperty('prop');
/**
 * Direct vs. inherited properties
 * The following example differentiates between direct properties and properties
 * inherited through the prototype chain:
 */
example.prop = 'exists';

// `hasOwnProperty` will only return true for direct properties:
let hasExampleNotInherited_prop_ = example.hasOwnProperty('prop');
let hasExampleNotInherited_toString_ = example.hasOwnProperty('toString');
let hasExampleNotInherited_hasOwnProperty_ = example.hasOwnProperty('hasOwnProperty');   // returns false

// The `in` operator will return true for direct or inherited properties:
let hasExampleInherited_prop_ = 'prop' in example;
let hasExampleInherited_toString_ = 'toString' in example;
let hasExampleInherited_hasOwnProperty_ = 'hasOwnProperty' in example;

/**
 * Iterating over the properties of an object
 * The following example shows how to iterate over the enumerable
 * properties of an object without executing on inherited properties.
 */
let buz = {
  fog: 'stack',
  // hasOwnProperty
};
console.log('toString' in buz);

for (let name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log('this is fog (' +
      name + ') for sure. Value: ' + buz[name]);
  }
  else {
    console.log(name); // toString or something else
  }
  // sembra non funzionare, dovrebbe fare il log anche
  // dei medoti ereditati
}

console.table({
  descBy__defineGetter__: redwood.descBy__defineGetter__,
  descBy_getOperator: redwood.descBy_getOperator,
  descBy_defineProperty: redwood.descBy_defineProperty,
  setBy__defineSetter__: redwood.setBy__defineSetter__,
  setBy_setOperator: redwood.setBy_setOperator,
  setBy_defineProperty: redwood.setBy_defineProperty,
  __lookupGetter__,
  fooBy_getOwnPropertyDescriptor,
  __lookupSetter__,
  dooBygetOwnPropertyDescriptor,
  example,
  hasExampleInitiallyAPropCalled_prop_,
  hasExampleFinallyAPropCalled_prop_, hasExampleFinallyANullPropCalled_prop_,
  hasExampleFinallyAUndefinedPropCalled_prop_,
  hasExampleNotInherited_prop_, hasExampleNotInherited_toString_,
  hasExampleNotInherited_hasOwnProperty_, hasExampleInherited_prop_,
  hasExampleInherited_toString_, hasExampleInherited_hasOwnProperty_
})
console.table({
  fruits,
  hasFourthElement, hasFifthElement,
})

////// Object.prototype.isPrototypeOf() ////////
/**
 * @param {obj} obj The object whose prototype chain will be searched.
 * @returns A Boolean indicating whether the calling object lies in
 * the prototype chain of the specified object.
 * @error A TypeError is thrown if prototypeObj is undefined or null.
 */
let isPrototypeOf = (obj) => {
  return Object.prototype.isPrototypeOf(obj)
}
/**
 * The isPrototypeOf() method checks if an object exists in another
 * object's prototype chain.
 */
function Foo() { }
function Bar() { }

Bar.prototype = Object.create(Foo.prototype);


const bar = new Bar();

let isFooPrototypeOfBar = Foo.prototype.isPrototypeOf(bar)
// expected output: true
let isBarPrototypeOfBar = Bar.prototype.isPrototypeOf(bar)
// expected output: true

/**
 * @note Note: isPrototypeOf() differs from the instanceof operator.
 * In the expression "object instanceof AFunction",
 * the object prototype chain is checked against AFunction.prototype,
 * not against AFunction itself.
 * @description The isPrototypeOf() method allows you to check
 * whether or not an object exists within another object's prototype
 * chain.
 * @examples // Using isPrototypeOf
 * This example demonstrates that Baz.prototype, Bar.prototype,
 * Foo.prototype and Object.prototype exist in the prototype
 * chain for object baz:
 */
function Baz() { }

Baz.prototype = Object.create(Bar.prototype);

const foo = new Foo();
const baz = new Baz();

// prototype chains:
// foo: Foo <- Object
// bar: Bar <- Foo <- Object
// baz: Baz <- Bar <- Foo <- Object
let isBazProtoOfBaz = Baz.prototype.isPrototypeOf(baz)
let isBazProtoOfBar = Baz.prototype.isPrototypeOf(bar)
let isBazProtoOfFoo = Baz.prototype.isPrototypeOf(foo)
let isBarProtoOfBaz = Bar.prototype.isPrototypeOf(baz)
let isBarProtoOfFoo = Bar.prototype.isPrototypeOf(foo)
let isFooProtoOfBaz = Foo.prototype.isPrototypeOf(baz)
let isFooProtoOfBar = Foo.prototype.isPrototypeOf(bar)
let isObjectProtoOfBaz = Object.prototype.isPrototypeOf(baz)
/**
 * The isPrototypeOf() method — along with the instanceof operator
 * — comes in particularly handy if you have code that can only
 * function when dealing with objects descended from a specific
 * prototype chain; e.g., to guarantee that certain methods or
 * properties will be present on that object.
 * For example, to execute some code that's only safe to run if a
 * baz object has Foo.prototype in its prototype chain, you can do this:
 */
let ifThat = () => {
  if (Foo.prototype.isPrototypeOf(baz)) {
    return "geil!!"
  }
}
let ifFooIsProtoOfBazDoSomeShit = ifThat()

console.log('/////// Object.prototype.isPrototypeOf() ///////');
console.log('prototype chains:\nBaz <- Bar <- Foo <- Object');
console.table({
  isFooPrototypeOfBar, isBarPrototypeOfBar,
  isBazProtoOfBaz, isBazProtoOfBar, isBazProtoOfFoo, isBarProtoOfBaz,
  isBarProtoOfFoo, isFooProtoOfBaz, isFooProtoOfBar, isObjectProtoOfBaz,
  ifFooIsProtoOfBazDoSomeShit
})

//////// Object.prototype.propertyIsEnumerable() ////////
/**
 * @syntax propertyIsEnumerable(prop)
 * @description Every object has a propertyIsEnumerable method.
 * This method can determine whether the specified property in an
 * object can be enumerated by a for...in loop, with the exception
 * of properties inherited through the prototype chain.
 * If the object does not have the specified property,
 * this method returns false.
 * @param {any} prop The name of the property to test.
 * @returns A true or false value indicating whether the
 * specified property is enumerable and is the object's own property.
 */
let propertyIsEnumerable = (prop) => {
  return Object.prototype.propertyIsEnumerable(prop)
}
/**
 * @example1 A basic use of propertyIsEnumerable
 * @description The following example shows the use of
 * propertyIsEnumerable on objects and arrays:
 */
var o = {};
var a = [];
o.prop = 'is enumerable';
a[0] = 'is enumerable';

let isObjetProp_prop_enumerable = o.propertyIsEnumerable('prop');
let isObjetProp_index0_enumerable = a.propertyIsEnumerable(0);

/**
 * @example2 User-defined vs. built-in objects
 * @description The following example demonstrates the enumerability
 * of user-defined vs. built-in properties:
 */
var a2 = ['is enumerable'];

let isa2Prop_0_enumerable = a2.propertyIsEnumerable(0);
let isa2Prop_length_enumerable = a2.propertyIsEnumerable('length');

let isMatProp_random_enumerable = Math.propertyIsEnumerable('random');

/**
 * @example3 Direct vs. inherited properties
 */
var a3 = [];
a3.propertyIsEnumerable('constructor');         // returns false

function firstConstructor() {
  this.property = 'is not enumerable';
}

function secondConstructor() {
  this.method = function () { return 'is enumerable'; };
}

secondConstructor.prototype = new firstConstructor;

var o2 = new secondConstructor();
o2.arbitraryProperty = 'is enumerable';

let directProp_arbitraryProperty_ = o2.propertyIsEnumerable('arbitraryProperty');
let directMethod_method_ = o2.propertyIsEnumerable('method');
let inheritedProp_property_ = o2.propertyIsEnumerable('property');

o2.property = 'is enumerable';

let inheritedEditedProp_property_ = o2.propertyIsEnumerable('property');

// These return false as they are on the prototype which
// propertyIsEnumerable does not consider (even though the last two
// are iterable with for-in)
let inheridetProp_prototype_ = o.propertyIsEnumerable('prototype');
let inheridetProp_constructor_ = o.propertyIsEnumerable('constructor'); // returns false
let inheridetProp_firstMethod_ = o.propertyIsEnumerable('firstMethod'); // returns false


console.log('/////// Object.prototype.propertyIsEnumerable() ///////');
console.table({
  example1: "example1",
  isObjetProp_prop_enumerable, isObjetProp_index0_enumerable,
  example2: "example2",
  isa2Prop_0_enumerable, isa2Prop_length_enumerable,
  isMatProp_random_enumerable,
  example3: "example3",
  directProp_arbitraryProperty_, directMethod_method_,
  inheritedProp_property_, inheritedEditedProp_property_,
  inheridetProp_prototype_, inheridetProp_constructor_,
  inheridetProp_firstMethod_
})

/////// Object.prototype.toLocaleString() ////////
/**
 * The toLocaleString() method returns a string representing the object.
 * This method is meant to be overridden by derived objects for
 * locale-specific purposes.
 * @syntax toLocaleString()
 * @returns A string representing the object.
 * @description Object's toLocaleString returns the result of
 * calling toString().
 * This function is provided to give objects a generic toLocaleString
 * method, even though not all may use it. See the list below.
 * 
 * //// Objects overriding toLocaleString \\\\\\
 * Array: Array.prototype.toLocaleString()
 * Number: Number.prototype.toLocaleString()
 * Date: Date.prototype.toLocaleString()
 * TypedArray: TypedArray.prototype.toLocaleString()
 * BigInt: BigInt.prototype.toLocaleString()
 */
let toLocaleString = () => {
  return Object.prototype.toLocaleString()
}
/**
 * @example1 Array toLocaleString() override
 * On Array objects, toLocaleString() can be used to print array values
 * as a string, optionally with locale-specific identifiers
 * (such as currency symbols) appended to them:
 * For example:
 */
const testArray = [4, 7, 10];
let euroPrices = testArray.toLocaleString('fr', {
  style: 'currency',
  currency: 'EUR'
});

/**
 * @example2 Date toLocaleString() override
 * On Date objects, toLocaleString() is used to print out date
 * displays more suitable for specific locales:
 * For example:
 */
const testDate = new Date(Date.now());
let deDate = testDate.toLocaleString('de');
var frDate = testDate.toLocaleString('fr');
var itDate = testDate.toLocaleString('it-IT');
var usDate = testDate.toLocaleString('en-US');

/**
 * @example3 Number toLocaleString() override
 * On Number objects, toLocaleString() is used to print
 * out number displays more suitable for specific locales,
 * e.g. with the correct separators:
 * For example:
 */
const testNumber = 2901234564;
let deNumber = testNumber.toLocaleString('de');
let frNumber = testNumber.toLocaleString('fr');
let usNumber = testNumber.toLocaleString('en-US');
let itNumber = testNumber.toLocaleString('it');

console.log('/////// Object.prototype.toLocaleString() ///////');
console.table({
  example1: 'example1',
  euroPrices,
  example2: 'example2',
  deDate, frDate, itDate, usDate,
  example3: 'example3',
  deNumber, frNumber, usNumber, itNumber
})

//////// Object.prototype.toString() //////////
console.log('/////// Object.prototype.toString() ///////');
/**
 * The toString() method returns a string representing the object.
 * @returns A string representing the object.
 * @description An object's toString() method is most
 * commonly invoked when that object undergoes...
 * explicit type conversion to a string (for example,
 * String(myObject))
 * implicit type coercion into a string (for example,
 * myObject + "hello world")
 * @note This assumes the object does not have a custom
 * implementation of SymboltoPrimitive. If it does,
 * that method will take priority and be called instead of
 * toString().
 * While not as common, the method can be invoked directly
 * (for example, myObject.toString()).
 * By default toString() returns "[object Type]",
 * where Type is the object type.
 * const o = new Object().toString() // o is "[object Object]";
 * This method is inherited by every object descended from Object,
 * but can be overridden by either the author or built-in
 * descendant objects (for example, Number.prototype.toString()).
 * @note Starting in JavaScript 1.8.5, toString() called on null returns
 * [object Null], and undefined returns [object Undefined], as
 * defined in the 5th Edition of ECMAScript and subsequent Errata.
 * See Using toString() to detect object class.
 * @params By default toString() takes no parameters. However,
 * objects that inherit from Object may override it with their
 * own implementation that do take parameters. For example,
 * the toString() methods implemented by Number and BigInt
 * take an optional radix parameter.
 */
let toString = () => {
  return Object.prototype.toString()
}

/**
 * @example1
 */
function Dog(name) {
  this.name = name;
}
const dog1 = new Dog('Gabby');
Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};
console.log('Example 1');
console.table({
  gabby: dog1.toString()
})

/**
 * @example2 Overriding the default toString method
 * You can create a function to be called in place of the default
 * toString()method. The toString() function you create must
 * return a primitive. If it returns an object and the method
 * is called implicitly (i.e. during type conversion or coercion),
 * then its result will be ignored and the value of a related method,
 * valueOf(), will be used instead, or a TypeError will be thrown
 * if none of these methods return a primitive.
 * The following code defines the Dog object type and creates
 * theDog, an object of type Dog:
 */
function Dog2(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}
const theDog = new Dog2('Gabby', 'Lab', 'chocolate', 'female');
/**
 * If you call the toString() method on this custom object, it
 * returns the default value inherited from Object:
 * theDog.toString(); // returns [object Object]
 * The following code creates and assigns dogToString() to
 * override the default toString() method. This function generates
 * a string containing the name, breed, color, and sex of the object,
 * in the form "property = value;".
 */
Dog2.prototype.toString = function dogToString() {
  return 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
}
/**
 * Or, using template strings:
 */
Dog2.prototype.toString = function dogToString() {
  return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
}
/**
 * With the preceding code in place, any time toString() is used in a Dog context,
 * JavaScript automatically calls the dogToString()
 * function, which returns the following string:
 */
console.log('Example 2');
console.table({
  theDog: theDog.toString()
})

/**
 * @example3 Using toString() to detect object class
 * toString() can be used with every object and (by default) allows
 * you to get its class.
 * 
 * To use the base Object.prototype.toString() with an object that has
 * had it overridden,you need to call Function.prototype.call() or
 * Function.prototype.apply() on it, passing the object you want to inspect
 * as the first parameter (called thisArg).
 */
const toString1 = Object.prototype.toString;
/**
 * Using toString() in this way is unreliable; objects can change
 * the behavior of Object.prototype.toString() by defining a
 * Symbol.toStringTag property, leading to unexpected results.
 * For example:
 */
const myDate = new Date();

myDate[Symbol.toStringTag] = 'myDate';
Object.prototype.toString.call(myDate);     // [object myDate]

Date.prototype[Symbol.toStringTag] = 'prototype polluted';

console.log('Example 3');
console.table({
  stringDate: toString1.call(new Date),
  stringString: toString1.call(new String),
  stringMath: toString1.call(Math)
})
console.log('Since JavaScript 1.8.5');
console.table({
  stringUndefined: toString1.call(undefined),
  stringNull: toString1.call(null)
})
console.table({
  stringDate: Object.prototype.toString.call(myDate),
  stringDateSymbolDate: Object.prototype.toString.call(myDate),
  stringDateSymbolPolluted: Object.prototype.toString.call(new Date())
})

//////// Object.prototype.valueOf() ////////
console.log('/////// Object.prototype.valueOf() ///////');
/**
 * The valueOf() method returns the primitive value of the specified object.
 * @returns The primitive value of the specified object.
 * @description JavaScript calls the valueOf method to convert an object
 * to a primitive value. You rarely need to invoke the valueOf method
 * yourself; JavaScript automatically invokes it when encountering an
 * object where a primitive value is expected.
 * 
 * By default, the valueOf method is inherited by every object descended
 * from Object. Every built-in core object overrides this method to
 * return an appropriate value. If an object has no primitive value,
 * valueOf returns the object itself.
 * You can use valueOf within your own code to convert a built-in
 * object into a primitive value. When you create a custom object,
 * you can override Object.prototype.valueOf() to call a custom
 * method instead of the default Object method.
 */
let valueOf = () => {
  return Object.prototype.valueOf()
}
function MyNumberType(n) {
  this.number = n;
}
MyNumberType.prototype.valueOf = function () {
  return this.number;
};
const object1 = new MyNumberType(4);
console.table({
  object1,
  objectPlus3: new MyNumberType(object1 + 3)
})

/**
 * @note ///// Overriding valueOf for custom objects \\\\\
 * You can create a function to be called in place of the default valueOf
 * method. Your function must take no arguments.
 * 
 * Suppose you have an object type MyNumberType and you want to
 * create a valueOf method for it. The following code assigns a
 * user-defined function to the object's valueOf method:
 */
MyNumberType.prototype.valueOf = function () { return this.number; };
/**
 * @note
 * With the preceding code in place, any time an object of type
 * MyNumberType is used in a context where it is to be represented as
 * a primitive value, JavaScript automatically calls the function
 * defined in the preceding code.
 * 
 * An object's valueOf method is usually invoked by JavaScript,
 * but you can invoke it yourself as follows:
 */
console.table({
  valueOf: object1.valueOf()
})
/**
 * @note Objects in string contexts convert via the toString() method,
 * which is different from String objects converting to string
 * primitives using valueOf. All objects have a string conversion,
 * if only "[object type]". But many objects do not convert to number,
 * boolean, or function.
 */

/**
 * @example1 Using valueOf on custom types
 */
console.log('Example 1');
function MyNewNumberType(n) {
  this.number = n;
}
var myObj = new MyNewNumberType(4);
let objBeforeValueOfOverride = myObj
console.table({
  sumUsingObjBefoer: objBeforeValueOfOverride + 3,
})
MyNewNumberType.prototype.valueOf = function () {
  return this.number;
};
console.table({
  myObj,
  sumUsingObjAfter: myObj + 3
})

/**
 * @example2 Using unary plus
 */
console.log('Example 2');
console.table({
  unaryPlusString: +"5",
  unaryPlusString2: +"",
  unaryPlustNaN: +"1 + 2",
  ['same as (new Date()).getTime()']: +new Date(),
  unaryPlusAString: +"foo",
  ['NaN']: +{},
  ['0 (toString() returns an empty string list)']: +[],
  ['1']: +[1],
  ['Unary on array gives Nan']: +[1,2],
  ['Unary on Set gives Nan']: + new Set([1]),
  ['Uncaught TypeError: Cannot convert a BigInt value to a number']: '+BigInt(1)',
  ['Nan']: undefined,
  ['Unary plus null']: + null,
  ['Unary plus true']: + true,
  ['Unary plus false']: + false,
})