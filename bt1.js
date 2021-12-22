const arrays = [
    {
        id: 1,
        name: "user 1",
        age: 22,
    },
    {
        id: 2,
        name: "user 2",
        age: 21,
    },
    {
        id: 3,
        name: "user 3",
        age: 23,
    },
    {
        id: 4,
        name: "user 4",
        age: 24,
    },
];
// task 1: Add mới 1 user vào đầu mảng
console.log(arrays.unshift({
    id: 0,
    name: "user 0",
    age: 21,
}))
console.log(arrays)

// task 2: Add mới 1 user vào cuối mảng
console.log(arrays.push({
    id: 5,
    name: "user 5",
    age: 25,
}))
console.log(arrays)

// task 3: add nhiều user vào mảng, 

var i = arrays.length;
let j = arrays.length + 4;
console.log(i)
while (i < j) {
    arrays.push({
        id: i,
        name: `user ${i}`,
        age: 25
    });
    console.log(arrays);
    i++

}
console.log(arrays);


// task 4: xoá 1 user ra khỏi mảng
console.log(arrays.splice(arrays.length - 1, arrays.length))
console.log(arrays)


// task 5: lọc ra các user có age >= 22;
document.write('Users are greater and equal 22:');
for (let i = 0; i < arrays.length; i++) {

    if (arrays[i].age >= 22) {
        document.write(` ${arrays[i].name}`);

    }
}
// task 6: Biến đổi mảng hiện tại thành một mảng mới với field mới là "class" kiểu string
var i = 0

while (i < arrays.length) {
    arrays[i].class = 'PNV22 a';
    i++
}
console.log(arrays)



// task 7: Tìm ra 1 user có age = 23

document.writeln('Users are equal 23:   ');
for (let i = 0; i < arrays.length; i++) {

    if (arrays[i].age === 23) {
        document.writeln(` ${arrays[i].name}`);

    }
}



// task 8: xử dụng vòng lặp for để lấy ra các user có age >= 23

document.write('Users are greater and equal 23:');
for (let i = 0; i < arrays.length; i++) {

    if (arrays[i].age >= 23) {
        document.write(` ${arrays[i].name}`);

    }
}



// task 9: Dựa vào mảng thông tin bên trên, và mảng ids bên dưới, lọc ra thông tin các user có id như mảng bên dưới.
const arrayIds = [1, 3];



// task 10: sắp xếp các user trong mảng trên theo thứ tự tuổi tăng dần
var tam;
for (let i = 0; i < arrays.length - 1; i++) {
    for (let j = i + 1; j < arrays.length; j++) {
        if (arrays[i].age > arrays[j].age) {
            tam = arrays[i];
            arrays[i] = arrays[j];
            arrays[j] = tam;

        }
    }
}
console.log(arrays);


// task 11: cập nhật thông tin trong mảng trên với field "class" được biến đổi ở task 6 thành kiểu chữ in hoa (upCase)
var i = 0

while (i < arrays.length) {
    arrays[i].class = arrays[i].class.toUpperCase();
    i++
}
console.log(arrays)


// task 12: lấy ra phần tử cuối cùng của mảng trên

function getElementEndOfArray(array) {
    return array[array.length - 1];
}
console.log(getElementEndOfArray(arrays))
console.log(arrays)

// task 13: lấy ra phần tử đầu tiên của mảng trên
function getElementBeginOfArray(array) {
    return array[0];
}
console.log(getElementBeginOfArray(arrays))
console.log(arrays)

// 
// 
// 
// task 14: cho 2 mảng bên dưới, hợp nhất 2 mảng lại thành một và xoá các phần tử trùng lặp, result mong đợi => ["Gà", "vịt", "Chó"]
const array1 = ["Gà", "vịt"];
const array2 = ["vịt", "Chó"];

// -----------------------------------
const person = {
    firstName: "John",
    lastName: "Doe",
};

// task 15: từ object person trên lấy ra key của nó. result => ['firstName', 'lastName']
function getKey(obj) {
    return Object.keys(obj)
}
console.log(getKey(person))

// task 16: từ object person trên lấy ra value của nó. result => ['John', 'Doe']
function getValue(obj) {
    return Object.values(obj)
}
console.log(getValue(person))

// task 17: chuyển đổi object trên thành array. result mong đợi => [{firsName: 'John'}, {lastName: 'Doe'}]
function objectToArray(obj) {
    return Object.entries(obj);
}
console.log(objectToArray(person))

// task 18: từ object person trên add thêm 1 field "age" vao object. kết qua mong đợi => { firstName: "John", lastName: "Doe", age: 100 };
function addFieldToObject(obj, key, val) {
    return obj.key = val;

}
let __age;
console.log(addFieldToObject(obj, __age, 20))

// task 21: viết 1 object sử dụng setter & getter để thêm mới value và lấy ra value. key word (Getter, setter)
var obj = {
    name: 'Thu',
    getFoo: function () {
        return this.foo;
    },
    setFoo: function (val, key) {
        this['val'] = key;
    }
}

console.log(obj.getFoo());
// "this is the value of foo"

var _age;
obj.setFoo(_age, 20);

console.log(obj.getFoo());
// "hello"
console.log(obj)

// task 22:
//const newFunction = (user) => {
// xử lý function này khi truyền params user vào là thông tin của user
// kết quả return mong đợi là một string => "Hello User - age: 21"
// };

const newFunction = (user) => {
    var str = ''
    for (const [key, value] of Object.entries(user)) {
        str += (`${key}: ${value}`) + ' - ';
    }
    return str
}

console.log(newFunction(person))

// task 23:
let numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 2

function roundUp(a) {
    return Math.ceil(a);
}
console.log(roundUp(numb));

//let numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 1
function roundDown(a) {
    return Math.floor(a);
}
console.log(roundDown(numb));

// task 24: Thực hiện nối chuỗi dữa vào các biến bên dưới. kết quả mong đợi. => 'name: user - age: 21 - class: classAbc'
let name = "user";
let age = 21;
let className = "classAbc";

var obj = {
    name: 'user',
    age: 21,
    className: "classAbc"
};
var str = ''
for (key in obj) {
    str += key + ': ' + obj[key] + ' - '
}
console.log(str);


// task 25: cho array number bên dưới, tính tổng array: result = 45;
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumArray(array) {
    let sum = 0;
    array.forEach(function (value) {
        sum += value;
    });

    return sum;
}

console.log(sumArray(arrNumber))
