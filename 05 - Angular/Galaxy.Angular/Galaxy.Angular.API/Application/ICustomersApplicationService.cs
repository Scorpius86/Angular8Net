using Galaxy.Angular.API.Infrastructure.Dto;
using System.Collections.Generic;

namespace Galaxy.Angular.API.Application
{
    public interface ICustomersApplicationService
    {
        IEnumerable<CustomerDto> ListCustomers();
    }
}