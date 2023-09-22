import { getPostSlugs, getSinglePost } from "../../lib/posts";
import Head from "next/head";

export async function getStaticProps({ params }) {
  const postData = await getSinglePost(params.postSlug);
  return {
    props: {
      postData
    }
  };
}

export async function getStaticPaths() {
  const postSlugs = await getPostSlugs();
  return {
    paths: postSlugs.map((s) => (
        {
        params: {
            postSlug: s.slug,
            },
        }
    )),
    fallback: false
  };
}

export default function Post({postData}) {
  return <>
    <Head>
        <title key={postData.slug} >{postData.title}</title>
    </Head>
    <section>
        <h1><div>{postData.title}</div></h1>
        <div dangerouslySetInnerHTML={{__html: postData.content}}></div>
    </section>
  </>;
}
