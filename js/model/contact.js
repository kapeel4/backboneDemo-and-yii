define(['jquery', 'backbone'],
    function($, Backbone) {
        'use strict';

        /* Return a model class definition */
        var contactmodel = Backbone.Model.extend({
            initialize: function() {
                //debugger;
            },

            defaults: {

                photo: '',
                name: '',
                address: '',
                tel: '',
                email: '',
                type_name: ''
            },
            validate: function(attrs) { //model validation
          //debugger;
                var errors = [];
                if (!attrs.photo) {
                    return 'Please fill name field.';
                }
                if (!attrs.name) {
                    return 'Please fill name field.';
                    //alert('wrong');
                }
                if (!attrs.address) {
                    return 'Please fill address field.';
                }
                if (!attrs.tel) {
                    return 'Please fill telepone field.';
                }
                if (!attrs.email) {
                    return 'Please fill email field.';
                }
                return errors.length > 0 ? errors : false;
            }



        });
        return contactmodel;
    });