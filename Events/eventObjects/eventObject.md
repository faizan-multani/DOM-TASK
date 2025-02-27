# html file ->
```html
 <ul class="ul-list">
        <li id="first-li">first</li>
        <li id="second-li">second</li>
        <li id="third-li">third</li>
    </ul>

    <div class="preventDefault">
        <a id="link" href="https://www.google.com/">google</a>
    </div>
```

# 1) 'type' event ->
## type event : specifies type of event which is triggered. 

```js
const li = document.querySelector(".ul-list")
li.addEventListener("click", (e) => {
    console.log(e.type)  // type event which specifies ,type of event is triggered
})
// output: click
```

# 2) 'timeStamp' event ->
## timeStamp event : gives the time in millisecon,when the event was created.

```js
const li = document.querySelector(".ul-list")
li.addEventListener("click", (e) => {
    console.log(e.timeStamp); // timestamp event is used to give the time in millisecond when the even was created
})
```

# 3) 'preventDefault' event ->
## preventDefault event : it stops to navigate on another page.(eg. link,  submit form, etc.)

```js
const prevent = document.getElementById("link")
prevent.addEventListener("click", (e) => {
  e.preventDefault() // stops to navigate on another page
})
```

# 4) 'target' event ->
## target event : referes to the DOM element that triggred the events.(eg, it gives the element/tags) and it targets child element. 

```js
const li = document.querySelector(".ul-list")
li.addEventListener("click", (e) => {
  console.log(e.target) // target event referes the DOM element that triggered the event
})
```

# 5) 'toElement' event ->
## toElement event : works as target event but in this case we also need to use 'mouseenter' event to activate toElement event.
## mouseenter : similler to hover ,when we hover on an element that time its activated.

```js
const li = document.querySelector(".ul-list")
li.addEventListener("mouseenter", (e) => {
  console.log(e.toElement) // toElement event works as target but with mouseenter event.
})
```

# 6) 'srcElement' event ->
## srcelement event : it is similler to target event but supports in older version explorer.
```js
li.addEventListener("click", (e) => {
  console.log(e.srcElement) // srcElement event works as target but it supports in older version explorer.
})
```

# 7) 'currentTarget' ->
## currentTarget : works as 'target' event but it targets the parent element where as 'target; event targets child element.
```js
li.addEventListener("click", (e) => {
  console.log(e.currentTarget) // currenTarget event works as target event but it supports in older version explorer.
})
```

# 8) 'clientX' event ->
## clientX : it returns the horizontal co-ordinate (in pixels) of the mouse pointer relative to the viewport (the visible area of the browser window), excluding any scroll offset.

```js
const li = document.querySelector(".ul-list")
li.addEventListener("click", (e) => {
  console.log(e.clientX) 
})
```

# 9) 'clientY' event ->
## clientY : it returns the vertical co-ordinate (in pixels) of the mouse pointer relative to the viewport (the visible area of the browser window).

```js
const li = document.querySelector(".ul-list")
li.addEventListener("click", (e) => {
  console.log(e.clientY) 
})
```

# 10) 'screenX' event ->
## screenX : it returns the horizontal coordinate (in pixels) of the mouse pointer relative to the screen (the entire monitor).

```js
const li = document.querySelector(".ul-list")
li.addEventListener("click", (e) => {
  console.log(e.screenX) 
})
```

# 11) 'screenY' event ->
## screenY : it returns the vertical coordinate (in pixels) of the mouse pointer relative to the screen (the entire monitor).

```js
const li = document.querySelector(".ul-list")
li.addEventListener("click", (e) => {
  console.log(e.screenY) 
})
```




