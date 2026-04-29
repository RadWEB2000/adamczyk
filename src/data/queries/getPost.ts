import { wordpress } from "@/lib/configs/wordpress";
import type { T_BreadcrumbItem } from "@/ts/ui.types";
import { gql } from "graphql-request";

const query = gql`
    query getPost ($slug: ID!){
  post(id: $slug, idType: SLUG) {
    seo {
      title
      breadcrumbs {
        url
        text
      }
      canonicalUrl
      description
      jsonLd {
        raw
      }
      robots
      openGraph {
        description
        locale
        siteName
        title
        slackEnhancedData {
          data
          label
        }
      }
    }
    title(format: RENDERED)
    excerpt(format: RENDERED)
    date
    featuredImage {
      node {
        altText
        sourceUrl(size: LARGE)
        srcSet(size: LARGE)
        title
        sizes(size: LARGE)
      }
    }
    content(format: RENDERED)
  }
}
`

type request = {
    post : {
        seo: {
            title: string;
            breadcrumbs:Array<{
                text: string;
                url: string;
            }>;
            canonicalUrl: string;
            description: string;
            jsonLd:{
                raw: string;
            };
            robots: string;
            openGraph:{
                description: string;
                locale: string;
                siteName: string;
                title: string;
                slackEnhancedData:Array<{
                    data: string;
                    label: string;
                }>
            };
        };
        title: string;
        excerpt: string;
        date: string;
        content: string;
        featuredImage: {
        node: {
          altText: string ;
          sourceUrl: string;
          srcSet: string;
          title: string;
          sizes: string;
        };
      } ;
    }
}

type response = {
    seo : {
        meta: {
            title:string;
            description:string;
            robots:string;
            structuredData:string;
            canonical:string;
        };
        og:{
            title:string;
            descritpion:string;
            locale:string;
            site:string;
            slack:Array<{
                data:string;
                label:string;
            }>
        }
    };
    page:{
        breadcrumbs:Array<T_BreadcrumbItem>;
        title:string;
        excerpt:string;
        date:string;
        content:string;
        readingTime:string;
        author:string;
        image:{
            alt:string;
            src:string;
            sizes:string;
            srcSet:string;
            title:string;
        }
    }
}

export async function getPost({slug}:{slug:string}):Promise<response> {
    const {post: {seo, ...page}} = await wordpress.request<request>(query, {
        slug:slug
    });
    return {
        page:{
            author:'Radosław Adamczyk',
            breadcrumbs:seo.breadcrumbs.map(({text,url}) => {
                return {
                    href:url,
                    label:text
                }
            }),
            content:page.content,
            date:page.date,
            excerpt:page.excerpt,
            image:{
                alt:page.featuredImage ? page.featuredImage.node.altText : '',
                sizes:page.featuredImage.node.sizes,
                srcSet:page.featuredImage.node.srcSet,
                title:page.featuredImage.node.title,
                src:page.featuredImage.node.sourceUrl
            },
            readingTime:seo.openGraph.slackEnhancedData[1].data,
            title:page.title
        },
        seo: {
            meta: {
                canonical:seo.canonicalUrl,
                description:seo.description,
                robots:seo.robots,
                structuredData:seo.jsonLd.raw,
                title:seo.title
            },
            og: {
                descritpion:seo.openGraph.description,
                locale:seo.openGraph.locale,
                site:seo.openGraph.siteName,
                slack:seo.openGraph.slackEnhancedData,
                title:seo.openGraph.title
            }
        }
    }
}