// ==ORIGINAL==
class MyThing { }
f(/*[#|*/new MyThing()/*|]*/);
// ==SCOPE::Extract to constant in enclosing scope==
class MyThing { }
const myThing = new MyThing();
f(/*RENAME*/myThing);