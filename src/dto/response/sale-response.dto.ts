export interface SaleResponse {
  _id: string;
  saleDate: string;
  items: any[];
  storeLocation: string;
  customer: any;
  couponUsed: boolean;
  purchaseMethod: string;
}
