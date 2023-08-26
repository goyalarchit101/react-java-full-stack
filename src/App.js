import { Col, Container, Row } from 'reactstrap';
import './App.css';
import AddCourses from './components/AddCourses';
import AllCourses from './components/AllCourses';
import Courses from './components/Courses';
import Home from './components/Home';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <ToastContainer autoClose={10} />
      <div>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <LeftMenu />
            </Col>

            <Col md={8}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/addCourse" element={<AddCourses />} />
                <Route exact path="/updateCourse" element={<AddCourses />} />
                <Route exact path="/viewCourse" element={<AllCourses />} />
                <Route exact path="/about" element={"About Page"} />
                <Route exact path="/contact" element={"Contact Page"} />
              </Routes>
            </Col>

          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
