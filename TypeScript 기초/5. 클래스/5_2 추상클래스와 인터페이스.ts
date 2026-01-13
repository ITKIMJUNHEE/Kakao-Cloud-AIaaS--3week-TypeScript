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
    return {
      success: true,
      transactionId: `CARD-${Math.random().toString(36).substr(2, 9)}`
    };
  }
}

class PayPalProcessor extends PaymentProcessor {
  async process(amount: number, currency: string): Promise<PaymentResult> {
    return {
      success: true,
      transactionId: `PAYPAL-${Math.random().toString(36).substr(2, 9)}`
    };
  }
}

class CryptoProcessor extends PaymentProcessor {
  async process(amount: number, currency: string): Promise<PaymentResult> {
    return {
      success: true,
      transactionId: `CRYPTO-${Math.random().toString(36).substr(2, 9)}`
    };
  }
}

class PaymentFactory {
  static create(type: "credit" | "paypal" | "crypto"): PaymentProcessor {
    switch (type) {
      case "credit": return new CreditCardProcessor();
      case "paypal": return new PayPalProcessor();
      case "crypto": return new CryptoProcessor();
    }
  }
}

(async () => {
  const creditProcessor = PaymentFactory.create("credit");
  const result = await creditProcessor.process(100, "USD");
  console.log("결제 결과:", result);
})();

export {};