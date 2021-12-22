// task 1: Cho một chuỗi, Viết hàm đảo ngược từng từ trong câu
var _str = 'I love Programming'
function _reverseString1(str) {
    var result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(_reverseString1(_str));




//task 2: viết hàm đệ quy đảo ngược chuỗi
function _reverseString3(str) {

    return (str === '') ? '' : _reverseString3(str.substr(1)) + str.charAt(0);
}
console.log(_reverseString3(_str))




// task 3: Cho một mảng, Viết hàm đảo ngược các item trong array đó.
var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function reserseArray(arr) {
    return arr.reverse();
}
console.log(reserseArray(arrNumber))


// task 4: viết hàm đệ quy đảo ngược mảng
var arrNumber2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reserseArray1(arr) {
    if (arr.length === 0)
        return arr;
    return reserseArray1(arr.slice(1)).concat(arr[0]);
}

console.log(reserseArray1(arrNumber2))


//task 5: viết hàm đệ quy tính tổng 
function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sum(arr.slice(1));
}
console.log(sum(arrNumber2));

// task 6: Viết hàm đệ quy để biết một số là số nguyên tố

function ktnt(n, a = 3) {
    if (n < 2) {
        return false;
    } else if (n === 2 || n === 3) {
        return true;
    } else if (n % a === 0) {
        return false;
    } else if (a < Math.sqrt(n)) {
        return ktnt(n, a + 2);
    } else return true;

}
console.log(('task 6: ' + ktnt(51, 3)))
console.log(('task 6: ' + ktnt(47, 3)))


// task 7: Viết một class bao gồm 4 methods: add, update, remove, so sánh 


class Students {
    arrOfStudent = [{ id: 1, name: 'A', _class: '22B' }, { id: 2, name: 'B', _class: '22B' }];


    add(student) {
        if (!this.isExist(student)) {
            return this.arrOfStudent.push(student);
        }
    }
    delete(idstudent) {

        if (this.isExist(idstudent)) {
            return this.arrOfStudent.splice(this.arrOfStudent.indexOf(idstudent), 1);
        }

    }
    update(student) {

        if (this.isExist(student.id)) {
            const index = arrOfStudent.indexOf(student.id);
            this.arrOfStudent[index] = student;
            return this.arrOfStudent;
        }

    }
    isExist(idstudent) {
        if (this.arrOfStudent.forEach(s => s.id === idstudent))
            return true;
        else
            return false;
    }
}
const classStudent = new Students();

console.log(classStudent.add({ id: 4, name: 'Thu', class: 'PNV22A' }));
console.log(classStudent.delete(1));
console.log(classStudent.update({ id: 4, name: 'Thu', class: 'PNV' }));


