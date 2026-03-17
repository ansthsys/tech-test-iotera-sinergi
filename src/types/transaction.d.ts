export type Product = {
  quantity: number;
  device_id: string;
  price: number;
  column: string;
  name: string;
  location: string;
  sku: string;
};

export type Device = Record<string, unknown>;

export type Payment = {
  amount: number;
  method: string;
  nett: number;
  fee: PaymentFee;
  detail: PaymentDetail;
};

export type PaymentFee = {
  platform_sharing_revenue: number;
  mdr_qris: number;
};

export type PaymentDetail = {
  transaction_id?: string;
  transaction_status: string;
  transaction_time?: string;
  order_id?: string;
  issuer?: string;
  ref_no?: string;
  qris_data?: string;
};

export type Time = {
  firestore_timestamp: {
    _seconds: number;
    _nanoseconds: number;
  };
  timestamp: number;
};

export type TransactionDetail = {
  transaction_status: PaymentDetail["transaction_status"];
  order_id: string; // same as PaymentDetail["order_id"] but always exist
};

export type Transaction = Record<
  string,
  {
    product: Product;
    devices?: Device;
    payment: Payment;
    detail: TransactionDetail;
    time: Time;
  }
>;
