import { useState } from "react";

export function State() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}>Open</button>
      {open && (
        <ul>
          <li>name: Abdallah</li>
          <li>Age: 21</li>
          <li>Job: Software Engineer</li>
        </ul>
      )}
    </>
  );
}
