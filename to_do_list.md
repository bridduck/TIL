 To do list

# javascript

## link
```html
<link rel="stylesheet" href="./sytle.css">
<script type="text/javascript" scr="./app.js"><script>
```
- link to html

### form

```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```

- HTML <form> 요소는 정보를 제출하기 위한 대화형 컨트롤을 포함하는 문서 구획을 나타냅니다.
- The <form> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.


### element by css selector
```js
const todoInput = document.querySelector('.todo-input');
// todoInput

querySelectorAll()//선택자를 만족하는 모든 요소의 목록
```
- todoInput를 선언하고 그 변수 .todo-input클래스 선택
- 제공한 CSS 선택자를 만족하는 첫 번째 Element 객체. 결과가 없다면 null.


```js
todoButton.addEventListener("click", addTodo);
target.addEventListener(type, listener[, options]);
```
- type - 반응할 이벤트 유형 (click, submit ...)
- listener - function 객체, 알림 받는 객체

```js
event.preventDefault();
```
- 올바르지 않은 텍스트가 입력란에 입력되는것을 막는 방법

```js
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');

let element = document.createElement(tagName[, options]);
```
- tagName의 HTML 요소를 `만들어 반환`합니다. tagName을 인식할 수 없으면 HTMLUnknownElement (en-US)를 대신 반환합니다.

- classlist.add - 지정한 클래스 값을 추가한다. 만약 추가하려는 클래스가 엘리먼트의 class 속성에 이미 존재한다면 무시한다.

```js
todoDiv.appendChild(newTodo);

var aChild = element.appendChild(aChild);
```
- 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙입니다.

```js
    const item = e.target;
    //delet to do
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    //check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
```
- target - 이벤트가 일어날 객체
- .parentElement; 부모요소 반환

# css

```js
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
- *모든 내용
- border-box 너비 = 테두리 + 안쪽 여백 + 콘텐츠 너비, 높이 = 테두리 + 안쪽 여백 + 콘텐츠 높이
