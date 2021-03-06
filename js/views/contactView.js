define(['jquery', 'backbone','colorbox', 'js/Helper/imageupload_helper', "text!template/contactTemplate.html", "text!template/editcontactTemplate.html", 'alertify'],
    function($, Backbone, colorbox, ImageUploadHelper, contactTemplate, editcontactTemplate,Alertify) {
        // var ImageUploadHelper = requirejs('js/Helper/imageupload_helper');

        var ContactView = Backbone.View.extend({
            tagName: "tr",
            className: "contact-container",
            imgUrl: "",
            template: contactTemplate,
            editTemplate: _.template(editcontactTemplate),

            events: {
                "click button.delete": "deleteContact",
                "click button.edit": "editContact",
                "click button.save": "saveEdits",
                "click button.cancel": "cancelEdit",
                "blur .name": "validateName",
                "blur .address": "validateAddress",
                "keydown .tel": "validateTelephone",
                "blur .email": "validateEmail",
                "click .imageitem": "imageItemlarge"
            },
            
            imageItemlarge: function(e){
            
        //$(".imageitem").colorbox({rel:'images', transition:"elastic", width:"75%", height:"75%",reposition: "true" });
        //$(".imageitem").colorbox({iframe:true, innerWidth:640, innerHeight:390});
      $('.imageitem').colorbox({rel:'imageitem',width:"70%", height:"70%",transition:"elastic", scalePhotos:"100",overlayClose: false, escKey: true,});

         // e.preventDefault();
            },
            validateName: function(e) {
                var me = this;
                var viewdata = $(e.target);

                if ((_.isEmpty(viewdata.val()) == true) || ((viewdata.val()).toString().length) <= 5 || ((viewdata.val()).toString().length) > 25) {
                    viewdata.addClass("error");
                    me.$el.find('.save').attr('disabled', 'disabled');
                } else {
                    viewdata.removeClass("error");
                    me.$el.find('.save').removeAttr('disabled');
                }
            },
            validateAddress: function(e) {
                var me = this;
                var viewdata = $(e.target);
                if ((_.isEmpty(viewdata.val()) == true) || ((viewdata.val()).toString().length) <= 5 || ((viewdata.val()).toString().length) > 25) {
                    viewdata.addClass("error");
                    me.$el.find('.save').attr('disabled', 'disabled');
                } else {
                    viewdata.removeClass("error");
                    me.$el.find(".save").removeAttr('disabled');
                }

            },
            validateTelephone: function(event) {

                if (event.keyCode == 46 || event.keyCode == 8) {} else {
                    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                        event.preventDefault();
                    }
                }

            },
            validateEmail: function(e) {

                var viewdata = $(e.target);
                var me = this;
                var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);


                if (pattern.test(viewdata.val()) == false) {
                    viewdata.addClass("error");
                    me.$el.find('.save').attr('disabled', 'disabled');
                } else {
                    viewdata.removeClass("error");
                    me.$el.find('.save').removeAttr('disabled');
                }

            },

            cancelEdit: function() {
                this.render();
            },
            editContact: function(e) {

                this.$el.html(this.editTemplate(this.model.toJSON()));
                this.imageUpload = new ImageUploadHelper({
                    renderTo: $('#editimageupload-container')
                }).render();


                var newOpt = $("<option/>", {
                    html: "<em>Add new...</em>",
                    value: "addType"
                });


                this.$el.find("input[type='hidden']").remove();

            },

            saveEdits: function(e) {
                //debugger;
                e.preventDefault();
                var me = this,
                    imageurl = me.imageUpload.getImageUrl();
                me.imgUrl = (_.isEmpty(imageurl)) ? "./img/placeholder.png" : imageurl;//default image

                var formData = {},
                    prev = this.model.previousAttributes();
                $(e.target).closest("form").find(":input").add(".photo").each(function() {

                    var el = $(this);
                    formData[el.attr("class")] = el.val();
                });

                formData['type'] = me.$el.find('#select_type').val();
                formData['type_name'] = me.$el.find('#select_type option:selected').text();
                this.model.set(formData);
                this.model.set({
                    'photo': this.imgUrl
                });

                this.render();

                $.ajax({
                    type: "POST",
                    data: {
                        "postdata": this.model.toJSON()
                    },

                    url: base_url + '/index.php/Contact/getUpdateContact'

                });
                this.model.set(formData);

                this.render();
                _.each(contacts, function(contact) {

                    if (_.isEqual(contact, prev)) {
                        contacts.splice(_.indexOf(contacts, contact), 1, formData);
                    }
                });
            },
            deleteContact: function(events) {
               //debugger;
               events.preventDefault();
               var me = this;
                var removedType = me.model.get("type").toLowerCase();
                Alertify.confirm("Are you sure you want to delete this item?", function(e){
                    if (e) {
            // if(!confirm_delete){
            //     return;
            // }
                //console.log(me);
                $.ajax({
                    type: "POST",
                    data: {
                        "postdata" : me.model.toJSON()
                        },

                    url: base_url + '/index.php/Contact/deleteContactData'

                });
               me.model.destroy();
              me.remove();
                    }
                });
                 
               },

            render: function() {
                var tmpl = _.template(this.template);
                this.$el.html(tmpl(this.model.toJSON()));
                return this;
            }

        });
        return ContactView;

    });