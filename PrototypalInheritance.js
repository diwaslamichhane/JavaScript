// Prototypal Inheritance means, we can transfer the features of one object to others object through prototype.

var table = {
    walks: false,
    talk: false,
    eat: false
}

var nonLivingThings = {
    breathe: false,
    smells: false,
    sleep: false
}

nonLivingThings.__proto__ = table;

// syntax is : object name (where we want to pass features) . __proto__ = object name (of whoose you want to share feature)
