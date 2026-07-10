"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "./sidebar";
import { MobileTopBar } from "./mobile-top-bar";
import { MobileBottomNav } from "./mobile-bottom-nav";
import { CommandCenter } from "./command-center";
import { AppointmentsTab } from "./appointments-tab";
import { PatientsTab } from "./patients-tab";
import { StatsTab } from "./stats-tab";

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
      case "appointments":
        return <AppointmentsTab />;
      case "patients":
        return <PatientsTab />;
      case "stats":
        return <StatsTab />;
      default:
        return <AppointmentsTab />;
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 lg:ml-[260px] p-4 sm:p-5 md:p-8 pb-28 lg:pb-8">
        <MobileTopBar />

        <div className="relative z-10">
          <CommandCenter />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}