import { allPosts } from "content-collections";
import { getTableOfContents } from 'fumadocs-core/server';
import { MDXContent } from "@content-collections/mdx/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { MDX } from "@/components/blog/mdx-content";
import { Article } from "@/components/blog/article";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ArticleTOC from "@/components/blog/article-toc";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

type TOCItemType = {
  title: React.ReactNode,
  url: string,
  depth: number,
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    slug: post.slug,
  }));

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

        <div className="flex flex-col max-w-3xl lg:w-3/4 ">

          <Button variant="link" className="justify-start" asChild>
            <Link href="/blog" className="group mb-1">
              <ChevronLeft className="mr-1 h-4 w-4 text-muted-foreground group-hover:text-foreground" />{" "}
              {"Back"}
            </Link>
          </Button>
        
          <div className="rounded-lg bg-gray-500/15 border border-border flex flex-col  backdrop-blur-[2px] px-3 py-4 md:p-6 sm:py-8 md:py-12">
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
  


  // return (
  //   <div className="container pt-48 mx-auto sm:overflow-hidden md:overflow-visible scroll-smooth">
  //      <div className="flex flex-row w-full">
  //         <div className="flex flex-col w-full lg:w-3/4">
  //           <div className="prose sm:prose-sm md:prose-md sm:mx-6">
  //               <h1 className="not-prose blog-heading-gradient text-left text-4xl font-medium leading-[56px] tracking-tight  sm:text-5xl sm:leading-[72px]">
  //                 {post.title}
  //               </h1>
  //               <p className="mt-8 text-lg font-medium leading-8 not-prose text-white/60 lg:text-xl">
  //                 {post.description}
  //               </p>
  //               <div className="flex flex-row gap-8 sm:mt-12 md:gap-16 lg:hidden justify-stretch ">
  //               <div className="flex flex-col h-full">
  //                 <p className="text-white/50">Written by</p>
  //                 <div className="flex flex-row h-full">
  //                       <Avatar className="flex items-center my-auto">
  //                         <AvatarImage
  //                           alt={post.author_name}
  //                           src={post.author_image}
  //                           width={12}
  //                           height={12}
  //                           className="w-full h-full"
  //                         />
  //                         <AvatarFallback />
  //                       </Avatar>
  //                       <p className="flex items-center justify-center p-0 pt-2 m-0 ml-2 text-white text-nowrap">
  //                         {post.author_name}
  //                       </p>
  //                     </div>
  //                   </div>
  //                   <div className="flex flex-col h-full">
  //                     {" "}
  //                     <p className="text-xs text-nowrap text-white/50">Published on</p>
  //                     <div className="flex mt-2 sm:mt-6">
  //                       <time
  //                         dateTime={post.date}
  //                         className="inline-flex items-center text-white text-nowrap"
  //                       >
  //                         {format(parseISO(post.date), "MMM dd, yyyy")}
  //                       </time>
  //                     </div>
  //                   </div>
  //                 </div>
  //           </div>

  //           <div className="mt-12 prose-sm lg:pr-24 md:prose-md text-white/60 sm:mx-6 prose-strong:text-white/90 prose-code:text-white/80 prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:border-white/20 prose-code:rounded-md prose-pre:p-0 prose-pre:m-0 prose-pre:leading-6">
  //             <MDX code={post.mdx} />
  //           </div>

  //         </div>
  //      </div>
       
  //   </div>
  // )
}

export default page