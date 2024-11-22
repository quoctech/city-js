var person = {
    name: 'Jerry',
    address: ['HN', 'BN'],
    say: function() {
        // this ở đây chính là obj person
        // mà person.name = this.name => Jerry
        console.log('Hello ' + this.name);
        console.log('address: ', this.address);
    }
};

// () -> execute function - thực thi
person.say();

// console.log(person);


