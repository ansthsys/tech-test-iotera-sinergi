import type { DeviceLog } from "./log";
import type { Transaction } from "./transaction";

export type ResponseTransaction = {
  message: string;
  data: Transaction;
};

export type ResponseLog = Record<string, DeviceLog>;
