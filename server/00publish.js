if(Meteor.isServer){
    Meteor.publish('getTags',function(){
        return Tags.find();
    });

    Meteor.publish('getTagsByMenu',function(menu){
        return Tags.find({menu : menu});
    })
}