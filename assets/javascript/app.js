// Initialize Firebase
var config = {
	apiKey: "AIzaSyDiQWltX6MCK4LgXYHUnR-4ToH5Qj4NY0k",
	authDomain: "rps-multiplayer-3745e.firebaseapp.com",
	databaseURL: "https://rps-multiplayer-3745e.firebaseio.com",
	storageBucket: "rps-multiplayer-3745e.appspot.com",
	messagingSenderId: "251142224718"
};

firebase.initializeApp(config);

var database = firebase.database();

$('#btn-start-game').on('click', function() {
	//show progress bar 
	$('#row-find-game').show();

	//hide button
	$('#row-start-game').hide();

	findGame();
});



function findGame() {
	var games = database.ref('games');
	games.orderByKey('player2')
	// todo: start a new game or join an existing one
	// search for existing game
	// or create new game
}