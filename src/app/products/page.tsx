import { Suspense } from "react";
import ProductsClient from "./ProductsClient";
import { getSeoMetadata } from "@/data/seoConfig";

export const metadata = getSeoMetadata("products");

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#F8FAFC" }} />}>
      <ProductsClient />
    </Suspense>
  );
}
