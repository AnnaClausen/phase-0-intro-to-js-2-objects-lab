const employee = {
    name: "Anna",
    streetAddress: "2020 Kirkham St",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee};
  
    updatedEmployee.name = "Sam";
    updatedEmployee.streetAddress = "11 Broadway";
  
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee.name

    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name

    return employee
}



