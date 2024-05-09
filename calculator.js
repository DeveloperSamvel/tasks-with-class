class Calculator {
  constructor(...operands) {
    this.operands = operands;
  }

  addition() {
    return this.operands.reduce((acc, item) => acc + item);
  }
  subtraction() {
    return this.operands.reduce((acc, item) => acc - item);
  }
  multiplication() {
    return this.operands.reduce((acc, item) => acc * item);
  }
  division() {
    return this.operands.reduce((acc, item) => {
      if(item === 0) {
        throw new Error("Division by zero is impossible");
      }

      return acc / item
    });
  }
}

const addResult = new Calculator(6, 5, 0, 1);
console.log(addResult.addition());
console.log(addResult.subtraction());
console.log(addResult.multiplication());
try {
  console.log(addResult.division()); // Error: Деление на ноль недопустимо.
} catch (error) {
  console.error(error.message);
}
console.log(addResult);