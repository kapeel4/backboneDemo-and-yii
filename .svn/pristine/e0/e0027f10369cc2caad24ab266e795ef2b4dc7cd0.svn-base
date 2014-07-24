(function($) {

    var contacts = [{
        name: "Contact 1",
        address: "1, a street, a town, a city, AB12 3CD",
        tel: "0123456789",
        email: "anemail@me.com",
        type: "family"
    }, {
        name: "Contact 2",
        address: "1, a street, a town, a city, AB12 3CD",
        tel: "0123456789",
        email: "anemail@me.com",
        type: "family"
    }, {
        name: "Contact 3",
        address: "1, a street, a town, a city, AB12 3CD",
        tel: "0123456789",
        email: "anemail@me.com",
        type: "friend"
    }, {
        name: "Contact 4",
        address: "1, a street, a town, a city, AB12 3CD",
        tel: "0123456789",
        email: "anemail@me.com",
        type: "colleague"
    }, {
        name: "Contact 5",
        address: "1, a street, a town, a city, AB12 3CD",
        tel: "0123456789",
        email: "anemail@me.com",
        type: "family"
    }, {
        name: "Contact 6",
        address: "1, a street, a town, a city, AB12 3CD",
        tel: "0123456789",
        email: "anemail@me.com",
        type: "colleague"
    }, {
        name: "Contact 7",
        address: "1, a street, a town, a city, AB12 3CD",
        tel: "0123456789",
        email: "anemail@me.com",
        type: "friend"
    }, {
        name: "Contact 8",
        address: "1, a street, a town, a city, AB12 3CD",
        tel: "0123456789",
        email: "anemail@me.com",
        type: "family"
    }];

    // var Contact = Backbone.Model.extend({
    //     urlRoot: "./img",
    //     defaults: {
    //         name: "",
    //         address: "",
    //         tel: "",
    //         email: "",
    //         type: "",
    //         photo: "./img/placeholder.png"
    //     }
    // });

    // var Directory = Backbone.Collection.extend({
    //     model: Contact,
    //     url: "./img"
    // });

    var ContactView = Backbone.View.extend({
        tagName: "article",
        className: "contact-container",
        imgUrl: "",
        template: $("#contactTemplate").html(),
        editTemplate: _.template($("#contactEditTemplate").html()),
        events: {
            "click button.delete": "deleteContact",
            "click button.edit": "editContact",
            // "change select.type": "addType",
            "click button.save": "saveEdits",
            "change .inputfile": "imageUpload",
            "click button.cancel": "cancelEdit"
        },
        imageUpload: function(e) {
            var me = this;
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onload = function(readerEvent) {
                var image = new Image();
                image.onload = function(imageEvent) {
                    var canvas = document.createElement('canvas'),
                        width = image.width,
                        height = image.height;
                    canvas.width = 100;
                    canvas.height = 100;
                    canvas.getContext('2d').drawImage(image, 0, 0, 100, 100);
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function(event) {
                        if (xhr.readyState == 4) {
                            if (xhr.status == 200) {
                                console.log('Image uploaded: ' + xhr.responseText);
                                this.imgUrl = xhr.responseText;

                            } else {
                                console.log('Image upload failure');
                            }
                        }
                    }.bind(this);
                    xhr.open('post', 'upload.php', true);
                    xhr.send(canvas.toDataURL('image/jpeg'));

                }.bind(this);
                image.src = readerEvent.target.result;
                //$('photo').append(image);
            }.bind(me);
            reader.readAsDataURL(file);
        },
        cancelEdit: function() {
            this.render();
        },
        editContact: function(e) {

            this.$el.html(this.editTemplate(this.model.toJSON()));

            var newOpt = $("<option/>", {
                html: "<em>Add new...</em>",
                value: "addType"
            });

          
            this.select = directory.createSelect().addClass("type")
                .val(this.$el.find("#type").val()).append(newOpt)
                .insertAfter(this.$el.find(".name"));

            this.$el.find("input[type='hidden']").remove();
            //  if (this.select.val() === "addType") {
            // this.select.remove();

            // $("<input />", {
            //     "class": "type"
            // }).insertAfter(this.$el.find(".name")).focus();
            // }
        },
        saveEdits: function(e) {
            e.preventDefault();

            var formData = {},
                prev = this.model.previousAttributes();
            $(e.target).closest("form").find(":input").add(".photo").each(function() {

                var el = $(this);
                formData[el.attr("class")] = el.val();
            });



            this.model.set(formData);
            this.model.set({
                'photo': this.imgUrl
            });
            this.render();



            _.each(contacts, function(contact) {
               
                if (_.isEqual(contact, prev)) {
                    contacts.splice(_.indexOf(contacts, contact), 1, formData);
                }
            });
        },
        deleteContact: function() {
            var removedType = this.model.get("type").toLowerCase();

            this.model.destroy();

            this.remove();

            if (_.indexOf(directory.getTypes(), removedType) === -1) {
                directory.$el.find("#filter select").children("[value='" + removedType + "']").remove();
            }
        },

        render: function() {

            var tmpl = _.template(this.template);

            this.$el.html(tmpl(this.model.toJSON()));

            return this;
        }
    });

//     var DirectoryView = Backbone.View.extend({
//         el: $("#contacts"),
//         imgUrl: '',
//         initialize: function() {
//             this.collection = new Directory(contacts);
//             this.$el.find("#filter").append(this.createSelect());
//             this.on("change:filterType", this.filterByType, this);
//             this.collection.on("add", this.renderContact, this);
//             this.collection.on("remove", this.removeContact, this);

//             this.collection.on("reset", this.render, this);

//             this.render();
//         },
//         events: {
//             "change #filter select": "setFilter",
//             "click #add": "addContact",
//             "click #showForm": "showForm",
//             "change #photo": 'imageUpload'
//         },

//         imageUpload: function(e) {
//             var me = this;
//             var file = e.target.files[0];
//             var reader = new FileReader();
//             reader.onload = function(readerEvent) {
//                 var image = new Image();
//                 image.onload = function(imageEvent) {
//                     var canvas = document.createElement('canvas'),
//                         width = image.width,
//                         height = image.height;
//                     canvas.width = 100;
//                     canvas.height = 100;
//                     canvas.getContext('2d').drawImage(image, 0, 0, 100, 100);
//                     var xhr = new XMLHttpRequest();
//                     xhr.onreadystatechange = function(event) {
//                         if (xhr.readyState == 4) {
//                             if (xhr.status == 200) {
//                                 console.log('Image uploaded: ' + xhr.responseText);
//                                 this.imgUrl = xhr.responseText;

//                             } else {
//                                 console.log('Image upload failure');
//                             }
//                         }
//                     }.bind(this);
//                     xhr.open('post', 'upload.php', true);
//                     xhr.send(canvas.toDataURL('image/jpeg'));

//                 }.bind(this);
//                 image.src = readerEvent.target.result;
//                 //$('photo').append(image);
//             }.bind(me);
//             reader.readAsDataURL(file);
//         },


//         setFilter: function(e) {
//             this.filterType = e.currentTarget.value;

//             this.trigger("change:filterType");
//         },
//         showForm: function() {

//             this.$el.find("#addContact").slideToggle();
//         },

//         removeContact: function(removedModel) {

//             var removed = removedModel.attributes;

//             if (removed.photo === "/img/placeholder.png") {
//                 delete removed.photo;
//             }

//             _.each(contacts, function(contact) {
//                 if (_.isEqual(contact, removed)) {
//                     contacts.splice(_.indexOf(contacts, contact), 1);
//                 }
//             });
//         },

//         filterByType: function() {

//             if (this.filterType === "all") {
//                 this.collection.reset(contacts);
//                 contactsRouter.navigate("filter/all");
//             } else {
//                 this.collection.reset(contacts, {
//                     silent: true
//                 });

//                 var filterType = this.filterType,
//                     filtered = _.filter(this.collection.models, function(item) {
//                         return item.get("type").toLowerCase() === filterType;
//                     });

//                 this.collection.reset(filtered);
//                 contactsRouter.navigate("filter/" + filterType);
//             }
//         },
//         addContact: function(e) {
//             // e.preventDefault();

//             var me = this;
//             var newModel = {};
//             $("#addContact").children("input").each(function(i, el) {
//                 if ($(el).val() !== "") {
//                     if (el.id === "photo") {
//                         newModel[el.id] = me.imgUrl;
//                         el.parentNode.replaceChild(el.cloneNode(true), el);
//                     } else {
//                         newModel[el.id] = $(el).val();
//                         $(el).val('');
//                     };
//                 }
//             });

//             var formData = newModel;
//             contacts.push(formData);

//             if (_.indexOf(this.getTypes(), formData.type) === -1) {
//                 this.collection.add(new Contact(formData));
//                 this.$el.find("#filter").find("select").remove().end().append(this.createSelect());


//             } else {
//                 this.collection.add(new Contact(formData));
//             }

//         },

//         render: function() {

//             var that = this;
//             this.$el.find('#familyList').html('');

//             _.each(this.collection.models, function(item) {
//                 that.renderContact(item);
//             }, this);

//         },

//         renderContact: function(item) {


//             var contactView = new ContactView({
//                 model: item
//             });


//             this.$el.find('#familyList').append(contactView.render().el);

//         },
//         getTypes: function() {

//             return _.uniq(this.collection.pluck("type"), false, function(type) {
//                 return type.toLowerCase();
//             });
//         },

//         createSelect: function() {
//             var filter = this.$el.find("#filter"),
//                 select = $("<select/>", {
//                     html: "<option >All</option>"
//                 });

//             _.each(this.getTypes(), function(item) {
//                 var option = $("<option/>", {
//                     value: item.toLowerCase(),
//                     text: item.toLowerCase()
//                 }).appendTo(select);
//             });
//             return select;
//         }
//     });

//     var ContactsRouter = Backbone.Router.extend({
//         routes: {
//             "filter/:type": "urlFilter"
//         },

//         urlFilter: function(type) {

//             directory.filterType = type;
//             directory.trigger("change:filterType");
//         }
//     });

//     var contactsRouter = new ContactsRouter();
//     var directory = new DirectoryView();
//     Backbone.history.start();

// }(jQuery));