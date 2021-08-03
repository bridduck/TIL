# script defer와 async
## **defer***
```html

<head>
<script defer src="main.js"></script>
</head>
```
### head + defer
#### html을 parsing 하는 동안 js 다운 + html parsing 이 끝난 다음 js 실행
#### 필요한 자바스크립트 먼저 다운 후 순서대로 진행

## asyn
```html
<head>
<script asyn src="main.js"></script>
</head>
```
### head + asyn
#### html을 parsing 하는 동시에 js 다운 + js다운 후 바로 실행
#### 정의된 스크립트 순서 상관없이 먼저 다운된 순서로 실행


- 추가 


```javascript
'use strict';
```
> 상식적인 코딩, 성능 개선

- 자바스크립트 공식 사이트
developer.mozilla.org

- (공식 x) www.w3school.com