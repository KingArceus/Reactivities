using API.DTOs;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController(SignInManager<User> signInManager) : BaseApiController
    {
        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult> RegisterUser(RegisterDto registerDto) 
        {
            var user = new User
            {
                DisplayName = registerDto.DisplayName,
                UserName = registerDto.Email,
                Email = registerDto.Email
            };

            var result = await signInManager.UserManager.CreateAsync(user, registerDto.Password);

            if (result.Succeeded) return Ok();
            
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError("error", error.Description);
            }

            return ValidationProblem(ModelState);
        }

        [AllowAnonymous]
        [HttpGet("user-info")]
        public async Task<ActionResult> GetUserInfo()
        {
            if (User.Identity?.IsAuthenticated != true) return NoContent();
            
            var user = await signInManager.UserManager.GetUserAsync(User);

            if (user == null) return Unauthorized();

            return Ok(new
            {
                user.DisplayName,
                user.Email,
                user.Id,
                user.ImageUrl
            });
        }

        [HttpPost("logout")]
        public async Task<ActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return NoContent();
        }        
    }
}