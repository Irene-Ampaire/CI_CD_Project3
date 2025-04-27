const add = require('./main');
test('add 2 + 3 to equal to 5', () =>{
    expect (add(2,3)).toBe(5);
});