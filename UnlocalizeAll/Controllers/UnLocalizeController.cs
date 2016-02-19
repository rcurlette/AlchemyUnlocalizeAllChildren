using Alchemy4Tridion.Plugins;
using System.Web.Http;
using System.Xml.Linq;
using Tridion.ContentManager.CoreService.Client;

namespace UnlocalizeAll.Controllers
{
    /// <summary>
    /// An ApiController to create web services that your plugin can interact with.
    /// </summary>
    /// <remarks>
    /// The AlchemyRoutePrefix accepts a Service Name as its first parameter.  This will be used by both
    /// the generated Url's as well as the generated JS proxy.
    /// <c>/Alchemy/Plugins/{YourPluginName}/api/{ServiceName}/{action}</c>
    /// <c>Alchemy.Plugins.YourPluginName.Api.Service.action()</c>
    /// 
    /// The attribute is optional and if you exclude it, url's and methods will be attached to "api" instead.
    /// <c>/Alchemy/Plugins/{YourPluginName}/api/{action}</c>
    /// <c>Alchemy.Plugins.YourPluginName.Api.action()</c>
    /// </remarks>
    [AlchemyRoutePrefix("UnlocalizeService")]
    public class UnLocalizeController : AlchemyApiController
    {
        /// // GET /Alchemy/Plugins/{YourPluginName}/api/{YourServiceName}/YourRoute
        /// <summary>
        /// Just a simple example..
        /// </summary>
        /// <returns>A string "Your Response" as the response message.</returns>
        /// </summary>
        /// <remarks>
        /// All of your action methods must have both a verb attribute as well as the RouteAttribute in
        /// order for the js proxy to work correctly.
        /// </remarks>
        [HttpGet]
        [Route("Unlocalize/{uri}")]
        public string Unlocalize(string uri = "")
        {
            uri = "tcm:" + uri;

            UsingItemsFilterData filter = new UsingItemsFilterData();
            filter.IncludeLocalCopies = true;

            var children = Client.GetListXml(uri, filter);
            int count = 0;

            foreach (XElement item in children.Elements())
            {
                Client.UnLocalize(item.Attribute("ID").Value, new ReadOptions());
                count++;
            }

            return count.ToString() + " Items Unlocalized";
        }

        [HttpGet]
        [Route("GetLocalizedCount/{uri}")]
        public string GetLocalizedCount(string uri = "")
        {
            uri = "tcm:" + uri;

            UsingItemsFilterData filter = new UsingItemsFilterData();
            filter.IncludeLocalCopies = true;

            var children = Client.GetListXml(uri, filter);
            int count = 0;

            foreach (XElement item in children.Elements())
            {
                count++;
            }

            return count.ToString();
        }
    }
}
