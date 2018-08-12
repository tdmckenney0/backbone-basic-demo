var ListItemSearchView = BaseView.extend({
    className: 'ListItemSearchView',
    el: 'form.search',
    events: {
        'submit' : 'search',
        'reset' : 'reset'
    },

    search: function(e) {
        e.preventDefault();
        var str = this.$el.find('input').first().val();
        this.collection.search(str);
    },

    reset: function(e) {
        this.collection.reload();
    }
});