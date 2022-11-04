/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

function findUserByUsername(users, username) {
	return users.find(function (obj) {
		if (obj.username === username) return obj;
		// if (obj.username === [username]) return obj; //confused on when to use [] or not.
	});
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

// function removeUser(users, username) {
// 	return users.findIndex(function (obj) {
// 		for (let i = 0; i < users.length; i++)
// 			if (obj.username === username) return obj;
// 	});
// .splice()
// }

// SPRINGBOARD SOLUTION:
function removeUser(users, username) {
	let foundIndex = users.findIndex(function (user) {
		return user.username === username;
	});
	// console.log(foundIndex); // returns 1 or -1
	if (foundIndex === -1) return;

	return users.splice(foundIndex, 1)[0];
}
