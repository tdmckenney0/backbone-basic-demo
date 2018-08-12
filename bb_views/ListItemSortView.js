var ListItemSortView = BaseView.extend({
    template: _.template($('#ListItemSortView').text()),
    tagName: 'tr',
    className: 'ListItemSortView',
    events: {
        "click .sort_schedule" : "sortSchedule",
        "click .sort_created_at" : "sortCreatedAt",
        "click .sort_created_by" : "sortCreatedBy"
    },

    // Initialization & afterRender //

    initialize: function() {
        this.listenTo(this.collection, 'all', this.render);
        return this;
    },

    afterRender: function() {
        $('.takehome_body').empty();

        var from =  (this.collection.currentPage - 1) * this.collection.itemsPerPage;
        var to = (this.collection.currentPage * this.collection.itemsPerPage);

        for(var i = from; i < to; i++) {
            if(typeof this.collection.at(i) !== "undefined") {
                $('.takehome_body').append( new ListContainerView({
                    model: this.collection.at(i)
                }).render().el);
            }
        }
    },

    // Sort methods. //

    sortSchedule: function() {
        this.collection.sortKey = 'schedule';
        this.collection.sortAutoDir();
    },

    sortCreatedAt: function() {
        this.collection.sortKey = 'created_at';
        this.collection.sortAutoDir();
    },

    sortCreatedBy: function() {
        this.collection.sortKey = 'created_by';
        this.collection.sortAutoDir();
    }

});