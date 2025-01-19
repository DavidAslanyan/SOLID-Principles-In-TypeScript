interface IEmployee {
  id: string,
  firstName: string,
  lastName: string,
  position: string,
  joinedAt: string,
  hoursWorked: number
};

enum Roles {
  ENGINEER = 'softare engineer',
  MANAGER = 'product manager'
}

class Employee {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public position: string,
    public joinedAt: string
  ) {}
}

class EmployeeManager {
  private employees: IEmployee[] = [];
  private logger = new Logger();
  private salaryCalculator = new SalaryCalculator();
  private notificationService = new NotificationService();

  addNewEmployee({
    id,
    firstName,
    lastName,
    position,
    joinedAt,
    hoursWorked = 0
  }: IEmployee
  ) {
    this.employees.push({
      id,
      firstName,
      lastName,
      position,
      joinedAt,
      hoursWorked
    })
    this.notificationService.sendEmailForCreateUser();
  };

  updateEmployee({
    id,
    firstName,
    lastName,
    position,
    joinedAt,
    hoursWorked
  }: IEmployee
  ) {
    this.removeEmployee(id);
    this.employees.push({
      id,
      firstName,
      lastName,
      position,
      joinedAt,
      hoursWorked
    })
    this.notificationService.sendEmailForUserUpdate();
  };

  removeEmployee(id: string) {
    this.employees.filter((employee) => employee.id !== id);
    this.notificationService.sendEmailForUserDeletion();
  };

  getEmployeeById(id: string) {
    return this.employees.find((employee) => employee.id === id);
  };

  logAllEmployees() {
    this.logger.logMessage(this.employees);
  };

  logEmployeeById(id: string) {
    const employee = this.employees.find((employee) => employee.id === id);
    this.logger.logMessage(employee);
  };

  calculateEmployeeSalary(employee: IEmployee) {
    return this.salaryCalculator.calculatedBasedOnRole(employee);
  }
};

class SalaryCalculator {
  calculatedBasedOnRole(employee: IEmployee) {
    if (employee.position === Roles.ENGINEER) {
      return 4500 + 15 * employee.hoursWorked;
    }
    if (employee.position === Roles.MANAGER) {
      return 5000 + 12 * employee.hoursWorked;
    }
  }
}

class NotificationService {
  private logger = new Logger();

  sendEmailForCreateUser() {
    // Email send logic
    this.logger.logMessage('User create email sent')
  }

  sendEmailForUserUpdate() {
    // Email send logic
    this.logger.logMessage('Update crdentials email sent')
  }

  sendEmailForUserDeletion() {
    // Email send logic
    this.logger.logMessage('User delete email sent')
  }

}

class Logger {
  logMessage(message: any) {
    console.log(message);
  }
}


const mock1 = {
  id: 'a1',
  firstName: 'David',
  lastName: 'Aslanyan',
  position: Roles.ENGINEER,
  joinedAt: 'April, 2023',
  hoursWorked: 12
}

const mock2 = {
  id: 'a2',
  firstName: 'Artur',
  lastName: 'Aslanyan',
  position: Roles.MANAGER,
  joinedAt: 'June, 2024',
  hoursWorked: 0
}

const empManager = new EmployeeManager();
const logger = new Logger();

empManager.addNewEmployee(mock1);


const user= empManager.getEmployeeById('a1');

if (user) {
  const employeeSalary = empManager.calculateEmployeeSalary(user);

  logger.logMessage(`${user.firstName} ${user.lastName}: ${employeeSalary}`)
  
}