import React, { useState } from 'react';

const questions = [
    { question: "Vad heter mamman?", answer: "Eva-Li" },
    { question: "Vad heter pappan?", answer: "Pekka" },
    { question: "Vad heter äldsta barnet?", answer: "Wilma" },
    { question: "Vad heter yngsta barnet?", answer: "Leia" },
    { question: "Vad heter barnbarnet?", answer: "Leonel" }
];

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Håller reda på vilken fråga vi är på
    const [userAnswer, setUserAnswer] = useState(""); // Håller reda på användarens svar
    const [isCorrect, setIsCorrect] = useState(false); // För att visa om svaret är rätt eller fel

    const handleSubmit = () => {
        const correctAnswer = questions[currentQuestionIndex].answer;

        // Kolla om användarens svar är korrekt
        if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }

        // Rensa svaret för nästa fråga
        setUserAnswer("");
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert("Du har svarat på alla frågor!");
        }
        setIsCorrect(false); // Återställ rätt/fel-meddelandet när vi går till nästa fråga
    };

    return (
        <div>
            <h2>Quiz</h2>
            <p>{questions[currentQuestionIndex].question}</p>

            <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Skriv ditt svar här"
            />
            <button onClick={handleSubmit}>Skicka svar</button>

            {isCorrect ? <p>Rätt svar!</p> : <p>Fel svar, försök igen!</p>}

            <button onClick={handleNextQuestion}>Nästa fråga</button>
        </div>
    );
};

export default Quiz;
