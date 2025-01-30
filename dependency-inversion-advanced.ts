interface PaymentProcessor {
  processPayment(amount: number): void;
}

class PayPalProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

class StripeProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Stripe payment of $${amount}`);
  }
}

class PaymentService {
  constructor(private paymentProcessor: PaymentProcessor) {}

  makePayment(amount: number): void {
    console.log(`Initiating payment of $${amount}...`);
    this.paymentProcessor.processPayment(amount);
  }
}

const paypalService = new PaymentService(new PayPalProcessor());
paypalService.makePayment(100);

const stripeService = new PaymentService(new StripeProcessor());
stripeService.makePayment(200);



interface NotificationProvider {
  sendMessage(to: string, message: string): void;
}

class EmailProvider implements NotificationProvider {
  sendMessage(to: string, message: string): void {
    console.log(`Sending Email to ${to}: "${message}"`);
  }
}

class SMSProvider implements NotificationProvider {
  sendMessage(to: string, message: string): void {
    console.log(`Sending SMS to ${to}: "${message}"`);
  }
}

class PushNotificationProvider implements NotificationProvider {
  sendMessage(to: string, message: string): void {
    console.log(`Sending Push Notification to ${to}: "${message}"`);
  }
}

class NotificationService {
  private provider: NotificationProvider;

  constructor(provider: NotificationProvider) {
    this.provider = provider;
  }

  notifyUser(userId: string, message: string): void {
    console.log(`🔄 Processing notification for User: ${userId}`);
    this.provider.sendMessage(userId, message);
  }
}


const emailService = new NotificationService(new EmailProvider());
emailService.notifyUser("user@example.com", "Your order has been shipped!");

const smsService = new NotificationService(new SMSProvider());
smsService.notifyUser("+1234567890", "Your OTP code is 1234 🔐");

const pushService = new NotificationService(new PushNotificationProvider());
pushService.notifyUser("user_device_token", "You have a new friend request!");
