
interface BlogHeaderProps {
  imageUrl: string;
  title: string;
  date: string;
}

export const BlogHeader = ({ imageUrl, title, date }: BlogHeaderProps) => {
  return (
    <>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      <span className="text-accent font-medium">{date}</span>
      <h1 className="text-4xl font-display text-primary mt-2 mb-8">{title}</h1>
    </>
  );
};
