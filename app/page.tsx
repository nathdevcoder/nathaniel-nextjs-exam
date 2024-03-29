import { getProducts } from "@src/Api/Product"; 
import Navbar from "@src/components/Navbar";
import ProductMedia from "@src/components/ProductMedia";
import ProductVariants from "@src/components/ProductVariants";

 

export default async function Home() {

  const data = await getProducts('https://9xozpkins4.execute-api.ap-southeast-1.amazonaws.com/dev/api/product') 

  if(!data) return <h2>oops something went wrong fetching product api</h2> 
  return (
    <main  >
     <Navbar />
     <div className="flex flex-col md:flex-row justify-center items-center md:items-start  sm:p-10 md:p-2 ">
        <ProductMedia image={data.product.image}/>
        <ProductVariants name={data.product.name || ""} options={data.product.options || []} variants={data.product.variants || []}/>
     </div>
    </main>
  )
}
