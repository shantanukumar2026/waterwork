import { getSeoMetadata } from "@/data/seoConfig";
import RegisterClient from "./RegisterClient";

export const metadata = getSeoMetadata("register");

export default function RegisterPage() {
  return <RegisterClient />;
}
