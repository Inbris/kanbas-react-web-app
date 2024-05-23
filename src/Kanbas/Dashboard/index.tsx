export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">

          {/* Course 1 */}
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          {/* Course 2 */}
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5001 Fundamentals
              </a>
              <p className="wd-dashboard-course-title">
                Intensive Foundations of Computer Science
              </p>
              <a href="#/Kanbas/Courses/5001/Home"> Go </a>
            </div>
          </div>

          {/* Course 3 */}
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5002 Discrete Structures
              </a>
              <p className="wd-dashboard-course-title">
                Discrete Structures
              </p>
              <a href="#/Kanbas/Courses/5002/Home"> Go </a>
            </div>
          </div>

          {/* Course 4 */}
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5004 Object-Oriented Design
              </a>
              <p className="wd-dashboard-course-title">
                Object-Oriented Design
              </p>
              <a href="#/Kanbas/Courses/5004/Home"> Go </a>
            </div>
          </div>

          {/* Course 5 */}
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5008 Additional ALIGN courses
              </a>
              <p className="wd-dashboard-course-title">
                Data Structures, Algorithms, and Their Applications within Computer Systems 
                and Recitation for CS 5008
              </p>
              <a href="#/Kanbas/Courses/5008/Home"> Go </a>
            </div>
          </div>

          {/* Course 6 */}
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5610 Web Development
              </a>
              <p className="wd-dashboard-course-title">
                Web Development
              </p>
              <a href="#/Kanbas/Courses/5610/Home"> Go </a>
            </div>
          </div>

          {/* Course 7 */}
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5200 Database Management Systems
              </a>
              <p className="wd-dashboard-course-title">
                Database Management Systems
              </p>
              <a href="#/Kanbas/Courses/5200/Home"> Go </a>
            </div>
          </div>

          {/* Course More... */}

        </div>
      </div>
  );}
  