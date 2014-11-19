Today = new Meteor.Collection("today");
ThisWeek = new Meteor.Collection("thisWeek");
MediumTerm = new Meteor.Collection("mediumTerm");


if (Meteor.isClient) {

	Template.today.helpers({

		returnAllItems: function () {
			var currentUserId = Meteor.userId();
			return Today.find({
				createdBy: currentUserId
			})

		},
		highlightedItem: function () {
			var itemId = this._id;
			var selectedItem = Session.get('selectedItem');
			if (selectedItem === itemId) {
				return 'selected'
			}

		}
	})
	


	Template.thisWeek.helpers({

		returnAllItems: function () {
			var currentUserId = Meteor.userId();
			return ThisWeek.find({
				createdBy: currentUserId
			})

		},
		highlightedItem: function () {
			var itemId = this._id;
			var selectedItem = Session.get('selectedItem');
			if (selectedItem === itemId) {
				return 'selected'
			}

		}
	})

	Template.mediumTerm.helpers({
		returnAllItems: function () {
			var currentUserId = Meteor.userId();
			return MediumTerm.find({
				createdBy: currentUserId
			})

		},
		highlightedItem: function () {
			var itemId = this._id;
			var selectedItem = Session.get('selectedItem');
			if (selectedItem === itemId) {
				return 'selected'
			}

		}
	})

	Template.today.events({
		'keyup .today': function (e) {
			if (e.which === 13) {
				var currentUserId = Meteor.userId();
				Today.insert({
					item: $('.today').val(),
					createdBy: currentUserId
				});
				$('.today').val('');
			}
		},
		'click .itemSelect': function () {
			var itemId = this._id;
			Session.set('selectedItem', itemId);
			var selectedItem = Session.get('selectedItem')
			console.log(selectedItem)
		},
		'click .remove': function () {
			var selectedItem = Session.get('selectedItem');
			Today.remove(selectedItem);
		},
		'click .complete': function () {
			var currentUserId = Meteor.userId();
			var selectedItem = Session.get('selectedItem');
			var selectorr = $('.selected');		
		}



	})

	Template.thisWeek.events({
		'keyup .thisWeek': function (e) {
			if (e.which === 13) {
				var currentUserId = Meteor.userId();
				ThisWeek.insert({
					item: $('.thisWeek').val(),
					createdBy: currentUserId

				});
				$('.thisWeek').val('');
			}
		},

		'click .itemSelect': function () {
			var itemId = this._id;
			Session.set('selectedItem', itemId);
			var selectedItem = Session.get('selectedItem')
			console.log(selectedItem)
		},
		'click .remove': function () {
			var selectedItem = Session.get('selectedItem');
			ThisWeek.remove(selectedItem);
		}

	})

	Template.mediumTerm.events({
		'keyup .mediumTerm': function (e) {
			if (e.which === 13) {
				var currentUserId = Meteor.userId();
				MediumTerm.insert({
					item: $('.mediumTerm').val(),
					createdBy: currentUserId
				});
				$('.mediumTerm').val('');
			}
		},
		'click .itemSelect': function () {
			var itemId = this._id;
			Session.set('selectedItem', itemId);
			var selectedItem = Session.get('selectedItem')
			console.log(selectedItem)
		},
		'click .remove': function () {
			var selectedItem = Session.get('selectedItem');
			MediumTerm.remove(selectedItem);
		},

	})
}