using API.Middleware;
using Application.Activities.Queries;
using Application.Activities.Validators;
using Application.Core;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration) 
        {
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            services.AddSwaggerGen();

            services.AddDbContext<DataDbContext>(opt => {
                opt.UseSqlite(configuration.GetConnectionString("DefaultConnection"));
            });

            services.AddCors(opt => {
                opt.AddPolicy("CorsPolicy", policy => {
                    policy.AllowAnyHeader().AllowAnyMethod()
                          .AllowCredentials()
                          .WithOrigins("https://localhost:3000");
                });
            });

            services.AddMediatR(config => {
                config.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>();
                config.AddOpenBehavior(typeof(ValidationBehavior<,>));
            });
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);
            services.AddFluentValidationAutoValidation();
            services.AddValidatorsFromAssemblyContaining<CreateActivityValidator>();
            services.AddTransient<ExceptionMiddleware>();

            return services;
        }
    }
}