var read = require('readline-sync');
console.log("Please Enter Your Name ")
var userName = read.question()
//Message 
console.log("Welcome " + userName)
console.log("How Well do You know me ?")
console.log("You will have 1 points for each correct answer")
console.log("Are You ready to play ? Press Y for Yes N for No")

//High score
var highScore ={
  score: 10,
  name: "Rahul", 
}
//Yes or no as user choice
var yesOrNo = read.question()
if(yesOrNo.toUpperCase() === 'Y'){
  var score = play()
  updateHighScore(score)
}
console.log("Thank You !")

//function to play quiz
function play (){
  var score = 0
  var arr = {
    qus1: `1.Where do I live ?
    a: Narkatiaganj   b: Mumbai   c: Banglore \n`,
    ans1: "a",

    qus2: `2. What is my favourite color ?
    a: Blue   b: Black    c: Red\n`,
    ans2: "b",

    qus3 : `3. How old I am ?
    a: 21     b: 23     c: 19\n`,
    ans3: "a",

    qus4: `4. Where do I Study ?
    a: Bhopal     b: Mumbai     c: Kolkata\n`,
    ans4: "a",

    qus5: `5. What's Rahul's favorite season ?
    a: Spring    b: Winter   c: Summer\n`,
    ans5: "a",

    qus6: `6. During which month is Rahul's birthday ? 
    a: January   b: March    c: August\n`,
    ans6: "a",

    qus7: `7. What's Rahul's favorite sport ?
    a: Basketball  b:Football  c: Badminton\n`,
    ans7: "c",

    qus8: `8. When Rahul is bored, what does he do ?
    a: Watches a Movie    b: Call a friend    c: Play Games\n`,
    ans8: "a",

    qus9: `9. What type of movies does Rahul like ?
    a: Horror   b: Thriller   c: Romantic\n`,
    ans9: "b",

    qus10:  `10. What does Rahul drink the most ?
    a: Tea  b: Coffee   c: Juice\n`,
    ans10: "b",
  }

  for(var i=1 ; i<11 ; i++){
    console.log()
    var ans = read.question(arr["qus" + i])
    if(ans === arr["ans" + i] ){
      console.log("Correct !")
      score++
    
    }else{
      console.log("Wrong ! correct answer : "+arr["ans" +i] )
    }
    console.log("current score : " , score)
  }
  return score
}

function updateHighScore(score){
  if(highScore.score < score )
  console.log("Congrats You just made a high score. Please Send Screenshot of your score and we will update High Score ")
  else{
    console.log("High Score is: "+highScore.name +" " +highScore.score)
  }
}