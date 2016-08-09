import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';


Meteor.startup(() =>
{
    // code to run on the server at startup
    // can NOT use a fat arrow, which wouldn't let us do this.userid
    Meteor.publish('bins', function() {
        return Bins.find({ ownerId: this.userId });
    });

    Meteor.publish('sharedBins', function () {
        const user = Meteor.users.findOne(this.userId);

        if (!user) return;

        const email = user.emails[0].address;

        return Bins.find({
            sharedWidth: { $elemMatch: { $eq: email }}
        });
    });
});