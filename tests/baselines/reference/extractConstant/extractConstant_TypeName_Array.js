// ==ORIGINAL==
const f = () => [1, 2, 3];
g(/*[#|*/f()/*|]*/);
// ==SCOPE::Extract to constant in enclosing scope==
const f = () => [1, 2, 3];
const array = f();
g(/*RENAME*/array);