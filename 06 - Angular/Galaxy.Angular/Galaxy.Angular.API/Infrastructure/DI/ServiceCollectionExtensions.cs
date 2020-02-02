using Galaxy.Angular.API.Application;
using Galaxy.Angular.API.Application.Adapters;
using Galaxy.Angular.API.Infrastructure.Data.Repository;
using Microsoft.Extensions.DependencyInjection;

namespace Galaxy.Angular.API.Infrastructure.DI
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection RegisterDI(this IServiceCollection services)
        {
            services.AddTransient<ICustomersApplicationService, CustomersApplicationService>();
            services.AddTransient<IStatesApplicationService, StatesApplicationService>();

            services.AddTransient<ICustomAdapter, CustomAdapter>();

            services.AddTransient<ICustomerRepository, CustomerRepository>();
            services.AddTransient<IStateRepository, StateRepository>();
            return services;
        }
    }
}
