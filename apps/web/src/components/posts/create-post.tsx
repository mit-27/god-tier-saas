"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { api } from "@/lib/api-client";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  body: z.string().min(2, {
    message: "body must be at least 2 characters.",
  }),
})

const CreatePost = () => {

  const queryClient = api.useQueryClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const {mutate}  = api.posts.createPost.useMutation({
    onMutate: async(data) => {
      // get current posts, so we can reset back to it if the mutation fails
      const previousData = queryClient.posts.getPosts.getQueryData(['posts']);

      const optimisticPost = {
        ...data.body,
        createdAt: new Date().toString(),
        id: crypto.randomUUID(),
      }

     // optimistically update the cache with the new post
      queryClient.posts.getPosts.setQueryData(['posts'], (oldData) => {

        if(oldData?.status === 200) {
          return {
            ...oldData,
            body: [...oldData?.body, optimisticPost]
          }
        }
        return oldData;
      });

      return {previousData}
    },
    onError(error, _variables, context) {
      toast.error("Failed to create post");
      queryClient.posts.getPosts.setQueryData(['posts'],context?.previousData);
    },
    onSettled() {
      // trigger a refetch regardless of it the mutation was successful or not
      queryClient.refetchQueries({queryKey: ['posts']});
    }
  });

  const handleOpenDialog = (openVal : boolean) => {
    setIsDialogOpen(openVal);
    form.reset();
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    mutate({body: values},
      {
        onSuccess() {
          toast.success("Post created successfully");
        },
      }
    );
    setIsDialogOpen(false);
    form.reset();
  }
  
  return (
    <div>     
      <Button className="mb-4" onClick={() => setIsDialogOpen(true)}>Create Post</Button>
      <Dialog open={isDialogOpen} onOpenChange={handleOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a New Post</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                <FormField
                control={form.control}
                name="title"
                
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="title" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is title of your post.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
                />

              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Body</FormLabel>
                    <FormControl>
                      <Textarea placeholder="body" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is description of your post.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <Button className="w-full" type="submit">Create</Button>

          </form>
          </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CreatePost