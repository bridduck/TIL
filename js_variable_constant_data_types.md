<!-- js_variable&constant -->
# variable & constant 

|`variable`|`constant`|
|--|--|
|mutable type|immutable type|
|let|const|
|rw(read/write)|r(read only)|



## variable
#### 변수= 변경 될 수 있는 값


```js
let globalName = 'global name'
{
let name = 'jimin'; 
console.log(name); // jimin
name = 'hello';
console.log(name); // hello
}
console.log(name); 
//{block scope} 안의 let 적용 x

console.log(globalName)

```

- name 이란 변수안에 원하는 내용을 넣을 수 있음

> var -> 사용 x

> var hoisting(어디서 선언했는지 상관없이 맨 위로 선언)

## Constant
#### 값이 변경 x
>변수의 값이 변화될 좋은 이유가 없다면 웬만하면 constant 사용
```js
const daysInWeek = 7;
```

## Variable types
---
- 데이터 타입,

|`mutable data type`|`immutable data type`|
|--|--|
|`all objects`|`premitive` types, frozen objects|

- 메모리의 값의 저장 방식

|`primitive`|`object`|
|--|--|
|메모리 저장|
|`값(value) 자체` 가 저장|`ref`가 저장|
|single item|single- item들을 모아서 한 박스로 관리|
|number, string, boolean, null, undefiedn, symbol|box container|

- ref(reference)
실제로 오브젝트를 가르키는 곳 
- `ref` 를 통해서 실제로 오브젝트가 담겨있는 메로리를 가르킴

##### single item = 더 이상 나누어질 수 없는 한가지 아이템)



### **funtion**
---
`first-class function`
- funtion도 다른 데이터 타입처럼 변수에 할당이 가능, 함수의 인자, 리턴 가능

## primitive
---
### number (숫자)
>type: number
```js
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${count}, type: ${typeof size}`);
```


 >number - speicle numneric values: 
 infinity, -infinity, NaN
 
 ```js
 const infinity = 1 / 0;
 const negativeInfinity = -1 / 0;
 const nAn = 'not a number' / 2
 console.log(infinity);
 console.log(negativeInfinity);
 console.log(nAn);
```
> 숫자가 아닌 것을 숙자로 나누면 => nAn

### string (문자)

```js
 const char = 'c';
 const brenden = 'brenden';
 const greeting = 'hello' + brendan;
```
`template literals (string)`
```js
 //`원하는 string ${변수}`

 console.log(`value: ${greetinf}, type: ${typeof greeting}`)
 const hellobob = `hi ${brendan}!`; //

 ```
#### `+`사용 대신 역따옴표 안에 `원하는 string ${변수}` 넣어준다.
- ${변수} = 변수의 값이 붙여져 나온다.

### boolean (true&flase)

>flase: 0, null, undefined, NaN, ''

>true: any other value

### null 
>nothing, empty 비어있는 값 

### undefined 
```js 
let x;
```
>선언은 되어있지만 아무것도 값이 지정 되어 있지 않다.

### symbol
>맵이나 자료 구조에서 고유한 식별자 필요할 떄 사용

>동시 다발적으로 일어난 코드에 우선 순위를 주고 싶을 때 사용

>주어지는 string에 상관없이 고유한 식별자를 만들떄 사용

```js
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2) //false

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(symbol1 === symbol2) //true

console.log(`value: ${symbol1.description}, type: ${typeof Symbol1}`);
```
#### 같은 문자를 사용해도 다른 값을 낸다. `symbol`를 같게 하기 위해서 `.for` 사용

#### `symbol` 출력시 `string` 으로 전환 -> `.description` 이용



## `Dynamic typing: dynamically typed language`

- run하는 동안 유동적으로 type이 변환

```js
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
///value: hello, type: string

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
//value: 1, type: number
```
>숫자 5가 문자로 바뀜
```js
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
//value: 75, type: string
```
>문자 8과 2가 숫자로 바뀜
```js
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//value: 4, type: number
```


- 유동적으로 타입이 바뀌는 경우 때문에 에러가 발생 
- 이를 해결 => typescript
- typescript => type를 덮어 씌우는 용도


공부자료 https://youtu.be/OCCpGh4ujb8

