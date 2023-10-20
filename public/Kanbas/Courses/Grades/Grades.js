import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "../CourseNavigation/CourseNavigation.js";

function Grades() {
  return `
    <div class="container-fluid">
      <div class="row">
        <div class="col-1 col1-width d-none d-sm-block">
          ${KanbasNavigation()}
        </div>

        <div class="col">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/Kanbas/Courses/Home/screen.html">
                  <i class="fa fa-bars me-4"></i>
                </a>
                <a href="/Kanbas/Courses/Home/screen.html">
                  CS5610.17387.202410.Fall
                </a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Grades</li>
            </ol>
          </nav>

          <hr style="color: rgb(208, 211, 213)" />

          <div class="row">
            <div class="col-1 col2-width d-none d-sm-block">
              ${CourseNavigation("Grades")}
            </div>

            <div class="col">
              <div class="d-flex float-end">
                <button class="btn btn-secondary me-1">
                  <i class="fa fa-file"></i>
                  Import
                </button>
                <div class="btn-group" role="group">
                  <button
                    class="btn btn-secondary dropdown-toggle me-1"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-file fa-rotate-180"></i>
                    Export
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Unpublish</a></li>
                    <li><a class="dropdown-item" href="#">Unpublish</a></li>
                  </ul>
                </div>
                <button class="btn btn-secondary">
                  <i class="fa fa-gear"></i>
                </button>
              </div>
              <br />
              <br />

              <div class="row">
                <div class="col-6">
                  <label class="form-label fw-semibold" for="studentNames">
                    Student Names
                  </label>
                  <input
                    class="form-control"
                    id="studentNames"
                    title="Type the student name"
                    placeholder="Search Students"
                  />
                  <button class="btn btn-secondary mt-2">
                    <i class="fa fa-filter me-1"></i>
                    Apply Fliters
                  </button>
                </div>

                <div class="col-6">
                  <label class="form-label fw-semibold" for="assignmentNames"
                    >Assignment Names</label
                  >
                  <input
                    class="form-control"
                    id="assignmentNames"
                    placeholder="Search Assignment"
                  />
                </div>
              </div>

              <div class="col-10">
                <div class="table-responsive">
                  <table class="mt-2 table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Student Nmae</th>
                        <th scope="col">A1 - SETUP Out of 100</th>
                        <th scope="col">A2 - HTML Out of 10</th>
                        <th scope="col">A3 - CSS Out of 10</th>
                        <th scope="col">A4 - BOOTSTRAP Out of 10</th>
                        <th scope="col">A5 - JACASCRIPT Out of 10</th>
                        <th scope="col">A6 - REACT Out of 100</th>
                        <th scope="col">A7 - REDUX Out of 100</th>
                        <th scope="col">A8 - NODE Out of 100</th>
                        <th scope="col">A9 - MONGO Out of 100</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Alice Wonderland</th>
                        <td>98</td>
                        <td>89</td>
                        <td>
                          <input
                            type="text"
                            value="99"
                            style="text-align: center"
                            size="5"
                          />
                          <i class="fa fa-file ms-1"></i>
                        </td>
                        <td>90</td>
                        <td>89</td>
                        <td>89</td>
                        <td>94</td>
                        <td>88</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <th scope="row">Bob Builder</th>
                        <td>98</td>
                        <td>89</td>
                        <td>87</td>
                        <td>90</td>
                        <td>89</td>
                        <td>94</td>
                        <td>88</td>
                        <td>87</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <th scope="row">Luke Skywalker</th>
                        <td>83</td>
                        <td>89</td>
                        <td>87</td>
                        <td>90</td>
                        <td>89</td>
                        <td>89</td>
                        <td>94</td>
                        <td>88</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <th scope="row">Han Solo</th>
                        <td>83</td>
                        <td>89</td>
                        <td>87</td>
                        <td>90</td>
                        <td>89</td>
                        <td>94</td>
                        <td>
                          <input
                            type="text"
                            value="89"
                            style="text-align: center"
                            size="5"
                          />
                          <i class="fa fa-file ms-1"></i>
                        </td>
                        <td>87</td>
                        <td>100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

export default Grades;
