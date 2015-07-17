Tags = new Meteor.Collection('tags');

Schools = new Meteor.Collection('schools');

var Schemas = {};

Schemas.Tag = new SimpleSchema({
    text : {
        type : String
    },
    code : {
        type : String
    },
    menu : {
        type : String
    }
});

Tags.attachSchema(Schemas.Tag);