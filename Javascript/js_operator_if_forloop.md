## string concatentation
---
```js
console.log('문자열'+'문자열')
console.log('1'+ 2); //12
console.log(`string literals: 1 + 2 = ${1 + 2}`); //string literals: 1 + 2 = 3
console.log('jimin\'s book '); //특수 기호 사용시 백슬러쉬
```
- `+` 문자열과 문자열을 합해 새로운 문자열
- 숫자가 문자로 변환
- 변수값을 계산해 string을 포함해서 문자열을 만듬
- 새로 줄바꿈 \n, tab = \t

## Numeric operators
---
```js
console.log(1 + 1); 
console.log(1 - 1); 
console.log(1 / 1); //나누기
console.log(1 * 1); //곱하기
console.log(1 % 1); //나머지
console.log(1 ** 1); // 지수
```

## Increment and decrement operators
---
```js
let counter = 2;
const preIncrement = ++counter;
// counter = counter + i
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`) //preIncrement: 3, counter: 3
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + i
// postIncrement: 3, counter: 4
```
|`preIn(de)crement` |`postIn(de)crement`|
|--|--|
|변수 앞에 ++ / --|변수 뒤에 ++ / --|
|counter의 값이 하나 증가 또는 감소 후 변수에 counter의 값 할당|변수에 counter의 값 할당 이후 counter의 값이 하나 증가 또는 감소
|
## Assignment operators
---
```js
let x = 3;
let y = 6;
x += y // x = x + y;
x -= y // x = x - y;
x /= y // x = x / y;
x *= y // x = x * y;
```

## Comparison operators
---
```js
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal
```

## `Logical operaots: || (or), && (and), ! (not)`
---

```js
const value1 = false;
const value1 = 4<2;;

//value <  values2 < cheak() 크기가 작은 순으로 
// || (or) 
console.log(`or: ${value || values2|| cheak()}`);

// && (and)
console.log(`or: ${value && values2 && cheak()}`);

// nullableObject && nullableObject.something
if (nullableObject != null) {
    nullalbeObject.something;
}

fuction cheak() {
    for (let i = 0, i < 10; i++>) {
        console.log("hi");
    }
    return true;


}
```
심플한 게 앞으로

### `||(or)`은 `"true"`를 찾으면 멈춘다. 
---
- `||, &&` 모두 value <  values2 < cheak() 
### `&&(and)`은 `"false"`를 찾으면 멈춘다. 
---

### nullableObject && nullableObject.something
> null check 할 때 사용, &&를 통해 간편하게 작성 가능 
```js
if (nullableObject != null) {
    nullalbeObject.something;
}
```
>null 오브젝트가 null이 아닐 때만something이 출력

> 

### `! (not) `은 true/false 값 변경
```js
//! (not) 
const values1: true
console.log(!value1); //false 로 변경
```
> i= (똑같지 않다.)

## Equality
---
```js
const stringFive = '5';
const numberFive =  5;

// ==
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === 주로 사용
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

//null == undefined
console.log(null == undefined);//true
console.log(null === undefined);//false
```

|==|===|
|--|--|
|loose quality|strict quality|
|다른 타입이어도 true|다른 타입 x|

### object equality by reference

```js

const jimin1 = { name: 'jimin' };
const jimin2 = { name: 'jimin' }
const jimin3 = jimin1
console.log(jimin1 == jimin2);
 //false
console.log(jimin1 === jimin2);
 //false
console.log(jimin1 === jimin3);
 //true
;
``` 
- jimin 1과 jimin2은 각각 다른 ref 저장 (같지 않음)

- jimin1의 ref value를 jimin3으로 할당 했기 때문에 (같음)

## `Conditional operators : if`
### if, else if, else
---
```js

// if (조건); { 실행 }
const name = 'jimin';
if (name === 'jimin'); {
    console.log('Hi, jimin!');
} else if (name === 'jisu'); {
    console.log('Hi, jisu!');
} else {
    console.log('unknown');
}
```
## tternary operator : ?
---
```js
console.log(name === 'jimin' ? 'yes' : 'no');
```
    (조건) ? value1 : value2;

## swith statement
---
- if check가 많을때 사용
- typescript에서 정해져 있는 타입을 검사할 때 사용
```js
const (browser = 'IE');
switch (browser) {
    case 'IE':
        console.log('hi');
        break;
    case 'Firefox':
    case 'Chrome':
        console.log('hello');
        break;
    default:
        console.log('default');
        break;
}
```

> case를 연달아 놓으면 자동적으로 묶어서 출력

## `loops`
---
|while|do while|
|--|--|
|조건문이 맞을 때만 실행|블록을 먼저 실행|
### while loop
> while의 조건이 참일 때, 루프 실행
```js
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
```
### do while loop   
> block를 먼저 실행 + 출력 후 i의 조건 검사 
```js
do {  
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

```

### `for loop` 
---
    `for(begin; condition; step)`
    조건이 안 맞을 때 까지 반복
```js
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
```
>기존에 존재하는 변수를 할당

### inline variable declaration
```js
for (let i = 3; i > 0; i--){
    console.log(`inline variable for: ${i}`);
}
```
>블록 안에 let이라는 지역 변수 선언 

### nestes loops
```js
for (let i = 0; i < 10; i++){
    for (let j = 0; i < 10; i++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
```
### 예제
1. 0-10를 불러와
continue를 사용하여 짝수번호를 프린트해라.
>continue: 지금꺼만 스킵하고 이어서 
```js
for (let i = 0; i < 11, i++){
    if (i % 2 !== 0){
        continue;
    }
    console.log(`even numbers: ${i}`)
}
```



2. 0-10를 불러와
break를 사용하여 8까지만 프린트해라.
>break: 완전히 멈춤
```js
for (let i = 0; i < 11, i++){
    if (i > 8){
        break;
    }
    console.log(`numbers: ${i}`)
}
```


 

