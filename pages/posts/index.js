import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {getAllPosts} from '../../lib/posts'

export async function getStaticProps(){
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts: allPosts
    }
  }
}

const BlogHome = ({allPosts}) => {
  return (
    <>
    <Head>
      <title>Blog</title>
    </Head>
    <ul>
    {
      allPosts.nodes.map((post)=>(
        <div key={post.slug}>
          <h3>
          <Link href={`/posts/${post.slug}`}>
          {post.title}</Link>
          </h3>
          <div dangerouslySetInnerHTML={{__html:post.excerpt}}></div>
          <div>
            Posted Under {              
              post.categories.nodes.map((category)=>(
                <Link key={category.slug} href={`category/${category.slug}`} >
                  {category.name}
                </Link>
              ))
            }
          </div>

          </div>
      ))
    }
    </ul>
    </>
  )
}

export default BlogHome