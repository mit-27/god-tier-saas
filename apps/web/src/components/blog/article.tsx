import type { Post } from "content-collections";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { MDX } from "@/components/blog/mdx-content";
import { format, parseISO } from "date-fns";


export function Article({ post }: { post: Post }) {
  const getNameInitials = (name: string) => {
    const individualNames = name.split(" ");
    return (
      individualNames[0][0] + individualNames[individualNames.length - 1][0]
    );
  };

  return (
        <article className="relative w-full max-w-2xl mx-auto flex flex-col gap-8">
            <div className="grid w-full gap-3">
                <h1 className="mb-5  font-cal text-3xl">{post.title}</h1>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
                <Image
                    src={post.image!}
                    fill={true}
                    alt={post.title}
                    className="object-cover"
                />
                </div>
                <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage src={post.author_image} alt={post.author_name} />
                    <AvatarFallback>{getNameInitials(post.author_name)}</AvatarFallback>
                </Avatar>
                <div className="font-light text-muted-foreground text-sm">
                    <Link
                    href={post.author_image ?? "#"}
                    target="_blank"
                    className="cursor-pointer font-medium text-foreground hover:underline"
                    >
                    {post.author_name}
                    </Link>
                    <p>
                    {format(parseISO(post.date), "MMM dd, yyyy")}
                    {/* {formatDate(new Date(post.date),'EEEE, MMMM do, yyyy')} */}
                    {/* {post.readingTime} */}
                    </p>
                </div>
                </div>
            </div>
            <MDX code={post.mdx} />
            </article>
  );
}
