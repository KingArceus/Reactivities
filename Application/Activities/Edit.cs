using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest 
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataDbContext _dbContext;
        private readonly IMapper _mapper;

            public Handler(DataDbContext dbContext, IMapper mapper)
            {
                _mapper = mapper;
                _dbContext = dbContext;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _dbContext.Activities.FindAsync(request.Activity.Id);
                _mapper.Map(request.Activity, activity);

                await _dbContext.SaveChangesAsync();
            }
        }
    }
}