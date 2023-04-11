//set the total click count and click button on website
const totalCount = document.getElementById("total-clicks");
const increment = document.getElementById("click-increment");

//returns the total count from local storage
var clicks = localStorage.getItem("clicks");

//sets the total count to the saved count on the website
totalCount.innerHTML = clicks;

//function to handle the click count total (save and display)
const incrementTotal = () => {

  //increment total click count
  clicks++;

  //displays total click count on website
  totalCount.innerHTML = clicks;

  //saves total click count in server storage
  localStorage.setItem("clicks", clicks);
};

//waits for the button to be clicked to run the function
increment.addEventListener("click", incrementTotal);