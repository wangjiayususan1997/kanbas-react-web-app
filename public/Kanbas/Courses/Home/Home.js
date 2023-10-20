import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "../CourseNavigation/CourseNavigation.js";

function Home() {
  return `    <div class="container-fluid">
      <div class="row">
        <div class="col-1 col1-width d-none d-sm-block">
          ${KanbasNavigation()}
        </div>

        <div class="col">
          <div class="row">
            <div class="col-6">
              <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <div class="dropdown d-inline" style="width: 1px">
                      <button
                        class="btn btn-cus dropdown"
                        style="width: 20px"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fa fa-bars me-4 text-danger"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            class="dropdown-item text-danger"
                            href="/Kanbas/Account/Profile/screen.html"
                          >
                            <i class="fa fa-user me-1"></i>
                            Account
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item text-danger"
                            href="/Kanbas/Dashboard/screen.html"
                          >
                            <i class="fa fa-keyboard-o me-1"></i>
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item text-danger"
                            href="/Kanbas/Courses/Home/screen.html"
                          >
                            <i class="fa fa-book me-1"></i>
                            Courses
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item text-danger" href="#">
                            <i class="fa fa-calendar me-1"></i>
                            Calendar
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item text-danger" href="#">
                            <i class="fa fa-inbox me-1"></i>
                            inbox
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item text-danger" href="#">
                            <i class="fa fa-clock-o me-1"></i>
                            History
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item text-danger" href="#">
                            <i class="fa fa-desktop me-1"></i>
                            Studio
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item text-danger" href="#">
                            <i
                              class="fa fa-solid fa-arrow-circle-right me-1"
                            ></i>
                            Commons
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item text-danger" href="#">
                            <i class="fa fa-solid fa-question-circle me-1"></i>
                            Help
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a href="/Kanbas/Courses/Home/screen.html">
                      CS5610.17387.202410.Fall
                    </a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Home
                  </li>
                </ol>
              </nav>
            </div>

            <div class="col-6">
              <div class="text-end">
                <i class="fa fa-eye me-2" style="margin-top: 5px"></i>
                <i class="fa fa-eye me-2" style="margin-top: 5px"></i>
                <div class="dropdown d-inline" style="width: 1px">
                  <button
                    class="btn btn-cus dropdown"
                    style="width: 20px"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-chevron-down text-danger"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item text-danger"
                        href="/Kanbas/Courses/Home/screen.html"
                        ><i class="fa fa-home me-1"></i>Home</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-danger"
                        href="/Kanbas/Courses/Modules/screen.html"
                        ><i class="fa fa-laptop me-1"></i>Modules</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="fa fa-plug me-1"></i>Piazza</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="fa fa-meetup me-1"></i>Zoom Meetings</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-danger"
                        href="/Kanbas/Courses/Assignments/screen.html"
                        ><i class="fa fa-book me-1"></i>Assignments</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-danger"
                        href="/Kanbas/Courses/Grades/screen.html"
                        ><i class="fa fa-graduation-cap me-1"></i>Grades</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="fa fa-users me-1"></i>People</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="fa fa-question me-1"></i>Quizzes</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="fa fa-youtube me-1"></i>Panopto Video</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="fa fa-quora me-1"></i>Discussions</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="fa fa-volume-control-phone me-1"></i
                        >Annoucements</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="fa fa-file-o me-1"></i>Pages</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="fa fa-file me-1"></i>Files</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="fa fa-star-o me-1"></i>Rubrics</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="fa fa-handshake-o me-1"></i>Outcomes</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="fa fa-circle me-1"></i>Collaborations</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="fa fa-paper-plane-o me-1"></i>Syllabus</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-danger"
                        href="/Kanbas/Courses/Settings/CourseDetails/screen.html"
                        ><i class="fa fa-gear me-1"></i>Settings</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr style="color: rgb(208, 211, 213)" />

          <div class="row">
            <div class="col-1 col2-width d-none d-sm-block">
              ${CourseNavigation("Home")}
            </div>

            <div class="col col-lg-6">
              <div class="d-flex flex-nowrap float-end">
                <button class="btn btn-sm btn-secondary flex-shrink-0 me-1">
                  Collapse All
                </button>
                <button class="btn btn-sm btn-secondary flex-shrink-0 me-1">
                  View Progress
                </button>
                <div class="dropdown d-inline-block me-1">
                  <button
                    class="btn btn-sm btn-secondary dropdown-toggle flex-shrink-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i
                      class="fa fa-check-circle"
                      aria-hidden="true"
                      style="color: rgba(35, 155, 24, 0.905)"
                    ></i>
                    Publish All
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Publish All</a></li>
                    <li>
                      <a class="dropdown-item" href="#"
                        >Publish all items and modules</a
                      >
                    </li>
                    <li><a class="dropdown-item" href="#">Unpublish</a></li>
                  </ul>
                </div>
                <button class="btn btn-sm btn-danger flex-shrink-0 me-1">
                  <i
                    class="fa fa-plus"
                    style="font-size: 12px"
                    aria-hidden="true"
                  ></i>
                  Modules
                </button>
                <button class="btn btn-sm btn-secondary flex-shrink-0 me-1">
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </button>
              </div>

              <ul class="list-group mt-5">
                <li class="list-group-item list-group-item-secondary">
                  <div class="row">
                    <div
                      class="col-1 pe-0 justify-content-center align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v me-1" aria-hidden="true"></i>
                      <i
                        class="fa fa-caret-down"
                        aria-hidden="true"
                        style="font-size: 10px"
                      ></i>
                    </div>
                    <div class="col ps-0">Week 0 - INTRO</div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle me-1"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i
                        class="fa fa-caret-down me-3"
                        aria-hidden="true"
                        style="font-size: 10px"
                      ></i>
                      <i
                        class="fa fa-plus me-1"
                        style="font-size: 12px"
                        aria-hidden="true"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-1 pe-0 justify-content-start align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">LEARNING OBJECTIVES</div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-start align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">Intruduction to this course</div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-start align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">What is Web Development</div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-start align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">A development environment</div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-start align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">Creating a Web Application</div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-start align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">
                      Getting started with the 1st assignment
                    </div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-1 pe-0 justify-content-start align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">READING</div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-start align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">
                      Full Stack Developer - Chapter 1 - Introduction
                    </div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-start align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">
                      Full Stack Developer - Chapter 2 - Creating User
                      Interfaces With HTML
                    </div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-1 pe-0 justify-content-start align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">SLIDES</div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-start align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">
                      Full Stack Developer - Chapter 2 - Creating User
                      Interfaces With HTML
                    </div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-start align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v me-2" aria-hidden="true"></i>
                      <i
                        class="fa fa-link ms-1 fa-rotate-180"
                        style="color: rgb(134, 197, 153); font-size: 13px"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col ps-0">
                      <a href="#"
                        >Intruduction to Web Development Links to an external
                        site.</a
                      >
                    </div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-center align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v me-2" aria-hidden="true"></i>
                      <i
                        class="fa fa-link ms-1 fa-rotate-180"
                        style="color: rgb(134, 197, 153); font-size: 13px"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col ps-0">
                      <a href="#"
                        >Creating an HTTP server with Node.js Links to external
                        site.</a
                      >
                    </div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-center align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v me-2" aria-hidden="true"></i>
                      <i
                        class="fa fa-link ms-1 fa-rotate-180"
                        style="color: rgb(134, 197, 153); font-size: 13px"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col ps-0">
                      <a href="#"
                        >Creating a React Application Links to an external
                        site.</a
                      >
                    </div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="list-group mt-5">
                <li class="list-group-item list-group-item-secondary">
                  <div class="row">
                    <div
                      class="col-1 pe-0 justify-content-center align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v me-1" aria-hidden="true"></i>
                      <i
                        class="fa fa-caret-down"
                        aria-hidden="true"
                        style="font-size: 10px"
                      ></i>
                    </div>
                    <div class="col ps-0">Week 1 - HTML</div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle me-1"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i
                        class="fa fa-caret-down me-3"
                        aria-hidden="true"
                        style="font-size: 10px"
                      ></i>
                      <i
                        class="fa fa-plus me-1"
                        style="font-size: 12px"
                        aria-hidden="true"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-1 pe-0 justify-content-center align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">LEARNING OBJECTIVES</div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-center align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">
                      Learn how to create user interfaces with HTML
                    </div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-center align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">Kepp working on assignment 1</div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-center align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">Deploy the assignment to Netlify</div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-1 pe-0 justify-content-center align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">READING</div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-center align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">
                      Full Stack Developer - Chapter 1 - Introduction
                    </div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div
                      class="col-2 pe-0 justify-content-center align-items-center"
                    >
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="col ps-0">
                      Full Stack Developer - Chapter 2 - Creating User
                      Interfaces With HTML
                    </div>
                    <div
                      class="col-2 d-flex justify-content-end align-items-center"
                    >
                      <i
                        class="fa fa-check-circle"
                        aria-hidden="true"
                        style="color: rgba(35, 155, 24, 0.905)"
                      ></i>
                      <i class="fa fa-ellipsis-v ms-4" aria-hidden="true"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="col-3 d-none d-lg-block ms-4 me-5">
              <h2>Course Status</h2>
              <button class="btn btn-secondary">
                <i class="fa fa-ban me-1"></i>Unpublish
              </button>
              <button class="btn btn-success">
                <i
                  class="fa fa-check-circle me-1"
                  aria-hidden="true"
                  style="color: rgba(245, 247, 245, 0.905)"
                ></i
                >Publish
              </button>

              <ul class="list-group mt-3">
                <li class="list-group-item list-group-item-secondary mb-1">
                  <a href="#">Import Existing Content</a>
                </li>
                <li class="list-group-item list-group-item-secondary mb-1">
                  <a href="#">Import From Commons</a>
                </li>
                <li class="list-group-item list-group-item-secondary mb-1">
                  <a href="#">Choose Home Page</a>
                </li>
                <li class="list-group-item list-group-item-secondary mb-1">
                  <a href="#">View Course Stream</a>
                </li>
                <li class="list-group-item list-group-item-secondary mb-1">
                  <a href="#">New Announcement</a>
                </li>
                <li class="list-group-item list-group-item-secondary mb-1">
                  <a href="#">New Analytics</a>
                </li>
                <li class="list-group-item list-group-item-secondary mb-1">
                  <a href="#">View Course Notifications</a>
                </li>
              </ul>

              <h2 class="mt-3">Comming Up</h2>
              <a href="#">View Calendar</a>
              <ul>
                <li>
                  <a href="#"
                    >Lecture CS4550.12631.202410 Sep 7 at<br />
                    11:45am</a
                  >
                </li>
                <li>
                  <a href="#"
                    >Lecture CS4550.12631.202410 Sep 11 at<br />
                    11:45am</a
                  >
                </li>
                <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"
      integrity="sha512-2rNj2KJ+D8s1ceNasTIex6z4HWyOnEYLVC3FigGOmyQCZc2eBXKgOxQmo3oKLHyfcj53uz4QMsRCWNbLd32Q1g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script src="/lib/bootstrap/bootstrap.min.js"></script>
`;
}

export default Home;
