import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { BlogCard } from "@/components/blog/blog-card";
import Title from "@/components/ui/Title";
import Link from "next/link";
import { Metadata } from "next";
import { defaultMetadata, ogMetadata, twitterMetadata } from "../shared-metadata";


export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Blog",
  openGraph: {
    ...ogMetadata,
    title: "Blog | God Tier SaaS",
  },
  twitter: {
    ...twitterMetadata,
    title: "Blog | God Tier SaaS",
  },
};

const BlogPage = () => {
  return (
    <div>

      <div className="relative m-5 flex flex-col md:items-center sm:items-center lg:flex-row">
            <Title className="lg:text-5xl">Blogs</Title>
      </div>

      <div 
        className="max-sm:flex max-sm:flex-col max-sm:h-full grid md:grid-cols-2 xl:grid-cols-3 gap-12 mx-auto"
        >
            {allPosts.map((post) => (
              <Link href={`${post.url}`} key={post.slug}>
                <BlogCard
                key={post.slug}
                imageUrl={post.image}
                title={post.title}
                subTitle={post.description}
                publishDate={post.date}
                authorName={post.author_name}
                authorImage={post.author_image}
                type={post.type}
                />
              </Link>
              
            ))}
      </div>
    </div>
  )
}

export default BlogPage