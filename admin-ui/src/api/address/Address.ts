import { Customer } from "../customer/Customer";

export type Address = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address_1: string | null;
  address_2: string | null;
  state: string | null;
  city: string | null;
  zip: number | null;
  customers?: Array<Customer>;
  newField: string | null;
};
