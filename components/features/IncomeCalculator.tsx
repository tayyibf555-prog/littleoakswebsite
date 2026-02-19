'use client';

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CurrencyGbp, Baby, Clock, Calendar } from "@phosphor-icons/react";

export function IncomeCalculator() {
    const [role, setRole] = useState<'childminder' | 'mosque'>('childminder');
    const [children, setChildren] = useState(3);
    const [rate, setRate] = useState(7.50); // Hourly rate
    const [hours, setHours] = useState(40); // Hours per week
    const [weeks, setWeeks] = useState(48); // Weeks per year

    const annualGross = children * rate * hours * weeks;
    const estExpenses = annualGross * 0.15; // 15% expenses assumption
    const annualNet = annualGross - estExpenses;

    return (
        <section id="calculator" className="bg-soft-peach py-24 scroll-mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-6">
                            Project Your Potential Income
                        </h2>
                        <p className="text-lg text-slate">
                            Adjust the sliders to see what a Little Oaks practice could generate for you.
                        </p>
                    </div>

                    <Card className="bg-white p-8 md:p-12 shadow-xl border border-light-grey">
                        {/* Role Toggle */}
                        <div className="flex justify-center mb-12">
                            <div className="bg-warm-white p-1 rounded-full inline-flex border border-light-grey">
                                <button
                                    onClick={() => setRole('childminder')}
                                    className={`px-6 py-2 rounded-full font-bold transition-all ${role === 'childminder' ? 'bg-deep-green text-white shadow-sm' : 'text-slate hover:text-deep-green'}`}
                                >
                                    Childminder
                                </button>
                                <button
                                    onClick={() => setRole('mosque')}
                                    className={`px-6 py-2 rounded-full font-bold transition-all ${role === 'mosque' ? 'bg-deep-green text-white shadow-sm' : 'text-slate hover:text-deep-green'}`}
                                >
                                    Mosque / Venue
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Inputs */}
                            <div className="space-y-8">
                                <div>
                                    <label className="flex items-center justify-between text-deep-green font-bold mb-4">
                                        <span className="flex items-center gap-2"><Baby size={20} /> Number of Children</span>
                                        <span className="text-xl">{children}</span>
                                    </label>
                                    <input
                                        type="range" min="1" max={role === 'childminder' ? 6 : 30} step="1"
                                        value={children} onChange={(e) => setChildren(parseInt(e.target.value))}
                                        className="w-full accent-deep-green h-2 bg-light-grey rounded-lg appearance-none cursor-pointer"
                                    />
                                    <p className="text-xs text-slate mt-2">
                                        {role === 'childminder' ? "Typical limit: 3 under 5s, 3 over 5s" : "Depends on square footage"}
                                    </p>
                                </div>

                                <div>
                                    <label className="flex items-center justify-between text-deep-green font-bold mb-4">
                                        <span className="flex items-center gap-2"><CurrencyGbp size={20} /> Hourly Rate per Child (£)</span>
                                        <span className="text-xl">£{rate.toFixed(2)}</span>
                                    </label>
                                    <input
                                        type="range" min="5" max="15" step="0.50"
                                        value={rate} onChange={(e) => setRate(parseFloat(e.target.value))}
                                        className="w-full accent-deep-green h-2 bg-light-grey rounded-lg appearance-none cursor-pointer"
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center justify-between text-deep-green font-bold mb-4">
                                        <span className="flex items-center gap-2"><Clock size={20} /> Hours per Week</span>
                                        <span className="text-xl">{hours}</span>
                                    </label>
                                    <input
                                        type="range" min="10" max="60" step="5"
                                        value={hours} onChange={(e) => setHours(parseInt(e.target.value))}
                                        className="w-full accent-deep-green h-2 bg-light-grey rounded-lg appearance-none cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Output */}
                            <div className="bg-deep-green/5 rounded-[24px] p-8 flex flex-col justify-center text-center border border-deep-green/10">
                                <span className="text-deep-green font-semibold mb-2">Estimated Annual Revenue</span>
                                <span className="text-5xl font-display font-bold text-deep-green mb-2">
                                    £{annualGross.toLocaleString()}
                                </span>
                                <p className="text-sm text-slate mb-8">Before expenses and taxes</p>

                                {role === 'childminder' && (
                                    <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
                                        <div className="flex justify-between items-center text-sm mb-1">
                                            <span className="text-slate">Est. Expenses (15%)</span>
                                            <span className="text-terracotta font-medium">-£{estExpenses.toLocaleString()}</span>
                                        </div>
                                        <div className="border-t border-light-grey my-2" />
                                        <div className="flex justify-between items-center font-bold text-deep-green">
                                            <span>Est. Net Income</span>
                                            <span>£{annualNet.toLocaleString()}</span>
                                        </div>
                                    </div>
                                )}

                                <Button className="w-full">Get a Detailed Projection</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
