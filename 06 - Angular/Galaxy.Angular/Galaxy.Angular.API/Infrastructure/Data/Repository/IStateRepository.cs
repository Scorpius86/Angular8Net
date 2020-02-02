using Galaxy.Angular.API.Infrastructure.Data.EntityFrameCore.Entities;
using Galaxy.Angular.API.Infrastructure.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Galaxy.Angular.API.Infrastructure.Data.Repository
{
    public interface IStateRepository
    {
        StateDto GetState(int stateId);
        IEnumerable<StateDto> ListStates();
        bool DeleteState(int stateId);

        State InsertState(State state);
        State UpdateState(State state);
    }
}
