import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as client from "../client";
import {useSelector} from "react-redux";

export default function AllCourses() {
    const [courses, setCourses] = useState<any[]>([]);
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const [error, setError] = useState("");


    const [course, setCourse] = useState<any>({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        department: "New Department",
        credits: 3,
        image: "/images/reactjs.jpg",
        description: "New Description",
        creator: currentUser._id,
    });


    // retrieving a course
    const fetchCourses = async () => {
        const courses = await client.fetchAllCourses();
        setCourses(courses);
    };
    useEffect(() => {
        fetchCourses();
    }, [])

    // create a course


    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);


    const handleViewClick = (course: any) => {
        setCourse(course);
        setIsViewModalOpen(true);
    };

    const handleModalClose = () => {
        setIsEditModalOpen(false);
        setIsViewModalOpen(false);
    };

    const handleInputChange = (e: any) => {
        const {name, value} = e.target;
        setCourse({
            ...course,
            [name]: value,
        });
    };

    const handleSaveChanges = async () => {
        console.log("Updated Course: ", course);
        const newCourse = await client.createCourse(course);
        setCourses([...courses, newCourse]);
        setIsEditModalOpen(false);
    };

    const openModal = () => {
        return () => {
            setCourse({
                name: "New Course",
                number: "New Number",
                startDate: "2023-09-10",
                endDate: "2023-12-15",
                department: "New Department",
                credits: 3,
                image: "/images/reactjs.jpg",
                description: "New Description",
                creatorId: currentUser._id,
            })
            setIsEditModalOpen(true);
        };
    }

    const handleRegisterClick = async (courseId: string) => {
        client.enrollCourse(courseId, currentUser._id).then(r => {
            setIsEditModalOpen(false);
            setIsViewModalOpen(false);
            setError("you have successfully registered this course")
        }).catch((e) => {
            setError("you have already registered this course")
        })
    }


    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            {error && <div className="wd-error alert alert-danger">{error}</div>}

            <hr/>
            <Link to={'/Kanbas/Dashboard'} className="btn btn-primary"> return to dashboard </Link>
            {
                currentUser.role === "TEACHER" &&
                <button className="btn btn-primary"
                        style={{marginLeft: "10px"}}
                        id="wd-add-new-course-click"
                        onClick={openModal()}> create a new course
                </button>

            }


            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{width: "300px"}}>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                                <div className="card rounded-3 overflow-hidden">
                                    <img src="/images/reactjs.jpg" height="{160}"/>
                                    <div className="card-body">
                    <span className="wd-dashboard-course-link"
                          style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                      {course.name}
                    </span>


                                        <p className="wd-dashboard-course-title card-text"
                                           style={{maxHeight: 53, overflow: "hidden"}}>
                                            {course.description}
                                        </p>
                                        {
                                            currentUser.role === "STUDENT" &&
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                handleRegisterClick(course._id)
                                            }}
                                                    className="btn btn-primary">Register
                                            </button>

                                        }

                                        <button id="wd-view-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    handleViewClick(course);
                                                }}
                                                className="btn btn-info me-2 float-end">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`modal fade ${isEditModalOpen ? 'show' : ''}`}
                 style={{display: isEditModalOpen ? 'block' : 'none'}} role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden={!isEditModalOpen}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Course</h5>
                            <button type="button" className="btn-close" onClick={handleModalClose}
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Name:</label>
                                    <input type="text" className="form-control" name="name" value={course.name}
                                           onChange={handleInputChange}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Number:</label>
                                    <input type="text" className="form-control" name="number" value={course.number}
                                           onChange={handleInputChange}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Start Date:</label>
                                    <input type="date" className="form-control" name="startDate"
                                           value={course.startDate} onChange={handleInputChange}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">End Date:</label>
                                    <input type="date" className="form-control" name="endDate" value={course.endDate}
                                           onChange={handleInputChange}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Department:</label>
                                    <input type="text" className="form-control" name="department"
                                           value={course.department} onChange={handleInputChange}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Credits:</label>
                                    <input type="number" className="form-control" name="credits" value={course.credits}
                                           onChange={handleInputChange}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description:</label>
                                    <textarea className="form-control" name="description" value={course.description}
                                              onChange={handleInputChange}></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save Changes
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap Modal for viewing course */}
            <div className={`modal fade ${isViewModalOpen ? 'show' : ''}`}
                 style={{display: isViewModalOpen ? 'block' : 'none'}} role="dialog" aria-labelledby="viewModalLabel"
                 aria-hidden={!isViewModalOpen}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="viewModalLabel">Course Details</h5>
                            <button type="button" className="btn-close" onClick={handleModalClose}
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <strong>Name:</strong> {course.name}
                            </div>
                            <div>
                                <strong>Number:</strong> {course.number}
                            </div>
                            <div>
                                <strong>Start Date:</strong> {course.startDate}
                            </div>
                            <div>
                                <strong>End Date:</strong> {course.endDate}
                            </div>
                            <div>
                                <strong>Department:</strong> {course.department}
                            </div>
                            <div>
                                <strong>Credits:</strong> {course.credits}
                            </div>
                            <div>
                                <strong>Description:</strong> {course.description}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background overlay for modal */}
            {(isEditModalOpen || isViewModalOpen) && <div className="modal-backdrop fade show"></div>}
        </div>

    );
}
  