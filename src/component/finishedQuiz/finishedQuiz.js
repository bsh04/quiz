import React from 'react';
import './finishedQuiz.scss'
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import CheckIcon from '@material-ui/icons/Check';

const FinishedQuiz = (props) => {

    const percent = (props.correctAnswersCounter * 100 / props.quizLength).toFixed()

    return (
        <div className='finished-quiz'>
            <h1>Результаты тестового задания</h1>
            <ul>
                {
                    props.quiz.map((item, index) => {
                        return (
                            <li key={index} style={{display: "flex", alignItems: "center"}}>
                                <strong>{index + 1}.</strong>&nbsp;
                                {item.question}
                                {
                                    props.result[item.id] === 'error'
                                        ?
                                        <NotInterestedIcon style={{color: 'red', paddingLeft: 5}}/>
                                        :
                                        <CheckIcon style={{color: 'green', paddingLeft: 5}}/>
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <p>Вы ответили првильно на {props.correctAnswersCounter} из {props.quizLength} ({percent} %)</p>
            <button onClick={props.Retry}>
                Перепройти тест
            </button>
        </div>
    );
};

export default FinishedQuiz;