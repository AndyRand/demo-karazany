import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  id?: StringFilter;
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  state?: StringNullableFilter;
  city?: StringNullableFilter;
  zip?: IntNullableFilter;
  newField?: StringNullableFilter;
};
