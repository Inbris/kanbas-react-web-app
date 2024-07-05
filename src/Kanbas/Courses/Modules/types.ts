export interface Lesson {
    _id: string;
    name: string;
  }
  export interface Module {
    _id: string;
    name: string;
    editing?: boolean;
    course: string;
    lessons: Lesson[];
}

