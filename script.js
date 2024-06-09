let answers = [];

function nextQuestion(questionNumber) {
    const selectedOption = document.querySelector(`input[name="q${questionNumber}"]:checked`);
    if (selectedOption) {
        answers[questionNumber - 1] = selectedOption.value;
        document.getElementById(`question${questionNumber}`).style.display = 'none';
        document.getElementById(`question${questionNumber + 1}`).style.display = 'block';
    } else {
        alert("Please select an answer before proceeding.");
    }
}

function showResults() {
    const selectedOption = document.querySelector(`input[name="q6"]:checked`);
    if (selectedOption) {
        answers[5] = selectedOption.value;
        let countA = 0, countB = 0, countC = 0, countD = 0;

        answers.forEach(answer => {
            switch (answer) {
                case 'A':
                    countA++;
                    break;
                case 'B':
                    countB++;
                    break;
                case 'C':
                    countC++;
                    break;
                case 'D':
                    countD++;
                    break;
            }
        });

        let result;
        if (countA >= countB && countA >= countC && countA >= countD) {
            result = "The Problem-Solver";
        } else if (countB >= countA && countB >= countC && countB >= countD) {
            result = "The Client Advocate";
        } else if (countC >= countA && countC >= countB && countC >= countD) {
            result = "The Organizer";
        } else {
            result = "The Communicator";
        }

        document.getElementById('quiz').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        document.getElementById('result-text').innerText = `You are: ${result}`;
    } else {
        alert("Please select an answer before proceeding.");
    }
}
