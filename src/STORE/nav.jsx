import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo1 from "./logo.png";

export default function Navba({ onSearchClick, onResetClick, onSearCateg }) {
  return (
    <Navbar expand="lg" sticky="top" className="navbar-dark bg-dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo1} alt="" width="80" height="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Nav.Link>
            <NavDropdown title="All Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={(e, val) => onSearCateg(e, "all")}>
                ALL
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={(e, val) => onSearCateg(e, "jewelery")}
              >
                Jewelery
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e, val) => onSearCateg(e, "electronics")}
              >
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e, val) => onSearCateg(e, "men's clothing")}
              >
                Men's Clothing
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e, val) => onSearCateg(e, "women's clothing")}
              >
                Women's Clothing
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="m-1"
              aria-label="Search"
              id="search"
            />
            <Button
              variant="outline-success m-1"
              onClick={(e, val) =>
                onSearchClick(
                  e,
                  (val = document.querySelector("#search").value)
                )
              }
            >
              Search
            </Button>
            <Button
              variant="outline-secondary m-1"
              onClick={(e) => {
                onResetClick(e);
                document.querySelector("#search").value = "";
              }}
            >
              Reset
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
