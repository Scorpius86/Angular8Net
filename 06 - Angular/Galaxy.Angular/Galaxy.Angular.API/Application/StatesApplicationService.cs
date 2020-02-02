using Galaxy.Angular.API.Application.Adapters;
using Galaxy.Angular.API.Infrastructure.Data.EntityFrameCore.Entities;
using Galaxy.Angular.API.Infrastructure.Data.Repository;
using Galaxy.Angular.API.Infrastructure.Dto;
using System.Collections.Generic;

namespace Galaxy.Angular.API.Application
{
    public class StatesApplicationService: IStatesApplicationService
    {
        public IStateRepository _stateRepository { get; set; }
        public ICustomAdapter _customAdapter { get; set; }
        public StatesApplicationService(IStateRepository stateRepository)
        {
            _stateRepository = stateRepository;
        }

        public IEnumerable<StateDto> ListStates()
        {
            return _stateRepository.ListStates();
        }

        public bool DeleteState(int custumerId)
        {
            return _stateRepository.DeleteState(custumerId);
        }

        public StateDto InsertState(StateDto stateDto) 
        {
            State state = _stateRepository.InsertState(_customAdapter.FromStateDtoToState(stateDto));

            StateDto newStateDto = _stateRepository.GetState(state.StateId);
                    
           return newStateDto;
        }
        public StateDto UpdateState(StateDto stateDto) {
            return null;
        }

    }
}
