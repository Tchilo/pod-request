// const btn = document.getElementById('btn')
const form = document.getElementById('form')
const email = document.getElementById('email')
const message = document.querySelector('.message')
const error = document.querySelector('.error')


form.addEventListener('submit', (e) => {
  e.preventDefault()
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
      message.innerHTML = `Access Granted`
      setTimeout(()=>{
        message.innerHTML = ""
      },3000)
    } else {
      error.innerHTML = "You have entered an invalid email address!"

      setTimeout(()=>{
        error.innerHTML = ""
      },3000)
    }

  }
  ValidateEmail(email)
})