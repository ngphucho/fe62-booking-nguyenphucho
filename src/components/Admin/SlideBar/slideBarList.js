import React from "react";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import DateRangeIcon from '@material-ui/icons/DateRange';

export const slideBarList = [
  {
    title: "Quản lý người dùng",
    link: "/admin/quan-ly-nguoi-dung",
    icon: <PermContactCalendarIcon />,
  },
  {
    title: "Quản lý phim",
    link: "/admin/quan-ly-phim",
    icon: <MovieFilterIcon />,
  },
  {
    title: "Quản lý lịch chiếu",
    link: "/admin/quan-ly-lich-chieu",
    icon: <DateRangeIcon />,
  },
];
