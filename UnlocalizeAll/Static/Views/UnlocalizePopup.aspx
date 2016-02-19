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

            document.getElementById("compUri").innerHTML = 'tcm:' + tcm;
          
            getLocalizedInfo(tcm);

            jQuery('#btnUnlocalize').click(function () {
                console.log('#btnUnlocalize tcm=' + tcm);
                unlocalizeComp(tcm);
            });
        });

        function getLocalizedInfo(tcm) {
            console.log('getLocalizedInfo');

            Alchemy.Plugins["${PluginName}"].Api.UnlocalizeService.getLocalizedCount(tcm)
              .success(function (response) {
                  document.getElementById("localizedCount").innerHTML = response;
              })
            .error(function (errorCode, errorObject) {
                alert("I was an error!" + errorCode);
                console.log(errorObject);
            });
        }

        function unlocalizeComp(tcm) {
            // code below borrowed from 'Real Time Publishing Stats' plugin
            console.log('unlocalizeComp');
            
            Alchemy.Plugins["${PluginName}"].Api.UnlocalizeService.unlocalize(tcm)
              .success(function (response) {
                  document.getElementById("results").innerHTML = response;
              })
            .error(function (errorCode, errorObject) {
                alert("I was an error!" + errorCode);
                console.log(errorObject);
            });
        }

       
    </script>

</head>
<body>
    <h1>UnLocalize <span id="compUri"></span>?</h1>
    <h2><span id="localizedCount"></span> Components Localized</h2>
    <br />
    <span style="color:red; font-size:medium">
        Do you want to UnLocalize the Component?  Warning:  This will remove all localize content from the localized Components. 
    </span>
    <br /><br /><br />
    <button type="submit" id="btnUnlocalize" class="btn" value="UnLocalize">UnLocalize it</button>
    <br /><br />
    <h2><span id="results" style="color:green"></span></h2>
    
</body>
</html>
