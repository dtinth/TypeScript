// ==ORIGINAL==
class MyThing { }
const f = () => [new MyThing()];
g(/*[#|*/f()/*|]*/);
// ==SCOPE::Extract to constant in enclosing scope==
class MyThing { }
const f = () => [new MyThing()];
const myThingArray = f();
g(/*RENAME*/myThingArray);