using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands
{
    public class CreateActivity
    {
        public class Command : IRequest<Result<string>>
        {
            public required Activity Activity { get; set; }
        }

        public class Handler(DataDbContext context) : IRequestHandler<Command, Result<string>>
        {
            public async Task<Result<string>> Handle(Command request, CancellationToken cancellationToken)
            {
                context.Activities.Add(request.Activity);
                var result = await context.SaveChangesAsync(cancellationToken) > 0;

                return result ? Result<string>.Success(request.Activity.Id) : Result<string>.Failure("Failed to create activity");
            }
        }
    }
}