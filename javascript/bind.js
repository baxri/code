// Inspiration video
// Fun fun function
// https://www.youtube.com/watch?v=GhbhD1HR5vk
// https://www.youtube.com/watch?v=PIkA60I0dKU


let dog = {
    sound: "woof",
    talk: function () {
        console.log(this.sound);
    }
}

dog.talk();

let talkFunction = dog.talk; // woof

// Lets bind this function to dog object
let boundFunction = talkFunction.bind(dog);

talkFunction(); // undefined
boundFunction(); // woof


function talk() {
    console.log(this.sound);
}

let boromir = {
    blaber: talk,
    sound: 'On does not simply walk into mordor',
};

let gollum = {
    jabber: boromir.blaber,
    sound: 'My precioussssss...',
}

gollum.jabber()

boromir.blaber();

