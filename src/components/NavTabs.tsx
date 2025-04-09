import React, { useState } from "react";

const NavTabs = () => {
  const [selected, setSelected] = useState<string>("Code");

  const tabs = [
    { name: "Code", icon: "assets/lessthan.svg" },
    { name: "Issues", icon: "assets/issues.svg" },
    { name: "Pull requests", icon: "assets/pull.svg" },
    { name: "Discussions", icon: "assets/disscussions.svg" },
    { name: "Actions", icon: "assets/actions.svg" },
    { name: "Security", icon: "assets/security.svg" },
    { name: "Insights", icon: "assets/insights.svg" },
  ];

  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <ul className="flex space-x-6 max-w-7xl">
        {tabs.map((tab, i) => (
          <li
            key={i}
            className={
              tab.name === selected
                ? "border-b-2 border-orange-500 text-black font-medium"
                : "text-zinc-600 dark:text-zinc-400"
            }
          >
            <button
              className="text-sm flex items-center gap-2 hover:bg-gray-200  rounded "
              onClick={() => setSelected(tab.name)}
            >
              <img src={tab.icon} alt={tab.name} />
              {tab.name}
              <span className="bg-gray-200 text-xs rounded-full px-1">
                42
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavTabs;
