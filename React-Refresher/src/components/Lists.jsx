export function List() {
  const users = ["John", "doe", "admin"];
  return (
    <ul>
      {users.map((name, ind) => (
        <li key={ind}>{name}</li>
      ))}
    </ul>
  );
}
