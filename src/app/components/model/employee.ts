export class Employee {
    id!: string
    name: string
    email: string
    phone: string
    department: string

    constructor(name: string, email: string, phone: string, department: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.department = department;
    }  
}