interface SongProps {
  params: { id: string };
}

export default async function Song(props: SongProps) {
  const params = await props.params;
  return <div>Song: {params.id}</div>;
}
