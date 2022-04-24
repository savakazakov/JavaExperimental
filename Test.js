// Strict equality.
console.log("Strict equality:");
console.log(true === "true");
console.log("0" === []);
console.log([[]] === false);
console.log([1, []] === false);
console.log(true === true);
// Non-strict equality.
console.log("Non-strict equality:");
console.log(true == true);
console.log(true == "true");
console.log("0" == []);
console.log([[]] == false);
console.log([1, []] == false);
console.log([] == []);
console.log('5' == 5);

a = 4;
a >>> 2;
console.log(a << 1);

let someArray1 = [];
console.log(someArray1[2]);

let array = [];
array[2] = 2;
array[10] = 12;
console.log(array);
array.length = 20;
console.log(array);
array.length = 4;
console.log(array);
array.length = 20;
console.log(array);

let obj = { colour: "red", "long string": 100 };
obj.length = 1.11;
console.log(obj);
console.log(obj.colour, obj["long string"]);

console.log("///////////////////////////////////");

const str = "advanced programing";
console.log(str.toUpperCase());
console.log(str);
str.year = 2;
console.log(str.year);

console.log("test", Object.getOwnPropertyDescriptor(obj, "colour"));
Object.defineProperty(obj, "colour", { writable: true, enumerable: false, configurable: true });
console.log(obj);
Object.defineProperty(obj, "colour", { configurable: true });
console.log(obj);

let book =
{
    title: 'some title',
    author: 'author name',
    info: function (a) {
        return `${a} ${this.title} written by ${this.author}`;
    }
};
console.log(book.info(2));

let arr = [1, 2, 3, 4];
console.log(Object.keys(arr));

function addDef(a, b, c = a + b) {
    return a + b + c;
}

console.log(addDef(1, 2));

console.log(addDef(1, undefined));

function noArgs() {
    console.log(arguments);
}

noArgs(1); // [Arguments] { '0' : 1 } 
noArgs(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }
noArgs({ "complex": "types" }); // [Arguments] { '0': { complex: 'types' } }

function cannotDO() {
    console.log(arguments.shift());
}

({ a, d } = { a: "thing", b: 1000, c: 69 })
console.log(a, d);


function complexFunc2(a, b = 10, c = 20, ...d) {
    console.log(a, b, c, d);
};

let array3 = [1, 2, 3, 4, 6];
complexFunc2(...array3);

const data = [1, 2, 3, 4, 5]
const newData = data.map(
    (elem, index, arr) => elem * 2
);

console.log(data);
console.log(newData);

let testFunc = complexFunc2;
console.log("function pointer");
testFunc(1, 2)

console.log("scope");

function outerFunc() {
    let a = 10;
    console.log(a);
    function innerFunc() {
        let b = 29;
        console.log(a);
    }
    return innerFunc;
}

let f = outerFunc();
f();