import * as firebase from 'firebase'



// const config = {
//   apiKey: AIzaSyD8upzGpvjiY5Il2C7oNVCJ7mHwMQCYZLE,
//   authDomain: "expensify-1b6e9.firebaseapp.com",
//   databaseURL: "https://expensify-1b6e9.firebaseio.com",
//   projectId: "expensify-1b6e9",
//   storageBucket: "expensify-1b6e9.appspot.com",
//   messagingSenderId: "864798334319",
//   appId: "1:864798334319:web:106f2952006df46de99c9a"
// }


const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config);

const database = firebase.database()

export {firebase, database as default }

// database().ref().set({
//   name: 'Barney Boy',
//   age: 7,
//   isSingle: true
// })


// const del = [{
//   id: '14',
//   title: 'first note',
//   body: 'this is my note'
// },{
//   id: '78',
//   title: 'second note',
//   body: 'this is my second note'
// }
// ]


// database.ref('del').set(del)


// database().ref('notes').push({
//   title: 'something else',
//   body: 'Go for a swim'
// })

//database().ref('notes/-Lo9thbMK7gBCvk58M36').remove()

// database.ref('expenses').push({
//   description: "note description 1",
//   note: "note 1",
//   amount: 123,
//   createdAt:  12
// })

// database.ref('expenses').push({
//   description: "note description 2",
//   note: "note 2",
//   amount: 223,
//   createdAt:  22
// })

// database.ref('expenses').push({
//   description: "note description 3",
//   note: "note 3",
//   amount: 323,
//   createdAt:  32
// })

// database.ref('expenses')
// .once('value')
// .then( snapshot => {
//   //console.log(snapshot.val())
//   const expenses = []
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key, ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// })

// database.ref('expenses')
// .on('value',  snapshot => {
//   const expenses = []
//   snapshot.forEach(childSnapshot => {
//     expenses.push({ id: childSnapshot.key, ...childSnapshot.val()})
//   })
//   console.log(expenses)
// })

// database.ref('expenses')
// .on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
// .on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
// .on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// })


// setTimeout( () => {
//   database.ref('expenses').push({
//     name: "Barney",
//     age: "6.5"
//   })
// },5000)