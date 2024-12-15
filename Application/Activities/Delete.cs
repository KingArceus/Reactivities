using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest 
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataDbContext _dbContext;

            public Handler(DataDbContext dbContext)
            {
                _dbContext = dbContext;
            }


            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _dbContext.Activities.FindAsync(request.Id);

                _dbContext.Remove(activity);
                await _dbContext.SaveChangesAsync();
            }
        }
    }
}