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
        var item = $models.getItem(selection.getItem(0));
        console.log('type=' + item.getItemType());
        if (item.getItemType() == "tcm:16" || item.getItemType() == "tcm:64") {
            return true;
        }
        else {
            return false;
        }
        
    },

    /**
     * Whether or not the item the command is attached to is enabled (if available and not enabled, will show as disabled state).
     */
    isEnabled: function (selection) {
        return true;
    },

   

    execute: function (selection) {
        // code below borrowed from 'Real Time Publishing Stats' plugin
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
});