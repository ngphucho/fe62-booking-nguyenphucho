import { CHANGE_SELECTED_MOVIE } from "../constants/selectedMovie";
import { CLOSE_TRAILER } from "../constants/selectedMovie";

const initialState = {
  selectedMovie: {
    maPhim: 1329,
    tenPhim: "Bố Già",
    biDanh: "bo-gia",
    trailer: "https://www.youtube.com/embed/jluSu8Rw6YE",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/bo-gia_gp01.jpg",
    moTa: "Tui Chưa Coi Nên Chưa Biết",
    maNhom: "GP01",
    ngayKhoiChieu: "2021-04-03T00:00:00",
    danhGia: 10,
  },
  isOpen: false,
};

function selectedMovieReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SELECTED_MOVIE: {
      return {
        // ...state,
        selectedMovie: action.payload.data,
        isOpen: true,
      };
    }
    case CLOSE_TRAILER: {
      console.log(action.payload.isOpen);
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    }
    default:
      return state;
  }
}

export default selectedMovieReducer;
