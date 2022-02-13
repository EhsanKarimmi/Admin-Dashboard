import "./App.css";
import Sidebar from "./Components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "reactstrap";
import Dashboard from "./Components/Dashboard";

function App() {
    return (
        <div>
            <Row>
                <Row className="col-md-2 mb-5 ">
                    <div className="col-md-2 position-fixed sidebarContainer">
                        <Sidebar />
                    </div>
                </Row>

                <Col className="col-md-10  ">
                    <Dashboard />
                </Col>
            </Row>
        </div>
    );
}

export default App;
