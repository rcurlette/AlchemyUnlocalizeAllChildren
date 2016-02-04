using Alchemy4Tridion.Plugins.GUI.Configuration.Elements;

namespace UnlocalizeAll.Resources
{
    public class ResourceGroupFiles : Alchemy4Tridion.Plugins.GUI.Configuration.ResourceGroup
    {
        public ResourceGroupFiles()
        {
            AddFile("UnLocalizeAllCommand.js");
            AddFile<PluginCommandSet>();
            AddWebApiProxy();
            Dependencies.AddAlchemyCore();
        }
    }
}
