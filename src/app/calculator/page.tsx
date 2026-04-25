"use client";

import { useMemo, useState } from "react";
import { Copy, Share2 } from "lucide-react";
import { useAlerts } from "@/components/modern-alerts";

export default function CalculatorPage() {
  const [area, setArea] = useState(1000);
  const [laborCost, setLaborCost] = useState(45);
  const [waterCost, setWaterCost] = useState(2);
  const [puttyCost, setPuttyCost] = useState(18);
  const alerts = useAlerts();

  const result = useMemo(() => {
    const cementMaterial = area * 42;
    const cementLabor = area * laborCost;
    const cementWater = area * waterCost;
    const cementPutty = area * puttyCost;
    const cementTotal = cementMaterial + cementLabor + cementWater + cementPutty;

    const gypsumMaterial = area * 48;
    const gypsumLabor = area * (laborCost * 0.7);
    const gypsumWater = 0;
    const gypsumPutty = 0;
    const gypsumTotal = gypsumMaterial + gypsumLabor + gypsumWater + gypsumPutty;

    const timeSavedDays = Math.round((area / 1000) * 6);
    const totalSavings = Math.max(cementTotal - gypsumTotal, 0);

    return { cementTotal, gypsumTotal, timeSavedDays, totalSavings };
  }, [area, laborCost, puttyCost, waterCost]);

  async function copyEstimate() {
    const text = [
      "Prime Construct Estimate",
      `Area: ${area.toLocaleString("en-IN")} sq ft`,
      `Cement plaster: INR ${Math.round(result.cementTotal).toLocaleString("en-IN")}`,
      `Gypsum plaster: INR ${Math.round(result.gypsumTotal).toLocaleString("en-IN")}`,
      `Savings: INR ${Math.round(result.totalSavings).toLocaleString("en-IN")}`,
      `Time saved: ${result.timeSavedDays} days`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      alerts.success("Estimate copied", "You can now share it with your client.");
    } catch {
      alerts.error("Copy failed", "Clipboard permission was not available.");
    }
  }

  function shareOnWhatsApp() {
    const message = encodeURIComponent(
      `Prime Construct estimate for ${area} sq ft:\nCement: INR ${Math.round(
        result.cementTotal
      ).toLocaleString("en-IN")}\nGypsum: INR ${Math.round(result.gypsumTotal).toLocaleString(
        "en-IN"
      )}\nSavings: INR ${Math.round(result.totalSavings).toLocaleString(
        "en-IN"
      )}\nTime saved: ${result.timeSavedDays} days`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
    alerts.info("WhatsApp opened", "Share the estimate with one tap.");
  }

  return (
    <section className="section-shell py-24">
      <h1 className="text-4xl font-bold">Cost Calculator</h1>
      <p className="mt-3 max-w-3xl text-white/75">
        Estimate cement plaster cost vs gypsum plaster cost based on your project economics.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="glass-card space-y-4 p-6">
          <label className="block text-sm">
            Area (sq ft)
            <input type="number" min={100} value={area} onChange={(e) => setArea(Number(e.target.value) || 0)} className="input-modern mt-2" />
          </label>
          <label className="block text-sm">
            Labor cost per sq ft
            <input type="number" min={1} value={laborCost} onChange={(e) => setLaborCost(Number(e.target.value) || 0)} className="input-modern mt-2" />
          </label>
          <label className="block text-sm">
            Water cost per sq ft
            <input type="number" min={0} value={waterCost} onChange={(e) => setWaterCost(Number(e.target.value) || 0)} className="input-modern mt-2" />
          </label>
          <label className="block text-sm">
            Putty cost per sq ft
            <input type="number" min={0} value={puttyCost} onChange={(e) => setPuttyCost(Number(e.target.value) || 0)} className="input-modern mt-2" />
          </label>
        </div>

        <div className="grid gap-4">
          <div className="glass-card p-6">
            <p className="text-sm text-white/70">Cement plaster cost</p>
            <p className="mt-2 text-3xl font-bold text-white">INR {Math.round(result.cementTotal).toLocaleString("en-IN")}</p>
          </div>
          <div className="glass-card p-6">
            <p className="text-sm text-white/70">Gypsum plaster cost</p>
            <p className="mt-2 text-3xl font-bold text-white">INR {Math.round(result.gypsumTotal).toLocaleString("en-IN")}</p>
          </div>
          <div className="glass-card p-6">
            <p className="text-sm text-white/70">Time saved</p>
            <p className="mt-2 text-3xl font-bold text-[#D4AF37]">{result.timeSavedDays} days</p>
          </div>
          <div className="glass-card p-6">
            <p className="text-sm text-white/70">Total savings</p>
            <p className="mt-2 text-3xl font-bold text-emerald-300">INR {Math.round(result.totalSavings).toLocaleString("en-IN")}</p>
          </div>
          <div className="glass-card flex flex-wrap gap-3 p-4">
            <button
              type="button"
              onClick={copyEstimate}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
            >
              <Copy size={14} />
              Copy Estimate
            </button>
            <button
              type="button"
              onClick={shareOnWhatsApp}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-black transition hover:brightness-110"
            >
              <Share2 size={14} />
              Share on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
