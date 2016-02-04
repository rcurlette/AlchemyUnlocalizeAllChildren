<%@ Page Inherits="Tridion.Web.UI.Controls.TridionPage" %>
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8">
    <title>UnLocalize</title>
    <script src="${JsUrl}/jquery-2.1.4.js" lang="javascript"></script>
    <link rel="stylesheet" type="text/css" href="${CssUrl}/Popup.css">
    
    <script>
        jQuery(document).ready(function () {

            var url = location.href;
            var tcm = location.href.substring(url.indexOf("uri=tcm%3A") + 10, url.indexOf("#"));

            jQuery('compUri').val('tcm:' + tcm); // Declare a proxy to reference the hub. 

            jQuery('#btnUnlocalize').click(function () {
                console.log('#btnUnlocalize tcm=' + tcm);
                unlocalizeComp(tcm);
            });
        });

        function unlocalizeComp(tcm) {
            console.log('unlocalizeComp');
            
            Alchemy.Plugins["${PluginName}"].Api.UnlocalizeService.unlocalize(tcm)
              .success(function (response) {
                  alert(response);
              })
            .error(function (errorCode, errorObject) {
                alert("I was an error!" + errorCode);
                console.log(errorObject);
            });
           
        }
    </script>

</head>
<body>
    <h1>UnLocalize</h1>
    <button type="button" id="btnUnlocalize" class="btn" value="UnLocalize">UnLocalize</button>
    <div id="compUri"></div>



</body>

</html>







<%--<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Add User By Name</title>
            <script src="${JsUrl}/jquery-2.1.4.js" lang="javascript"></script>
    </head>
    <body>
        <div class="content">
            <h1>UnLocalize All Children</h1>
          <span id="compid">tcm</span>
            <div class="buttons right">
                <c:Button ID="UnlocalizeButton" runat="server" Label="Unlocalize" TabIndex="1" class="button2013 green tridion button" />
                <c:Button ID="CancelButton" runat="server" Label="Cancel" TabIndex="1" class="button2013 gray tridion button" />
            </div>
        </div>
    </body>
</html>--%>