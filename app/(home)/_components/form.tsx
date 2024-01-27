"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WordsSchema } from "@/schemas";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const FormComponent = ({ setText }: { setText: any }) => {
  const StepIcon = ({ step }: { step: number }) => {
    return (
      <span className=" bg-black text-white flex items-center justify-center w-6 h-6 rounded-full cursor-none">
        {step}
      </span>
    );
  };

  const StepP = ({
    step,
    children,
  }: {
    step: number;
    children: React.ReactNode;
  }) => {
    return (
      <p className="flex items-center mt-10 space-x-3">
        <StepIcon step={step} />
        <span className="ml-2 text-left font-medium">{children}</span>
      </p>
    );
  };

  const onSubmit = (values: z.infer<typeof WordsSchema>) => {
    if (values.words) {
        setText(values.words)
    }
  };

  //get form
  const form = useForm<z.infer<typeof WordsSchema>>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(WordsSchema),
    defaultValues: {
      words: "",
    },
  });
  return (
    <div className="max-w-xl mx-auto">
      <Form {...form}>
        <StepP step={1}>Please enter your words</StepP>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="words"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    className="mt-8 h-40"
                    placeholder="Type your message here."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-8 w-full">
            Generate
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormComponent;
