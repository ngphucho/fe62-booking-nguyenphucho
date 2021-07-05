import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { formatDDMMYYYY } from "../../../../utils/timeFunction";
import RutGonText from "../../../RutGonText";
import { popupModalToggle } from "../../../../actions/popupModal";
import { changeFormData } from "../../../../actions/formData";

export default function BangDanhSachPhim({
  danhSachPhim,
  trangHienTai,
  soPhanTuTrenTrang,
  xoaPhim,
  themLichChieu,
}) {
  const dispatch = useDispatch();

  const handleEdit = (e, item) => {
    const values = {
      danhGia: item.danhGia,
      hinhAnh: item.hinhAnh,
      maNhom: item.maNhom,
      maPhim: item.maPhim,
      moTa: item.moTa,
      ngayKhoiChieu: formatDDMMYYYY(item.ngayKhoiChieu, "/"),
      tenPhim: item.tenPhim,
      trailer: item.trailer,
    };
    dispatch(
      popupModalToggle({
        title: "SỬA THÔNG TIN PHIM",
      })
    );
    dispatch(
      changeFormData({
        button: "Sửa",
        type: "edit",
        values,
      })
    );
  };

  const handleThemLichchieu = (maPhim) => {
    themLichChieu(maPhim);
  };

  // useEffect(() => {
  //   console.log(danhSachPhim);
  // });
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Mã Phim</th>
          <th>Tên Phim</th>
          {/* <th>Bí Danh</th> */}
          <th>Mô tả</th>
          <th>Hình Ảnh</th>
          <th>Trailer</th>
          <th>Ngày Khởi Chiếu</th>
          <th>Đánh giá</th>
          <th>{/* nút xóa + sửa */}</th>
        </tr>
      </thead>
      <tbody>
        {danhSachPhim?.map((item, index) => (
          <tr key={index}>
            <th scope="row">
              {index + 1 + (trangHienTai - 1) * soPhanTuTrenTrang}
            </th>
            <td>{item.maPhim}</td>
            <td>{item.tenPhim}</td>
            {/* <td>{item.biDanh}</td> */}
            <td>
              <RutGonText text={item.moTa} len={30} moreIcon="+" lessIcon="-" />
            </td>
            <td>
              <img
                style={{ width: "40px" }}
                src={item.hinhAnh}
                alt={item.biDanh}
              />
            </td>
            <td>{item.trailer.slice(29, 100)}</td>
            <td>{formatDDMMYYYY(item.ngayKhoiChieu)}</td>
            <td>{item.danhGia}</td>
            <td>
              <div style={{ display: "flex" }}>
                {/* <NutXoa /> */}
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    xoaPhim(item);
                  }}
                >
                  xoa
                </button>
                {/* <NutSua /> */}
                <button
                  className="btn btn-success"
                  onClick={(e) => {
                    handleEdit(e, item);
                  }}
                >
                  sua
                </button>
                {/* Nut them lich chieu */}
                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    handleThemLichchieu(item.maPhim);
                  }}
                >
                  Them lich
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
