//Lesson 4
//The Node Event Emitter

var events = require('events');

element.on('click', function(){});
//This is a listener function. It will tell what events happen => to listen for.
//Kinda like alert! alert people to listen for directions (but not give out directions yet) when people heard a click event happens.
//When this element emitted a click event, then we want to fire the callback function to do something

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){ 
    console.log(mssg);
});
//When myEmitter emitted 'someEvent' happened, they will run the function message

myEmitter.emit('someEvent', 'the event was emitted');
//This is an emit function. 
//We let people knows 'someEvent' happens, then the second argument will be the message (what message we want people to know).




var util = require('util');

var Person = function(name){
    this.name = name;
};//when we do var Jane = new Person(); it creates a new scope about Jane
//Person is the function that creates people.
//this.name is mentioned about the Person's name

util.inherits(Person, events.EventEmitter);
//means COPY
//it becomes what you tell it to become
//which means a Person does not only have a name, a Person can do an event function

var david = new Person('david');
var tien = new Person('tien');
var borland = new Person('borland');
var people = [david, tien, borland];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
    });
});
//forEach is a function - goes loop through every element of the array.
//and attachs them with the event.EventEmitter to listen for what that person will speak (via person.on('speak'))

david.emit('speak', 'I love my wonderful wife, Tien Borland, so much!');
tien.emit('speak', 'I love my husband, David Borland, more!')