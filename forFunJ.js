// Calculator
function display(val) {
    document.getElementById('display').innerHTML += val;
}
function calc() {
    let value = document.getElementById('display').innerHTML;
    let ans = eval(value);
    if(ans.length > 15){let rounded = ans.toFixed(15);
        document.getElementById('display').innerHTML = rounded;
    } 
    document.getElementById('prevDisplay').innerHTML = value;
    document.getElementById('display').innerHTML = ans;
}
function clearScreen() {
    document.getElementById('display').innerHTML = "";
    document.getElementById('prevDisplay').innerHTML = "";
}
function remove() {
    let value = document.getElementById('display').innerHTML;
    var remain = value.slice(0, value.length - 1);
    document.getElementById('display').innerHTML = remain;
}

//Clock
    const hour = document.getElementById("hourHand"),
        minute = document.getElementById("minuteHand"),
        second = document.getElementById("secondHand");
function clock() {
   let date = new Date();
    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6;

        hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
        minute.style.transform = `rotateZ(${mm}deg)`
        second.style.transform = `rotateZ(${ss}deg)`;
}
setInterval(clock, 1000);

const textHour = document.getElementById("textHour"),
    textMinutes = document.getElementById("textMinute"),
    textSecond =document.getElementById("textSecond"),
    textAmpm = document.getElementById("textAmpm"),
    dateDay = document.getElementById("dateDay"),
    dateMonth = document.getElementById("dateMonth"),
    dateYear = document.getElementById("dateYear"),
    weekDay = document.getElementById("weekDay");

function clockText() {
    let date = new Date();
    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        ss = date.getSeconds(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        dayWeek = date.getDay();
    //WHether Its AM or PM
    if(hh >= 12){
        hh = hh - 12;
        ampm = "PM";
    }else {
        ampm = "AM";
    }
    //If Time IS 0
    if(hh == 0) {hh == 12};
    //Add 0 If Less Than 10
    if(hh < 10){hh = `0${hh}`}
    //Show Hour
    textHour.innerHTML = `${hh}:`
    //Add Zero If Less Than 10
    if(mm < 10){mm = `0${mm}`}
    //Show Minutes
    textMinutes.innerHTML = mm;
    //Add Zero If Less Than 10
    if(ss < 10){ss = `0${ss}`}
    //Show Seconds
    textSecond.innerHTML = `:${ss}`
    //Show Am Or Pm
    textAmpm.innerHTML = ampm;
    //Show Month Day and Year
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    dateDay.innerHTML = day;
    dateMonth.innerHTML = months[month];
    dateYear.innerHTML = year;
    weekDay.innerHTML = weekDays[dayWeek];
}
setInterval(clockText, 1000)

//Toggle Dark Or Light Mode
function toggleMode() {
    const toggle = document.querySelector("#clockCont");
    toggle.classList.toggle("light");
    document.getElementById("clockIcon").classList.toggle("fa-moon");
    document.getElementById("clockIcon").classList.toggle("fa-sun");
}

//Scientific Calculator
function normalMode() {
    var elements = document.getElementsByClassName("scientificDisable");
    for(let i = 0; i < elements.length; i++) {
        elements[i].disabled = true;
        elements[i].style.color = 'rgba(235, 91, 91, 0.5)';
    }
    document.getElementById('scientificSquare').style.border = '1px solid rgba(0, 0, 0, 0.3)';

    document.getElementById('scientificNorm').classList.add("active");
    document.getElementById('scientificSci').classList.remove("active");
}

function scientificMode() {
    var elements = document.getElementsByClassName("scientificDisable");
    for(let i = 0; i < elements.length; i++) {
        elements[i].disabled = false;
        elements[i].style.color = '#d05c65';
    }
    document.getElementById('scientificSquare').style.border = '1px solid black';

    document.getElementById('scientificSci').classList.add("active");
    document.getElementById('scientificNorm').classList.remove("active");
}

function scientificDisplay(val) {
    if(val == "bracketOpen") val = "(";
    if(val == "bracketClose") val = ")";
    if(val == "square") val = "²";
    if(val == "cube") val ="³";
    if(val == "sin") val = "sin(";
    if(val == "cos") val = "cos(";
    if(val == "tan") val = "tan(";
    if(val == "log") val = "log(";
    if(val == "√") val = "√(";
    if(val == "any") val = "^";
    document.getElementById('sciDisplay').innerHTML += val;
}

//Calculate Button
var sciPrevAnswer = 0;
function scientificCalc() {
    let values = document.getElementById('sciDisplay').innerHTML;
    value = values;
    var solve, val,solvedVal, solvedAns, len;
    var ans = 0;
    len = Math.ceil((values.length)/2);
    console.log(len)
    for(let i = 0; i < len; i++) {
        if(Boolean(value.indexOf("sin") >= 0)){solve = "sin"};
        if(Boolean(value.indexOf("cos") >= 0)){solve = "cos"};
        if(Boolean(value.indexOf("tan") >= 0)){solve = "tan"};
        if(Boolean(value.indexOf("log") >= 0)){solve = "log"};
        if(Boolean(value.indexOf("√") >= 0)){solve = "√"};
        if(Boolean(value.indexOf("²") >= 0)){solve = "²"};
        if(Boolean(value.indexOf("³") >= 0)){solve = "³"};
        if(Boolean(value.indexOf("^") >= 0)){solve = "^"};
        switch (solve) {
            case "sin":
                if(value.indexOf(")") != -1){
                    val = value.slice((value.indexOf(solve) + 4), value.indexOf(")"));
                }else {
                    val = value.slice((value.indexOf(solve) + 4));
                }
                solvedAns = Math.sin(val * Math.PI / 180);
                if(value.indexOf(")") != -1){
                    solvedVal = value.replace(`sin(${val})`, solvedAns);
                }else {
                    solvedVal = value.replace(`sin(${val}`, solvedAns);
                }
                value = solvedVal;
               break;
            case "cos":
                if(value.indexOf(")") != -1){
                    val = value.slice((value.indexOf(solve) + 4), value.indexOf(")"));
                }else {
                    val = value.slice((value.indexOf(solve) + 4));
                }
                solvedAns = Math.cos(val * Math.PI / 180);
                if(value.indexOf(")") != -1){
                    solvedVal = value.replace(`cos(${val})`, solvedAns);
                }else {
                    solvedVal = value.replace(`cos(${val}`, solvedAns);
                }
                value = solvedVal;
               break;
            case "tan":
                if(value.indexOf(")") != -1){
                    val = value.slice((value.indexOf(solve) + 4), value.indexOf(")"));
                }else {
                    val = value.slice((value.indexOf(solve) + 4));
                }
                solvedAns = Math.tan(val * Math.PI / 180);
                if(value.indexOf(")") != -1){
                    solvedVal = value.replace(`tan(${val})`, solvedAns);
                }else {
                    solvedVal = value.replace(`tan(${val}`, solvedAns);
                }
                value = solvedVal;
               break;
            case "log":
                if(value.indexOf(")") != -1){
                    val = value.slice((value.indexOf(solve) + 4), value.indexOf(")"));
                }else {
                    val = value.slice((value.indexOf(solve) + 4));
                }
                solvedAns = Math.log(val);
                if(value.indexOf(")") != -1){
                    solvedVal = value.replace(`log(${val})`, solvedAns);
                }else {
                    solvedVal = value.replace(`log(${val}`, solvedAns);
                }
                value = solvedVal;
               break;
            case "√":
                if(value.indexOf(")") != -1){
                    val = value.slice((value.indexOf(solve) + 2), value.indexOf(")"));
                }else {
                    val = value.slice((value.indexOf(solve) + 2));
                }
                solvedAns = Math.sqrt(val);
                if(value.indexOf(")") != -1){
                    solvedVal = value.replace(`√(${val})`, solvedAns);
                }else {
                    solvedVal = value.replace(`√(${val}`, solvedAns);
                }
                value = solvedVal;
               break;
            case "²":
                solvedVal = value.replace(`²`, "**2");
                value = solvedVal;
               break;
            case "³":
                solvedVal = value.replace(`³`, "**3");
                value = solvedVal;
               break;
            case "^":
                solvedVal = value.replace(`^`, "**");
                value = solvedVal;
               break;
            default:
                ans = eval(value);
        }
    }
    ans = eval(value);
    sciPrevAnswer = ans;
    document.getElementById('sciPrevDisplay').innerHTML = values;
    document.getElementById('sciDisplay').innerHTML = ans;
    return ans;
}

function sciClearScreen() {
    document.getElementById('sciDisplay').innerHTML = "";
    document.getElementById('sciPrevDisplay').innerHTML = "";
}

function sciDelete() {
    let value = document.getElementById('sciDisplay').innerHTML;
    var remain = value.slice(0, value.length - 1);
    document.getElementById('sciDisplay').innerHTML = remain;
}

function sciAnswer() {
    document.getElementById('sciDisplay').innerHTML += sciPrevAnswer;
}

function sciClear() {
    document.getElementById('sciDisplay').innerHTML = "";
}

function absoluteVal() {
    document.getElementById('sciDisplay').innerHTML = Math.abs(scientificCalc()); 
}

//Quiz App
function quizOptionOver() {
    var element = document.getElementById("quizOption");
    element.style.width = "100%"
}
function quizOptionOut() {
    var element = document.getElementById("quizOption");
    element.style.width = "10px"
}
document.getElementById("quizEasy").addEventListener("mouseover", quizEasy);
document.getElementById("quizEasy").addEventListener("mouseout", function() {document.getElementById("quizOption").style.backgroundColor = "#00aec7"});
function quizEasy() {
    var box = document.getElementById("quizEasy");
    var element = document.getElementById("quizOption");
    box.addEventListener("mouseover", function() {element.style.backgroundColor = "#17665b"})
}
// function quizOption() {
//     var boxes = document.getElementsByClassName("quizDiffulty");
//     var element = document.getElementById("quizOption");
//     for(let i = 0; i < boxes.length; i++) {
//         boxes[i].onmouseover = function() {element.style.width = "100%"}
//         boxes[i].onmouseout = function() {element.style.width = "10px"}
//     }
// }


//Test 
var startbtns = document.querySelectorAll(".testModeBtn");
var questionSetting = document.querySelector(".testQuestion");
var questionTextSetting = document.querySelector(".testSettingText");
var questionTextSettingInput =  document.querySelectorAll(".testSettingText input");
var diffMode;
for(let i = 0; i < startbtns.length; i++) {
    startbtns[i].addEventListener("click", function(e) {
        var mode = e.target.value;
        diffMode = mode;
        for(let i = 0; i < questionTextSettingInput.length; i++) {
            questionTextSettingInput[i].value = "";
            questionTextSettingInput[i].disabled = false;
        }
        startTestBtn.disabled = false;
        var modeText = document.querySelector(".testChangingText");
        var beginText = document.querySelector(".beginTextChangable");
        modeText.innerHTML = `${mode} Mode`;
        beginText.innerHTML = `${mode} Mode`;
        questionSetting.style.top = "0";
        questionSetting.style.opacity = "1";
        setTimeout(function() {
            questionSetting.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
            questionTextSetting.style.opacity = "1";
        }, 700);
    })
}

var startTestBtn = document.querySelector(".testSettingBtn");
var closeSetting = document.querySelector(".testSettingClose");
closeSetting.addEventListener("click", closeSettingBtn)
function closeSettingBtn() {
    questionSetting.style.backgroundColor = "transparent";
    questionTextSetting.style.opacity = "0";
    startTestBtn.disabled = true;
    startTestBtn.innerHTML = "Start Quiz";
    for(let i = 0; i < questionTextSettingInput.length; i++) {
        questionTextSettingInput[i].value = "";
        questionTextSettingInput[i].disabled = true;
    }
    document.getElementById("sel1").selectedIndex = "none"
    document.getElementById("sel2").selectedIndex = "none"
    setTimeout(function() {
        questionSetting.style.top = "100%";
        questionSetting.style.opacity = "1";
}, 700)
}

var testAll = document.querySelector(".testAll");
var testAnswer = document.querySelector(".testAnswer");
var testNow = document.querySelector(".testNow");
function startTestNow() {
    testAnswer.style.display = "block";
    testAll.style.transform = "scale(0.7)";
    setTimeout(function() {
        testAll.style.transform = "perspective(2000px) rotateY(50deg) scale(0.7)";
        setTimeout(function() {
            testNow.style.opacity = "1";
            testNow.style.right = "0";
        }, 500);
    }, 1000);
    setTimeout(function() {
        testAll.style.opacity = "0"
        testAnswer.style.transform = "scale(0.7)"
        testAnswer.style.marginLeft = "-100%"
    }, 3000)
    setTimeout(function() {
        testAnswer.style.transform = "scale(1)"
    }, 3000)
}

var testName;
var testInp = document.querySelectorAll(".testInp");
for(let i = 0; i < testInp.length; i++) {
    testInp[i].addEventListener("click", function(e) {
        e.target.style.borderBottom = "3px solid #00a793"
    })
}
var testField = "";
startTestBtn.addEventListener("click", function() {
    var testFirstName = document.getElementById("fir").value;
    var testlastName = document.getElementById("las").value;
    if(testFirstName.length < 1) {
        testField = document.getElementById("fir");
        return  testEmptyField();
    }
    if(testlastName.length < 1) {
        testField = document.getElementById("las");
        return  testEmptyField();
    }
    testName = `${testFirstName.toUpperCase()} ${testlastName.toUpperCase()}`;
    console.log(testName)
    startTestBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span>'
    setTimeout(closeSettingBtn, 700);
    setTimeout(startTestNow, 2500);
})
function testEmptyField() {
    testField.style.borderBottom = "3px solid red"
}

var beginTest = document.getElementById("beginTest");
function cancelTestNow() {
    backToMain.innerHTML = "Back To Main Menu";
    testAnswer.style.transform = "scale(0.7)";
    testAnswer.style.marginLeft = "-70%"
    setTimeout(function() {
        testAll.style.opacity = "1";
        testAnswer.style.transform = "perspective(2000px) rotateY(50deg) scale(0.7)";
        setTimeout(function() {
            testNow.style.opacity = "0";
            testNow.style.right = "-50%";
            cancelTest.innerHTML = "Cancel";
            beginTest.disabled = false;
        }, 500);
    }, 1000);
    setTimeout(function() {
        testAll.style.transform = "scale(0.7)";
        testAnswer.style.display = "none";
    }, 3000);
    setTimeout(function() {
        testAll.style.transform = "scale(1)"
    }, 3500)
}
var cancelTest = document.getElementById("cancelTest");
cancelTest.addEventListener("click", function() {
    beginTest.disabled = true;
    cancelTest.innerHTML = '<span class="spinner-border spinner-border-sm"></span>';
    setTimeout(cancelTestNow, 2000);
})

var testTake = document.querySelector(".testTake");
var testTakeShow = document.querySelector(".testTakeShow");
function beginTestNow() {
    testTake.style.transform = "scale(1)";
    setTimeout(function() {
        beginTest.innerHTML = "Begin Quiz";
        cancelTest.disabled = false;
        takeQuiz();
        setInterval(takeQuiz, 13000);
        testTakeShow.style.opacity = "1";
    }, 1000);
}
beginTest.addEventListener("click", function() {
    cancelTest.disabled = true;
    beginTest.innerHTML = '<span class="spinner-border spinner-border-sm"></span>';
    setTimeout(beginTestNow, 2000);
})

var testTimerCont = document.querySelector(".testTimerCont");
var testTimerVal = document.querySelector(".testTimerVal");
var testProgressVal = 0;
var testProgressNum = 0;
var testProgressEnd = 100;
var speed = 100;
var optionBtns = document.querySelectorAll(".optionBtn");
var takeNum = 1;
var takeChangingQuestion = document.getElementById("takeChangingQuestion");
var optionSpan = document.querySelectorAll(".optionSpan");
var takeQuestionChangable = document.querySelector(".takeQuestionChangable");
var testResultCont = document.querySelector(".testResultCont");
var testPage = document.querySelectorAll(".testPage");
var testPageNum = -1;

//Quiz Itself
function takeQuiz() {
    var clickedAns;
    var rightAns;
    var rightBtn;
    var j = 0;
    if(takeNum == 11) {
        testTakeShow.style.opacity = "0";
        testTake.style.transform = "scale(0)";
        testResult();
    }
    for(let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = "#027a6c";
        });
        optionBtns[i].addEventListener("mouseout", function(e) {
            e.target.style.backgroundColor = "rgb(220, 216, 216)";
        })
    }
    takeChangingQuestion.innerHTML = testQandA[takeNum].question;
    takeQuestionChangable.innerHTML = takeNum;
    for(let i = 0; i < optionSpan.length; i++) {
        optionSpan[i].innerHTML = testQandA[takeNum].options[j];
        optionBtns[i].value = testQandA[takeNum].options[j];
        rightAns = testQandA[takeNum].options[4];
        j++
    }
    takeNum++;
    setTimeout(function() {
        var testProgress = setInterval(() => {
            testProgressVal++;
            if(testProgressVal % 10 == 0){testProgressNum++};
            testTimerVal.innerHTML = `${testProgressNum}`;
            testTimerCont.style.background = `conic-gradient(white ${testProgressVal * 3.6}deg, rgba(255, 255, 255, 0.3) ${testProgressVal * 3.6}deg)`;
            if(testProgressVal == testProgressEnd) {
                clearInterval(testProgress);
            }
            for(let i = 0; i < optionBtns.length; i++) {
                optionBtns[i].addEventListener("click", function(e) {
                    clickedAns = e.target.value;
                    if(clickedAns == rightAns) {
                        e.target.style.backgroundColor = "green";
                        testPage[testPageNum].style.backgroundColor = "green";
                        testPage[testPageNum].value = "right";                        
                    }else {
                        testPage[testPageNum].style.backgroundColor = "red";
                        for(let i = 0; i < optionBtns.length; i++) {
                            rightBtn = optionBtns[i].value;
                            if(rightBtn == rightAns) {
                                optionBtns[i].style.backgroundColor = "green";
                            }
                        }
                    }
                    for(let i = 0; i < optionBtns.length; i++) {
                        optionBtns[i].style.opacity = "0.8";
                        optionBtns[i].disabled = true;
                    }
                })
            }
            if(testProgressNum == 10 || clickedAns == true) {
                testProgressVal = 0;
                testProgressNum = 0;
                for(let i = 0; i < optionBtns.length; i++) {
                    optionBtns[i].style.opacity = "0.5"
                    optionBtns[i].disabled = true;
                }
                setTimeout(function () {
                    testTakeShow.style.opacity = "0";
                    testTimerVal.innerHTML = `${testProgressNum}`;
                    testTimerCont.style.background = `conic-gradient(white ${testProgressVal * 3.6}deg, rgba(255, 255, 255, 0.3) ${testProgressVal * 3.6}deg)`;
                    setTimeout(function() {
                        for(let i = 0; i < optionBtns.length; i++) {
                            optionBtns[i].style.opacity = "1";
                            optionBtns[i].disabled = false;
                            optionBtns[i].style.backgroundColor = "rgb(220, 216, 216)";
                        }
                        setTimeout(function () {
                            testTakeShow.style.opacity = "1";
                        }, 1000)
                    }, 500)
                }, 500)
            }
        }, speed);
    }, 1000)
    testPageNum++;
}

var testCorrect = document.getElementById("testCorrect");
var testWrong = document.getElementById("testWrong");
var testResultHead = document.querySelector(".testResultHead");
var testResultDiffulty = document.getElementById("testResultDiffulty");
var backToMain = document.querySelector(".backToMain");
var testResultText = document.querySelector(".testResult");
var testResName = document.getElementById("testResName");
function testResult() {
    testResultCont.style.bottom = "0";
    testResultText.style.opacity = "0";
    setTimeout(function(){
        testResName.innerHTML = testName;
        testResultDiffulty.innerHTML = diffMode;
        var correct = 0;
        for(let i = 0; i < testPage.length; i++) {
            if(testPage[i].value == "right") correct++;
            testCorrect.innerHTML = correct;
            testWrong.innerHTML = 10 - correct;
        }
        if(correct < 5){
            testResultHead.innerHTML = "Pitiful Performance";
        } else if(correct < 8) {
            testResultHead.innerHTML = "Amazing Performance";
        }else if(correct < 10){
            testResultHead.innerHTML = "Splendid Performance";
        }else {
            testResultHead.innerHTML = "You Cheated!!!";
        }
        testResultText.style.opacity = "1";
        backToMain.addEventListener("click", function() {
            backToMain.disabled = true;
            backToMain.innerHTML = '<span class="spinner-border spinner-border-sm"></span>';
            setTimeout(function() {
                testResultCont.style.bottom = "-100%";
                setTimeout(cancelTestNow, 1000);
            }, 2000);
        })
    }, 1000)
}

const testQandA = [
    {"none": "none"},
    {
        "question": "How Many Places Can A Kangaroo Be Split Into A Giraffe?",
        "options": ["Four(4)", "Five(5)", "One(1)", "I Dont Know", "I Dont Know"],
    },
    {
        "question": "In What Country Is Corruption Most Vandamonous, thus Resulting In Extensive Mutiny?",
        "options": ["Nigeria", "Abudabi", "Mexico", "China", "Mexico"],
    },
    {
        "question": "How Possible Is It That A Man Weighing '100lbs' Can Lift A Dumbell Of 400lbs, while At The Same Time Juggling 10 Torches",
        "options": ["Very Possible", "Impossible", "Unnecessarily Possible", "Completely Possible", "Very Possible"],
    },
    {
        "question": "Bola Has 5 Mangoes, If the Sun Is Blue How many steps does he need to get home?",
        "options": ["Ten(10)", "Fifty-FIve(55)", "Two(2)", "Five Hundred(500)", "Two(2)"],
    },
    {
        "question": "What world would you be best in need of two goats?",
        "options": ["none", "maybe", "yes", "no", "none"],
    },
    {
        "question": "Why did the chicken cross the road?",
        "options": ["to steal", "to kill", "to destroy", "to help", "to steal"],
    },
    {
        "question": "What day of the year are pigs more likely to fly?",
        "options": ["Tuesday", "Wednesday", "Monday", "Friay", "Wednesday"],
    },
    {
        "question": "What are the odds of you failing an exam?",
        "options": ["50/50", "90/10", "20/80", "Depends..", "Depends.."],
    },
    {
        "question": "What would you wish for?",
        "options": ["Money", "Women", "Second life", "Immortality", "Money"],
    },
    {
        "question": "From a scale of 1 to 10 rate this app?",
        "options": ["1-5", "5-8", "9", "10", "10"],
    },
]

//Slideshow
var slideBtn = document.querySelector(".slideBtn");
var slideBtn2 = document.querySelector(".slideBtn2");
var slideRow = document.querySelector(".slideRow");
var slide = 0;
slideBtn.addEventListener("click", function() {
    slide += 35;
    if(slide < 35 ) {
        slideRow.style.left = `${slide}%`;
    }else {
        slide -= 35;
    }
})
slideBtn2.addEventListener("click", function() {
    slide -= 35;
    if(slide < 0 && slide > -280) {
        slideRow.style.left = `${slide}%`;
    }else {
        slide += 35;
    }
})
var slideBtnFade = document.querySelectorAll(".slideBtnFade");
for(let i = 0; i < slideBtnFade.length; i++) {
    slideBtnFade[i].addEventListener("click", function() {
        if(slide == 0) {
            slideBtn.style.opacity = "0.3";
        }else {
            slideBtn.style.opacity = "1";
        }
        if(slide == -245) {
            slideBtn2.style.opacity = "0.3";
        }else {
            slideBtn2.style.opacity = "1";
        }
    })
}

//Responsive Navigation Bar
var naviToggle = document.getElementById("naviToggle");
var naviNav = document.getElementById("naviNav");
naviToggle.addEventListener("click", function() {
    naviNav.classList.toggle("show");
})
var naviLink = document.querySelectorAll(".naviLink");
for(let i = 0; i < naviLink.length; i++) {
    naviLink[i].addEventListener("click", function(e) {
        for(let i = 0; i < naviLink.length; i++) {
            naviLink[i].classList.remove("active");
        }
        e.target.classList.add("active");
    })
}

//Create Account
