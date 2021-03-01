// Datatype Detector
function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

function isHex(n) {
  return Boolean(String(n).match(/^0x[0-9a-f]+$/i));
}

function isOctal(n) {
  return Boolean(String(n).match(/^0o[1-7][0-7]*$/g));
}

function isBinary(n) {
  return Boolean(String(n).match(/^0b[0-1]{1,}$/g));
}

function dataType(x) {
  if (isInt(x) === true) {
    console.log("Integer");
  } else if (isFloat(x) === true) {
    console.log("Float");
  } else if (isOctal(x) === true) {
    console.log("Octal");
  } else if (isHex(x) === true) {
    console.log("Hexadecimal");
  } else if (isBinary(x) === true) {
    console.log("Binary");
  } else if (typeof x === "string") {
    console.log("String");
  } else if (typeof x === []) {
    console.log("Array");
  } else if (typeof x === "object") {
    console.log("Object");
  } else {
    console.log("Invalid");
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
dataType("0o42");
dataType("0x1c");
dataType("0b11");
dataType({ negara: "Indonesia" });
dataType(39);
dataType(44.5);
dataType({});
dataType(["lobak", "timun", "cabai"]);
