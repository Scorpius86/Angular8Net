using Galaxy.Angular.API.Application;
using Galaxy.Angular.API.Infrastructure.Data.Repository;
using Microsoft.Extensions.DependencyInjection;

namespace Galaxy.Angular.API.Infrastructure.DI
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection RegisterDI(this IServiceCollection services)
        {
            services.AddTransient<ICustomersApplicationService, CustomersApplicationService>();
            services.AddTransient<ICustomerRepository, CustomerRepository>();

            return services;
        }
    }
}
