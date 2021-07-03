let person = {
    "first_name": "Tan",
    "last_name" : "Ah Kow",
    "email": "tan@gemail.com",
    "age": 33,
    "getFullName": function() {
        return this.first_name + " " + this.last_name;
    },
    "blood type":"AB"
    
}

console.log(person["first_name"], person["email"], person["age"]);

// if there are no spaces in key name, we can use .
console.log(person.first_name, person.email, person.age, person["blood type"])
console.log(person.getFullName())