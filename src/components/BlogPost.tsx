import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPostProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  readTime?: string;
  slug: string; // routing slug
}

const BlogPost = ({
  title,
  excerpt,
  imageUrl,
  date,
  readTime,
  slug,
}: BlogPostProps) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full border border-border hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={800}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="text-sm text-secondary mb-1">{date}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-secondary">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4 border-t">
        {readTime && <span className="text-sm text-secondary">{readTime}</span>}
        <Link
          href={`/blog/${slug}`}
          className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          Read More <ArrowRight size={16} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPost;
