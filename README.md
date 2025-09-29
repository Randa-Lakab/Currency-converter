#  Currency Converter (TypeScript)

A simple **Currency Converter** built with **TypeScript** and Node.js.  
The program runs in the terminal, asks the user for an amount and currencies, then outputs the converted value.

---

##  Features
- Built with **TypeScript** for type safety
- Interactive command line interface (using Node.js `readline`)
- Supports multiple currencies (USD, EUR, GBP, DZD by default)  
- Easy to extend with more currencies  

---

##  Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Randa-Lakab/Currency-Converter.git
cd Currency-Converter
```

### 2. Install dependencies
```bash
npm install
```
### 3. Run in development (TypeScript directly)
```bash
npm run dev
```
### 4. Build the project
```bash
npm run build
```
### 5. Run compiled JavaScript
```bash
npm start
```
---

### Project Structure

currency-converter/
│── src/
│   └── index.ts        # Main program
│── dist/               # Compiled JavaScript (after build)
│── package.json
│── tsconfig.json
│── README.md


### Scripts
npm run dev → Run with ts-node

npm run build → Compile TypeScript to JavaScript (dist/)

npm start → Run the compiled JavaScript

