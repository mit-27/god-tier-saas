"use client"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { api } from '@/lib/api-client';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const formSchema = z.object({
    title: z.string().min(2, {
      message: "title must be at least 2 characters.",
    }),
    body: z.string().min(2, {
      message: "body must be at least 2 characters.",
    }),
  })


type PropsType = {
  title: string
  body: string
  createdAt: string,
  id: string
}

const PostCard = (props : PropsType) => {

    const queryClient = api.useQueryClient();
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: props.title,
          body: props.body,
        },
      })

    const {mutate : deleteMutate} = api.posts.deletePost.useMutation({
        onMutate: async(data) => {
            // get current posts, so we can reset back to it if the mutation fails
            const previousData = queryClient.posts.getPosts.getQueryData(['posts']);
            queryClient.posts.getPosts.setQueryData(['posts'], (oldData) => {
                if(oldData?.status === 200) {
                    return {
                        ...oldData,
                        body: oldData?.body.filter((post) => post.id !== data.params.id)
                    }
                }
                return oldData;
            });
            return {previousData}
        },
        onError(_, _variables, context) {
            toast.error("Failed to delete post");
            queryClient.posts.getPosts.setQueryData(['posts'],context?.previousData);
        },
        onSettled(_data,error, _variables, _context) {
            if(!error)
            {
                toast.error("Post deleted successfully",{
                    icon: <Trash2 className="h-4 w-4" />
                });
            }
            // trigger a refetch regardless of it the mutation was successful or not
            queryClient.refetchQueries({queryKey: ['posts']});
        }
    })

    const {mutate: updateMutate} = api.posts.updatePost.useMutation({
        onMutate: async(data) => {
            // get current posts, so we can reset back to it if the mutation fails
            const previousData = queryClient.posts.getPosts.getQueryData(['posts']);
            queryClient.posts.getPosts.setQueryData(['posts'], (oldData) => {
                if(oldData?.status === 200) {
                    return {
                        ...oldData,
                        body: oldData?.body.map((post) => {
                            if(post.id === data.params.id) {
                                return {
                                    ...post,
                                    title: data.body.title,
                                    body: data.body.body
                                }
                            }
                            return post;
                        })
                    }
                }
                return oldData;
            });

            return {previousData}
        },
        onError(error, _variables, context) {
            toast.error("Failed to update post");
            queryClient.posts.getPosts.setQueryData(['posts'],context?.previousData);
        },
        onSettled(data,error, _variables, context) {
            if(!error)
            {
                toast.info("Post updated successfully");
            }
            // trigger a refetch regardless of it the mutation was successful or not
            queryClient.refetchQueries({queryKey: ['posts']});
        }
            
    })



    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        updateMutate({body: 
            {
                ...values,
                createdAt: props.createdAt
            },
            params: {
                id: props.id
            }
        }
        );
        setIsDialogOpen(false);
        form.reset();
      }

      const handleOpenDialog = (openVal : boolean) => {
        setIsDialogOpen(openVal);
        form.reset();
      }





    const onDelete = () => {
        deleteMutate({
            params: {
                id: props.id
            },
            body:{}
        })
        
    }

    // const onEdit = () => {
    //     console.log('Deleting...')
    // }

    return (
        <>
        <Card className="w-full m-4 relative">
        <CardHeader>
            <div className="flex justify-between items-center">
            <CardTitle className="pr-16">{props.title}</CardTitle>
            <div className="absolute top-2 right-2 flex space-x-1">
                <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsDialogOpen(true)}
                >
                <Pencil className="h-4 w-4" />
                </Button>
                <Button 
                variant="ghost" 
                size="icon"
                onClick={() => onDelete()}
                >
                <Trash2 className="h-4 w-4" />
                </Button>
            </div>
            </div>
        </CardHeader>
        <CardContent>
            <p>{props.body}</p>
        </CardContent>
        <CardFooter>
            <p className="text-xs text-gray-500">Created: {props.createdAt}</p>
        </CardFooter>
        </Card>
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
                <Button className="w-full" type="submit">Update</Button>

                </form>
                </Form>
                </div>
            </DialogContent>
        </Dialog>
        </>
    )
}

export default PostCard