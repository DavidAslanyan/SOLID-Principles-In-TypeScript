class PaymentMethod {
  processPayment(amount: number): void {
    return;
  }
}

class PaypalPayment extends PaymentMethod {
 processPayment(amount: number) {
    console.log(`Processing credit card payment of ${amount}`);
  }
}

class CreditCardPayment extends PaymentMethod {
 processPayment(amount: number) {
    console.log(`Processing credit card payment of ${amount}`);
  }
}

class BankTransferPayment extends PaymentMethod {
  processPayment(amount: number) {
     console.log(`Processing bank transfer payment of ${amount}`);
   }
 }

 function processOrder(paymentMthod: PaymentMethod, amount: number) {
  paymentMthod.processPayment(amount);
 }

 const newPayentMethod = new BankTransferPayment();

 processOrder(newPayentMethod, 10);