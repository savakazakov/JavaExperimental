const data = [
    { id: 4235, mark: 78 },
    { id: 1255, mark: 23 },
    { id: 3239, mark: 21 },
    { id: 5437, mark: 70 },
    { id: 4865, mark: 63 },
]

let d = data.filter(elm => elm.grade == "A");

console.log(d);

data.forEach((elm) => elm.grade = grade(elm.mark));

function grade(item)
{
    if(item >= 70 && item <= 100)
        return "A";
    else if(item >= 60)
        return "B";
    else if (item >= 50)
        return "C";
    else if (item >= 40)
        return "D";
    else 
        return "F";
}

data.filter(elm => elm.grade == "A" );

console.log(data);

let mean = data.reduce((acc, elm) => acc += elm.mark, 0)/data.length;

console.log(mean);