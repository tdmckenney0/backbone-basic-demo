var ListItemPagerView = BaseView.extend({
    className: 'ListItemPagerView',
    el: 'div.pager',
    
    events: {
        "click button.prev" : "previous",
        "click button.next" : "next",
    },

    initialize: function() {
        this.listenTo(this.collection, "all", this._setButtonStates);
        this._setButtonStates();
        return this;
    },

    _setButtonStates: function() {
        if(this.collection.currentPage <= 1) {
            this.$el.find('button.prev').hide();
        } else {
            this.$el.find('button.prev').show();
        }

        if((this.collection.currentPage * this.collection.itemsPerPage) >= this.collection.length) {
            this.$el.find('button.next').hide();
        } else {
            this.$el.find('button.next').show();
        }
    },

    previous: function() {
        this.collection.page(this.collection.currentPage - 1);
    },

    next: function() {
        this.collection.page(this.collection.currentPage + 1);
    }
});