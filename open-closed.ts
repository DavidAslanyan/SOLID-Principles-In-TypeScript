interface Payment {
  makePayment(): void;
  getPaymentHistory(): void;
}

class PaymentService implements Payment {
  private payment: Payment;

  constructor(payment: Payment) {
    this.payment = payment;
  }

  makePayment(): void {
    this.payment.makePayment();  
  }

  getPaymentHistory(): void {
    this.payment.getPaymentHistory();
  }
}

class CreditCardPayment1 implements Payment {
  notificationRepository  = new NotificationService1

  makePayment(): void {
    this.notificationRepository.sendMessage('Payment via card')
  }

  getPaymentHistory(): void {
    this.notificationRepository.sendMessage('Get card history')
  }
}

class CreditPaypalPayment implements Payment {
  notificationRepository  = new NotificationService1

  makePayment(): void {
    // paypal payment logic
    this.notificationRepository.sendMessage('Payment paypal')
  }

  getPaymentHistory(): void {
    // paypal history logic
    this.notificationRepository.sendMessage('Get paypal history')
  }
}


class NotificationService1 {
  sendMessage(message: string) {
    console.log(message);
  }
}

const paypalMethod = new CreditPaypalPayment();
const paymentService = new PaymentService(paypalMethod);

paymentService.makePayment()

