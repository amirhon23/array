//homework
let name = prompt("Кого хотите удалить? Shahram , Amir , Akbar , Zarruh , Dilmurod , Nurillo")

let students = ["Shahram", "Amir", "Akbar", "Zarruh" , "Dilmurod" , "Nurillo"]

let index = students.indexOf(name)

switch (index) {
    case 0:
        students.splice(index , 1)
        console.log(students);
        break;
    case 1:
        students.splice(index, 1)
        console.log(students);
        break;
    case 2:
        students.splice(index, 1)
        console.log(students);
        break;
    case 3:
        students.splice(index, 1)
        console.log(students);
        break;
    case 4:
        students.splice(index, 1)
        console.log(students);
        break;
    case 5:
        students.splice(index, 1)
        console.log(students);
        break;
    default:
    console.log("Такого человека не существует");
        break;
}


if (index === 0) {
    students.splice(index, 1)
    console.log(students);
} else if (index === 1) {
    students.splice(index, 1)
    console.log(students);
}else if (index === 2) {
    students.splice(index, 1)
    console.log(students);
}else if (index === 3) {
    students.splice(index, 1)
    console.log(students);
}else if (index === 4) {
    students.splice(index, 1)
    console.log(students);
}else if (index === 5) {
    students.splice(index, 1)
    console.log(students);
}else {
    console.log("Такого человека не существует");
}









