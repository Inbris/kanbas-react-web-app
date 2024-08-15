import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import * as client from "../Courses/client";

export default function Dashboard() {
    const [courses, setCourses] = useState<any[]>([]);

    const [error, setError] = useState("");


    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        department: "New Department",
        credits: 3,
        author: "New Author",
        description: "New Description",
        creator: "New Creator",
    });

    const {currentUser} = useSelector((state: any) => state.accountReducer);


    const fetchCourses = async () => {
        if (currentUser.role === "STUDENT") {
            const courses = await client.getEnrolledCourses(currentUser._id)
            setCourses(courses);
            return;
        }
        const courses = await client.getCreatorCourses(currentUser._id)
        setCourses(courses);
    };

    useEffect(() => {
        fetchCourses();
    }, [])

    function deleteCourse(_id: string) {
        client.deleteCourse(_id).then(r => {
            setCourses(courses.filter((course) => course._id !== _id));
            setError("you have successfully deleted the course")
        }).catch((e) => {
            setError(e.response.data.message)
        })

    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditClick = (course:any) => {
        setCourse(course);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setCourse({
            ...course,
            [name]: value,
        });
    };

    const handleSaveChanges = () => {
        console.log("Updated Course: ", course);
        client.updateCourse(course).then(r => {
            setIsModalOpen(false);
            courses.map((c) => {
                if (c._id === course._id) {
                    c.name = course.name;
                    c.number = course.number;
                    c.startDate = course.startDate;
                    c.endDate = course.endDate;
                    c.department = course.department;
                    c.credits = course.credits;
                }
            });
        }).catch((e) => {
            setError(e.response.data.message)
        })
    };

  return (
    <div id="wd-dashboard">
      {error && <div className="wd-error alert alert-danger">{error}</div>}
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <div className="text-center">
                <p className="mb-2">As a teacher or student, you can create and register your own courses.</p>
                <Link to="/Kanbas/Dashboard/AllCourse" className="btn btn-primary">
                    Create/Register Courses
                </Link>
            </div>
            <h2 id="wd-dashboard-published">
                {currentUser.role === 'STUDENT' ? 'Enrolled Courses' : 'Create Courses'} ({courses.length})
            </h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{width: "300px"}} key={course._id}>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                                <div className="card rounded-3 overflow-hidden">
                                    <img src="/images/reactjs.jpg" height="160"/>
                                    <div className="card-body">
                                        <span className="wd-dashboard-course-link"
                                              style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                          {course.name}
                                        </span>

                                        <p className="wd-dashboard-course-title card-text"
                                           style={{maxHeight: 53, overflow: "hidden"}}>
                                            {course.description}
                                        </p>
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                              className="btn btn-primary">Go</Link>

                                        {
                                            currentUser.role === 'TEACHER' &&
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                Delete
                                            </button>
                                        }

                                        {
                                            currentUser.role === 'TEACHER' &&
                                            <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        handleEditClick(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end">
                                                Edit
                                            </button>
                                        }

                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bootstrap Modal for editing course */}
            <div className={`modal fade ${isModalOpen ? 'show' : ''}`} style={{ display: isModalOpen ? 'block' : 'none' }} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!isModalOpen}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Course</h5>
                            <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Name:</label>
                                    <input type="text" className="form-control" name="name" value={course.name} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Number:</label>
                                    <input type="text" className="form-control" name="number" value={course.number} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Start Date:</label>
                                    <input type="date" className="form-control" name="startDate" value={course.startDate} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">End Date:</label>
                                    <input type="date" className="form-control" name="endDate" value={course.endDate} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Department:</label>
                                    <input type="text" className="form-control" name="department" value={course.department} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Credits:</label>
                                    <input type="number" className="form-control" name="credits" value={course.credits} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description:</label>
                                    <textarea className="form-control" name="description" value={course.description} onChange={handleInputChange}></textarea>
                                </div>
                                {/* Add more fields as necessary */}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save Changes</button>
                            <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background overlay for modal */}
            {isModalOpen && <div className="modal-backdrop fade show"></div>}
        </div>
        
    );
}