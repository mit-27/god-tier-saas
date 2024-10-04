import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { BlogCard } from "@/components/blog/blog-card";
import Title from "@/components/ui/Title";
import Link from "next/link";


// export const metadata = {
//   title: "Blog | Unkey",
//   description: "Latest blog posts and news from the Unkey team.",
//   openGraph: {
//     title: "Blog | Unkey",
//     description: "Latest blog posts and news from the Unkey team.",
//     url: "https://unkey.com/blog",
//     siteName: "unkey.com",
//     images: [
//       {
//         url: "https://unkey.com/og.png",
//         width: 1200,
//         height: 675,
//       },
//     ],
//   },
//   twitter: {
//     title: "Blog | Unkey",
//     card: "summary_large_image",
//   },
//   icons: {
//     shortcut: "/images/landing/unkey.png",
//   },
// };

const BlogPage = () => {
  return (
    <div>

      <div className="relative m-5 flex flex-col md:items-center sm:items-center lg:flex-row">
            <Title className="lg:text-5xl">Blogs</Title>
      </div>

      <div 
        className="max-sm:flex max-sm:flex-col max-sm:h-full grid md:grid-cols-2 xl:grid-cols-3 gap-12 mb-24 mx-auto"
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