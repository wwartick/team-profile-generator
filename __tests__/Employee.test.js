const Employee = require('../lib/Employee');

test('create an "employee" object', () => {
    const employee = new Employee('Will', 12, 'will@will.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get Employee name' , () => {
    const employee = new Employee('Will', 12, 'will@will.com');
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})

test('get Employee id' , () => {
    const employee = new Employee('Will', 12, 'will@will.com');
    expect(employee.getId()).toEqual(employee.id);
})

test('get Employee email' , () => {
    const employee = new Employee('Will', 12, 'will@will.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

test('get Employee role' , () => {
    const employee = new Employee('Will', 12, 'will@will.com');
    expect(employee.getRole()).toEqual("Employee");
})