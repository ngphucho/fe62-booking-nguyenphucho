import React from "react";
import { Col, Row } from "reactstrap";
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
      <p style={{textAlign: "right", paddingTop: "20px"}}><button className="btn btn-outline-warning d-inline">Xem thêm</button></p>
    </>
  );
}
