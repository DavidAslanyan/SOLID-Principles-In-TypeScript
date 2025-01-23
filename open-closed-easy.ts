interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  private width = 10;
  private height = 20;

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Trangle implements Shape {
  private width = 10;
  private height = 5;

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  private radius = 4;

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class ShapeCalculator implements Shape {
  private shape: Shape;

  constructor(shape: Shape) {
    this.shape = shape;
  }

  calculateArea(): number {
    return this.shape.calculateArea();
  }
}

const triangle = new Trangle();
const circle = new Circle();
const shapeCalculator = new ShapeCalculator(triangle);
const shapeCalculator2 = new ShapeCalculator(circle);

console.log(shapeCalculator.calculateArea())
console.log(shapeCalculator2.calculateArea())

enum UserType {
  REGULAR = 'regular',
  PREMIUM = 'premium',
  VIP = 'vip'
};

interface IUser {
  id: number;
  name: string;
  type: UserType;
};

interface Discount {
  calculateDiscount(): string;
}


class UserService {
 private users: IUser[] = [];

 addUser({id, name, type}: IUser) {
  this.users.push({id, name, type});
 };

 getUserById(id: number) {
  return this.users.find((user) => user.id === id);
 };
};


class DiscountCalculator implements Discount {
  private discount: Discount;

  constructor(discount: Discount) {
    this.discount = discount;
  }

  calculateDiscount(): string {
    return this.discount.calculateDiscount()
  }
};

class DiscountForRegularUser implements Discount {
  private regularUserPoints = 5;

  calculateDiscount(): string {
    return `${this.regularUserPoints}%`;
  }
}

class DiscountForPremiumUser implements Discount {
  private premiumUserPoints = 10;

  calculateDiscount(): string {
    return `${this.premiumUserPoints}%`;
  }
}

class DiscountForVipUser implements Discount {
  private vipUserPoints = 20;

  calculateDiscount(): string {
    return `${this.vipUserPoints}%`;
  }
}


class LoggerService {
  logMessage(message: any) {
    console.log(message);
  }
}




// Usage

const mockUser: IUser = {
  id: 1,
  name: 'David',
  type: UserType.PREMIUM
};

const loggerService  = new LoggerService()
const userService = new UserService();
const newUser = userService.addUser(mockUser);

loggerService.logMessage(newUser)
