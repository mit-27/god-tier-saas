"use client";
import { api } from "@/lib/api-client";
import { Skeleton } from "@/components/ui/skeleton";
import PostCard from "./post-card";
import { useEffect, useState } from "react";
import React from "react";

const Posts = () => {

  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;

      setIsAtBottom(scrollBottom >= documentHeight - 20); // 20px threshold
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const {data,isLoading,isError} = api.posts.getPosts.useQuery({
    queryKey: ['posts'],
    retryOnMount: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });

  return (
    <div className="">
      {isLoading ? (
        <div className="flex flex-col gap-5 justify-center items-center">
          <Skeleton className=" flex w-[100%] h-[200px] rounded-2xl" />
        </div>
      ) : (
        isError ? (
          <div className="flex flex-col gap-5 justify-center items-center">
            <p>Error fetching posts</p>
          </div>
        ) : (
          <>
          <div className="min-h-screen py-8 relative">
          <div className="container mx-auto pb-16"> {/* Added bottom padding */}
            <div className="flex flex-col gap-5 justify-center items-center">
              {data?.body.map((card) => (
                <PostCard key={card.id} title={card.title} body={card.body} createdAt={card.createdAt} id={card.id} />
              ))}
            </div>
          </div>
          {!isAtBottom && (
            <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
          )}
        </div>
          </>
        )
      )}
    </div>
  )
}

export default Posts