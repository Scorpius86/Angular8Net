import { IState } from "./istate";
import { IOrder } from "./iorder";

export interface ICustomer {
  Id: number;
  FirstName: string;
  LastName: string;
  Gender: string;
  Address: string;
  City: string;
  State: IState;
  Orders?: IOrder[];
  Total?: number;
  Latitude?: number;
  Longitude?: number;
}
