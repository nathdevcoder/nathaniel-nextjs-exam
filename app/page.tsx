import { getProducts } from "@src/Api/Product";
import Breadcrumbs from "@src/components/Breadcrumbs";
import Navbar from "@src/components/Navbar";
import ProductMedia from "@src/components/ProductMedia";
import ProductVariants from "@src/components/ProductVariants";

 

export default async function Home() {

  const data = await getProducts('https://9xozpkins4.execute-api.ap-southeast-1.amazonaws.com/dev/api/product') 

  if(!data) return <h2>oops something went wrong fetching product api</h2>
  console.log(data.product.image);
  
  return (
    <main  >
     <Navbar />
     <div className="flex justify-center">
        <ProductMedia image={data.product.image}/>
        <ProductVariants />
     </div>
    </main>
  )
}
