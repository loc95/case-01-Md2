let prompt = require("prompt-sync")();

const employeesList = (e) => {
  let productSalary = 50;
  let firstEmployee = {
    id: 1,
    fullName: "Cc",
    baseSalary: 1000,
    productSalary,
    productQuantity: 65,
    totalSalary: 0,
  };
  let sencondEmployee = {
    id: 2,
    fullName: "JS",
    baseSalary: 500,
    productSalary,
    productQuantity: 55,
    totalSalary: 0,
  };
  let thirdEmployee = {
    id: 3,
    fullName: "Bá Lộc",
    baseSalary: 2000,
    productSalary,
    productQuantity: 15,
    totalSalary: 0,
  };
  e.push(firstEmployee);
  e.push(sencondEmployee);
  e.push(thirdEmployee);
  return e;
};
let employees = new Array();
employees = employeesList(employees);
let n;
function outputEmployees(employeeList) {
  employeeList.forEach((e) => console.table(e));
}
console.log("Ds 3 nv ban dau: ");
outputEmployees(employees);

function inputEmployyee() {
  let employee = {};
  employee.id = Number(prompt(`Enter id  : `));
  employee.name = prompt(`Enter name  : `);
  employee.basicSalary = prompt(`Enter basic salary employee : `);
  employee.productSalary = prompt(`Enter product salary  : `);
  employee.productQuantity = prompt(`Enter the number product quantity  : `);
  return employee;
}

function inputEmployyeesList(employees) {
  n = Number(prompt("nhập số lượng nhân viên cần thêm vào: "));
  for (let i = 0; i < n; i++) {
    employees.push(inputEmployyee(i));
  }
}
inputEmployyeesList(employees);
console.log("danh sách nv sau khi nhập thêm là: ");
outputEmployees(employees);

function salaryStaff(e) {
  let salaryStaff = e.baseSalary + e.productSalary * e.productQuantity;
  if (e.productQuantity < 50) {
    return salaryStaff * 0.9;
  } else if (e.productQuantity > 50) {
    return (salaryStaff += (e.productQuantity - 50) * 0.1 * e.productSalary);
  } else {
    return salaryStaff;
  }
}
const outputSalary = () => {
  employees.forEach((e) => {
    e.totalSalary = salaryStaff(e);
  });
  return employees;
};
console.log("danh sach nv sau khi tinh luong la: ");
outputSalary(employees);
outputEmployees(employees);

function sortSalary(e) {
  return e.sort((a, b) => a.totalSalary - b.totalSalary);
}
sortSalary(employees);
console.log("Ds nv sau khi sắp xếp mức lương tăng dần la: ");
outputEmployees(employees);

function findMaxSalary(e) {
  let max = 0;
  e.forEach((e) => {
    if (e.totalSalary > max) {
      max = e.totalSalary;
    }
    return max;
  });
  return e.filter((e) => e.totalSalary === max);
}

console.log("Staff max salary is: ", findMaxSalary(employees));
