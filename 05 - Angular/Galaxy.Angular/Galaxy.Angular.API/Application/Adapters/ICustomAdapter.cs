using Galaxy.Angular.API.Infrastructure.Data.EntityFrameCore.Entities;
using Galaxy.Angular.API.Infrastructure.Dto;

namespace Galaxy.Angular.API.Application.Adapters
{
    public interface ICustomAdapter
    {
        Customer FromCustomerDtoToCustomer(CustomerDto customerDto);
    }
}