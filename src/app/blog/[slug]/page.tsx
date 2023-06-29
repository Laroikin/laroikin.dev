import React from 'react';
import { allBlogposts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

async function getDocFromParams(slug: string) {
  console.log(slug);
  const blogpost = allBlogposts.find((blogpost) => blogpost.slugAsParams === slug);

  // console.log(allBlogposts);

  if (!blogpost) notFound();

  return blogpost;
}

const Page = async ({ params }: Props) => {
  const blogpost = await getDocFromParams(params.slug);

  return <div>{JSON.stringify(blogpost.body.raw)}</div>;
};

export default Page;
