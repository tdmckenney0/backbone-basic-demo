var ListItemModel = Backbone.Model.extend({ 
    initialize: function() {
        var schedule = moment(this.get('schedule'), "YYYY-MMDD HH:mm:ss").format('MMM Do YYYY, h:mm a'); 
        var created_at = moment(this.get('schedule'), "YYYY-MMDD HH:mm:ss").format('MMM Do YYYY, h:mm a'); 
        
        this.set('schedule', schedule);
        this.set('created_at', created_at);
    }
});