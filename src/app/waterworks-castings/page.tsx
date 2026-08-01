import { Suspense } from "react";
import WaterworksCastingsClient from "./WaterworksCastingsClient";
import { getSeoMetadata } from "@/data/seoConfig";

export const metadata = getSeoMetadata("waterworksCastings");

export default function WaterworksCastingsPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#F8FAFC" }} />}>
      <WaterworksCastingsClient />
    </Suspense>
  );
}
