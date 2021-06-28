import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";

//ham xu lu clone array object cho mang JSON-serializable (su dung khi mang ko chua function, số Number.POSITIVE_INFINITY,... )
export const cloneArrayObject = (arr) => JSON.parse(JSON.stringify(arr));

//han xu ly lay tao mang moi gom id va name tu mang du lieu.
//arr la mang
//id: string là key chứa id của mảng arr
//name: string là key chứa name của mảng arr
export const cloneArrayIdName = (arr, id, name) =>
  arr.map((item) => ({ id: item[id], name: item[name] }));

//format chuoi sang dang tien viet nam
export const formatVND = (number) => {
  return number.toLocaleString("vi", { style: "currency", currency: "VND" });
};

export const generateStar = (score, maxScore) => {
  const newScore = parseInt(score / 2);
  const mod = score % 2;
  const newMaxScore = parseInt((maxScore + 1) / 2);
  // console.log(score, maxScore, newScore, mod, newMaxScore);
  return [...Array(newMaxScore).keys()].map((key) => {
    if (key < newScore) return <StarIcon key={key} />;
    if (key === newScore && mod === 1) return <StarHalfIcon key={key} />;
    return <StarBorderIcon key={key} />;
  });
};

export const httpToHttps = (data) => {
  const stringData = JSON.stringify(data);
  const regex = new RegExp("http://", "g");
  const stringResult = stringData.replace(regex, "https://");
  return JSON.parse(stringResult);
};
