import React from 'react';
import './activeQuiz.scss'
import AnswersList from "./AnswersList/answersList";

const ActiveQuiz = (props) => {
    return (
        <div className='active-quiz'>
            <p className='question'>
                <span>
                    <strong>
                        {props.answerNumber}.&nbsp;
                    </strong>
                    {props.question}
                </span>
                <span>{props.answerNumber} из {props.quizLength}</span>
            </p>
            <AnswersList
                answers={props.answers}
                handleClick={props.handleClick}
                state={props.state}
            />
        </div>
    );
};

export default ActiveQuiz;