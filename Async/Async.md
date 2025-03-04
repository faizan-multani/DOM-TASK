# setTimeout()
## setTimeout() : it used to execute a specific piece of code after a specified delay, measured in milliseconds.

```html
    <h1>Hello There!</h1>
```
```js
const text = function(){
            document.querySelector('h1').innerHTML = "hello my friend"
        }
        setTimeout(text,2000)
```
### in the above code ,we are changing "Hello There!" into "hello my friend!" using "inner.HTML". and using setTimeout() ,delaying the time and printing after 2 second.
