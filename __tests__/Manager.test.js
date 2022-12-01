const Manager = require('../lib/Manager');

test('create a "manager" object', () => {
    const manager = new Manager('Will', 12, 'will@will.com', 1212);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

test('get manager name' , () => {
    const manager = new Manager('Will', 12, 'will@will.com', 'wwartick');
    expect(manager.getName()).toEqual(manager.name.toString());
})

test('get manager id' , () => {
    const manager = new Manager('Will', 12, 'will@will.com', 'wwartick');
    expect(manager.getId()).toEqual(manager.id);
})

test('get manager email' , () => {
    const manager = new Manager('Will', 12, 'will@will.com', 'wwartick');
    expect(manager.getEmail()).toEqual(manager.email.toString());
})

test('get manager role' , () => {
    const manager = new Manager('Will', 12, 'will@will.com', 'wwartick');
    expect(manager.getRole()).toEqual("Manager");
})