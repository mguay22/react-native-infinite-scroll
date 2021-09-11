import {useEffect, useState} from 'react';
import {SaleResponse} from '../dto/response/sale-response.dto';

const PAGE_SIZE = 25;

export const useGetSales = () => {
  const [sales, setSales] = useState<SaleResponse[]>([]);
  const [saleCount, setSaleCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const getNextSales = async () => {
    if ((sales.length >= saleCount && page !== 0) || loading) {
      return;
    }
    setLoading(true);
    const skip = page * PAGE_SIZE;
    const limit = PAGE_SIZE;
    const nextSalesResponse = await fetch(
      `http://localhost:3000/sales?limit=${limit}&skip=${skip}`,
    );
    const parsedNextSalesResponse = await nextSalesResponse.json();
    if (page === 0) {
      setSales(parsedNextSalesResponse);
    } else {
      setSales(currentSales => [...currentSales, ...parsedNextSalesResponse]);
    }
    setPage(page + 1);
    setLoading(false);
  };

  const updateSaleCount = async () => {
    const saleCountResponse = await fetch('http://localhost:3000/sales/count');
    const parsedSaleCount = await saleCountResponse.json();
    setSaleCount(parsedSaleCount);
  };

  const refreshSales = async () => {
    setPage(0);
    setSaleCount(0);
    await updateSaleCount();
  };

  useEffect(() => {
    updateSaleCount();
  }, []);

  useEffect(() => {
    if (saleCount !== 0) {
      getNextSales();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saleCount]);

  return {
    sales,
    getNextSales,
    refreshSales,
    loading,
  };
};
