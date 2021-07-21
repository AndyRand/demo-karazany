import { SortOrder } from "../../util/SortOrder";

export type NewEntityOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
