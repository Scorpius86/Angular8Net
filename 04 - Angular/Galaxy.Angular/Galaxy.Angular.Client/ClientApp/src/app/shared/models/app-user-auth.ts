export class AppUserAuth {
  constructor() {
    this.IsAuthenticated = false;
    this.BearerToken = "";
  }
  UserName: string;
  BearerToken: string;
  IsAuthenticated: boolean;
  CanAccessCustomers: boolean;
  CanAddCustomer: boolean;
  CanSaveCustomer: boolean;
  CanAccessOrders: boolean;
}
