"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

import axios from "axios";

const formSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

const NewIssuePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>();

  return (
    <div className="max-w-xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(async (data) => {
            await axios.post("/api/issues", data);
            router.push("/issues");
          })}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...form.register("title")} />
                </FormControl>
                <FormControl>
                  <Textarea
                    placeholder="Description"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default NewIssuePage;
