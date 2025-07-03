import ProductDetail from "@/components/ProductDetailClient/ProductDetail"
import { allProducts } from "@/data/products"

const page = async ({ params }) => {
    const { id } = await params
    const product = allProducts.find(product => product.slugText == id)
    return (
        <ProductDetail product={product} />
    )
}

export default page