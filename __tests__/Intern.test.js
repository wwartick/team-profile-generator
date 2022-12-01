const Intern = require('../lib/Intern');

test('create an "intern" object', () => {
    const intern = new Intern('Will', 12, 'will@will.com', 'SFSU');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});

test('get intern name' , () => {
    const intern = new Intern('Will', 12, 'will@will.com', 'wwartick');
    expect(intern.getName()).toEqual(intern.name.toString());
})

test('get intern id' , () => {
    const intern = new Intern('Will', 12, 'will@will.com', 'wwartick');
    expect(intern.getId()).toEqual(intern.id);
})

test('get intern email' , () => {
    const intern = new Intern('Will', 12, 'will@will.com', 'wwartick');
    expect(intern.getEmail()).toEqual(intern.email.toString());
})

test('get intern school' , () => {
    const intern = new Intern('Will', 12, 'will@will.com', 'wwartick');
    expect(intern.getSchool()).toEqual(intern.school.toString());
})

test('get intern role' , () => {
    const intern = new Intern('Will', 12, 'will@will.com', 'wwartick');
    expect(intern.getRole()).toEqual("Intern");
})