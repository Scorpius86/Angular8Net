using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Galaxy.Angular.API.Application;
using Galaxy.Angular.API.Infrastructure.Dto;
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
        public IEnumerable<CustomerDto> Get()
        {
            return _customersApplicationService.ListCustomers();
        }
    }
}