interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}

abstract class PaymentProcessor {
  abstract process(amount: number, currency: string): Promise<PaymentResult>;
}

class CreditCardProcessor extends PaymentProcessor {
  async process(amount: number, currency: string): Promise<PaymentResult> {
    return { success: true, transactionId: `CREDIT-${Date.now()}` };
  }
}

class PayPalProcessor extends PaymentProcessor {
  async process(amount: number, currency: string): Promise<PaymentResult> {
    return { success: true, transactionId: `PAYPAL-${Date.now()}` };
  }
}

class CryptoProcessor extends PaymentProcessor {
  async process(amount: number, currency: string): Promise<PaymentResult> {
    return { success: true, transactionId: `CRYPTO-${Date.now()}` };
  }
}

class PaymentFactory {
  static create(type: "credit" | "paypal" | "crypto"): PaymentProcessor {
    if (type === "credit") return new CreditCardProcessor();
    if (type === "paypal") return new PayPalProcessor();
    return new CryptoProcessor();
  }
}

(async () => {
  const creditProcessor = PaymentFactory.create("credit");
  const result = await creditProcessor.process(100, "USD");
  console.log(result);
})();

export {};