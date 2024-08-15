import {FaSearch, FaPlus} from 'react-icons/fa';
import {BsGripVertical} from 'react-icons/bs';
import "./index.css";
import {useParams, useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import {Tabs, Tab, Form, Button, Modal, Card, ListGroup, Dropdown, Table} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import * as client from "./client";
import {findQuizzesByCourseId} from "./client";
import {Link} from "react-router-dom";


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

export default function Quizzes() {

    const {cid} = useParams();
    const [quizzes, setQuizzes] = useState<any[]>([]);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate();

    // retrieving an assignment
    const fetchAllQuizzes = async () => {
        client.findQuizzesByCourseId(cid).then((res) => {
            setQuizzes(res);
        }).catch((err) => {
            console.log(err);
        })
    };
    useEffect(() => {
        fetchAllQuizzes();
    }, []);

    const togglePublish = (index: number) => {
        const updatedQuizzes = [...quizzes];
        updatedQuizzes[index].published = !updatedQuizzes[index].published;
        setQuizzes(updatedQuizzes);

        client.updateQuiz(updatedQuizzes[index]).then((res) => {
            setSuccess('Quiz update successfully')
        }).catch((err) => {
            setError('Failed to update quiz')
        })

    };

    const deleteQuiz = (index: any) => {
        const updatedQuizzes = quizzes.filter((_, i) => i !== index);
        setQuizzes(updatedQuizzes);

        client.deleteQuiz(updatedQuizzes[index]._id).then((res) => {
            setSuccess('Quiz deleted successfully')
        }).catch((err) => {
            setError('Failed to delete quiz')
        })
    };


    return (
        <div id="wd-assignments" className="p-3">
            {success && <div className="wd-success alert alert-success">{success}</div>}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group w-50">
          <span className="input-group-text">
            <FaSearch className="text-secondary"/>
          </span>
                    <input
                        id="wd-search-assignment"
                        className="form-control"
                        placeholder="Search For Quiz"
                    />
                </div>
                <div>

                    <button type="button" id="wd-add-assignment" className="btn btn-danger me-2" onClick={() => {
                        navigate('/Kanbas/Courses/' + cid + '/quizzes/quizCreator');
                    }}>
                        <FaPlus className="me-1"/>
                        Quiz
                    </button>
                </div>
            </div>

            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center wd-title p-3 ps-2 bg-secondary">
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3"/>
                        Assignment Quizzes
                    </div>

                </div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Availability</th>
                        <th>Due Date</th>
                        <th>Points</th>
                        <th>Questions</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {quizzes.map((quiz, index) => (
                        <tr key={index}>

                            <td>
                                <Link to={`/Kanbas/Courses/${cid}/Quizzes/QuizDetail/${quiz._id}`}
                                      key={index} style={{
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}>{quiz.title} {quiz.published ? '✅' : '🚫'}
                                </Link>
                            </td>

                            <td>{quiz.published ? 'Available' : 'Not Available'}</td>
                            <td>{quiz.dueDate.toLocaleString()}</td>
                            <td>{quiz.points}</td>
                            <td>{quiz.questionsNumber}</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        ...
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => alert(`Edit ${quiz.title}`)}>Edit</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {
                                            // eslint-disable-next-line no-restricted-globals
                                            var b = confirm(`Are you sure you want to delete ${quiz.title} ?`);
                                            if (b) {
                                                deleteQuiz(index);
                                            }

                                        }}>Delete</Dropdown.Item>
                                        <Dropdown.Item onClick={() => togglePublish(index)}>
                                            {quiz.published ? 'Unpublish' : 'Publish'}
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
