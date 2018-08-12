var ListContainerView = BaseView.extend({
	template: _.template($('#ListContainerView').text()),
	tagName: 'tr',
	viewDialogElement: '.ListItem_dialog',
	className: 'ListContainerView',
	msgPreviewCutoff: 75, // How many characters should the message preview be?

	events: {
		"click .ListItem_view_link" : "view",
		"mouseenter" : "showDelete",
		"mouseleave" : "hideDelete",
		"click button.delete" : "delete"
	},

	beforeRender: function() {
		var msg = jQuery.trim(this.model.attributes.message).substring(0, this.msgPreviewCutoff);
		if(this.model.attributes.message.length > this.msgPreviewCutoff) {
			msg += "...";
		}	
		this.model.attributes.message_short = msg;
	},

	view: function() {
		$(this.viewDialogElement).append( new ListItemView({
          model: this.model
        }).render().el);
	},

	delete: function() {
		this.model.collection.remove(this.model); 
		this.remove(); 
	},

	showDelete: function() {
		this.$el.find('button.delete').show();
	},

	hideDelete: function() {
		this.$el.find('button.delete').hide();
	}	
});