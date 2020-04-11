// ==ORIGINAL==
/*[#|*/this.#somePrivateProperty/*|]*/.z();
// ==SCOPE::Extract to constant in enclosing scope==
const somePrivateProperty = this.#somePrivateProperty;
/*RENAME*/somePrivateProperty.z();