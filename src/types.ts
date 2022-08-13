export type bankType = {
  id: string;
  name: string;
  balance: number;
};

export type transactiontype = {
  paymentNO: number;
  bic: string;
  paymentCode: string;
  amount: number;
};

export type productType = {
  productId: number;
  productName: string;
  productPrice: number;
  productStock: number;
  productImage: string;
};
