import type { Transaction } from "./transaction";

export type ResponseTransaction = {
  message: string;
  data: Transaction;
};
