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
console.log("5" == 5);

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
Object.defineProperty(obj, "colour", {
    writable: true,
    enumerable: false,
    configurable: true,
});
console.log(obj);
Object.defineProperty(obj, "colour", { configurable: true });
console.log(obj);

let book = {
    title: "some title",
    author: "author name",
    info: function (a)
    {
        return `${a} ${this.title} written by ${this.author}`;
    },
};
console.log(book.info(2));

let arr = [1, 2, 3, 4];
console.log(Object.keys(arr));

function addDef(a, b, c = a + b)
{
    return a + b + c;
}

console.log(addDef(1, 2));

console.log(addDef(1, undefined));

function noArgs()
{
    console.log(arguments);
}

noArgs(1); // [Arguments] { '0' : 1 }
noArgs(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }
noArgs({ complex: "types" }); // [Arguments] { '0': { complex: 'types' } }

function cannotDO()
{
    console.log(arguments.shift());
}

({ a, d } = { a: "thing", b: 1000, c: 69 });
console.log(a, d);

function complexFunc2(a, b = 10, c = 20, ...d)
{
    console.log(a, b, c, d);
}

let array3 = [1, 2, 3, 4, 6];
complexFunc2(...array3);

const data = [1, 2, 3, 4, 5];
const newData = data.map((elem, index, arr) => elem * 2);

console.log(data);
console.log(newData);

let testFunc = complexFunc2;
console.log("function pointer");
testFunc(1, 2);

console.log("scope");

function outerFunc()
{
    let a = 10;
    console.log(a);
    function innerFunc()
    {
        let b = 29;
        console.log(a);
    }
    return innerFunc;
}

let f = outerFunc();
f();

console.log("this testing");

const store = {
    address: "Lancaster",
    f: function ()
    {
        const inner = () =>
        {
            // console.log(this);
            return `store address is ${this.address} !`;
        };
        return inner();
    },
};
console.log(store.f());

let something = 10;

function simpleFunc()
{
    console.log(this.something);
}

simpleFunc();
// error

function varTest()
{
    var addsas = 10029;
    console.log(addsas);
}

/**
 *
 * sdfg
 */
// console.log(addsas);
varTest();

/*
asdf

asdf
asdf
*/

class Somethinds { }

const fa = x => y => x + (y * 2);
const data1 = [1, 2, 3, 4];
const result = data1.map(fa(2));
console.log(/* JSON.stringify( */result/* ) */);

const nba_teams = [
    {
        "conference": "Eastern",
        "division": "Atlantic",
        "name": "Boston Celtics",
        "city": "Boston",
        "state": "MA",
        "stadium": "TD Garden"
    },
    {
        "conference": "Eastern",
        "division": "Atlantic",
        "name": "Brooklyn Nets",
        "city": "New York",
        "state": "NY",
        "stadium": "Barclays Center"
    },
    {
        "conference": "Eastern",
        "division": "Atlantic",
        "name": "New York Knicks",
        "city": "New York",
        "state": "NY",
        "stadium": "Madison Square Garden"
    },
    {
        "conference": "Western",
        "division": "Pacific",
        "name": "Sacramento Kings",
        "city": "Sacramento",
        "state": "CA",
        "stadium": "Golden 1 Center"
    }
];

const b2i = nba_teams.reduce((acc, elem) => acc += elem.division == "Pacific" ? 1 : 0, 0);
console.log(b2i);
const b2ii = nba_teams.reduce((acc, elem) => acc += Object.values(elem).reduce( (acc2, elem2) => acc2 += elem2.length, 0), 0);
console.log(b2ii);