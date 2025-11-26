const Timeout = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res("content loading");
    }, 4000);
  });
  return <p>Page loaded !</p>;
};

export default Timeout;
