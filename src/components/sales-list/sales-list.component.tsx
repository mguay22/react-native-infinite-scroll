import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useGetSales} from '../../hooks/useGetSales';
import {SalesListItem} from './sales-list-item/sales-list-item.component';

const SalesList: React.FC = () => {
  const {sales, getNextSales, loading, refreshSales} = useGetSales();

  return (
    <FlatList
      data={sales}
      renderItem={({item: sale}) => {
        return <SalesListItem key={sale._id} sale={sale} />;
      }}
      onEndReached={getNextSales}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refreshSales} />
      }
    />
  );
};

export {SalesList};
