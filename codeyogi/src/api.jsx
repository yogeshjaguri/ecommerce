import axios from 'axios';

export function getProductData(id) {
    axios.get('https://dummyjson.com/products/' + id).then(function (response) {
        return response.data.products; 
});
}

export function getProductList() {
   return axios.get('https://dummyjson.com/products').then(function (response) {
    return response.data.products; 
   });
}