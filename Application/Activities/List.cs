using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> {}

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataDbContext _dbContext;

            public Handler(DataDbContext dbContext)
            {
                _dbContext = dbContext;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _dbContext.Activities.ToListAsync();
            }
        }
    }
}