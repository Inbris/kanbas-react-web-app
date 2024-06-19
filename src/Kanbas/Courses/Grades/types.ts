export interface Assignment {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    dueDate: string;
    availableDate: string;
  }
  
  export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email?: string;
    dob?: string;
    role: string;
  }
  
  export interface Grade {
    student: string;
    assignment: string;
    grade: string;
  }