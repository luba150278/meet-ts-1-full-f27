import { ISecond, IThird } from './interfaces';

const word: string = 'hello';

// const arr: string[] = [];
// const arr1: (string | number | boolean)[] = ['1', 2, true];

console.log(word);

function getWord(word: string): string {
  return word;
}

function noth(): void {
  const a: number = 1;
  const b: number = 2;
  console.log(a + b);
}
console.log(getWord('1111'));
noth();

interface IBook {
  title: string;
  count: number;
  isExist: boolean;
  id: number | string;
}
const obj: IBook = { id: '1', title: 'Book', count: 1, isExist: true };

type TBook = {
  title: string;
  count: number;
  isExist: boolean;
  id: number | string;
  author: string;
};

const obj2: TBook = {
  id: '1',
  title: 'Book',
  count: 1,
  isExist: true,
  author: 'Author',
};

const booksArray: IBook[] = [obj, obj2];

console.log(booksArray);

enum Langs {
  EN = 'en',
  UK = 'uk',
}

const lang: Langs = Langs.UK;

console.log(lang);

interface IComponent {
  name: string;
  func: (a: string, b: number) => string;
}

const component: IComponent = {
  name: 'XXX',
  func: (a: string, b: number) => {
    return `${a}:${b}`;
  },
};

const component2: IComponent = {
  name: 'AAA',
  func: (a: string, b: number) => {
    return `${a}-${b}`;
  },
};

console.log(component.func('hello', 2));
console.log(component2.func('hello', 2));

interface IClass {
  func: () => void;
}

class TestClass implements IClass {
  func() {
    console.log('hello Class');
  }
}

const ex = new TestClass();
ex.func();

interface IRedux {
  name: string;
  error?: string[] | string;
}

const redux: IRedux = {
  error: 'error',
  name: 'hello',
};
console.log(redux);
const second: ISecond = {
  surname: 'Metolkina',
  name: 'Lyubov',
};
console.log(second);
const fullInfo: ISecond & IThird = {
  bd: new Date(),
  surname: 'Metolkina',
  name: 'Lyubov',
};
console.log(fullInfo);

function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}
console.log(firstElement(['1', '2', 3]));
