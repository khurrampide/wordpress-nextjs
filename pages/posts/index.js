import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getAllPosts } from "../../lib/posts";
import FeaturedImage from "../../components/FeaturedImage";

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts: allPosts,
    },
  };
}

const BlogHome = ({ allPosts }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allPosts.nodes.map((post) => (
          <div key={post.slug} className="flex flex-col md:flex-row">
            {/* Image DIV */}
            <div className="md:w-1/2">
              <FeaturedImage post={post} />
            </div>
            {/* TITLE, EXCERPT, and CATEGORIES */}
            <div className="md:w-1/2">
              <h3>
                <Link className="text-sm" href={`/posts/${post.slug}`}>{post.title}</Link>
              </h3>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
              <div>
                Posted Under{" "}
                {post.categories.nodes.map((category) => (
                  <Link key={category.slug} href={`/category/${category.slug}`}>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogHome;
