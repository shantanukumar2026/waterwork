import { getSeoMetadata } from "@/data/seoConfig";
import PortalClient from "./PortalClient";

export const metadata = getSeoMetadata("portal");

export default function PortalPage() {
  return <PortalClient />;
}
