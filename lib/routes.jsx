FlowRouter.route('/', {
    name: 'home',
    subscriptions : function(p,q){
        this.register('tags', Meteor.subscribe('getTags'));
    },
    action: function(params) {
        /* The key 'content' is now a function */
        ReactLayout.render(MainLayout, {
            content() {
                return <HomePage />;
            }
        });
    }
});