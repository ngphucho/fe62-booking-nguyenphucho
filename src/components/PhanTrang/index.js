import React, { useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import "./styles.scss";

export default function PhanTrang({
  soLuongRender,
  trangHienTai,
  tongSoTrang,
  link,
}) {
  const location = useLocation();
  const history = useHistory();
  const taoMangTrangRender = () => {
    // console.log("trang hien tai", parseInt(trangHienTai));
    // console.log("tong so trang", tongSoTrang);
    // console.log("so luong render", soLuongRender);
    if (soLuongRender >= tongSoTrang) {
      return [...Array(tongSoTrang).keys()].map((i) => i + 1);
    }

    if (parseInt(trangHienTai) - parseInt((soLuongRender - 1) / 2) <= 0) {
      return [...Array(soLuongRender).keys()].map((i) => i + 1);
    }

    if (
      parseInt(trangHienTai) + parseInt((soLuongRender - 1) / 2) >=
      tongSoTrang
    ) {
      return [...Array(soLuongRender).keys()].map(
        (i) => i + tongSoTrang - soLuongRender + 1
      );
    }

    return [...Array(soLuongRender).keys()].map(
      (i) => i + parseInt(trangHienTai) - parseInt((soLuongRender - 1) / 2)
    );
  };
  const mangTrangRender = taoMangTrangRender();
  const diDenTrang = (page) => {
    const thongTinTrang = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    // link="/admin/quan-ly-phim?"
    history.push(
      link +
        "?" +
        qs.stringify({
          ...thongTinTrang,
          trangHienTai: page,
        })
    );
  };
  useEffect(() => {
    if (parseInt(trangHienTai) > tongSoTrang) {
      diDenTrang(tongSoTrang);
    }
  }, [tongSoTrang]);
  return (
    <div className="phanTrang">
      <Pagination>
        {/* Trang dau */}
        <PaginationItem disabled={parseInt(trangHienTai) === 1}>
          <PaginationLink
            first
            onClick={() => {
              diDenTrang(1);
            }}
          />
        </PaginationItem>
        {/* Trang truoc */}
        <PaginationItem disabled={parseInt(trangHienTai) === 1}>
          <PaginationLink
            previous
            onClick={() => {
              diDenTrang(parseInt(trangHienTai) - 1);
            }}
          />
        </PaginationItem>
        {/* Render mang trang */}
        {mangTrangRender.map((i) => (
          <PaginationItem
            key={i}
            active={i === parseInt(trangHienTai) ? true : false}
          >
            <PaginationLink
              onClick={() => {
                diDenTrang(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Trang tiep theo */}
        <PaginationItem disabled={parseInt(trangHienTai) === tongSoTrang}>
          <PaginationLink
            next
            onClick={() => {
              diDenTrang(parseInt(trangHienTai) + 1);
            }}
          />
        </PaginationItem>
        {/* Trang cuoi */}
        <PaginationItem disabled={parseInt(trangHienTai) === tongSoTrang}>
          <PaginationLink
            last
            onClick={() => {
              diDenTrang(tongSoTrang);
            }}
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
}
