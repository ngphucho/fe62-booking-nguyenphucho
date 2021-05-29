import React from "react";
import { Col, Row } from "reactstrap";
import MovieItem from "../MovieItem";

export default function SubContent({ title, link, data }) {
  return (
    <Row>
      {title ? <h3>{title}</h3> : null}
      {data.map((item) => {
        return (
          <Col md={3} className="my-2" key={item.maPhim}>
            <MovieItem movie={item}></MovieItem>
          </Col>
        );
      })}
      {/* <Link to={link}>
        <Button>More</Button>
      </Link> */}
    </Row>
  );
}
