
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyCB3u2Aq8sHKhuYi27OxWEYdy4aCFVaJJ8",
    authDomain: "quizapp-b3975.firebaseapp.com",
    projectId: "quizapp-b3975",
    
    databaseURL: "https://quizapp-b3975-default-rtdb.firebaseio.com",
    storageBucket: "quizapp-b3975.appspot.com",
    messagingSenderId: "353910076012",
    appId: "1:353910076012:web:d06f40822794f2b4521e49"
  };

  const app = firebase.initializeApp(firebaseConfig);
var name=document.getElementById("username")

var questions = [
    {
      question: "HTML Stands for",
      option1: "Hyper Text Markup Language",
      option2: "Hyper Tech Markup Language",
      option3: "Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "CSS Stands for",
      option1: "Cascoding Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
    },
    {
      question: "Which tag is used for most large heading",
      option1: "<h6>",
      option2: "<h2>",
      option3: "<h1>",
      corrAnswer: "<h1>",
    },
    {
      question: "Which tag is used to make element unique ",
      option1: "id",
      option2: "class  ",
      option3: "label",
      corrAnswer: "id",
    },
    {
      question: "Any element assigned with id, can be get in css ",
      option1: "by # tag",
      option2: "by @ tag",
      option3: "by & tag",
      corrAnswer: "by # tag",
    },
    {
      question: "CSS can be used with ______ methods ",
      option1: "8",
      option2: "3",
      option3: "4",
      corrAnswer: "3",
    },
    {
      question: "In JS variable types are ____________ ",
      option1: "6",
      option2: "3",
      option3: "8",
      corrAnswer: "8",
    },
    {
      question: "In array we can use key name and value ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
    {
      question: "toFixed() is used to define length of decimal ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "True",
    },
    {
      question: "push() method is used to add element in the start of array ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
  ];
  
  var ques = document.getElementById("ques");
  var opt1 = document.getElementById("opt1");
  var opt2 = document.getElementById("opt2");
  var opt3 = document.getElementById("opt3");
  var btn = document.getElementById("btn");
  var timer = document.getElementById("timer");
  var index = 0;
  var score = 0;
  var min = 1;
  var sec = 29;
  
  var interval = setInterval(function () {
    timer.innerHTML = `${min}:${sec}`;
    sec--;
    if (sec < 0) {
      min--;
      sec = 59;
      if (min < 0) {
        min = 1;
        sec = 59;
        nextQuestion();
      }
    }
  }, 1000);
  
  function nextQuestion() {
    var getOptions = document.getElementsByName("option");
  
    for (var i = 0; i < getOptions.length; i++) {
      if (getOptions[i].checked) {
        var selectedAns = getOptions[i].value;
        var selectedOpt = questions[index - 1][`option${selectedAns}`];
        var correctAns = questions[index - 1]["corrAnswer"];
  
        if (selectedOpt == correctAns) {
          score++;
        }
      }
  
      getOptions[i].checked = false;
    }
    btn.disabled = true;
  
    if (index > questions.length - 1) {
      Swal.fire({
        title: "Good job!",
        text: ((score / questions.length) * 100).toFixed(2),
        icon: "success",
      });
    
    clearInterval(interval);
      var id = Date.now().toString(25);

      var obj = {
        name,
        score: ((score / questions.length) * 100).toFixed(2),
      };
    
      firebase
        .database()
        .ref("user" )
        .push(obj);
       
    } else {
      ques.innerText = questions[index].question;
      opt1.innerText = questions[index].option1;
      opt2.innerText = questions[index].option2;
      opt3.innerText = questions[index].option3;
      index++;
      min = 1;
      sec = 29;
    }}
  
  
  function target() {
    btn.disabled = false;
  }