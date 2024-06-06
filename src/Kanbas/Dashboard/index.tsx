export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
          

           {/* Course 1 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
            <img src="/images/reactjs.jpg" className="card-img-top" alt="React JS" />
            <div className="card-body">
              <a className="wd-dashboard-course-link text-decoration-none text-navy fw-bold"
                 href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="card-text">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>

        {/* Course 2 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
            <img src="/images/reactjs.jpg" className="card-img-top" alt="React JS" />
            <div className="card-body">
              <a className="wd-dashboard-course-link text-decoration-none text-navy fw-bold"
                 href="#/Kanbas/Courses/5001/Home">
                CS5001 Fundamentals
              </a>
              <p className="card-text">
                Intensive Foundations of Computer Science
              </p>
              <a href="#/Kanbas/Courses/5001/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>

        {/* Course 3 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
            <img src="/images/reactjs.jpg" className="card-img-top" alt="React JS" />
            <div className="card-body">
              <a className="wd-dashboard-course-link text-decoration-none text-navy fw-bold"
                 href="#/Kanbas/Courses/5002/Home">
                CS5002 Discrete Structures
              </a>
              <p className="card-text">
                Discrete Structures
              </p>
              <a href="#/Kanbas/Courses/5002/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>

        {/* Course 4 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
            <img src="/images/reactjs.jpg" className="card-img-top" alt="React JS" />
            <div className="card-body">
              <a className="wd-dashboard-course-link text-decoration-none text-navy fw-bold"
                 href="#/Kanbas/Courses/5004/Home">
                CS5004 Object-Oriented Design
              </a>
              <p className="card-text">
                Object-Oriented Design
              </p>
              <a href="#/Kanbas/Courses/5004/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>

        {/* Course 5 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
            <img src="/images/reactjs.jpg" className="card-img-top" alt="React JS" />
            <div className="card-body">
              <a className="wd-dashboard-course-link text-decoration-none text-navy fw-bold"
                 href="#/Kanbas/Courses/5008/Home">
                CS5008 Additional ALIGN courses
              </a>
              <p className="card-text">
                Data Structures, Algorithms, and Their Applications within Computer Systems 
                and Recitation for CS 5008
              </p>
              <a href="#/Kanbas/Courses/5008/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>

        {/* Course 6 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
            <img src="/images/reactjs.jpg" className="card-img-top" alt="React JS" />
            <div className="card-body">
              <a className="wd-dashboard-course-link text-decoration-none text-navy fw-bold"
                 href="#/Kanbas/Courses/5610/Home">
                CS5610 Web Development
              </a>
              <p className="card-text">
                Web Development
              </p>
              <a href="#/Kanbas/Courses/5610/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>

        {/* Course 7 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
            <img src="/images/reactjs.jpg" className="card-img-top" alt="React JS" />
            <div className="card-body">
              <a className="wd-dashboard-course-link text-decoration-none text-navy fw-bold"
                 href="#/Kanbas/Courses/5200/Home">
                CS5200 Database Management Systems
              </a>
              <p className="card-text">
                Database Management Systems
              </p>
              <a href="#/Kanbas/Courses/5200/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>

          {/* Course More... */}

        </div>
      </div>
  );}
  