// ==ORIGINAL==
class MyThing { }
const f = (): MyThing | undefined => whatever;
g(/*[#|*/f()/*|]*/);
// ==SCOPE::Extract to constant in enclosing scope==
class MyThing { }
const f = (): MyThing | undefined => whatever;
const myThing = f();
g(/*RENAME*/myThing);