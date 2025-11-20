export function Conditional() {
  let isMarried = false;
  return (
    <>
      {isMarried ? (
        <p>The person is married.</p>
      ) : (
        <p>The person is not married.</p>
      )}
    </>
  );
}
