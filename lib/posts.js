import graphqlRequest from "./graphqlRequest"

export async function getAllPosts(){
    const query = {
        query: `
        query NewQuery {
          posts {
            nodes {
              title
              slug
              date
              featuredImage {
                node {
                  sizes
                  sourceUrl
                }
              }
              excerpt(format: RENDERED)
              categories {
                nodes {
                  name
                  slug
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
          }
        }
        `
    }
    
    const resJson = await graphqlRequest(query)
    const allPosts = resJson.data.posts
    return allPosts

}

export async function getSinglePost(slug){
  const query = {
    query: `query getSinglePost {
      post(
        id: "${slug}"
        idType: SLUG
      ) {
        content(format: RENDERED)
        excerpt(format: RENDERED)
        modified
        slug
        title(format: RENDERED)
        featuredImage {
          node {
            mediaDetails {
              sizes {
                sourceUrl
                width
                height
              }
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }`
  }

  const resJson = await graphqlRequest(query)
  const singlePost = resJson.data.post
  return singlePost
}

export async function getPostSlugs(){
  const query = {
    query: `query getPostSlugs {
      posts {
        nodes {
          slug
        }
      }
    }`
  }
  const resJson = await graphqlRequest(query)
  const slugs = resJson.data.posts.nodes
  return slugs
}