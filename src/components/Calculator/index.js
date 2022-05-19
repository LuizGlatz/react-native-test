import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Display} from '../';
import style from './style';

const Calculator = () => {
  const [values, setValues] = useState(['0']);
  const [operation, setOperation] = useState(null);
  const [inputIndex, setInputIndex] = useState(0);

  const cleanMemory = () => {
    setValues(inputIndex === 0 ? ['0'] : [values[0]]);
    setOperation(null);
    setInputIndex(0);
  };

  const calculate = () => {
    if (!['+', '-', '*', '/'].includes(operation)) {
      throw new Error('Operação numérica desconhecida');
    }

    if (values.length < 2) {
      throw new Error('O cálculo depende de 2 valores definidos');
    }

    try {
      // eslint-disable-next-line no-eval
      return eval(`${values[0]} ${operation} ${values[1]}`)
        .toPrecision(6)
        .toString();
    } catch (error) {
      throw new Error(error);
    }
  };

  const onSubmit = () => {
    try {
      setValues([calculate()]);
      setInputIndex(0);
      setOperation(null);
    } catch (error) {
      console.error(error);
    }
  };

  const inputModifier = modifier => {
    let newValue;

    switch (modifier) {
      case '.':
        newValue = values.map((previousValue, index) =>
          index === inputIndex && !previousValue.includes('.')
            ? previousValue + '.'
            : previousValue,
        );
        break;
      case '%':
        newValue = values.map((previousValue, index) =>
          index !== inputIndex
            ? previousValue
            : (Number(previousValue) / 100).toString(),
        );
        break;
      case '+/-':
        newValue = values.map((previousValue, index) =>
          index !== inputIndex
            ? previousValue
            : previousValue.includes('-')
            ? previousValue.replace('-', '')
            : '-' + previousValue,
        );
        break;
      default:
        console.error('This modifier is not valid');
        return;
    }

    setValues(newValue);
  };

  const inputValue = inputedValue =>
    setValues(
      values.map((previousValue, index) =>
        index !== inputIndex
          ? previousValue
          : previousValue === '0'
          ? inputedValue
          : previousValue + inputedValue,
      ),
    );

  const inputOperation = inputedOperation => {
    setValues(inputIndex === 1 ? [calculate(), '0'] : [values[0], '0']);
    setInputIndex(1);
    setOperation(inputedOperation);
  };

  return (
    <SafeAreaView style={style.Calculator}>
      <Display text={values[inputIndex]} />
      <View style={style.Buttons}>
        <Button onPress={cleanMemory} greyButton>
          {inputIndex === 0 ? 'AC' : 'C'}
        </Button>
        <Button onPress={inputModifier} greyButton>
          +/-
        </Button>
        <Button onPress={inputModifier} greyButton>
          %
        </Button>
        <Button onPress={inputOperation} orangeButton>
          /
        </Button>
        <Button onPress={inputValue}>7</Button>
        <Button onPress={inputValue}>8</Button>
        <Button onPress={inputValue}>9</Button>
        <Button onPress={inputOperation} onPressValue="*" orangeButton>
          x
        </Button>
        <Button onPress={inputValue}>4</Button>
        <Button onPress={inputValue}>5</Button>
        <Button onPress={inputValue}>6</Button>
        <Button onPress={inputOperation} orangeButton>
          -
        </Button>
        <Button onPress={inputValue}>1</Button>
        <Button onPress={inputValue}>2</Button>
        <Button onPress={inputValue}>3</Button>
        <Button onPress={inputOperation} orangeButton>
          +
        </Button>
        <Button onPress={inputValue} double>
          0
        </Button>
        <Button onPress={inputModifier}>.</Button>
        <Button onPress={onSubmit} orangeButton>
          =
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Calculator;
