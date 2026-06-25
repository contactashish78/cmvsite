import React from 'react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, Tooltip, Cell
} from 'recharts';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

// Static, illustrative sample data — no live figures, no performance claims.
const profitTrend = [
  { month: 'Jan', profit: 28 },
  { month: 'Feb', profit: 31 },
  { month: 'Mar', profit: 29 },
  { month: 'Apr', profit: 37 },
  { month: 'May', profit: 42 },
  { month: 'Jun', profit: 48 },
  { month: 'Jul', profit: 54 },
];

const skuProfit = [
  { sku: 'SKU-A', value: 18 },
  { sku: 'SKU-B', value: 14 },
  { sku: 'SKU-C', value: 11 },
  { sku: 'SKU-D', value: 8 },
  { sku: 'SKU-E', value: 6 },
];

const barColors = ['#2563eb', '#3b82f6', '#06b6d4', '#22d3ee', '#a5b4fc'];

const Stat = ({ label, value, delta, positive }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-3 lg:p-4">
    <div className="text-[11px] lg:text-xs text-gray-500 font-medium">{label}</div>
    <div className="text-lg lg:text-2xl font-bold text-gray-900 mt-1">{value}</div>
    <div className={`inline-flex items-center gap-0.5 text-[11px] lg:text-xs font-semibold mt-1 ${positive ? 'text-emerald-600' : 'text-red-500'}`}>
      {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
      {delta}
    </div>
  </div>
);

const ProfitDashboard = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden w-full">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-400"></span>
        </div>
        <div className="text-xs font-medium text-slate-300">Comvinity · Profit Dashboard</div>
        <div className="text-[10px] text-slate-400 bg-slate-800 px-2 py-1 rounded-md hidden sm:block">Last 7 months</div>
      </div>

      <div className="p-4 lg:p-5 space-y-4">
        {/* KPI row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Stat label="Net Profit" value="$48.2K" delta="12.4%" positive />
          <Stat label="Revenue" value="$214.8K" delta="8.1%" positive />
          <Stat label="ACOS" value="18.2%" delta="3.1%" positive={false} />
          <Stat label="ROAS" value="5.5x" delta="0.6x" positive />
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-5 gap-4">
          {/* Profit trend */}
          <div className="lg:col-span-3 bg-white rounded-xl border border-gray-200 p-4">
            <div className="text-sm font-semibold text-gray-900 mb-3">Net Profit Trend</div>
            <ResponsiveContainer width="100%" height={170}>
              <AreaChart data={profitTrend} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="profitFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 12 }}
                  formatter={(v) => [`$${v}K`, 'Net Profit']}
                />
                <Area type="monotone" dataKey="profit" stroke="#2563eb" strokeWidth={2.5} fill="url(#profitFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Top SKUs by profit */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-4">
            <div className="text-sm font-semibold text-gray-900 mb-3">Profit by SKU</div>
            <ResponsiveContainer width="100%" height={170}>
              <BarChart data={skuProfit} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" vertical={false} />
                <XAxis dataKey="sku" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 12 }}
                  formatter={(v) => [`$${v}K`, 'Profit']}
                  cursor={{ fill: '#f1f5f9' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {skuProfit.map((entry, i) => (
                    <Cell key={i} fill={barColors[i % barColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitDashboard;
