import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";

export default function SubContent({ title, link, data }) {
  return (
    <>
      <Row>
        {title ? <h3>{title}</h3> : null}
        {data.map((item) => {
          return (
            <Col md={3} key={item.maPhim}>
              <MovieItem movie={item}></MovieItem>
            </Col>
          );
        })}
      </Row>
      {link ? (
        <p style={{ textAlign: "right", paddingTop: "20px" }}>
          <Link to={link}>
            <button className="btn btn-outline-warning d-inline">
              Xem thêm
            </button>
          </Link>
        </p>
      ) : null}
    </>
  );
}
