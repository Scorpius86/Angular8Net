using Galaxy.Angular.API.Infrastructure.Data.EntityFrameCore.Entities;
using Galaxy.Angular.API.Infrastructure.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Galaxy.Angular.API.Infrastructure.Data.Repository
{
    public interface ICustomerRepository
    {
        CustomerDto GetCustomer(int customerId);
        IEnumerable<CustomerDto> ListCustomers();
        bool DeleteCustomer(int custumerId);

        Customer InsertCustomer(Customer customer);
        Customer UpdateCustomer(Customer customer);
    }
}
