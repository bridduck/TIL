# CSS FlexBox
## Container
### 수평 정렬 
```css
.container {
    display: flex;
}
```

### 수직 정렬 
```css
.container {
    display: flex;
    flex-direction: column;
}
```
수직으로 축 전환
### 축 정렬 
```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
```
> flex-direction

- 레이아웃 

- 수직(row) 수평(column) 방향 결정

- reverse를 사용해 순서 전환가능

>justify-content (중심축: 수평)

- flex-start(default)

- flex-end

- center

- space-between

- space-around

>align-items (교차축: 수직)

- flex-start(default)

- flex-end

- center

- baseline

- stretch 

### 유동성
```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
>nowrap (default)

한줄에 모든 아이템이 들어가 있다.

>wrap

유동성있게 아이템이 아래 칸으로 넘어간다. 

>flex-flow

flex-direction, flex-wrap 를 한번에하는 것

>align-content

컨테이너 사이 조정

## Items
```css
.item1 {
    align-self: flex-end;
}
```
축 전체가 아닌 각각의 아이템을 정렬할 수 있다. 

(아이템 하단기준으로 정렬)

###### 참고 http://milooy.github.io/TIL/CSS/flexbox.html#items
###### https://youtu.be/7neASrWEFEM
