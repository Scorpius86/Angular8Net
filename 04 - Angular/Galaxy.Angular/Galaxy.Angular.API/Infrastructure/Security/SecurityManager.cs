using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Galaxy.Angular.API.Infrastructure.Security
{
    public class SecurityManager
    {
        private JwtSettings _settings = null;
        public SecurityManager(JwtSettings settings)
        {
            _settings = settings;
        }

        public AppUserAuth BuildUserAuthObject(AppUserAuth authUser)
        {
            // Set User Properties
            authUser.IsAuthenticated = true;
            authUser.BearerToken = new Guid().ToString();

            // Set JWT bearer token
            authUser.BearerToken = BuildJwtToken(authUser);

            return authUser;
        }

        protected string BuildJwtToken(AppUserAuth authUser)
        {
            SymmetricSecurityKey key = new SymmetricSecurityKey(
              Encoding.UTF8.GetBytes(_settings.Key));

            // Create standard JWT claims
            List<Claim> jwtClaims = new List<Claim>();
            jwtClaims.Add(new Claim(JwtRegisteredClaimNames.Sub,
                authUser.UserName));
            jwtClaims.Add(new Claim(JwtRegisteredClaimNames.Jti,
                Guid.NewGuid().ToString()));

            // Add custom claims
            jwtClaims.Add(new Claim("isAuthenticated",authUser.IsAuthenticated.ToString().ToLower()));
            jwtClaims.Add(new Claim("canAccessCustomers",authUser.CanAccessCustomers.ToString().ToLower()));
            jwtClaims.Add(new Claim("canAddCustomer",authUser.CanAddCustomer.ToString().ToLower()));
            jwtClaims.Add(new Claim("canSaveCustomer",authUser.CanSaveCustomer.ToString().ToLower()));
            jwtClaims.Add(new Claim("canAccessOrders",authUser.CanAccessOrders.ToString().ToLower()));

            // Create the JwtSecurityToken object
            var token = new JwtSecurityToken(
              issuer: _settings.Issuer,
              audience: _settings.Audience,
              claims: jwtClaims,
              notBefore: DateTime.UtcNow,
              expires: DateTime.UtcNow.AddMinutes(_settings.MinutesToExpiration),
              signingCredentials: new SigningCredentials(key,SecurityAlgorithms.HmacSha256)
            );

            // Create a string representation of the Jwt token
            return new JwtSecurityTokenHandler().WriteToken(token); ;
        }
    }
}
