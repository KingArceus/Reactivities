using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest 
        {
            public Activity Activity { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Activity).SetValidator(new ActivityValidator());
            }
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
                _dbContext.Activities.Add(request.Activity);
                await _dbContext.SaveChangesAsync();
            }
        }
    }
}