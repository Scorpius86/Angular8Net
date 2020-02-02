using Galaxy.Angular.API.Infrastructure.Data.EntityFrameCore.Context;
using Galaxy.Angular.API.Infrastructure.Data.EntityFrameCore.Entities;
using Galaxy.Angular.API.Infrastructure.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Galaxy.Angular.API.Infrastructure.Data.Repository
{
    public class StateRepository : IStateRepository
    {
        public GalaxyAngularContext _galaxyAngularContext { get; set; }
        public StateRepository(GalaxyAngularContext galaxyAngularContext)
        {
            _galaxyAngularContext = galaxyAngularContext;
        }
        public StateDto GetState(int stateId)
        {
            var queryStates = from s in _galaxyAngularContext.States
                              where s.StateId == stateId
                              select new StateDto
                              {
                                  StateId = s.StateId,
                                  Abbreviation = s.Abbreviation,
                                  Name = s.Name

                              };

            List<StateDto> states = queryStates.ToList();

            return states.FirstOrDefault();
        }
        public IEnumerable<StateDto> ListStates()
        {
            var queryStates = from s in _galaxyAngularContext.States
                              select new StateDto
                              {
                                  StateId = s.StateId,
                                  Abbreviation = s.Abbreviation,
                                  Name = s.Name
                              };

            List<StateDto> states = queryStates.ToList();

            return states;
        }

        public bool DeleteState(int stateId)
        {
            var query = from s in _galaxyAngularContext.States
                        where s.StateId == stateId
                        select s;

            State state = query.FirstOrDefault();

            _galaxyAngularContext.States.Remove(state);

            _galaxyAngularContext.SaveChanges();

            return true;
        }

        public State InsertState(State state)
        {           
            _galaxyAngularContext.States.Add(state);

            _galaxyAngularContext.SaveChanges();

            return state;
        }

        public State UpdateState(State state)
        {
            _galaxyAngularContext.States.Update(state);

            _galaxyAngularContext.SaveChanges();

            return state;
        }
    }
}
