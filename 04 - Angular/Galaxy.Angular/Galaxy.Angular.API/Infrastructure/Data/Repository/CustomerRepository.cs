using Galaxy.Angular.API.Infrastructure.Data.EntityFrameCore.Context;
using Galaxy.Angular.API.Infrastructure.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Galaxy.Angular.API.Infrastructure.Data.Repository
{
    public class CustomerRepository :ICustomerRepository
    {
        public GalaxyAngularContext _galaxyAngularContext { get; set; }
        public CustomerRepository(GalaxyAngularContext galaxyAngularContext)
        {
            _galaxyAngularContext = galaxyAngularContext;
        }
        public IEnumerable<CustomerDto> ListCustomers()
        {
            var queryCustomers = from c in _galaxyAngularContext.Customers
                                 join s in _galaxyAngularContext.States on c.StateId equals s.StateId
                                 select new CustomerDto
                                 {
                                     Address = c.Address,
                                     City = c.City,
                                     CustomerId = c.CustomerId,
                                     FirstName = c.FirstName,
                                     Gender = c.Gender,
                                     LastName = c.LastName,
                                     Latitude = c.Latitude,
                                     Longitude = c.Longitude,
                                     State = new StateDto
                                     {
                                         Abbreviation = s.Abbreviation,
                                         Name = s.Name
                                     }
                                 };

            List<CustomerDto> customers = queryCustomers.ToList();

            var queryOrders = from o in _galaxyAngularContext.Orders
                              select new OrderDto
                              {
                                  OrderId = o.OrderId,
                                  CustomerId = o.CustomerId
                              };

            List<OrderDto> orders = queryOrders.ToList();

            var queryOrderItems = from oi in _galaxyAngularContext.OrderItems
                                  select new OrderItemDto
                                  {
                                      OrderId = oi.OrderId,
                                      ProductId = oi.ProductId,
                                      ProductName = oi.Product.ProductName,
                                      ItemCost = oi.Product.ItemCost
                                  };

            List<OrderItemDto> orderItems = queryOrderItems.ToList();

            customers.ForEach(customer =>
            {
                List<OrderDto> customerOrders = orders.Where(w => w.CustomerId == customer.CustomerId).ToList();
                if (customerOrders.Any())
                {
                    customerOrders.ForEach(order =>
                    {
                        List<OrderItemDto> orderProducts = orderItems.Where(w => w.OrderId == order.OrderId).ToList();
                        if (orderProducts.Any())
                        {
                            orderProducts.ForEach(product =>
                            {
                                order.Items.Add(product);
                            });
                        }
                    });

                    customerOrders.ForEach(order =>
                    {
                        customer.Orders.Add(order);
                    });
                }
            });

            return customers;
        }
    }
}
