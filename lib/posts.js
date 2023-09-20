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
                  mediaDetails {
                    file
                    sizes {
                      sourceUrl
                      width
                      height
                    }
                  }
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