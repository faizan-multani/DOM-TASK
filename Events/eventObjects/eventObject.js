const li = document.querySelector(".ul-list")

li.addEventListener("click", (e) => {
  console.log(e.type) // type event which specifies ,type of event is triggered
})

li.addEventListener("click", (e) => {
  console.log(e.timeStamp) // timestamp event is used to give the time in millisecond when the even was created
})

const prevent = document.getElementById("link")
prevent.addEventListener("click", (e) => {
  e.preventDefault()
})

li.addEventListener("click", (e) => {
  console.log(e.target) // target event referes the DOM element that triggered the event
})

// li.addEventListener("mouseenter", (e) => {
//   console.log(e.toElement) // toElement event works as target but with mouseenter event.
// })

// li.addEventListener("click", (e) => {
//   console.log(e.srcElement) // srcElement event works as target but it supports in older version explorer.
// })

li.addEventListener("click", (e) => {
  console.log(e.currentTarget) // currenTarget event works as target but it supports in older version explorer.
})

li.addEventListener("click", (e) => {
  console.log(e.clientX) 
})

li.addEventListener("click", (e) => {
  console.log(e.clientY) 
})