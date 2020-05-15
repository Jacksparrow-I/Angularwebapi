export class Emp{

    constructor(
        public name:string,
        public email:string,
        public employeeCode:number,
        public gender:string,
        public designation:number,
        public department:number,
        public dob:string,
        public salary:number
    ){}
}

export class Employee{

    constructor(
        public id:number,
        public name:string,
        public email:string,
        public employeeCode:number,
        public gender:string,
        public designation:number,
        public department:number,
        public dob:string,
        public salary:number
    ){}
}

export class Dep{

    constructor(
        public departmentName:string,
    ){}
}

export class Department{

    constructor(
        public departmentId:number,
        public departmentName:string,
    ){}
}

export class Des{

    constructor(
        public designationName:string,
    ){}
}

export class Desigantion{

    constructor(
        public designationId:number,
        public designationName:string,
    ){}s
}

// {"id":11002,
// "name":"DoctorStrange",
// "email":"Doctorstrange@universe.com",
// "employeeCode":5555,
// "gender":"male",
// "department":2,
// "designation":2,
// "dob":"1",
// "salary":990000}]