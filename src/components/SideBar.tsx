import React from "react";

const Sidebar = () => (
  <aside className="space-y-4 text-sm">
    <div>
      <h4 className="font-medium mb-1">Reviewers</h4>
      <p className="text-zinc-500 dark:text-zinc-400">No reviews</p>
    </div>
    <div>
      <h4 className="font-medium mb-1">Assignees</h4>
      <p className="text-zinc-500 dark:text-zinc-400">No one assigned</p>
    </div>
    <div>
      <h4 className="font-medium mb-1">Labels</h4>
      <p className="text-zinc-500 dark:text-zinc-400">None yet</p>
    </div>
    <div>
      <h4 className="font-medium mb-1">Projects</h4>
      <p className="text-zinc-500 dark:text-zinc-400">None yet</p>
    </div>
    <div>
      <h4 className="font-medium mb-1">Milestone</h4>
      <p className="text-zinc-500 dark:text-zinc-400">None</p>
    </div>
  </aside>
);

export default Sidebar;