import axios from 'axios'

export var getNewsList = ()=>{
  //把结果返回出去，基于promise，结果会放在axios中的then中
  return axios
    .get('../../static/newslist.json')
    .then(res=>res.data);
}
export var getNewsList1 = ()=>{
  //把结果返回出去，基于promise，结果会放在axios中的then中
  return axios
    .get('../../static/newslist1.json')
    .then(res=>res.data);
}
