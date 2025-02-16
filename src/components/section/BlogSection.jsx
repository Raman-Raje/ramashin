import { BookOpen } from 'lucide-react';
import SectionHeader from './SectionHeader';
import BlogCard from '@components/cards/BlogCard';

export const BlogSection = ({ blogs }) => {
  return (
    <section>
      <SectionHeader icon={<BookOpen className="w-6 h-6 mr-2 text-blue-600" />}
        title="Blogs"
      />
      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};