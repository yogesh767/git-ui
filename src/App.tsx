import React from "react";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import Timeline from "./components/Timeline";
import FilterComponent from "./components/FilterComponent";
import PullRequests from "./components/PullRequests";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <Header />
      <NavTabs />
      <Timeline />
      <FilterComponent/>
      <PullRequests/>
    </div>
  );
}