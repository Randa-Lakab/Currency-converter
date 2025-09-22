import readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer: string) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log(" Welcome to the Currency Converter!\n");

  const amountInput = await askQuestion("Enter the amount: ");
  const amount = parseFloat(amountInput);

  const fromCurrency = (await askQuestion("From currency (e.g. USD): ")).toUpperCase();
  const toCurrency = (await askQuestion("To currency (e.g. EUR): ")).toUpperCase();

  // Exemple de taux de conversion
  const rates: Record<string, number> = {
    USD: 1,     // base
    EUR: 0.92,
    DZD: 134,
    GBP: 0.79,
  };

  if (!rates[fromCurrency] || !rates[toCurrency]) {
    console.log("Currency not supported.");
    rl.close();
    return;
  }

  const converted = (amount / rates[fromCurrency]) * rates[toCurrency];
  console.log(`\n ${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`);

  rl.close();
}

main();
