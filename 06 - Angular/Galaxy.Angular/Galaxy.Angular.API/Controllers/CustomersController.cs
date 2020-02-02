using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Galaxy.Angular.API.Application;
using Galaxy.Angular.API.Infrastructure.Dto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Galaxy.Angular.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        public ICustomersApplicationService _customersApplicationService { get; set; }
        public CustomersController(ICustomersApplicationService customersApplicationService)
        {
            _customersApplicationService = customersApplicationService;
        }

        [HttpGet]
        [Authorize]
        public IEnumerable<CustomerDto> ListCustomers()
        {
            return _customersApplicationService.ListCustomers();
        }

        [HttpDelete("{customerId}")]
        [Authorize]
        public bool DeleteCustomer(int customerId)
        {
            return _customersApplicationService.DeleteCustomer(customerId);
        }

        [HttpPost]
        [Authorize]
        public CustomerDto InsertCustomer(CustomerDto customer)
        {
            return _customersApplicationService.InsertCustomer(customer);
        }

        [HttpPut("{customerId}")]
        [Authorize]
        public object UpdateCustomer(CustomerDto customer)
        {
            _customersApplicationService.UpdateCustomer(customer);
            return new ApiResponse
            {
                Status = true
            };
        }

        [HttpGet("{customerId}")]
        [Authorize]
        public CustomerDto GetCustomer(int customerId)
        {
            return _customersApplicationService.GetCustomer(customerId);
        }
    }
}