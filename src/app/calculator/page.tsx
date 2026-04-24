"use client";

import { useMemo, useState } from "react";

export default function CalculatorPage() {
  const [area, setArea] = useState(1000);
  const [laborCost, setLaborCost] = useState(45);
  const [waterCost, setWaterCost] = useState(2);
  const [puttyCost, setPuttyCost] = useState(18);

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
            <input type="number" min={100} value={area} onChange={(e) => setArea(Number(e.target.value) || 0)} className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
          </label>
          <label className="block text-sm">
            Labor cost per sq ft
            <input type="number" min={1} value={laborCost} onChange={(e) => setLaborCost(Number(e.target.value) || 0)} className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
          </label>
          <label className="block text-sm">
            Water cost per sq ft
            <input type="number" min={0} value={waterCost} onChange={(e) => setWaterCost(Number(e.target.value) || 0)} className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
          </label>
          <label className="block text-sm">
            Putty cost per sq ft
            <input type="number" min={0} value={puttyCost} onChange={(e) => setPuttyCost(Number(e.target.value) || 0)} className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
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
        </div>
      </div>
    </section>
  );
}
