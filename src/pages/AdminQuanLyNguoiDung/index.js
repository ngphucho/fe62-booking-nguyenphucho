import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachNguoiDungPhanTrang } from "../../actions/quanLyNguoiDung";
import PhanTrang from "../../components/PhanTrang";

export default function AdminQuanLyNguoiDung() {
  const dispatch = useDispatch();
  const { danhSachNguoiDungPhanTrang, isLoading, error } = useSelector(
    (state) => state.danhSachNguoiDungPhanTrang
  );
  const [trangHienTai, setTrangHienTai] = useState(1);

  useEffect(() => {
    if (trangHienTai) {
      console.log(trangHienTai);
      dispatch(
        layDanhSachNguoiDungPhanTrang({
          tuKhoa: "",
          soTrang: 2,
          soPhanTuTrenTrang: 21,
        })
      );
    }
  }, [trangHienTai]);

  useEffect(() => {
    if (danhSachNguoiDungPhanTrang) {
      console.log(danhSachNguoiDungPhanTrang);
    }
  }, [danhSachNguoiDungPhanTrang]);

  if (error) return <div>Loi: {error}</div>;
  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div>
      {danhSachNguoiDungPhanTrang?.items.map((item) => (
        <div key={item.taiKhoan}>
          {item.taiKhoan} : {item.hoTen}
        </div>
      ))}
      {/* <Pagination>
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>

        {Array(danhSachNguoiDungPhanTrang.totalPages)
          .fill()
          .map((item, index) => (
            <PaginationItem>
              <PaginationLink href="#">{index + 1}</PaginationLink>
            </PaginationItem>
          ))}

        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination> */}
      <PhanTrang
        trangHienTai={danhSachNguoiDungPhanTrang.currentPage}
        tongSoTrang={danhSachNguoiDungPhanTrang.totalPages}
        soLuongRender={6}
        setTrangHienTai={setTrangHienTai}
      />
    </div>
  );
}
