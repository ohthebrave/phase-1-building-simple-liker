// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  let hearts = document.querySelectorAll('.like-glyph')
  hearts.forEach(heart => heart.addEventListener('click', callBack));
// when user clicks on the heart, an event is triggered
  function callBack(hearts) {
    mimicServerCall()
    .then(() => {
      if (hearts.target.innerText === EMPTY_HEART) {
        hearts.target.classList.add('activated-heart')
        hearts.target.innerText = FULL_HEART
      } else if (hearts.target.innerText === FULL_HEART) {
        hearts.target.classList.remove('activated-heart')
        hearts.target.innerText = EMPTY_HEART
      }
    })
    .catch(() => {
      const modal = document.querySelector('#modal')
      modal.classList.remove('hidden')
      setTimeout(() => {
        modal.classList.add('hidden')
      }, 3000)
    })
  }
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
