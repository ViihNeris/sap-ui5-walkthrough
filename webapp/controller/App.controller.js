sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict"; // -> linha criada para auxiliar erros comuns do JS. ex: garantir que variaveis declaradas sejam utilizadas.

    return Controller.extend("sap.ui.demo.walkthrough.App", {
      /* 
        // This code has been isolated in "component.js" (SOLID)

        onInit: function () {
          // set the data model on the view
          var oData = {
            recipient: {
              name: "UI5",
            },
          };
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel);
          // set i18n model on view
          var i18nModel = new ResourceModel({
            bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
            supportedLocales: [""],
            fallbackLocal: "",
          });
          this.getView().setModel(i18nModel, "i18n");
        },
      */
      onShowHello: function () {
        // read msg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);

        /*
            // Show a native or a vanilla JS alert
            // alert("Hello there!");
            MessageToast.show("Hello everyone!");
        */

        // Show message
        MessageToast.show(sMsg);
      },
    });
  }
);
