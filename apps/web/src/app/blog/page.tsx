import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { BlogCard } from "@/components/blog/blog-card";
import Title from "@/components/ui/Title";
import Link from "next/link";


export const metadata = {
  title: "Blog | APP NAME",
  description: "Description about your application.",
  openGraph: {
    title: "Blog | AP NAME",
    description: "Description about your application.",
    url: "siteUrl",
    siteName: "siteName",
    // images: [
    //   {
    //     url: "",
    //     width: 1200,
    //     height: 675,
    //   },
    // ],
  },
  twitter: {
    title: "Blog | APP NAME",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "img shorturl",
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