import { getSeoMetadata } from "@/data/seoConfig";
import ContactClient from "./ContactClient";

export const metadata = getSeoMetadata("contact");

export default function ContactPage() {
  return <ContactClient />;
}
