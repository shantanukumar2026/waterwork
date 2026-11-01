import { getSeoMetadata } from "@/data/seoConfig";
import SubmittalsClient from "./SubmittalsClient";

export const metadata = getSeoMetadata("submittals");

export default function SubmittalsPage() {
  return <SubmittalsClient />;
}
