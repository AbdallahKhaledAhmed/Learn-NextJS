const Sidebar = () => {
  return (
    <aside className="w-50 bg-blue-500 h-50 flex flex-col justify-center items-center">
      <h2 className="font-bold">Categories</h2>
      <ul className="flex flex-col mt-5">
        <li>Technology</li>
        <li>Design</li>
        <li>Business</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
