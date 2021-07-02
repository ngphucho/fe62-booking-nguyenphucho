import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";

export default function SubContent({ title, link, data }) {
  return (
    <>
      <Row className="moviesList">
        {title ? <h3>{title}</h3> : null}
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <Col sm={4} lg={3} xl={2} key={item.maPhim}>
                <MovieItem movie={item}></MovieItem>
              </Col>
            );
          })
        ) : (
          <div>Không tìm thấy phim...</div>
        )}
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
