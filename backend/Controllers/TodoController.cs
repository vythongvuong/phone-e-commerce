using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly TodoContext _context;

        public TodoController(TodoContext context)
        {
            _context = context;
        }
        
        
        // GET
        // [HttpGet("/index")]
        // public async Task<ActionResult<IEnumerable<TodoContext>>> Index()
        // {
        //     var res = await _context.TodoItems.FindAsync();
        //     return res;
        // }
    }
}