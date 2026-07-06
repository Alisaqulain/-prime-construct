/**
 * Calculator removed from live site — archived at src/lib/archived/calculator-page.tsx
 * /calculator redirects to /contact via next.config.ts
 */
import { redirect } from "next/navigation";

export default function CalculatorPage() {
  redirect("/contact");
}
