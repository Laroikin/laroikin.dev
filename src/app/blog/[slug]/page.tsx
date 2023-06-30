import React from 'react';
import { allBlogposts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return allBlogposts.map((blogpost) => ({ slug: blogpost.slugAsParams }));
}

async function getDocFromParams(slug: string) {
  const blogpost = allBlogposts.find((blogpost) => blogpost.slugAsParams === slug);

  if (!blogpost) notFound();

  return blogpost;
}

const Page = async ({ params }: Props) => {
  const blogpost = await getDocFromParams(params.slug);

  return <div>{JSON.stringify(blogpost.body.raw)}</div>;
};

export default Page;
