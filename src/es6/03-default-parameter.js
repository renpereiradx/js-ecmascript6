function newUser(name, age, country) {
    var name = name || 'Hugo';
    var age = age || 31;
    var country = country || 'PY';
    console.log(name, age, country);
}

newUser();
newUser('Rene', 30, 'BR');

function newAdmin(name = 'Hugo', age = 31, country = 'PY') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Rene', 25, 'MX');