import { FaFileImport, FaFileExport } from 'react-icons/fa';
import { Table, InputGroup, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import * as db from '../../Database';
import { Assignment } from './types';


export default function Grades() {
  const { cid } = useParams();
  const [studentGrades, setStudentGrades] = useState<{
    assignments: {
      grade: string;
      _id: string;
      title: string;
      course: string;
      description: string;
      points: number;
      dueDate: string;
      availableDate: string;
    }[];
    _id?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    dob?: string;
    role?: string;
  }[]>([]);

  const [courseAssignments, setCourseAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    const courseAssignments = db.assignments.filter(a => a.course === cid);
    const enrolledStudents = db.enrollments
      .filter(enrollment => enrollment.course === cid)
      .map(enrollment => {
        const user = db.users.find(user => user._id === enrollment.user);
        const assignments = courseAssignments.map(assignment => {
          const gradeEntry = db.grades.find(g => g.student === enrollment.user && g.assignment === assignment._id);
          return {
            ...assignment,
            grade: gradeEntry ? gradeEntry.grade : "N/A"
          };
        });
        return { ...user, assignments };
      });

    setStudentGrades(enrolledStudents);
  }, [cid]);


  return (
    <div id="wd-grades" className="container mt-3">
      <h1 className="mb-4">Grades</h1>
      <div className="d-flex justify-content-end mb-4">
        <Button variant="secondary" className="me-2">
          <FaFileImport className="me-1" />
          Import
        </Button>
        <DropdownButton
          variant="secondary"
          title={
            <>
              <FaFileExport className="me-1" />
              Export
            </>
          }
        >
          <Dropdown.Item href="#">Export as CSV</Dropdown.Item>
          <Dropdown.Item href="#">Export as PDF</Dropdown.Item>
        </DropdownButton>
      </div>
      <InputGroup className="mb-4">
        <FormControl
          placeholder="Search Students"
          aria-label="Search Students"
          className="me-2"
        />
        <FormControl
          placeholder="Search Assignments"
          aria-label="Search Assignments"
        />
      </InputGroup>

      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Student Name</th>
            {courseAssignments.map(assignment => (
              <th key={assignment._id}>{assignment.title} <br /> Out of 100</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentGrades.map(student => (
            <tr key={student._id}>
              <td>{student.firstName + ' ' + student.lastName}</td>
              {student.assignments.map((assignment) => (
                <td key={assignment._id}>{assignment.grade}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
