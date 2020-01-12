using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Galaxy.Angular.API.Infrastructure.Dto
{
    public class CustomerDto
    {
        public CustomerDto()
        {
            Orders = new HashSet<OrderDto>();
        }
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public decimal? Latitude { get; set; }
        public decimal? Longitude { get; set; }
        public virtual StateDto State { get; set; }
        public virtual ICollection<OrderDto> Orders { get; set; }
    }
}
