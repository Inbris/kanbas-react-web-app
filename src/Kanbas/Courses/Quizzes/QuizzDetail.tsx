import React, {useEffect, useState} from "react";
import {Tabs, Tab, Form, Button, Modal, Card, ListGroup, Table} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import * as client from "./client";

interface Question {
    title: string;
    points: number;
    question: string;
    choices: string[];
    correctChoice: number;
    trueFalse: boolean;
    blanks: string[];
    questionType: string;
    quizId: string;
}

export default function QuizeDetail() {
    const [success, setSuccess] = useState('');

    const quizData = {
        title: 'Sample Quiz',
        quizType: 'Graded Quiz',
        points: 29,
        assignmentGroup: 'QUIZZES',
        shuffleAnswers: false,
        timeLimit: 30,
        multipleAttempts: false,
        showCorrectAnswers: false,
        oneQuestionAtATime: true,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false,
        dueDate: new Date('2023-09-21T13:00:00'),
        availableDate: new Date('2023-09-21T11:40:00'),
        untilDate: new Date('2023-09-21T13:00:00'),
    };

    const {cid, qid} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const [quiz, setQuiz] = useState<any>(quizData);
    const [questions, setQuestions] = useState<Question[]>([]);


    const fetchQuiz = async () => {
        client.findQuizById(qid).then((res) => {
            setQuiz(res);
        }).catch((err) => {
            console.log(err);
        })
    };

    const fetchQuestions = async () => {
        client.findQuestionsByQuizId(qid).then((res) => {
            setQuestions(res);
        }).catch((err) => {
            console.log(err);
        })
    };
    useEffect(() => {
        fetchQuiz()
        fetchQuestions()
    }, []);

    const handleSubmit = () => {
        setSuccess('Quiz submit successfully')
    }


    return (
        <div className="container mt-4">
            {success && <div className="wd-success alert alert-success">{success}</div>}
            <h2>Quiz Detail</h2>
            <div className="d-flex align-items-center mb-3">
                <span className="ml-2">Points: {quiz && quiz.points}</span>
                <span className="ml-2" style={{marginLeft: "20px"}}>
                    {quiz && quiz.published ? (
                        <span className="text-success">✅ Published</span>
                    ) : (
                        <span className="text-danger">🚫 Not Published</span>
                    )}
                </span>
            </div>
            <hr/>
            <Tabs defaultActiveKey="details" id="quiz-editor-tabs">
                <Tab eventKey="details" title="Details">
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>{quiz.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Q1 - HTML</Card.Subtitle>
                            <Table striped bordered hover>
                                <tbody>
                                <tr>
                                    <td>Quiz Type</td>
                                    <td>{quiz.quizType}</td>
                                </tr>
                                <tr>
                                    <td>Points</td>
                                    <td>{quiz.points}</td>
                                </tr>
                                <tr>
                                    <td>Assignment Group</td>
                                    <td>{quiz.assignmentGroup}</td>
                                </tr>
                                <tr>
                                    <td>Shuffle Answers</td>
                                    <td>{quiz.shuffleAnswers ? 'Yes' : 'No'}</td>
                                </tr>
                                <tr>
                                    <td>Time Limit</td>
                                    <td>{quiz.timeLimit} Minutes</td>
                                </tr>
                                <tr>
                                    <td>Multiple Attempts</td>
                                    <td>{quiz.multipleAttempts ? 'Yes' : 'No'}</td>
                                </tr>
                                <tr>
                                    <td>Show Correct Answers</td>
                                    <td>{quiz.showCorrectAnswers ? 'Immediately' : 'No'}</td>
                                </tr>
                                <tr>
                                    <td>One Question at a Time</td>
                                    <td>{quiz.oneQuestionAtATime ? 'Yes' : 'No'}</td>
                                </tr>
                                <tr>
                                    <td>Webcam Required</td>
                                    <td>{quiz.webcamRequired ? 'Yes' : 'No'}</td>
                                </tr>
                                <tr>
                                    <td>Lock Questions After Answering</td>
                                    <td>{quiz.lockQuestionsAfterAnswering ? 'Yes' : 'No'}</td>
                                </tr>
                                <tr>
                                    <td>Due</td>
                                    <td>{quiz.dueDate ? new Date(quiz.dueDate).toLocaleString() : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td>Available From</td>
                                    <td>{quiz.availableDate ? new Date(quiz.availableDate).toLocaleString() : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td>Until</td>
                                    <td>{quiz.untilDate ? new Date(quiz.untilDate).toLocaleString() : 'N/A'}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="questions" title="Questions">
                    <div className="text-center mt-5">
                        {questions.map((q, index) => (
                            <Card className="mb-3" key={index}>
                                <Card.Body>
                                    <Card.Title>Question {index + 1} <span
                                        className="text-muted">({q.points} pts)</span></Card.Title>
                                    <Card.Text>{q.question}</Card.Text>
                                    {q.questionType === "fillInBlanks" && (
                                        <Form>
                                            <Form.Control type="text" placeholder={'please input your answer'}/>
                                        </Form>
                                    )}

                                    {q.questionType === "trueFalse" && (
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>
                                                <input type="radio" name={`question-${index}`}
                                                       id={`choice-${index}-true`}/>
                                                <label htmlFor={`choice-${index}-true`}>True</label>
                                                {q.trueFalse && <span className="text-success ms-2">(correct)</span>}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <input type="radio" name={`question-${index}`}
                                                       id={`choice-${index}-false`}/>
                                                <label htmlFor={`choice-${index}-false`}>False</label>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    )}

                                    {q.questionType === "multipleChoice" && (
                                        <ListGroup className="list-group-flush">
                                            {q.choices.map((choice, idx) => (
                                                <ListGroup.Item key={idx}>
                                                    <input type="radio" name={`question-${index}`}
                                                           id={`choice-${index}-${idx}`}/>
                                                    <label htmlFor={`choice-${index}-${idx}`}>{choice}</label>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    )}
                                </Card.Body>
                            </Card>
                        ))}

                        <hr/>
                        <div className="text-center">
                            <Button variant="primary" onClick={() => handleSubmit()}>
                                submit
                            </Button>
                        </div>

                    </div>
                </Tab>
            </Tabs>
        </div>
    );

}
