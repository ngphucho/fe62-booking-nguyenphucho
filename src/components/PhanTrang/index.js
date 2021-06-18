import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { timKiemNguoiDungPhanTrang } from "../../actions/quanLyNguoiDung";

export default function PhanTrang({ soLuongRender }) {
  const dispatch = useDispatch();
  const { danhSachNguoiDungPhanTrang, error } = useSelector(
    (state) => state.danhSachNguoiDungPhanTrang
  );
  const { MaNhom, soPhanTuTrenTrang } = useSelector(
    (state) => state.thongTinPhanTrangNguoiDung
  );

  if (error || !danhSachNguoiDungPhanTrang) {
    return <div>{error}</div>;
  }

  const trangHienTai = danhSachNguoiDungPhanTrang?.currentPage;
  const tongSoTrang = danhSachNguoiDungPhanTrang?.totalPages;
  const tuKhoa = danhSachNguoiDungPhanTrang?.tuKhoa;
  const setTrangHienTai = (nextPage) => {
    dispatch(
      timKiemNguoiDungPhanTrang({
        MaNhom,
        tuKhoa,
        soPhanTuTrenTrang,
        soTrang: nextPage,
      })
    );
  };
  // const { totalPages: tongSoTrang } = danhSachNguoiDungPhanTrang;

  const taoMangTrangRender = () => {
    if (soLuongRender >= tongSoTrang) {
      return [...Array(tongSoTrang).keys()].map((i) => i + 1);
    }

    if (trangHienTai - parseInt((soLuongRender - 1) / 2) <= 0) {
      return [...Array(soLuongRender).keys()].map((i) => i + 1);
    }

    if (trangHienTai + parseInt((soLuongRender - 1) / 2) > tongSoTrang) {
      return [...Array(soLuongRender).keys()].map(
        (i) => i + tongSoTrang - soLuongRender + 1
      );
    }

    return [...Array(soLuongRender).keys()].map(
      (i) => i + trangHienTai - parseInt((soLuongRender - 1) / 2)
    );
  };
  const mangTrangRender = taoMangTrangRender();
  const nextPage = (page) => {
    setTrangHienTai(page);
  };

  return (
    <div className="phanTrang">
      <Pagination>
        {/* Trang dau */}
        <PaginationItem disabled={trangHienTai === 1}>
          <PaginationLink
            first
            onClick={() => {
              nextPage(1);
            }}
          />
        </PaginationItem>
        {/* Trang truoc */}
        <PaginationItem disabled={trangHienTai === 1}>
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
        <PaginationItem disabled={trangHienTai === tongSoTrang}>
          <PaginationLink
            next
            onClick={() => {
              nextPage(trangHienTai + 1);
            }}
          />
        </PaginationItem>
        {/* Trang cuoi */}
        <PaginationItem disabled={trangHienTai === tongSoTrang}>
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
