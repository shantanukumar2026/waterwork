import { getSeoMetadata } from "@/data/seoConfig";
import LoginClient from "./LoginClient";

export const metadata = getSeoMetadata("login");

export default function LoginPage() {
  return <LoginClient />;
}
