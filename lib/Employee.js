class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    empName() {
        return this.name;
    }

    empId() {
        return this.id;
    }

    empEmail() {
        return this.email;
    }
}

module.exports = Employee;