"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/HomeScreen/Header";
import SubscribeMailNewsletter from "@/components/HomeScreen/SubscribeMailNewsletter";
import ProductShowCase from "@/components/ProductComponents/ProductShowCase";
import { allProducts } from "@/data/products";
import { useEffect, useState } from "react";

export default function Home() {
  // TODO: products listesinden ilgili categorilere göre filtreleme işlemleri yapılacak.
  const [marketShowCaseProducts, setMarketShowCaseProducts] = useState([])
  const [manavShowCaseProducts, setManavShowCaseProducts] = useState([])
  const [sarkuteriShowCaseProducts, setSarkuteriShowCaseProducts] = useState([])

  useEffect(() => {
    const marketProducts = allProducts.filter(product => product.category == "market")
    const manavProducts = allProducts.filter(product => product.category == "manav")
    const sarkuteriProducts = allProducts.filter(product => product.category == "sarkuteri")
    setMarketShowCaseProducts(marketProducts)
    setManavShowCaseProducts(manavProducts)
    setSarkuteriShowCaseProducts(sarkuteriProducts)
  }, [])

  return (
    <div className="px-5 md:my-6 md:px-36 flex flex-col gap-20">
      <Header />
      <ProductShowCase title={"Günün İndirimleri - Market"} showCaseType={"market"} products={marketShowCaseProducts} />
      <ProductShowCase title={"Günün İndirimleri - Manav"} showCaseType={"manav"} products={manavShowCaseProducts} />
      <ProductShowCase title={"Günün İndirimleri - Şarküteri"} showCaseType={"sarkuteri"} products={sarkuteriShowCaseProducts} />
      <SubscribeMailNewsletter />
    </div >
  );
}
