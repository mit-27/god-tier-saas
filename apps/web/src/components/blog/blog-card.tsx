import React from 'react'

// import type { Author } from "@/content/blog/authors";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
// import { Frame } from "../frame";
// import { ImageWithBlur } from "../image-with-blur";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Frame } from './frame';
import { ImageWithBlur } from './image-with-blur';

type BlogCardProps = {
  tags?: string[];
  imageUrl?: string;
  title?: string;
  subTitle?: string;
  authorName?: string;
  authorImage?: string;
  publishDate?: string;
  className?: string;
  type?: string;
};

export function BlogCard(props: BlogCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-3xl max-sm:h-full duration-150 ease-out border-transparent border bg-secondary/30 hover:border-neutral-900 hover:bg-secondary/10 p-3",
        props.className,
      )}
    >
      <div className="w-full rounded-2xl bg-clip-border">
        <Frame size="sm">
          <div className="relative aspect-video">
            <ImageWithBlur
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+e1bKQAJMQNc5W2CQwAAAABJRU5ErkJggg=="
              src={props.imageUrl!}
              alt="Hero Image"
              className="object-center w-full overflow-hidden"
              fill={true}
            />
          </div>
        </Frame>
      </div>
      <div className="flex flex-col h-full px-1">
        <div className="flex flex-col pb-2">
          {/* <div className="flex flex-wrap h-6 gap-4 flex-inline">
            {tags?.map((tag) => (
              <div className="text-white/50 text-sm bg-white/10 px-[9px] rounded-md content-center">
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </div>
            ))}
          </div> */}
          <p className='uppercase text-xs font-medium text-white/50 pl-1 pt-2'>
            {props.type}
          </p>
          <h2 className="flex justify-start mt-1 text-xl font-medium leading-10 md:text-2xl sm:text-2xl">
            {props.title}
          </h2>

          <p className="h-full mt-2 text-base font-normal leading-6 pl-1 sm:text-sm text-white/60">
            {props.subTitle}
          </p>
          {/* Todo: Needs ability to add multiple authors at some point */}
          
          {/* <div className="flex flex-col flex-wrap justify-end h-full">
            <div className="flex flex-row">
              <Avatar className="w-8 h-8">
                <AvatarImage alt={props.authorName!} src={props.authorImage!} width={12} height={12} />
                <AvatarFallback />
              </Avatar>
              <p className="pt-3 ml-4 text-sm font-medium text-white">{props.authorName}</p>
              <p className="pt-3 ml-6 text-sm font-normal text-white/50">
                {format(new Date(props.publishDate!), "MMM dd, yyyy")}
              </p>
            </div>
          </div> */}

          
        </div>
      </div>
    </div>
  );
}
