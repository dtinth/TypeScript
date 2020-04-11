// ==ORIGINAL==
class MyThing {}
const f = () => someCondition() ? new MyThing() : undefined;
g(/*[#|*/f()/*|]*/);
// ==SCOPE::Extract to constant in enclosing scope==
class MyThing {}
const f = () => someCondition() ? new MyThing() : undefined;
const myThing = f();
g(/*RENAME*/myThing);