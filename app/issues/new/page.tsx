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
import { useState } from "react";
import { formSchema } from "@/app/formSchema";
import Spinner from "@/components/Spinner";

const NewIssuePage = () => {
  // const [error, setError] = useState("");
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleOnSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setIsSubmitting(false);
      // setError("An Unexpected Error occurred.");
      console.log(error);
    }
  });

  return (
    <div className="max-w-xl">
      <Form {...form}>
        <form onSubmit={handleOnSubmit} className="space-y-8">
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...register("title")} />
                </FormControl>
                <FormMessage>{errors.title?.message}</FormMessage>
                <FormControl>
                  <Textarea
                    placeholder="Description"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{errors.description?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button disabled={isSubmitting} type="submit" className="gap-3">
            Submit {isSubmitting && <Spinner />}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewIssuePage;
