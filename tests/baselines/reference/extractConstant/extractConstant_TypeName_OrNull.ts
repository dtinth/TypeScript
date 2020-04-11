// ==ORIGINAL==
class MyThing { }
const f = (): MyThing | null => whatever;
g(/*[#|*/f()/*|]*/);
// ==SCOPE::Extract to constant in enclosing scope==
class MyThing { }
const f = (): MyThing | null => whatever;
const myThing = f();
g(/*RENAME*/myThing);