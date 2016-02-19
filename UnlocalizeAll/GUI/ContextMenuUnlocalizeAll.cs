using Alchemy4Tridion.Plugins.GUI.Configuration;
using UnlocalizeAll.Resources;

namespace UnlocalizeAll.GUI
{
    public class ContextMenuUnlocalizeAll : Alchemy4Tridion.Plugins.GUI.Configuration.ContextMenuExtension
    {
        public ContextMenuUnlocalizeAll()
        {
            AssignId = "";


            // The label of the button.
            Name = "UnlocalizeAll";

            // Use this property to specify where in the context menu your items will go
            InsertBefore = Constants.ContextMenuIds.MainContextMenu.Blueprinting;

            // Use AddItem() or AddSubMenu() to add items for this context menu
            //       element id      title        command name
            AddItem("unlocalize_all_cm", "Unlocalize All", "UnLocalizeAllCommand");

            // Add a dependency to the resource group that contains the files/commands that this toolbar extension will use.
            Dependencies.Add<ResourceGroupFiles>();

            // apply the extension to a specific view.
            Apply.ToView(Constants.Views.DashboardView);
        }
    }
}
