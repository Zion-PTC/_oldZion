declare class Employee {
    name: string;
    salary: number;
    vacation: number;
    constructor(name: string, salary: number, vacation: number);
    accept(visitor: any): void;
    getName(): string;
    getSalary(): number;
    setSalary(sal: number): void;
    getVacation(): number;
    setVacation(vac: number): void;
}
declare class ExtraSalary {
    constructor();
    visit(emp: Employee): void;
}
declare class ExtraVacation {
    constructor();
    visit(emp: Employee): void;
}
declare let employees: Employee[];
declare let visitorSalary: ExtraSalary;
declare let visitorVacation: ExtraVacation;
