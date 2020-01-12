using Galaxy.Angular.API.Infrastructure.Data.Repository;
using Galaxy.Angular.API.Infrastructure.Dto;
using System.Collections.Generic;

namespace Galaxy.Angular.API.Application
{
    public class CustomersApplicationService: ICustomersApplicationService
    {
        public ICustomerRepository _customerRepository { get; set; }
        public CustomersApplicationService(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public IEnumerable<CustomerDto> ListCustomers()
        {
            return _customerRepository.ListCustomers();
        }


    }
}
