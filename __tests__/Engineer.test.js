const Engineer = require('../lib/Engineer');

test('create an "engineer" object', () => {
    const engineer = new Engineer('Will', 12, 'will@will.com', 'wwartick');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('get Engineer name' , () => {
    const engineer = new Engineer('Will', 12, 'will@will.com', 'wwartick');
    expect(engineer.getName()).toEqual(engineer.name.toString());
})

test('get Engineer id' , () => {
    const engineer = new Engineer('Will', 12, 'will@will.com', 'wwartick');
    expect(engineer.getId()).toEqual(engineer.id);
})

test('get Engineer email' , () => {
    const engineer = new Engineer('Will', 12, 'will@will.com', 'wwartick');
    expect(engineer.getEmail()).toEqual(engineer.email.toString());
})

test('get Engineer github' , () => {
    const engineer = new Engineer('Will', 12, 'will@will.com', 'wwartick');
    expect(engineer.getGithub()).toEqual(engineer.github.toString());
})

test('get Engineer role' , () => {
    const engineer = new Engineer('Will', 12, 'will@will.com', 'wwartick');
    expect(engineer.getRole()).toEqual("Engineer");
})