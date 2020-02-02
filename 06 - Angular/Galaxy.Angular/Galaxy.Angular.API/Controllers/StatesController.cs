using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Galaxy.Angular.API.Application;
using Galaxy.Angular.API.Infrastructure.Dto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Galaxy.Angular.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatesController : ControllerBase
    {
        public IStatesApplicationService _statesApplicationService { get; set; }
        public StatesController(IStatesApplicationService statesApplicationService)
        {
            _statesApplicationService = statesApplicationService;
        }
        [HttpGet]
        [Authorize]
        public IEnumerable<StateDto> ListStates()
        {
            return _statesApplicationService.ListStates();
        }

    }
}