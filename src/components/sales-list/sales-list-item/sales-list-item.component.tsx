import React from 'react';
import {Text, View} from 'react-native';
import {SaleResponse} from '../../../dto/response/sale-response.dto';

interface SalesListItemProps {
  sale: SaleResponse;
}

const SalesListItem: React.FC<SalesListItemProps> = ({sale}) => {
  return (
    <View style={{marginBottom: 40}}>
      <Text>Store Location: {sale.storeLocation}</Text>
      <Text>Coupon Used: {sale._id}</Text>
      <Text>Purchase Method: {sale.purchaseMethod}</Text>
    </View>
  );
};

export {SalesListItem};
