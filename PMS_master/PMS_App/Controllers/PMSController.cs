using PMS_App.ET;
using PMS_App.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PMS_App.Controllers
{
    public class PMSController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetUsuario()
        {

            PMSDataAccess data = new PMSDataAccess();
            List<Usuario> listUsuario = data.PMSlistUsuario.ToList();
            return Json(listUsuario, JsonRequestBehavior.AllowGet);
        }


        public void MyPostAction(Usuario model)
           {
               PMSDataAccess dc = new PMSDataAccess();
               dc.PMSlistUsuario.Add(model);
               dc.SaveChanges();

           }


        public void DelUsuarios(Usuario model)
        {
            PMSDataAccess dc = new PMSDataAccess();

            dc.PMSlistUsuario.Attach(model);
            dc.Entry(model).State = EntityState.Deleted;
            dc.SaveChanges();
        }

        [HttpPost]
        public JsonResult SelecionarUsuario(int Matricula)
        {
            PMSDataAccess dc = new PMSDataAccess();
            Usuario usuario = new Usuario();
            usuario = dc.PMSlistUsuario.Find(Matricula);
            return Json(usuario, JsonRequestBehavior.AllowGet);
        }

        public void EditarUsuario(Usuario model)
        {
            PMSDataAccess dc = new PMSDataAccess();
            dc.Entry(model).State = EntityState.Modified;
            dc.SaveChanges();

        }            
        
    }
}