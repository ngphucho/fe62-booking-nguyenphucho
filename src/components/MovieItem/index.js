// import React from "react";

// export default function MovieItem({ movie }) {
//   return (
//     <div>
//       <div>{movie.tenPhim}</div>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MovieItem({ movie }) {
  const classes = useStyles();

  // return (
  //   <Card className={classes.root}>
  //     <CardActionArea>
  //       <CardMedia
  //         className={classes.media}
  //         image={movie.hinhAnh}
  //         title="Contemplative Reptile"
  //       />
  //       <CardContent>
  //         <Typography gutterBottom variant="h5" component="h2">
  //           Lizard
  //         </Typography>
  //         <Typography variant="body2" color="textSecondary" component="p">
  //           Lizards are a widespread group of squamate reptiles, with over 6,000
  //           species, ranging across all continents except Antarctica
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //     <CardActions>
  //       <Button size="small" color="primary">
  //         Share
  //       </Button>
  //       <Button size="small" color="primary">
  //         Learn More
  //       </Button>
  //     </CardActions>
  //   </Card>
  // );

  return (
    <div className="card movie_card">
  <img src={movie.hinhAnh} className="card-img-top" alt={movie.biDanh} />
  <div className="card-body">
    <i className="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
    </i>
    <h5 className="card-title">{movie.tenPhim}</h5>
    <span className="movie_info">{movie.ngayKhoiChieu.slice(0,4)}</span>
    <span className="movie_info float-right"><i className="fas fa-star" /> {movie.danhGia} / 10</span>
  </div>
</div>

  );
}

const arr = [
  {
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
];
