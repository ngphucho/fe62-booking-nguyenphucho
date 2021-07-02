import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import qs from "qs";

//import component
import SubContent from "../../components/SubContent";
import PhanTrang from "../../components/PhanTrang";

//import khac
import { appLayoutData } from "../../utils/myData";

export default function PhanTrangAppLayout(props) {
  const location = useLocation();
  const { danhSachPhim, link, title } = props;

  const [tongSoTrang, setTongSoTrang] = useState(1);
  const [soLuongRender, setSoLuongRender] = useState(
    appLayoutData.soNutPhanTrang
  );
  const [trangHienTai, setTrangHienTai] = useState(1);
  const [soPhanTuTrenTrang, setSoPhanTuTrenTrang] = useState(
    appLayoutData.soPhanTuTrenTrang
  );
  const [danhSachPhimFilter, setDanhSachPhimFilter] = useState([]);

  //
  useEffect(() => {
    const { trangHienTai: page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    if (page) {
      if (page <= tongSoTrang) {
        setTrangHienTai(page);
      } else {
        setTrangHienTai(1);
      }
    } else {
      setTrangHienTai(1);
    }
  }, [location]);

  //xu ly khi trang hien tai thay doi
  useEffect(() => {
    setDanhSachPhimFilter(
      danhSachPhim.slice(
        soPhanTuTrenTrang * (trangHienTai - 1),
        soPhanTuTrenTrang * (trangHienTai - 1) + soPhanTuTrenTrang
      )
    );
  }, [trangHienTai, tongSoTrang]);

  //xu ly khi danh sach phim thay doi
  useEffect(() => {
    setTongSoTrang(parseInt(danhSachPhim.length / soPhanTuTrenTrang) + 1);
  }, [danhSachPhim]);

  return (
    <div>
      <div className="container-md bodyContainer">
        <SubContent title={title} data={danhSachPhimFilter} />
      </div>
      <div class="phanTrangAppLayout">
        <PhanTrang
          soLuongRender={soLuongRender}
          trangHienTai={trangHienTai}
          tongSoTrang={tongSoTrang}
          link={link}
        />
      </div>
    </div>
  );
}

PhanTrangAppLayout.propTypes = {
  danhSachPhim: PropTypes.func,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

PhanTrangAppLayout.defaultProps = {
  danhSachPhim: [],
};
