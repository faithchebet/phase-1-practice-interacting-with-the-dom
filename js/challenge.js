document.addEventListener("DOMContentLoaded", function () {
    
    let counterValue = 0;
    const counter = document.getElementById("counter");
    const counterInterval = setInterval(incrementCounter, 1000);
  
    function incrementCounter() {
      counter.innerText = counterValue++;
    }
  
    
    const plusButton = document.getElementById("plus");
    plusButton.addEventListener("click", function () {
      counter.innerText = counterValue++;
    });
  

    const minusButton = document.getElementById("minus");
    minusButton.addEventListener("click", function () {
      counter.innerText = counterValue--;
    });
  
    
    const likeButton = document.getElementById("heart");
    const likesList = document.querySelector(".likes");
    const likedNumbers = {};
  
    likeButton.addEventListener("click", function () {
      const currentNumber = counterValue;
  
      if (likedNumbers[currentNumber]) {
        likedNumbers[currentNumber]++;
        document.getElementById(`like-${currentNumber}`).innerText =
          `${currentNumber} has been liked ${likedNumbers[currentNumber]} times`;
      } else {
        likedNumbers[currentNumber] = 1;
        const newLike = document.createElement("li");
        newLike.id = `like-${currentNumber}`;
        newLike.innerText = `${currentNumber} has been liked 1 time`;
        likesList.appendChild(newLike);
      }
    });
  
    
    const pauseButton = document.getElementById("pause");
    pauseButton.addEventListener("click", function () {
      if (pauseButton.innerText === "pause") {
        clearInterval(counterInterval);
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
        pauseButton.innerText = "resume";
      } else {
        counterInterval = setInterval(incrementCounter, 1000);
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
        pauseButton.innerText = "pause";
      }
    });
  
    
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentsList = document.getElementById("list");
  
    commentForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const commentText = commentInput.value;
      const newComment = document.createElement("p");
      newComment.innerText = commentText;
      commentsList.appendChild(newComment);
      commentInput.value = "";
    });
  });
  