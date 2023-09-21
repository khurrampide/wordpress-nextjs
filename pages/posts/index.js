import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {getAllPosts} from '../../lib/posts'
import FeaturedImage from '../../components/FeaturedImage'

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
          
         <FeaturedImage post={post} />
         {/* <Image src="http://localhost/wordpressnextjs/wp-content/uploads/2023/09/3rd-rasta-conference.jpg" width={300} height={400} /> */}
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