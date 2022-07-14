class Employee {
  constructor(
    public name: string,
    public salary: number,
    public vacation: number
  ) {}
  accept(visitor: any) {
    visitor.visit(this);
  }
  getName() {
    return this.name;
  }
  getSalary() {
    return this.salary;
  }
  setSalary(sal: number) {
    this.salary = sal;
  }
  getVacation() {
    return this.vacation;
  }
  setVacation(vac: number) {
    this.vacation = vac;
  }
}

class ExtraSalary {
  constructor() {}
  visit(emp: Employee) {
    emp.setSalary(emp.getSalary() * 1.1);
  }
}

class ExtraVacation {
  constructor() {}
  visit(emp: Employee) {
    emp.setVacation(emp.getVacation() + 2);
  }
}

let employees = [
  new Employee("John", 10000, 10),
  new Employee("Mary", 20000, 21),
  new Employee("Boss", 250000, 51),
];

let visitorSalary = new ExtraSalary();
let visitorVacation = new ExtraVacation();

for (let emp of employees) {
  emp.accept(visitorSalary);
  emp.accept(visitorVacation);
  console.log(
    emp.getName() +
      ":  $" +
      emp.getSalary() +
      " and " +
      emp.getVacation() +
      " vacation days"
  );
}
