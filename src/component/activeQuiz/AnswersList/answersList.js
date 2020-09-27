import React from 'react';
import './answersList.scss'
import AnswersItem from "./AnswersItem/AnswersItem";

const AnswersList = (props) => {
    return (
        <ul className='answers-list'>
            {
                props.answers.map((item, index) => <AnswersItem
                    key={index}
                    answer={item}
                    handleClick={props.handleClick}
                    state={props.state ? props.state : {}}
                />)
            }
        </ul>
    );
};

export default AnswersList;