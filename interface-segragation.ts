interface CreditCardPaymentProcessor {
  processCreditCardPayment(amount: number): void;
}

interface PayPalPaymentProcessor {
  processPayPalPayment(email: string, amount: number): void;
}

interface CryptoPaymentProcessor {
  processCryptoPayment(walletAddress: string, amount: number): void;
}


class StripePayment implements CreditCardPaymentProcessor {
  processCreditCardPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount} through Stripe.`);
  }
}

class PayPalPayment implements PayPalPaymentProcessor {
  processPayPalPayment(email: string, amount: number): void {
    console.log(`Processing PayPal payment of $${amount} to ${email}.`);
  }
}

class CryptoPayment implements CryptoPaymentProcessor {
  processCryptoPayment(walletAddress: string, amount: number): void {
    console.log(`Processing crypto payment of 0.01 BTC to wallet: ${walletAddress}.`);
  }
}


const stripe = new StripePayment();
stripe.processCreditCardPayment(100);

const paypal = new PayPalPayment();
paypal.processPayPalPayment("user@example.com", 50);

const cryptoValue = new CryptoPayment();
cryptoValue.processCryptoPayment("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", 0.01);
