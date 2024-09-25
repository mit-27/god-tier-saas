"use client"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';



type PropsType = {
  title: string
  body: string
  createdAt: string
}

const PostCard = (props : PropsType) => {

    const onEdit = () => {
        console.log('Editing...')
    }

    const onDelete = () => {
        console.log('Deleting...')
    }

    return (
        <Card className="w-full m-4 relative">
        <CardHeader>
            <div className="flex justify-between items-center">
            <CardTitle className="pr-16">{props.title}</CardTitle>
            <div className="absolute top-2 right-2 flex space-x-1">
                <Button 
                variant="ghost" 
                size="icon"
                onClick={() => onEdit()}
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
    )
}

export default PostCard