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
