import React from 'react'
import TimKiemNguoiDung from './TimKiemNguoiDung'

export default function ThanhCongCuQuanLyNguoiDung() {
  return (
    <div className="container-fluid d-flex justify-content-between bg-light">
      <div className="timKiemNguoiDung">
        <TimKiemNguoiDung />
      </div>
      <div className="themNguoiDung">
        <button className="btn btn-success">Them nguoi dung</button>
      </div>
    </div>
  )
}
