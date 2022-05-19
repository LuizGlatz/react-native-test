import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Display} from '../';
import style from './style';

const Calculator = () => {
  const initialState = {
    values: ['0'],
    operation: null,
    inputIndex: 0,
  };
  const [state, setState] = useState(initialState);

  const cleanMemory = () => {
    setState(
      state.inputIndex === 0
        ? initialState
        : {
            ...state,
            inputIndex: 0,
            values: [state.values[0]],
          },
    );
  };

  const calculate = () => {
    const firstValue = Number(state.values[0]);
    const secondValue = Number(state.values[1]);

    switch (state.operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        console.error('Operação numérica desconhecida');
    }
  };

  const onSubmit = () =>
    setState({
      ...initialState,
      values: [calculate()],
    });

  const inputModifier = modifier => {
    let newValue;

    switch (modifier) {
      case '.':
        newValue = state.values.map((previousValue, index) =>
          index === state.inputIndex && !previousValue.includes('.')
            ? previousValue + '.'
            : previousValue,
        );
        break;
      case '%':
        newValue = state.values.map((previousValue, index) =>
          index !== state.inputIndex
            ? previousValue
            : (Number(previousValue) / 100).toString(),
        );
        break;
      case '+/-':
        newValue = state.values.map((previousValue, index) =>
          index !== state.inputIndex
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

    setState({
      ...state,
      values: newValue,
    });
  };

  const inputValue = inputedValue =>
    setState({
      ...state,
      values: state.values.map((previousValue, index) =>
        index !== state.inputIndex
          ? previousValue
          : previousValue === '0'
          ? inputedValue
          : previousValue + inputedValue,
      ),
    });

  const inputOperation = operation =>
    setState({
      values:
        state.inputIndex === 1 ? [calculate(), '0'] : [state.values[0], '0'],
      operation,
      inputIndex: 1,
    });

  return (
    <SafeAreaView style={style.Calculator}>
      <Display text={state.values[state.inputIndex]} />
      <View style={style.Buttons}>
        <Button onPress={cleanMemory} greyButton>
          {state.inputIndex === 0 ? 'AC' : 'C'}
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
