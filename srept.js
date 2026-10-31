function showAnswer(questionNumber) {
    const answer = document.getElementById(questionNumber);
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}