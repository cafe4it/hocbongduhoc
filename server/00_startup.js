if(Meteor.isServer){
    Meteor.startup(function(){
        var TagsCfg = EJSON.parse(Assets.getText('tags.json'));
        if(TagsCfg.isInit){
            var menus = _.keys(TagsCfg.items);
            _.each(menus, function(m){
                var menuItems = TagsCfg.items[m];
                _.each(menuItems,function(i){
                    Tags.upsert({menu : m, code : i.code},{
                        $set:{
                            text : i.name,
                            code : i.code,
                            menu : m
                        }
                    })
                })
            })
        }
    })
}