using Alchemy4Tridion.Plugins.GUI.Configuration;
using UnlocalizeAll.Resources;

namespace UnlocalizeAll.GUI
{
    public class RibbonToolbar : Alchemy4Tridion.Plugins.GUI.Configuration.RibbonToolbarExtension
    {
        public RibbonToolbar()
        {
            // The unique identifier used for the html element created.
            AssignId = "";

            // The name of the command to execute when clicked
            Command = "UnLocalizeAllCommand";

            // The label of the button.
            Name = "UnlocalizeAll";

            // The page tab to assign this extension to. See Constants.PageIds.
            PageId = Constants.PageIds.HomePage;

            // Option GroupId, put this into an existing group (not capable if using a .ascx Control)
            GroupId = Constants.GroupIds.HomePage.ShareGroup;

            // The tooltip label that will get applied.
            Title = "UnlocalizeAll";

            // Add a dependency to the resource group that contains the files/commands that this toolbar extension will use.
            Dependencies.Add<ResourceGroupFiles>();

            // apply the extension to a specific view.
            Apply.ToView(Constants.Views.DashboardView, "DashboardToolbar");
        }
    }
}
