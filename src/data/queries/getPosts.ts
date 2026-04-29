import { wordpress } from "@/configs/wordpress";
import { gql } from "graphql-request";

const query = gql`
    query BlogPagePosts {
    posts(first: 100) {
            nodes {
                author {
                node {
                name
                }
            }
            date
            excerpt
            featuredImage {
                node {
                altText
                sourceUrl(size: LARGE)
                srcSet(size: LARGE)
                title
                sizes(size: LARGE)
                }
            }
            title(format: RENDERED)
            uri
            }
        }
    }
`

type Post = {
  uri: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: {
    alt:string;
    src:string;
    sizes:string;
    srcSet:string;
    title:string;
  };
};

type request = {
    posts: {
    nodes: Array<{
      uri: string;
      date: string;
      excerpt: string;
      title: string;
      author: {
        node: {
          name: string;
        };
      };
      featuredImage: {
        node: {
          altText: string ;
          sourceUrl: string;
          srcSet: string;
          title: string;
          sizes: string;
        };
      } ;
    }>;
  };
}

export async function getPosts():Promise<Array<Post>>{
    const data = await wordpress.request<request>(query);
    return data.posts.nodes.map(({author,date,excerpt,featuredImage:image,title,uri}):Post => ({
        author:author.node.name,
        date:date,
        excerpt:excerpt,
        title:title,
        uri:uri,
        image:{
            alt:image ? image.node.altText : '',
            sizes:image.node.sizes,
            srcSet:image.node.srcSet,
            title:image.node.title,
            src:image.node.sourceUrl
        }
    }));

}