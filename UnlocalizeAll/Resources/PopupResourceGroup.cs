using Alchemy4Tridion.Plugins.GUI.Configuration;
using Alchemy4Tridion.Plugins.GUI.Configuration.Elements;

namespace UnlocalizeAll.Resources
{
    public class PopupResourceGroup : Alchemy4Tridion.Plugins.GUI.Configuration.ResourceGroup
    {
        public PopupResourceGroup()
        {
            AddFile("jquery-2.1.4.js");
          
            AddFile("Popup.css");
            
            AttachToView("UnlocalizePopup.aspx");
            AddWebApiProxy();
            Dependencies.AddAlchemyCore();
            Dependencies.Add("Tridion.Web.UI.Editors.CME");
        }
    }
}
