// SendGrid
const sgMail = require('@sendgrid/mail');

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
// exports.addMessage = functions.https.onRequest(async (req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text;
//   // Push the new message into the Realtime Database using the Firebase Admin SDK.
//   const snapshot = await admin.database().ref('/messages').push({original: original});
//   // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//   res.redirect(303, snapshot.ref.toString());
// });

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.sendEmail = functions.database.ref('/messages/{messageId}')
    .onCreate((snap, context) => {
      let newData = snap.val()
      console.log(newData)
      // using Twilio SendGrid's v3 Node.js Library
      // https://github.com/sendgrid/sendgrid-nodejs
      // console.log("Sending Grid")
      // console.log(context)
      // console.log(snapshot)
      sgMail.setApiKey('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');
      // const id = await admin.database().ref('/messages').get('newMessageId');
      // console.log(id)
      const msg = {
        to: 'kchen0503@gmail.com',
        from: newData['email'],
        fromname: newData['name'],
        templateId: 'd-be3df185e685405e9944d4a17bf83c7c',
        dynamic_template_data: {
          subject: '* New Message: ' + newData['subject'],
          email:  newData['email'],
          name: newData['name'],
          text: newData['message']
        }
      };
      sgMail.send(msg);
      return 0;
          // // Grab the current value of what was written to the Realtime Database.
          // const original = snapshot.val();
          // console.log('Uppercasing', context.params.pushId, original);
          // const uppercase = original.toUpperCase();
          // // You must return a Promise when performing asynchronous tasks inside a Functions such as
          // // writing to the Firebase Realtime Database.
          // // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
          // return snapshot.ref.parent.child('uppercase').set(uppercase);
    });
