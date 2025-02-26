# bubbling and capturing phases
## 1) by default will be bubble(false).
## 2) to activate capture ,define true.

## 3) stopPropagation() -> used to stop the bubble aproach(bottom to top) like if we dont want to follow parent/top value/aproach then we can go with 'stopPropagation()'.

#------------------------------------------------------------------------>
# example for bubble and capture phase
```javacript/html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event</title>
  </head>
  <body>
    <ul id="ul-list">
      <li id="logo">logo</li>
      <li id="menu">menu</li>
      <li id="cart">cart</li>
      <li id="about">about</li>
      <li id="details">details</li>
    </ul>

    <script>
        // bubble phase
      document.getElementById("ul-list").addEventListener("click",function (e) {
          console.log("clicked on ul-list")
        },false) // by-default it will be false(bubble)

      document.getElementById("cart").addEventListener("click",function (e) {
          e.stopPropagation() // stopPropagation() used to stop the aproach of bubbling(bubble phase) 
          console.log("clicked on cart")
        },false) // bottom to top aproach(bubble)

        // capture phase
        document.getElementById("ul-list").addEventListener("click",function (e) {
          console.log("clicked on ul-list")
        },true)

      document.getElementById("cart").addEventListener("click",function (e) {
          console.log("clicked on cart")
        },true) // top to bottom aproach(capture phase)
    </script>
  </body>
</html>
```