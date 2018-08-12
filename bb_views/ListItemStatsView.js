var ListItemStatsView = BaseView.extend({
    template: _.template($('#ListItemStatsView').text()),
    className: 'ListItemStatsView',
    stats: {
        "total" : 0,
        "approved" : 0,
        "pending" : 0,
        "rejected" : 0,
    },
    initialize: function() {
        this.listenTo(this.collection, 'remove', this.render);
        return this;
    },
    render: function() {

        this.stats.total = this.collection.length;
    
        this.stats.approved = this.collection.where({ customer_approved : "1", manager_approved : "1" }).length;

        this.stats.pending = this.collection.filter(function(model) { 
            return (model.attributes.customer_approved == 0 || model.attributes.manager_approved == 0);
        }).length;

        this.stats.rejected = this.collection.filter(function(model) { 
            return (model.attributes.customer_approved == -1 || model.attributes.manager_approved == -1);
        }).length;

        this.$el.html(this.template(this.stats));

        return this;
    }
});