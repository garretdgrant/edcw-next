"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  businessName: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description:
        "Thank you for reaching out. We&apos;ll get back to you within 24 hours.",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-1">
        <div className="pt-28 pb-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Contact a Local Web Designer You Can Trust
          </h1>
          <p className="text-secondary text-center mb-12 text-lg max-w-2xl mx-auto">
            Let&apos;s talk about your website goals. Whether you&apos;re
            starting from scratch or need a redesign, I help small businesses in
            El Dorado County build fast, modern websites that work.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-surface rounded-xl p-8 shadow-sm border border-border">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your business name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-accent text-black hover:bg-accent/90"
                  >
                    Send Message
                  </Button>

                  <div className="space-y-2 pt-2">
                    <p className="text-sm text-center text-muted-foreground">
                      You&apos;re not submitting into a void — I personally read
                      every message and respond quickly. Your information stays
                      private, and I never spam.
                    </p>
                    <p className="text-sm text-center text-muted-foreground">
                      I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </form>
              </Form>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-surface rounded-xl p-8 shadow-sm border border-border h-fit">
                <h2 className="text-2xl font-bold mb-6">
                  Other Ways to Reach Me
                </h2>

                <p className="text-secondary mb-5">
                  Prefer to reach out directly? No problem — here&apos;s how to
                  get in touch.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:garret@edcwebdesign.com"
                        className="text-secondary hover:text-primary transition-colors"
                      >
                        garret@edcwebdesign.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-secondary">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Instagram className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <a
                        href="https://instagram.com/yourprofile"
                        className="text-secondary hover:text-primary transition-colors"
                      >
                        @yourprofile
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Facebook className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <p className="font-medium">Facebook</p>
                      <a
                        href="https://facebook.com/yourpage"
                        className="text-secondary hover:text-primary transition-colors"
                      >
                        EDC Web Design
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-medium mb-3">Office Hours</h3>
                  <p className="text-secondary mb-1">
                    Monday - Friday: 9am - 5pm PST
                  </p>
                  <p className="text-secondary">Weekends: By appointment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-center text-muted-foreground max-w-3xl mx-auto">
            <p>
              EDC Web Design is based in El Dorado County, CA. I proudly serve
              clients in Placerville, El Dorado Hills, Cameron Park, and nearby
              areas. If you&apos;re searching for a reliable local web designer,
              you&apos;re in the right place.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
