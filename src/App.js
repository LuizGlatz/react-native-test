import React from 'react';
import { SafeAreaView } from 'react-native';
import { Calculator, Menu } from './components';

const App = () => (
    <SafeAreaView style={{ flex: 1, zIndex: 1 }}>
        <Menu />
        <Calculator />
    </SafeAreaView>
);

export default App;