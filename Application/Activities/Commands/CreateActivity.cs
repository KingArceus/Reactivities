using Application.Activities.DTOs;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Activities.Commands
{
    public class CreateActivity
    {
        public class Command : IRequest<Result<string>>
        {
            public required CreateActivityDto ActivityDto { get; set; }
        }

        public class Handler(DataDbContext context, IMapper mapper) : IRequestHandler<Command, Result<string>>
        {
            public async Task<Result<string>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = mapper.Map<Activity>(request.ActivityDto);

                context.Activities.Add(activity);
                var result = await context.SaveChangesAsync(cancellationToken) > 0;

                return result ? Result<string>.Success(activity.Id) : Result<string>.Failure("Failed to create activity", 400);
            }
        }
    }
}