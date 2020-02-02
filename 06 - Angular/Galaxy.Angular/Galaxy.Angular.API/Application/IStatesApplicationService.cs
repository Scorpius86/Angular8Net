using Galaxy.Angular.API.Infrastructure.Dto;
using System.Collections.Generic;

namespace Galaxy.Angular.API.Application
{
    public interface IStatesApplicationService
    {
        IEnumerable<StateDto> ListStates();
        bool DeleteState(int stateId);
        StateDto InsertState(StateDto stateDto);
        StateDto UpdateState(StateDto stateDto);
    }
}