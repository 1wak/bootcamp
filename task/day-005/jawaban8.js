// Datatype Detector

function dataType(x) {
  if (typeof x === "string") {
    console.log("String");
  } else if (typeof x === []) {
    console.log("Array");
  } else if (typeof x === "object") {
    console.log("Object");
  } else if (typeof x === parseInt()) {
    console.log("Integer");
  } else if (typeof x === parseFloat()) {
    console.log("Float");
  } else if (typeof x !== parseInt() && typeof x !== parseFloat()) {
    console.log("Number");
  } else if ((typeof x === x % 8) === 0) {
    console.log("Octadecimal");
  } else if (typeof x === "0x".concat(x)) {
    console.log("Hexadecimal");
  } else {
    console.log("Undefined");
  }
}

dataType("392");
dataType("hello");
dataType(`world`);
dataType({});
dataType({ hello: "world" });
dataType([]);
dataType(["satu", "dua"]);
dataType(1);
dataType(1.25);
dataType(16);
dataType(8);
dataType(0o42);
dataType(0x1c);
dataType(0b11);
