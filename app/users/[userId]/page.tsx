const UserInfo = async ({ params }: { params: { userId: string } }) => {
  const { userId } = await params;
  return <>User Profile {userId}</>;
};

export default UserInfo;
