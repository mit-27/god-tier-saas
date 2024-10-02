
import CreatePost from "@/components/posts/create-post";
import Posts from "@/components/posts/post-list";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";


const PostPage = () => {

  return (
    <div className="w-[60%] mx-auto mt-10 min-h-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Posts</h1>
        <CreatePost />
      </div>
      <Suspense fallback={<Skeleton className="w-full h-full rounded-full" />}>
        <Posts/>
      </Suspense>
    </div>
  )
}
  
export default PostPage