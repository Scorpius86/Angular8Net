import { IOrderItem } from "./iorder-item";

export interface IOrder {
  Items?: IOrderItem[];
  OrderTotal?: number;
}
