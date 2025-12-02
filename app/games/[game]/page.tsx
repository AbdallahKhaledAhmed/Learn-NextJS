type Game = {
  params: { game: string };
};

export const generateMetadata = async ({ params }: Game) => {
  const { game } = await params;
  return { title: `Game: ${game}`, description: `${game} is a good game` };
};

const Game = async ({ params }: Game) => {
  const { game } = await params;
  return <div>{game} is a great game</div>;
};

export default Game;
