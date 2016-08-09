import { Mongo } from 'meteor/mongo';


Meteor.methods({

    // can NOT use a fat arrow notation, which binds "this" to this function, instead of at runtime!!
    // returns: bin ID
    'bins.insert': function() {
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId   // if logged in, this.userId is available right away!
        });
    },
    
    'bins.remove': function (bin) {
        // validation??

        return Bins.remove(bin);
    },

    'bins.update_content': function (bin, newContent) {
        // again, validation??

        return Bins.update(
            bin._id,
            { $set: { content: newContent} }
        );
    },

    'bins.share': function (bin, email) {
        // again, validation??

        return Bins.update(bin._id, { $push: {sharedWidth: email}});
    }

});

export const Bins = new Mongo.Collection('bins');