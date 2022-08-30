const dateNow = () =>{

  let data = new Date(),
  day = data.getDate().toString().padStart(2, "0"),
  month = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
  year = data.getFullYear();
  hour = data.getHours();
  min = data.getMinutes();
  seg = data.getSeconds();
  return year + "-" + month + "-" + day + "-" + hour + "-" + min + "-" + seg;

}

module.exports = dateNow