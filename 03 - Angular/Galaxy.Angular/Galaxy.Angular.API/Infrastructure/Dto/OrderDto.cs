using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Galaxy.Angular.API.Infrastructure.Dto
{
    public class OrderDto
    {
        public OrderDto()
        {
            Items = new HashSet<OrderItemDto>();
        }
        public int OrderId { get; set; }
        public int CustomerId { get; set; }
        public ICollection<OrderItemDto> Items { get; set; }
    }
}
