import BlogCard from "./components/BlogCard";

type BlogProps = {
  params: Promise<{ id: string; title: string }>;
};

export default async function BlogDetail({ params }: BlogProps) {
  const { id, title } = await params;

  return (
    <div className="p-10 space-y-4">
      <h1 className="text-3xl font-bold">Detail Blog</h1>
      <BlogCard id={id} title={title} />
    </div>
  );
}
