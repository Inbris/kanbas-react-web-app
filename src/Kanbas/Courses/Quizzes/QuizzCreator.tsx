import React, {useEffect, useState} from "react";
import {Tabs, Tab, Form, Button, Modal, Card, ListGroup} from 'react-bootstrap';
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

export default function QuizeCreator() {

    const {cid} = useParams();
    const [title, setTitle] = useState('Unnamed Quiz');
    const [description, setDescription] = useState('');
    const [quizType, setQuizType] = useState('Graded Quiz');
    const [assignmentGroup, setAssignmentGroup] = useState('Quizzes');
    const [shuffleAnswers, setShuffleAnswers] = useState(true);
    const [timeLimit, setTimeLimit] = useState(20);
    const [multipleAttempts, setMultipleAttempts] = useState(false);
    const [dueDate, setDueDate] = useState('2024-08-15');
    const [availableDate, setAvailableDate] = useState('2024-08-15');
    const [untilDate, setUntilDate] = useState('2024-08-15');
    const [points, setPoints] = useState(0);
    const [published, setPublished] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentUser} = useSelector((state: any) => state.accountReducer);

    const [showModal, setShowModal] = useState(false);
    const [questionType, setQuestionType] = useState('multipleChoice');

    const handleNewQuestion = (type: any) => {
        setQuestionType(type);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setQuestionType('multipleChoice');
    };

    const handleSave = () => {
        client.createQuiz( {
            courseId: cid,
            title,
            description,
            quizType,
            assignmentGroup,
            shuffleAnswers,
            timeLimit,
            multipleAttempts,
            dueDate,
            availableDate,
            untilDate,
            points,
            published,
            questionsNumber: questions.length,
        }).then((quiz) => {
            console.log('Quiz created:', quiz);
            let id = quiz._id;

            const questionPromises = questions.map((question) => {
                question.quizId = id;
                return client.createQuestion(question).then((question) => {
                    console.log('Question created:', question);
                });
            });

            Promise.all(questionPromises).then(() => {
                navigate('/Kanbas/Courses/'+cid+'/quizzes')
            });
        })

    };

    const handleSaveAndPublish = () => {
        setPublished(true);
        console.log('Quiz saved and published');
    };

    const handleCancel = () => {
        console.log('Quiz editing canceled');
    };

    const [questions, setQuestions] = useState<Question[]>([]);

    const handleAddQuestion = (question: Question) => {

        setPoints(points + question.points);
            // add new question
        setQuestions([...questions, question]);
        handleCloseModal();
    };


    const handleDeleteQuestion = (index: number) => {
        setPoints(points - questions[index].points);
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);

    };


    return (
        <div className="container mt-4">
            <h2>Create Quiz</h2>
            <div className="d-flex align-items-center mb-3">
                <span className="ml-2">Points: {points}</span>
                <span className="ml-2" style={{marginLeft: "20px"}}>
                    {published ? (
                        <span className="text-success">✅ Published</span>
                    ) : (
                        <span className="text-danger">🚫 Not Published</span>
                    )}
                </span>
            </div>
            <hr/>
            <Tabs defaultActiveKey="details" id="quiz-editor-tabs">
                <Tab eventKey="details" title="Details">
                    <Form>
                        <Form.Group controlId="formQuizTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formQuizDescription">
                            <Form.Label>Quiz Instructions</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formQuizType">
                            <Form.Label>Quiz Type</Form.Label>
                            <Form.Control
                                as="select"
                                value={quizType}
                                onChange={(e) => setQuizType(e.target.value)}
                            >
                                <option>Graded Quiz</option>
                                <option>Practice Quiz</option>
                                <option>Graded Survey</option>
                                <option>Ungraded Survey</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formAssignmentGroup">
                            <Form.Label>Assignment Group</Form.Label>
                            <Form.Control
                                as="select"
                                value={assignmentGroup}
                                onChange={(e) => setAssignmentGroup(e.target.value)}
                            >
                                <option>Quizzes</option>
                                <option>Exams</option>
                                <option>Assignments</option>
                                <option>Project</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formShuffleAnswers">
                            <Form.Check
                                type="checkbox"
                                label="Shuffle Answers"
                                checked={shuffleAnswers}
                                onChange={(e) => setShuffleAnswers(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formTimeLimit">
                            <Form.Label>Time Limit (Minutes)</Form.Label>
                            <Form.Control
                                type="number"
                                value={timeLimit}
                                onChange={(e) => setTimeLimit(Number(e.target.value))}
                            />
                        </Form.Group>
                        <Form.Group controlId="formMultipleAttempts">
                            <Form.Check
                                type="checkbox"
                                label="Allow Multiple Attempts"
                                checked={multipleAttempts}
                                onChange={(e) => setMultipleAttempts(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDueDate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formAvailableDate">
                            <Form.Label>Available Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={availableDate}
                                onChange={(e) => setAvailableDate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formUntilDate">
                            <Form.Label>Until Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={untilDate}
                                onChange={(e) => setUntilDate(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleSave}>Save</Button>
                        <Button variant="success" style={{marginLeft: "20px"}} onClick={handleSaveAndPublish}
                                className="ml-2">Save and Publish</Button>
                        <Button variant="secondary" style={{marginLeft: "20px"}} onClick={handleCancel}
                                className="ml-2">Cancel</Button>
                    </Form>
                </Tab>
                <Tab eventKey="questions" title="Questions">
                    <div className="text-center mt-5">
                        <Button
                            style={{backgroundColor: '#F5F5F5', border: 'none', color: '#000'}}
                            onClick={() => handleNewQuestion('multipleChoice')}
                        >
                            + New Question
                        </Button>
                        <hr/>
                        {questions.map((q, index) => (
                            <Card className="mb-3" key={index}>
                                <Card.Body>
                                    <Card.Title>Question {index + 1} <span
                                        className="text-muted">({q.points} pts)</span></Card.Title>
                                    <Card.Text>{q.question}</Card.Text>

                                    {q.questionType === "fillInBlanks" && (
                                        <Form>
                                            {q.blanks.map((blank, idx) => (
                                                <Form.Group key={idx}>
                                                    <Form.Control type="text" value={blank} contentEditable={false}/>
                                                </Form.Group>
                                            ))}
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
                                                {!q.trueFalse && <span className="text-success ms-2">(correct)</span>}
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
                                                    {idx === q.correctChoice &&
                                                        <span className="text-success ms-2">(correct)</span>}
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    )}

                                    <div className="d-flex justify-content-end">
                                        <Button variant="danger" onClick={() => handleDeleteQuestion(index)}
                                                className="ms-2">Delete</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}


                    </div>
                    <QuestionEditorModal
                        show={showModal}
                        handleClose={handleCloseModal}
                        questionType={questionType}
                        handleAddQuestion={handleAddQuestion}
                    />
                </Tab>
            </Tabs>
        </div>
    );

}

const QuestionEditorModal = ({show, handleClose, questionType, handleAddQuestion}
                                 : {
    show: boolean;
    handleClose: () => void;
    questionType: string;
    handleAddQuestion: (question: Question) => void
}) => {
    const [title, setTitle] = useState('');
    const [points, setPoints] = useState(1);
    const [question, setQuestion] = useState('');
    const [choices, setChoices] = useState(['']);
    const [correctChoice, setCorrectChoice] = useState(0); // Index of the correct choice
    const [trueFalse, setTrueFalse] = useState(false);
    const [blanks, setBlanks] = useState(['']);
    const [questionType1, setQuestionType1] = useState(questionType);


    const handleAddChoice = () => setChoices([...choices, '']);
    const handleRemoveChoice = (index: any) => setChoices(choices.filter((_, i) => i !== index));

    const handleSaveQuestion = () => {

        handleAddQuestion(
            {
                title: title,
                points: points,
                question: question,
                choices: choices,
                correctChoice: correctChoice,
                trueFalse: trueFalse,
                blanks: blanks,
                questionType: questionType1,
                quizId: '',
            }
        );

        handleClose();
    };

    const renderQuestionEditor = () => {
        switch (questionType1) {
            case 'multipleChoice':
                return (
                    <>
                        <Form.Group controlId="formQuestionType">
                            <Form.Label>Question Type</Form.Label>
                            <Form.Control
                                as="select"
                                value={questionType1}
                                onChange={(e) => setQuestionType1(e.target.value)}
                            >
                                <option value={'multipleChoice'}>Multiple Choice</option>
                                <option value={'trueFalse'}>True/False</option>
                                <option value={'fillInBlanks'}>Fill in the Blanks</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="formQuestionTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formQuestionPoints">
                            <Form.Label>Points</Form.Label>
                            <Form.Control
                                type="number"
                                value={points}
                                onChange={(e) => setPoints(Number(e.target.value))}
                            />
                        </Form.Group>
                        <Form.Group controlId="formQuestionText">
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Label>Choices</Form.Label>
                        {choices.map((choice, index) => (
                            <div key={index} className="mb-2">
                                <Form.Control
                                    type="text"
                                    value={choice}
                                    onChange={(e) => {
                                        const newChoices = [...choices];
                                        newChoices[index] = e.target.value;
                                        setChoices(newChoices);
                                    }}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Correct Answer"
                                    checked={correctChoice === index}
                                    onChange={() => setCorrectChoice(index)}
                                />
                                <Button variant="danger" onClick={() => handleRemoveChoice(index)}>Remove</Button>
                            </div>
                        ))}
                        <Button variant="secondary" onClick={handleAddChoice}>Add Choice</Button>
                    </>
                );
            case 'trueFalse':
                return (
                    <>
                        <Form.Group controlId="formQuestionType">
                            <Form.Label>Question Type</Form.Label>
                            <Form.Control
                                as="select"
                                value={questionType1}
                                onChange={(e) => setQuestionType1(e.target.value)}
                            >
                                <option value={'multipleChoice'}>Multiple Choice</option>
                                <option value={'trueFalse'}>True/False</option>
                                <option value={'fillInBlanks'}>Fill in the Blanks</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formQuestionTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formQuestionPoints">
                            <Form.Label>Points</Form.Label>
                            <Form.Control
                                type="number"
                                value={points}
                                onChange={(e) => setPoints(Number(e.target.value))}
                            />
                        </Form.Group>
                        <Form.Group controlId="formQuestionText">
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Check
                            type="radio"
                            label="True"
                            checked={trueFalse === true}
                            onChange={() => setTrueFalse(true)}
                        />
                        <Form.Check
                            type="radio"
                            label="False"
                            checked={trueFalse === false}
                            onChange={() => setTrueFalse(false)}
                        />
                    </>
                );
            case 'fillInBlanks':
                return (
                    <>
                        <Form.Group controlId="formQuestionType">
                            <Form.Label>Question Type</Form.Label>
                            <Form.Control
                                as="select"
                                value={questionType1}
                                onChange={(e) => setQuestionType1(e.target.value)}
                            >
                                <option value={'multipleChoice'}>Multiple Choice</option>
                                <option value={'trueFalse'}>True/False</option>
                                <option value={'fillInBlanks'}>Fill in the Blanks</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formQuestionTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formQuestionPoints">
                            <Form.Label>Points</Form.Label>
                            <Form.Control
                                type="number"
                                value={points}
                                onChange={(e) => setPoints(Number(e.target.value))}
                            />
                        </Form.Group>
                        <Form.Group controlId="formQuestionText">
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Label>Correct Answers</Form.Label>
                        {blanks.map((blank, index) => (
                            <div key={index} className="mb-2">
                                <Form.Control
                                    type="text"
                                    value={blank}
                                    onChange={(e) => {
                                        const newBlanks = [...blanks];
                                        newBlanks[index] = e.target.value;
                                        setBlanks(newBlanks);
                                    }}
                                />
                                <Button variant="danger"
                                        onClick={() => setBlanks(blanks.filter((_, i) => i !== index))}>Remove</Button>
                            </div>
                        ))}
                        <Button variant="secondary" onClick={() => setBlanks([...blanks, ''])}>Add Answer</Button>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{'Question Creator'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {renderQuestionEditor()}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="primary" onClick={handleSaveQuestion}>Save/Update Question</Button>
            </Modal.Footer>
        </Modal>
    );
};