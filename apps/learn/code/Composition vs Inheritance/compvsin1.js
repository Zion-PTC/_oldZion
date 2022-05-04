// source:
// https://stackoverflow.com/questions/8696695/composition-inheritance-and-aggregation-in-javascript
/**
 * Composition is simply when a class is composed of other classes; or to say it another way, an instance of an object has references to instances of other objects.

Inheritance is when a class inherits methods and properties from another class.

Let's say you have two functionality, A and B. You want to define a third functionality, C, that has some or all of both A and B. You could either make C extend from B and A, in which case C has everything B and A has because C isA B and A, or you can make each instance of C have an instance of A and an instance of B, and invoke items on those functionalities. In the latter case, each instance C in effect wraps an instance of B and an instance of A.

Of course, depending on the language, you might not be able to have a class extend from 2 classes (e.g. Java doesn't support multiple inheritance), but that's a language specific detail that has nothing to do with the concept.

Now, for the language specific details...

I used the word class, but javascript has no notion of Class as such. It has objects, and thats it (other than the simple types). Javascript uses prototypal inheritance, which means it has a way of efficiently defining objects and the methods on those objects (this is the topic for another question; you can search SO as there are already answers.)

So going with our example above, you have A, B, and C.

For inheritance, you would have


 */

// define an object (which can be viewed as a "class")
function A() {}

// define some functionality
A.prototype.someMethod = function () {};

// If you wanted C to extend A, you would do
C.prototype = new A();
C.prototype.constructor = A;

/**
 * The language is irrelevant when dealing with composition vs inheritance. If you understand what class is and what an instance of a class is, then you have all you need.

Composition is simply when a class is composed of other classes; or to say it another way, an instance of an object has references to instances of other objects.

Inheritance is when a class inherits methods and properties from another class.

Let's say you have two functionality, A and B. You want to define a third functionality, C, that has some or all of both A and B. You could either make C extend from B and A, in which case C has everything B and A has because C isA B and A, or you can make each instance of C have an instance of A and an instance of B, and invoke items on those functionalities. In the latter case, each instance C in effect wraps an instance of B and an instance of A.

Of course, depending on the language, you might not be able to have a class extend from 2 classes (e.g. Java doesn't support multiple inheritance), but that's a language specific detail that has nothing to do with the concept.

Now, for the language specific details...

I used the word class, but javascript has no notion of Class as such. It has objects, and thats it (other than the simple types). Javascript uses prototypal inheritance, which means it has a way of efficiently defining objects and the methods on those objects (this is the topic for another question; you can search SO as there are already answers.)

So going with our example above, you have A, B, and C.

For inheritance, you would have

// define an object (which can be viewed as a "class")
function A(){}

// define some functionality
A.prototype.someMethod = function(){}
If you wanted C to extend A, you would do

C.prototype = new A();
C.prototype.constructor = A;
Now every instance of C would have the method someMethod, because every instance of C "isA" A.

Javascript doesn't have multiple inheritance* (more on this later), so you can't have C extend both A and B. You can use composition, however, to give it the functionality. Indeed, this is one of the reasons composition is preferred by some over inheritance; there are no limits on combining functionality (but this isn't the only reason).
 */
function C() {
  this.a = new A();
  this.b = new B();
}

// someMethod on C invokes the someMethod on B.
C.someMethod = function () {
  this.a.someMethod();
};

/**
 * So there are your simple examples for both inheritance and composition. However, this is not the end of the story. I said before that Javascript does not support multiple inheritance, and in a sense it doesn't, because you can't base the prototype of an object off the prototypes of multiple objects; i.e. you can't do
 */

C.prototype = new B();
C.prototype.constructor = B;
C.prototype.constructor = A;

/**
 * because as soon as you do the third, line, you just undid the the second line. This has implications for the instanceof operator.

However, this doesn't really matter, because just because you can't redefine the constructor of an object twice, you can still add any methods you want to the prototype of an object. So just because you can't do the above example, you can still add anything you want to C.prototype, including all the methods on the prototypes of both A and B.

Many frameworks support this and make it easy. I do a lot of Sproutcore work; with that framework you can do


 */

A = {
  method1: function () {},
};

B = {
  method2: function () {},
};

C = SC.Object.extend(A, B, {
  method3: function () {},
});

/**
 * Here I defined functionality in object literals A and B, and then added the functionality of both to C, so every instance of C has methods 1, 2, and 3. In this particular case, the extend method (provided by the framework) does all the heavy lifting of setting up the prototypes of the objects.

EDIT -- In your comments, you bring out a good question, namely "If you use composition, how do you reconcile the scope of the main object against the scope of the objects of which the main object is composed".

There are a bunch of ways. The first is simply to pass arguments. So


 */

C.someMethod = function () {
  this.a.someMethod(arg1, arg2);
};

/**
 * Here you are not messing with scopes, you are simply passing arguments around. This is a simple and very viable approach. (the arguments can come from this or be passed in, whatever...)

Another way to do it would be to use the call (or apply) methods of javascript, which basically allows you to set the scope of a function.
 */

C.someMethod = function () {
  this.a.someMethod.call(this, arg1, arg2);
};

//to be a bit more clear, the following is equivalent

C.someMethod = function () {
  var someMethodOnA = this.a.someMethod;
  someMethodOnA.call(this, arg1, arg2);
};
/**
 * 
In javascript, functions are object, so you can assign them to variables.

the call invocation here is setting the scope of someMethodOnA to this, which is the instance of C.
 */
