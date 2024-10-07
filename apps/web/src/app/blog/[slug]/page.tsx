import { allPosts } from "content-collections";
import { getTableOfContents } from 'fumadocs-core/server';
import { MDXContent } from "@content-collections/mdx/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { notFound } from "next/navigation";
import { MDX } from "@/components/blog/mdx-content";
import { Article } from "@/components/blog/article";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ArticleTOC from "@/components/blog/article-toc";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import { defaultMetadata, ogMetadata, twitterMetadata } from "@/app/shared-metadata";

type TOCItemType = {
  title: React.ReactNode,
  url: string,
  depth: number,
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    slug: post.slug,
  }));

  export async function generateMetadata({
    params,
  }: {
    params: { slug: string };
  }): Promise<Metadata | undefined> {
    const post = allPosts.find((post) => post.slug === params.slug);
    if (!post) {
      return;
    }
    const { title, date: publishedTime, description, slug, image } = post;
  
    return {
      ...defaultMetadata,
      title,
      description,
      openGraph: {
        ...ogMetadata,
        title,
        description,
        type: "article",
        publishedTime,
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL || "https://godtiersaas.live"}/blog/${slug}`,
        images: [
        {
          url: image || "/images/og-image.png",
        }
        ]
      },
      twitter: {
        ...twitterMetadata,
        title,
        description,
        images: [
          {
            url: image || "/images/og-image.png",
          }
        ]

      },
    };
  }

const page = async ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  // const [tableOfContents,setTableOfContents] = useState<TOCItemType[]>([]);
  let tableOfContents: TOCItemType[] = [];
  

  if(post){
    tableOfContents =await getTableOfContents(post.content);
    console.log(tableOfContents);
    // setTableOfContents(toc);
  }


  if (!post) {
    notFound();
  }

  return (
    <div className="container pt-14 mx-auto sm:overflow-hidden md:overflow-visible scroll-smooth">
      
      <div className="flex flex-row justify-center gap-5">

        <div className="flex flex-col w-full max-w-3xl lg:w-3/4 ">

          <Button variant="link" className="justify-start" asChild>
            <Link href="/blog" className="group mb-1">
              <ChevronLeft className="mr-1 h-4 w-4 text-muted-foreground group-hover:text-foreground" />{" "}
              {"Back"}
            </Link>
          </Button>
        
          <div className="rounded-lg sm:overflow-hidden md:overflow-visible z-100 bg-gray-900 border border-border flex flex-col  px-3 py-4 md:p-6 sm:py-8 md:py-12">
            <Article post={post} />
          </div>

        </div>

        <div className="items-start hidden h-full gap-4 pt-8 space-y-4 prose lg:sticky top-24 lg:w-1/4 not-prose lg:mt-12 lg:flex lg:flex-col">
          <p className="text-xl prose text-nowrap text-white font-bold">Contents</p>
          <ul className="relative flex flex-col gap-1 overflow-hidden">
            <ArticleTOC tableOfContents={tableOfContents} />
          </ul>
        </div>
      </div>
    </div>
  )
  
}

export default page