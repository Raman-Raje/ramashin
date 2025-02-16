import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

const BlogHeader = ({ title, date, link }) => {
    return (
        <div className="flex justify-between items-start mb-4">
            <Link href={link} passHref>
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                {title}
            </h3>
            </Link>
            <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{date}</span>
            </div>
        </div>
    );
};

const BlogContent = ({ excerpt }) => {
    return (
        <p className="text-gray-600 mb-4">{excerpt}</p>
    );
};

const BlogFooter = ({ tags, readTime }) => {
    return (
        <div className="flex justify-between items-center">
            <BlogTags tags={tags} />
            <ReadTime readTime={readTime} />
        </div>
    );
};

const BlogTags = ({ tags }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <BlogTag key={index} tag={tag} />
            ))}
        </div>
    );
};

const BlogTag = ({ tag }) => {
    return (
        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
            {tag}
        </span>
    );
};

const ReadTime = ({ readTime }) => {
    return (
        <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime}</span>
        </div>
    );
};

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <BlogHeader title={blog.title} date={blog.date} link={blog.link}/>
            <BlogContent excerpt={blog.excerpt} />
            <BlogFooter tags={blog.tags} readTime={blog.readTime} />
        </div>
    );
};

export default BlogCard;