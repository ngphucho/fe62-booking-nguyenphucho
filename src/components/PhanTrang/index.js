import React from "react";
import { useDispatch } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function PhanTrang({
  trangHienTai,
  tongSoTrang,
  soLuongRender,
  setTrangHienTai,
}) {
  const dispatch = useDispatch();
  const taoMangTrangRender = () => {
    if (soLuongRender >= tongSoTrang) {
      return [...Array(tongSoTrang).keys()].map((i) => i + 1);
    }

    if (trangHienTai - (soLuongRender - 1) / 2 < 0) {
      return [...Array(soLuongRender).keys()].map((i) => i + 1);
    }

    if (trangHienTai + (soLuongRender - 1) / 2 > tongSoTrang) {
      return [...Array(soLuongRender).keys()].map(
        (i) => i + tongSoTrang - soLuongRender + 1
      );
    }

    return [...Array(soLuongRender).keys()].map(
      (i) => i + trangHienTai - (soLuongRender - 1) / 2
    );
  };
  const mangTrangRender = taoMangTrangRender();
  const nextPage = (page) => {
    setTrangHienTai(page);
  };

  return (
    <div>
      <Pagination>
        {/* Trang dau */}
        <PaginationItem>
          <PaginationLink
            first
            onClick={() => {
              nextPage(1);
            }}
          />
        </PaginationItem>
        {/* Trang truoc */}
        <PaginationItem>
          <PaginationLink
            previous
            onClick={() => {
              nextPage(trangHienTai - 1);
            }}
          />
        </PaginationItem>
        {/* Render mang trang */}
        {mangTrangRender.map((i) => (
          <PaginationItem key={i} active={i === trangHienTai ? true : false}>
            <PaginationLink
              onClick={() => {
                nextPage(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Trang tiep theo */}
        <PaginationItem>
          <PaginationLink
            next
            onClick={() => {
              nextPage(trangHienTai + 1);
            }}
          />
        </PaginationItem>
        {/* Trang cuoi */}
        <PaginationItem>
          <PaginationLink
            last
            onClick={() => {
              nextPage(tongSoTrang);
            }}
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
}
