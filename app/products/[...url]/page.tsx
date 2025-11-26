const page = async ({ params }: { params: { url: string[] } }) => {
  const { url } = await params;
  return (
    <>
      {url.map((ele) => (
        <div key={crypto.randomUUID()}> {ele}</div>
      ))}
    </>
  );
};

export default page;
