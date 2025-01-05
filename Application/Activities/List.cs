using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;
using Application.Core;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<Result<List<Activity>>> {}

        public class Handler : IRequestHandler<Query, Result<List<Activity>>>
        {
            private readonly DataDbContext _dbContext;

            public Handler(DataDbContext dbContext)
            {
                _dbContext = dbContext;
            }

            public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activities = await _dbContext.Activities.ToListAsync();
                
                return Result<List<Activity>>.Success(activities);
            }
        }
    }
}