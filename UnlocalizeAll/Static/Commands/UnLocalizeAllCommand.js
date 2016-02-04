// ATTENTION: Modify "YourCommandName" to the name of your actual command
Alchemy.command("${PluginName}", "UnLocalizeAllCommand", {

    /**
     * Called when the command is constructed.
     */
    init: function () {
        console.log('UnLocalizeAllCommand init');
    },

    /**
     * Whether or not the item the command is attached to is available.
     */
    isAvailable: function (selection) {
        return true;
    },

    /**
     * Whether or not the item the command is attached to is enabled (if available and not enabled, will show as disabled state).
     */
    isEnabled: function (selection) {
        return true;
    },

    ///**
    // * The action that is performed when someone clicks on the item the command is attached to.
    // */
    //execute: function (selection) {
    //    var selectedItem = selection.getItems()[0],
    //    item = $models.getItem(selectedItem);
    //     console.log(selectedItem + ' is selectedItem');
    //     console.log('item is' + item);

    //    var url = "${ViewsUrl}/UnlocalizePopup.aspx?uri=" + selectedItem + '#',
    //        popup = $popup.create(url, "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=605,height=980", null);

    //    popup.open();

        // call service

        //console.log('UnLocalizeAllCommand clicked');
        //var service = Alchemy.Plugins["${PluginName}"].Api.UnlocalizeService;
        //console.log(service.);
        
        //console.log('uri-' + service.uri);
        //service.unlocalize({ uri: selectedItem })
		//	.success(function (data) {
		//	    console.log('success, ' + data);
		//	   // progress.finish({ success: true });
		//	})
		//	.error(function (errorType, error) {
		//	    console.log('error, ' + errorType + ', ' + error);
		//	    //progress.finish({ success: false });
		//	    $messages.registerError(error.message);
		//	});
        //console.log('done calling webservice');
 //   }

    execute: function (selection) {
        var selectedItem = selection.getItems()[0];
        var url = "${ViewsUrl}/UnlocalizePopup.aspx?uri=" + selectedItem + '#'; // "${ViewsUrl}PublishQueue.aspx";

    var onPopupClose = function() {
        $evt.removeEventHandler(this.properties.popupInstance, "unload", this.getDelegate(this.properties.popupCloseHandler));
        this.properties.popupInstance = null;
        this.properties.popupCloseHandler = null;
    }

    var popup = this.properties.popupInstance;
    if(popup)
    {
        popup.focus();
    }
    else
    {
        popup = $popup.create(url, "menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=400,height=800", null);

        this.properties.popupInstance = popup;
        this.properties.popupCloseHandler = onPopupClose;

        $evt.addEventHandler(popup, "unload", this.getDelegate(onPopupClose));

        popup.open();
    }
}

    //execute: function(selection)
    //{
    //    console.log('execute start');
    //    var p = this.properties;
    //    var url = "${ViewsUrl}UnlocalizePopup.aspx?uri=" + selection.getItems()[0];
            
    //    var parameters = { width: 400, height: 810 };
    //    var args = { popupType: Tridion.Controls.PopupManager.Type.MODAL_IFRAME };
    //    console.log('url=' + url);
    //    p.popup = $popup.create(url, parameters, args);
    //    $evt.addEventHandler(p.popup, "confirm", this.getDelegate(this.onConfirm));
    //    $evt.addEventHandler(p.popup, "close", this.getDelegate(this.closePopup));
    //    p.popup.open();
    //},

    //onConfirm: function(event)
    //{
    //    console.log('Start confirm...');
    //    var p = this.properties;
    //    var self = this;
    //    var service = Alchemy.Plugins["${PluginName}"].Api.UnlocalizeService;
    //    var uri = event.data.uri;
    //    console.log('event.data.uri');
    //    $evt.removeEventHandler(p.popup, "confirm", this.getDelegate(this.onConfirm));

    //    this.closePopup();

    //    var progress = $messages.registerProgress('UnLocalizing items');
    //    progress.setOnSuccessMessage(" Item UnLocalized (" + uri + ")");

    //    service.unlocalize({ uri: selectedItem })
	//	    .success(function (data) {
	//		    console.log('success, ' + uri + ' ' + data);
	//		    // progress.finish({ success: true });
	//	    })
	//	    .error(function (errorType, error) {
	//		    console.log('error, ' + errorType + ', ' + error);
	//		    //progress.finish({ success: false });
	//		    $messages.registerError(error.message);
	//	    });
    //},

    //closePopup: function()
    //{
    //    var popup = this.properties.popup;
    //    $evt.removeEventHandler(popup, "close", this.getDelegate(this.closePopup));
    //    popup.close();
    //    this.properties.popup = null;
    //},
});