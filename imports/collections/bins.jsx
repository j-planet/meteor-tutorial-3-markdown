import { Mongo } from 'meteor/mongo';


Meteor.methods({

    // can NOT use a fat arrow notation, which binds "this" to this function, instead of at runtime!!
    'bins.insert': function() {
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId   // if logged in, this.userId is available right away!
        });
    }

});

export const Bins = new Mongo.Collection('bins');