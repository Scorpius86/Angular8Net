using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Galaxy.Angular.API.Infrastructure.Dto;
using Galaxy.Angular.API.Infrastructure.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Galaxy.Angular.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private JwtSettings _settings;
        public AuthController(JwtSettings settings)
        {
            _settings = settings;
        }
        [HttpPost]  
        public AppUserAuth Login([FromBody] UserLoginDto userLogin)
        {
            AppUserAuth appUserAuth = new AppUserAuth
            {
                UserName = userLogin.Email,
                CanAccessCustomers=true,
                CanAccessOrders = true,
                CanAddCustomer = true,
                CanSaveCustomer = true
            };

            SecurityManager mgr = new SecurityManager(_settings);

            return mgr.BuildUserAuthObject(appUserAuth);
        }

        [HttpPost]
        public bool Logout()
        {
            return true;
        }


    }
}