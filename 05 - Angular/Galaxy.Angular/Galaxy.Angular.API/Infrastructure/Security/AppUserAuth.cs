using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Galaxy.Angular.API.Infrastructure.Security
{
    public class AppUserAuth
    {
        public AppUserAuth() : base()
        {
            UserName = "Not authorized";
            BearerToken = string.Empty;
        }

        public string UserName { get; set; }
        public string BearerToken { get; set; }
        public bool IsAuthenticated { get; set; }
        public bool CanAccessCustomers { get; set; }
        public bool CanAddCustomer { get; set; }
        public bool CanSaveCustomer { get; set; }
        public bool CanAccessOrders { get; set; }
    }
}
