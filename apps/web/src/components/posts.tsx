import { api } from "@/lib/api-client";

const Posts = () => {

  const {data,isLoading,isError} = api.posts.getPosts.useQuery({
    queryKey: ['posts'],
    retryOnMount: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });

  return (
    <div>
      {isLoading ? 'Loading...' : JSON.stringify(data?.body)}
    </div>
  )
}

export default Posts