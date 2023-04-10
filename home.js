let menuOpen = document.getElementById('menuOpen');
let menuClose = document.getElementById('menuClose');
let transparentBackground = document.getElementById('transparentBackground');
let faqQuestion = document.querySelectorAll('.question');

menuOpen.addEventListener ('click', function(){
    transparentBackground.style.display = "block";
})

menuClose.addEventListener ('click', function (){
    transparentBackground.style.display = "none";
})

//FAQ

faqQuestion.forEach((question)=>{
    question.addEventListener('click', function(){
        let answer = question.nextElementSibling;
        let dropDown = question.querySelector('.arrow-down');
        let allAnswers = document.querySelectorAll('.answer');
        let isExpanded = answer.classList.contains('expanded');

        allAnswers.forEach((answer)=>{
            answer.classList.remove('expanded');
            answer.previousElementSibling.querySelector('.arrow-down').classList.remove('active');

        });

        if (!isExpanded) {
            answer.classList.add('expanded');
            dropDown.classList.add('active');
        }
    })
})



