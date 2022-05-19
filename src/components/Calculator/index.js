import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Display } from '../';
import style from './style';

const Calculator = () => {
    const initialState = {
        values: ['0'],
        operation: null,
        inputIndex: 0
    };
    const [state, setState] = useState(initialState);

    const cleanMemory = () => {
        setState(state.inputIndex === 0 ? initialState : {
            ...state,
            inputIndex: 0,
            values: [state.values[0]]
        });
    };

    const calculate = () => {
        console.warn(`calculating: ${state.values[0]} ${state.operation} ${state.values[1]}`);
        return state.values[0];
    };

    const inputValue = value => {
        const inputIndex = state.operation ? 1 : 0;        
        const newValue = state.values[inputIndex] === '0' && value !== '.' ? value : state.values[inputIndex] + value;
        const values = state.values.map((value, index) => index === inputIndex ? newValue : value);
        
        if (value === '.' && state.values[inputIndex].includes(value)) return;

        setState({
            ...state,
            inputIndex,
            values
        });
    };

    const inputOperation = operation => {
        console.warn(state);
        setState({
            ...state,
            values: state.inputIndex === 1 ? [calculate(), '0'] : [state.values[0], ],
            operation,
            inputIndex: 1
        });
    }

    return (
        <SafeAreaView style={style.Calculator}>
            <Display text={state.values[state.inputIndex]} />
            <View style={style.Buttons}>
                <Button onPress={cleanMemory} greyButton>{state.inputIndex === 0 ? 'AC' : 'C'}</Button>
                <Button greyButton>+/-</Button>
                <Button greyButton>%</Button>
                <Button orangeButton>/</Button>
                <Button onPress={() => inputValue('7')}>7</Button>
                <Button onPress={() => inputValue('8')}>8</Button>
                <Button onPress={() => inputValue('9')}>9</Button>
                <Button onPress={() => inputOperation('x')} orangeButton>x</Button>
                <Button onPress={() => inputValue('4')}>4</Button>
                <Button onPress={() => inputValue('5')}>5</Button>
                <Button onPress={() => inputValue('6')}>6</Button>
                <Button onPress={() => inputOperation('-')} orangeButton>-</Button>
                <Button onPress={() => inputValue('1')}>1</Button>
                <Button onPress={() => inputValue('2')}>2</Button>
                <Button onPress={() => inputValue('3')}>3</Button>
                <Button onPress={() => inputOperation('+')} orangeButton>+</Button>
                <Button onPress={() => inputValue('0')} double>0</Button>
                <Button onPress={() => inputValue('.')}>.</Button>
                <Button onPress={() => calculate()} orangeButton>=</Button>
            </View>
        </SafeAreaView>
    );
};

export default Calculator;