const firebase = require('firebase');

if (!process.env.FIREBASE_CONFIG) {
    module.exports = { 
        get: () => (console.log(arguments), Promise.resolve()),
        post: () => (console.log(arguments), Promise.resolve()),
        put: () => (console.log(arguments), Promise.resolve()),
        delete: () => (console.log(arguments), Promise.resolve()),
    }
} else {
    const config = JSON.parse(process.env.FIREBASE_CONFIG);
    firebase.initializeApp(config);

    module.exports = {
        get: key =>
            firebase
                .database()
                .ref(key)
                .once('value')
                .then(snapshot => snapshot.val()),

        post: (key, data) =>
            firebase
                .database()
                .ref(key)
                .set(data),

        put: (key, data) =>
            firebase
                .database()
                .ref()
                .update({
                    [key]: data,
                }),

        delete: key =>
            firebase
                .database()
                .ref(key)
                .remove(),
    }
}
