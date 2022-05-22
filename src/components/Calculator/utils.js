export const hasExceededPrecisionDigits = number =>
  /\.\d{6,}/.test(number.toString() || number);

export const calculate = (operation, [firstValue, secondValue]) => {
  if (!['+', '-', '*', '/'].includes(operation)) {
    throw new Error('Operação numérica desconhecida');
  }

  if (
    firstValue &&
    typeof firstValue === 'number' &&
    secondValue &&
    typeof secondValue === 'number'
  ) {
    throw new Error('O cálculo depende de 2 valores numéricos definidos');
  }

  try {
    const calculation = `${firstValue} ${operation} ${secondValue}`;
    // eslint-disable-next-line no-eval
    const calculatedValue = eval(calculation);

    console.log('Cálculo:', calculation);
    console.log('Resultado do calculo:', calculatedValue);

    return hasExceededPrecisionDigits(calculatedValue)
      ? calculatedValue.toFixed(5).toString()
      : calculatedValue.toString();
  } catch (error) {
    throw new Error(error);
  }
};
