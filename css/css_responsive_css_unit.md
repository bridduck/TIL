# relative unit(반응형 단위)

> `기본적으로 html에 할당되는 폰트 사이즈는 16px`

## 나누는 기준

|parent(부모요소)|browser)|
|--|--|
|%, em|v*(vh, vw), rem|
>부모요소 사이즈에 따라 변경이 되야한다면 %,em

>부모와는 상관업이 브라우저 사이즈에 반응해야한다면 v*,rem

|box|font|
|--|--|
|%, v*(vh, vw)|em, rem|

>요소의 높이와 넓비에 따라 사이즈가 변경이 되야 한다면 %, v*

>폰트 사이즈에 따라 사이즈가 변경되어야 한다면 em, rem

## `em`
- relative to parent element
- 즉각적인 폰트 사이즈 계산이 어려움

#### padding도 폰트 사이즈가 변경 됨에 따라 같이 변화가능
```css
  .contents {
    font-size: 2rem;
    padding: 1em 0.5rem;
  }
```
- contents에 적용된 폰트 사이즈에서 변화 
- 수직으로 정렬 - > rem 

 

## `rem`
- -relative to root element
#### 폰트 사이즈를 결정 할 때는 `rem` 사용
- 즉각적인 폰트 사이즈 계산이 쉬움





## v*
viewport related

- vw => 브라우저의 넓이
- vh => 브라우저의 높이
- 50vmin 작은 갋에 적용
- vmax => 큰 값에 적용
