const buttons = document.querySelectorAll(".btn")
const body = document.querySelector("body")

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log(event.type)
    if (event.target.id === "white") {
      body.style.backgroundColor = event.target.id
      body.style.color = "black"
    }
    if (event.target.id === "black") {
      body.style.backgroundColor = event.target.id
      body.style.color = "white"
    }
  })
})
