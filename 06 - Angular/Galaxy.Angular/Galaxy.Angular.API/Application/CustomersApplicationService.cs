using Galaxy.Angular.API.Application.Adapters;
using Galaxy.Angular.API.Infrastructure.Data.EntityFrameCore.Entities;
using Galaxy.Angular.API.Infrastructure.Data.Repository;
using Galaxy.Angular.API.Infrastructure.Dto;
using System.Collections.Generic;

namespace Galaxy.Angular.API.Application
{
    public class CustomersApplicationService: ICustomersApplicationService
    {
        public ICustomerRepository _customerRepository { get; set; }
        public ICustomAdapter _customAdapter { get; set; }
        public CustomersApplicationService(ICustomerRepository customerRepository,ICustomAdapter customAdapter)
        {
            _customerRepository = customerRepository;
            _customAdapter = customAdapter;
        }

        public IEnumerable<CustomerDto> ListCustomers()
        {
            return _customerRepository.ListCustomers();
        }

        public bool DeleteCustomer(int custumerId)
        {
            return _customerRepository.DeleteCustomer(custumerId);
        }

        public CustomerDto GetCustomer(int customerId)
        {
            return _customerRepository.GetCustomer(customerId);
        }

        public CustomerDto InsertCustomer(CustomerDto customerDto) 
        {
            Customer customer = _customerRepository.InsertCustomer(_customAdapter.FromCustomerDtoToCustomer(customerDto));

            CustomerDto newCustomerDto = _customerRepository.GetCustomer(customer.CustomerId);
                    
           return newCustomerDto;
        }
        public CustomerDto UpdateCustomer(CustomerDto customerDto) {
            Customer customer = _customerRepository.UpdateCustomer(_customAdapter.FromCustomerDtoToCustomer(customerDto));

            CustomerDto newCustomerDto = _customerRepository.GetCustomer(customer.CustomerId);

            return newCustomerDto;
        }

    }
}
