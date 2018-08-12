var ListItemView = BaseView.extend({
    template: _.template($('#ListItemView').text()),
    className: 'ListItemView',
    events: {
        "click button" : "remove"
    },
    afterRender: function() { 
        this.$el.show();
    },
});