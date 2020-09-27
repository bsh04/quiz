import React, {Component} from 'react';
import './Quiz.scss'
import ActiveQuiz from "../../component/activeQuiz/activeQuiz";
import FinishedQuiz from "../../component/finishedQuiz/finishedQuiz";

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        answerState: null,
        isFinished: false,
        quiz: [
            {
                question: 'Какого цвета небо',
                rightAnswer: 1,
                answers: [
                    {id: 1, text: 'Синий'},
                    {id: 2, text: 'Красный'},
                    {id: 3, text: 'Зеленый'},
                    {id: 4, text: 'Желтый'},
                ]
            },
            {
                question: 'Столица России',
                rightAnswer: 3,
                answers: [
                    {id: 1, text: 'Томск'},
                    {id: 2, text: 'Новосибирск'},
                    {id: 3, text: 'Москва'},
                    {id: 4, text: 'Нижний Новгород'},
                ]
            },
            {
                question: 'Что не является грибом',
                rightAnswer: 2,
                answers: [
                    {id: 1, text: 'Маслёнок'},
                    {id: 2, text: 'Огурец'},
                    {id: 3, text: 'Бычок'},
                    {id: 4, text: 'Груздь'},
                ]
            },
        ],
        correctAnswersCounter: 0
    }

    toggleQuiz = () => {
        const timeout = window.setTimeout(() => {

            if (this.state.activeQuestion + 1 === this.state.quiz.length) {
                this.setState({isFinished: true})
            } else {
                this.setState({activeQuestion: this.state.activeQuestion + 1, answerState: null})
            }

            window.clearTimeout(timeout)
        }, 500)
    }

    handleAnswer = (id) => {

        if (this.state.quiz[this.state.activeQuestion].rightAnswer === id) {
            this.setState({answerState: {[id]: 'success'}, correctAnswersCounter: this.state.correctAnswersCounter + 1})
            this.toggleQuiz()

        } else {
            this.setState({answerState: {[id]: 'error'}})
            this.toggleQuiz()
        }
    }

    render() {
        return (
            <div className='quiz'>
                <div className='quiz-wrapper'>
                    <h1>Тестовое задание</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                correctAnswersCounter={this.state.correctAnswersCounter}
                                quizLength={this.state.quiz.length}
                            />
                            :
                            <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                handleClick={this.handleAnswer}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        );
    }
}

export default Quiz;