type BlogCardProps = {
  id: string;
  title: string;
};

export default function BlogCard({ id, title }: BlogCardProps) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Blog ID: {id}
      </p>
    </div>
  );
}
