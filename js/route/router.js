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
                "filter/:type": "urlFilter",
                "logout" : "logout"
            },
            index: function() {
                this.directoryView = new DirectoryView();
                $.get(base_url+'/index.php/Contact/getlogindata', function(data){
                    //console.log(data);
                    if(data._success == true) {
                      $('#usersession').html('Welcome '+data.username + ' | <a href="#logout" class="navbar-link">Logout</a>');
                      $('#sessionForm').hide();
                    }
                    else{
                        $('#sessionForm').show();
                        $('#usersession').html('Not logedin');
                    }

                },'json');
            },
            logout : function(){
                var thisthis=this;
                $.get(base_url+'/index.php/Contact/logout', function(data){
                    //console.log(data);
                    if(data._success == true) {
                      $('#usersession').html('Not logedin');
                      $('#sessionForm').show();
                      $('#contact').children().remove();
                      thisthis.navigate("#",{trigger:true, replace:true});

                    }
                    
                },'json');
            },
            urlFilter: function(type) {
                this.directoryView.filterType == type;
                this.directoryView.trigger("change:filterType");
            }

        });
    }

);