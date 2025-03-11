const {soma, subtrair} = require('./script.js')

test('Testa função de soma',()=>{
    expect(soma(1,1)).toBe(2);
});

test('Testa função de subtrair',()=>{
    expect(subtrair(1,1)).toBe(0);
});