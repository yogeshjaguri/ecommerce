import { useEffect, useState } from "react";
import { getProductList } from "./api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";
import ProductList from "./ProductList";


function ProductListPage () {
  const [productList, setProductList] = useState([]);
  const [loading, setloading] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    getProductList().then(function (products) {
    setProductList(products);
    setloading(false)
   });
  }, []);

  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });


  if (sort == "price") {
    data.sort(function (x,y) {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    data.sort(function (x, y){
      return x.title > y.title ? 1 : -1;
    });
  }
 
  function handleQueryChange(event) {
     setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  if(loading) {
    return <Loading />
  };
  return (
    <div className="p-2 max-w-6xl mx-auto bg-white px-9 py-12.5 my-16">
      <input
      value={query}
      placeholder="search"
      className="border border-gray-700 roundend-md mb-2"
      onChange={handleQueryChange}
      />
      <select 
      onChange={handleSortChange}
      className="border border-gray-700 rounded-md ml-2"
      value={sort}
      >
        <option value="default">Default sort</option>
        <option value="name">Sort by name</option>
        <option value="price">Sort by price</option>
      </select>
      {data.length > 0 && <ProductList products={data}/>}
      {data.length === <NoMatching>No Matching product</NoMatching>}       
    </div>
  )
}
export default ProductListPage;