import React from 'react';
import './finishedQuiz.scss'

const FinishedQuiz = (props) => {

    const percent = (props.correctAnswersCounter * 100 / props.quizLength).toFixed()

    return (
        <div className='finished-quiz'>
            <h1>Результаты тестового задания</h1>
            <p>Вы ответили првильно на {props.correctAnswersCounter} из {props.quizLength} ({percent} %)</p>
        </div>
    );
};

export default FinishedQuiz;