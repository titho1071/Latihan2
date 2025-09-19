type BlogProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetail({ params }: BlogProps) {
  const { id } = await params;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Blog ID: {id}</h1>
    </div>
  );
}
