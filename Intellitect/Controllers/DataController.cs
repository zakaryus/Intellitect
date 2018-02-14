using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Intellitect.Controllers
{
    [Route("api/[controller]/[action]")]
    public class DataController : Controller
    {
        //While returning formatted html from a web api isn't really practical, I wanted some way
        //to demonstrate my knowledge of web api, and to have actual latency between client and
        //server. The loading icons displayed are actually due to the explicit server delay that
        //I intentionally added. In reality, I could have build this entire site in Angular alone.

        [HttpGet]
        public async Task<JsonResult> SoftwareEngineer()
        {
            await Delay();
            return Json($@"<p>I am a motivated Software Engineer with 5 years of professional experience. I am passionate about technology, and always hungry to learn more. In the past year I have completed over 8400 minutes of online coursework across 5 topics including Angular 5.</p>
                           <p>My current obsession is building modular web applications with Web Api and Angular. Presently, I am in a position of Full Stack development. I am leading the Backend team and assisting the Frontend team. The new product we are developing makes heavy use of a highly flexible Api by way of OData. We are documenting our Api using Swagger, and logging with Serilog. I am dedicated to being the best Software Engineer I can be. Our team is diverse and communicates well. I learn from anyone who's willing to offer and help whoever I can. I love writing code and can't imagine doing anything else. Thank you for taking the time to consider me, and feel free to look through the source code! I hope you like what you see!</p>
                           <p>Here are a few sites I've helped build (both are still actively under development)</p>
                           <ul>
                             <li>{GetLink("https://bitelixir.co")}</li>
                             <li>{GetLink("https://timesuckpodcast.com")}</li>
                           </ul>
                           <p>Interested in what I used to make this site? Click NEXT to find out more.</p>");
        }

        [HttpGet]
        public async Task<JsonResult> DotNetCore()
        {
            await Delay();
            return Json(GetLink("https://www.microsoft.com/net/learn/get-started/windows"));
        }

        [HttpGet]
        public async Task<JsonResult> WebApi2()
        {
            await Delay();
            return Json(GetLink("https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api"));
        }

        [HttpGet]
        public async Task<JsonResult> Angular5()
        {
            await Delay();
            return Json(GetLink("https://angular.io/docs"));
        }

        [HttpGet]
        public async Task<JsonResult> AngularMaterial()
        {
            await Delay();
            return Json(GetLink("https://material.angular.io/"));
        }

        [HttpGet]
        public async Task<JsonResult> NgxCharts()
        {
            await Delay();
            return Json(GetLink("https://swimlane.github.io/ngx-charts/"));
        }

        [HttpGet]
        public async Task<JsonResult> Ngrx()
        {
            await Delay();
            return Json(GetLink("https://github.com/ngrx/platform"));
        }

        private async Task Delay()
        {
            await Task.Delay(1200);
        }

        private string GetLink(string link)
        {
            return $"<a target='_blank' href='{link}'>{link}</a>";
        }
    }
}
