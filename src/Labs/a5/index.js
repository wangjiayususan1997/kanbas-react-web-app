import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
// const API_BASE = process.env.REACT_APP_API_BASE;
// const welcome_URL = `${API_BASE}/a5/welcome`;

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a
          href="https://kanbas-node-server-app-sl11.onrender.com/a5/welcome"
          className="list-group-item"
        >
          Welcome
        </a>
      </div>
      <h3>Simple API Example</h3>
      <br />
      <EncodingParametersInURLs />
      <br />
      <br />
      <WorkingWithObjects />
      <br />
      <br />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;
