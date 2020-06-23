

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
        id:number;
        name:string;
        email:string;
        employeeCode:number;
        gender:string;
        designation:number;
        department:number;
        dob:Date;
        salary:number;
}

export class EmpId{
        id:number;
        name:string;
        email:string;
        employeeCode:number;
        gender:string;
        designation:number;
        department:number;
        dob:Date;
        salary:number;
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

export class DepId{
        departmentId:number;
        departmentName:string;
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
    ){}
}

export class DesId{
        designationId:number;
        designationName:string;
        
}

export class Login{
    userId:number;
    firstName:string;
    lastName:string;
    userName:string;
    password:string;
    token: string;
    
}

