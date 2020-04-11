// ==ORIGINAL==
class MyThing { }
class Box<T> {
    constructor(public value: T) { }
}
f(/*[#|*/new Box(new MyThing())/*|]*/);
// ==SCOPE::Extract to constant in enclosing scope==
class MyThing { }
class Box<T> {
    constructor(public value: T) { }
}
const myThingBox = new Box(new MyThing());
f(/*RENAME*/myThingBox);