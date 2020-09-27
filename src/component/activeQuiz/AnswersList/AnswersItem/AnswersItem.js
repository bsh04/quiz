import React from 'react';
import './AnswersItem.scss'

const AnswersItem = (props) => {
    return (
        <li
            className={`${Object.keys(props.state)[0] === (props.answer.id).toString() ? Object.values(props.state)[0] : null} answers-item`}
            onClick={() => props.handleClick(props.answer.id)}
        >
            {
                props.answer.text
            }
        </li>
    );
};

export default AnswersItem;