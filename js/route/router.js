define(["jquery", "backbone", "js/views/DirectoryView"],

    function($, Backbone, DirectoryView) {

        return Backbone.Router.extend({
        	directoryView : null,
            initialize: function() {
               // debugger;
                Backbone.history.start();
            },
            routes: {
                "": "index",
                "filter/:type": "urlFilter"

            },
            index: function() {
                this.directoryView = new DirectoryView();
            },
            urlFilter: function(type) {
                this.directoryView.filterType == type;
                this.directoryView.trigger("change:filterType");
            }

        });
    }

);