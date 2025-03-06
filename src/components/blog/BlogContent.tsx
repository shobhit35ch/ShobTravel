
interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  return (
    <div className="prose prose-lg max-w-none">
      {content.split('\n').map((paragraph, index) => (
        <p key={index} className="text-primary/80 mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
};
