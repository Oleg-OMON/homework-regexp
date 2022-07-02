import Validator from "../app";
test('Получим наше имя', () => {
    const validator = new Validator();
    const result = validator.validateUsername('w11R-e_y3a');
    expect(result).toBe('w11R-e_y3a');
  });
  
  test('ошибка присутствия кирилицы', () => {
    const validator = new Validator();
    const result = () => validator.validateUsername('w11я1R-e_y3a');
    expect(result).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
  });
  
  test('ошибка присутствия спец символа', () => {
    const validator = new Validator();
    const result = () => validator.validateUsername('w11%1R-e_y3a');
    expect(result).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
  });
  
  test('Имя не должно содержать подряд более трёх цифр', () => {
    const validator = new Validator();
    const result = () => validator.validateUsername('w11111R-e_y3a');
    expect(result).toThrow('Имя не должно содержать подряд более трёх цифр');
  });
  
  test('Имя не должно  начинаться цифрами, символами подчёркивания или тире', () => {
    const validator = new Validator();
    const result = () => validator.validateUsername('1w11R-e_y3a');
    expect(result).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
  });
  
  test('Имя не должно  заканчиваться цифрами, символами подчёркивания или тире', () => {
    const validator = new Validator();
    const result = () => validator.validateUsername('w11R-e_y3a4');
    expect(result).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
  });
  test('Имя не должно  начинаться цифрами, символами подчёркивания или тире', () => {
    const validator = new Validator();
    const result = () => validator.validateUsername('-w1R-e_y3a');
    expect(result).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
  });
  
  test('Имя не должно  заканчиваться цифрами, символами подчёркивания или тире', () => {
    const validator = new Validator();
    const result = () => validator.validateUsername('w1R-e_y3a_');
    expect(result).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
  });