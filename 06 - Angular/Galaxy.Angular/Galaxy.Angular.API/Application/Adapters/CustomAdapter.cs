using Galaxy.Angular.API.Infrastructure.Data.EntityFrameCore.Entities;
using Galaxy.Angular.API.Infrastructure.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Galaxy.Angular.API.Application.Adapters
{
    public class CustomAdapter: ICustomAdapter
    {
        public Customer FromCustomerDtoToCustomer(CustomerDto customerDto)
        {
            return new Customer
            {
                CustomerId = customerDto.Id,
                Address = customerDto.Address,
                City = customerDto.City,
                FirstName = customerDto.FirstName,
                Gender = customerDto.Gender,
                LastName = customerDto.LastName,
                Latitude = customerDto.Latitude,
                Longitude = customerDto.Longitude,
                StateId = customerDto.State.StateId
            };
        }

        public State FromStateDtoToState(StateDto stateDto)
        {
            return new State
            {
                StateId = stateDto.StateId,
                Name = stateDto.Name,
                Abbreviation = stateDto.Abbreviation
            };
        }
    }
}
