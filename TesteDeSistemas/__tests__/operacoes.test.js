import {executarOperacao} from '../src/executarOperacao';

describe('funcao executarOperacao', () => {
    test('espero que a soma de dois numeros inteiros esteja correta', () => {
        expect(executarOperacao(1, 2)).toBe(3);
    });
});

describe('funcao executarOperacao', () => {
    test('espero que a soma de dois numeros decimais esteja correta', () => {
        expect(executarOperacao(1.5, 2.5)).toBe(4);
    });
});

describe('funcao executarOperacao', () => {
    test('espero que a soma de dois numeros negativos esteja correta', () => {
        expect(executarOperacao(-2, -3)).toBe(-5);
    });
});

describe('funcao executarOperacao', () => {
    test('espero que ao tentar executarOperacao letras retorne uma mensagem de erro', () => {
        expect(executarOperacao("a", "b")).toBe("Erro");
    });
});