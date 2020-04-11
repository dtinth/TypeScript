// ==ORIGINAL==
class MyThing {}
const f = () => someCondition() ? new MyThing() : null;
g(/*[#|*/f()/*|]*/);
// ==SCOPE::Extract to constant in enclosing scope==
class MyThing {}
const f = () => someCondition() ? new MyThing() : null;
const myThing = f();
g(/*RENAME*/myThing);