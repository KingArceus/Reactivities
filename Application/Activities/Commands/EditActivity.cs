using Application.Activities.DTOs;
using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands
{
    public class EditActivity
    {
        public class Command : IRequest<Result<Unit>>
        {
            public required EditActivityDto ActivityDto { get; set; }
        }

        public class Handler(DataDbContext context, IMapper mapper) : IRequestHandler<Command, Result<Unit>>
        {
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await context.Activities.FindAsync(request.ActivityDto.Id, cancellationToken);
                
                if (activity == null) return Result<Unit>.Failure("Activity not found", 404);

                mapper.Map(request.ActivityDto, activity);

                var result = await context.SaveChangesAsync() > 0;
                return result ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Failed to update activity", 400);
            }
        }
    }
}