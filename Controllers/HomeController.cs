using BasicConfig.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Linq;

namespace BasicConfig.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IHostingEnvironment _hostingEnvironment;
        public HomeController(IHostingEnvironment hostingEnvironment, ApplicationDbContext context)
        {
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }
        public ViewResult Index()
        {
            string webRootPath = _hostingEnvironment.WebRootPath;
            string directoryCiesielstwo = Path.Combine(webRootPath, "src", "img", "ciesielstwo");
            ViewBag.imagesCiesielstwo = Directory
                .EnumerateFiles(directoryCiesielstwo, "*", SearchOption.AllDirectories)
                .Select(Path.GetFileName);
            string directoryDomki = Path.Combine(webRootPath, "src", "img", "domki");
            ViewBag.imagesDomki = Directory
                .EnumerateFiles(directoryDomki, "*", SearchOption.AllDirectories)
                .Select(Path.GetFileName);
            string directoryGalanteria = Path.Combine(webRootPath, "src", "img", "galanteria");
            ViewBag.imagesGalanteria = Directory
                .EnumerateFiles(directoryGalanteria, "*", SearchOption.AllDirectories)
                .Select(Path.GetFileName);
            string directorySchody = Path.Combine(webRootPath, "src", "img", "schody");
            ViewBag.imagesSchody = Directory
                .EnumerateFiles(directorySchody, "*", SearchOption.AllDirectories)
                .Select(Path.GetFileName);
            string directoryWewnetrzne = Path.Combine(webRootPath, "src", "img", "wewnetrzne");
            ViewBag.imagesWewnetrzne = Directory
                .EnumerateFiles(directoryWewnetrzne, "*", SearchOption.AllDirectories)
                .Select(Path.GetFileName);
            string directoryWyposazenie = Path.Combine(webRootPath, "src", "img", "wyposazenie");
            ViewBag.imagesWyposazenie = Directory
                .EnumerateFiles(directoryWyposazenie, "*", SearchOption.AllDirectories)
                .Select(Path.GetFileName);
            string directoryZewnetrzne = Path.Combine(webRootPath, "src", "img", "zewnetrzne");
            ViewBag.imagesZewnetrzne = Directory
                .EnumerateFiles(directoryZewnetrzne, "*", SearchOption.AllDirectories)
                .Select(Path.GetFileName);
            return View();
        }
    }
}
