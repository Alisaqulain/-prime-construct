import { redirect } from "next/navigation";

/** @deprecated Portfolio merged into Case Studies */
export default function PortfolioRedirectPage() {
  redirect("/case-studies");
}
