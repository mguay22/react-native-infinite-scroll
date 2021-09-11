import React from 'react';
import {SafeAreaView} from 'react-native';
import {SalesList} from './src/components/sales-list/sales-list.component';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SalesList />
    </SafeAreaView>
  );
};

export default App;
