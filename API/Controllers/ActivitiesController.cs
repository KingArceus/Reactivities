using Microsoft.AspNetCore.Mvc;
using Domain;
using Application.Activities.Queries;
using Application.Activities.Commands;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetActivities() 
        {
            var result = await Mediator.Send(new GetActivityList.Query());

            return HandleResult(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetActivity(string id)
        {
            var result = await Mediator.Send(new GetActivityDetails.Query{Id = id});

            return HandleResult(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            var result = await Mediator.Send(new CreateActivity.Command{Activity = activity});

            return HandleResult(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(string id, Activity activity) 
        {
            activity.Id = id;
            var result = await Mediator.Send(new EditActivity.Command{Activity = activity});

            return HandleResult(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(string id) 
        {
            var result = await Mediator.Send(new DeleteActivity.Command{Id = id});

            return HandleResult(result);
        }
    }
}