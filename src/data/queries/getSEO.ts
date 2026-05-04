import { wordpress } from "@/lib/configs/wordpress";
import { gql } from "graphql-request";

const query = gql`
  fragment SeoFields on SEO {
    canonicalUrl
    description
    robots
    title
    jsonLd {
      raw
    }
    openGraph {
      alternateLocales
      description
      articleMeta {
        author
        modifiedTime
        publishedTime
        publisher
        section
        tags
      }
      image {
        height
        url
        width
        type
      }
      locale
      siteName
      slackEnhancedData {
        label
        data
      }
      title
      type
      updatedTime
      url
    }
  }

  query getSEO($uri: String!) {
    nodeByUri(uri: $uri) {
      __typename

      ... on Post {
        seo {
          ...SeoFields
        }
      }

      ... on Page {
        seo {
          ...SeoFields
        }
      }

      ... on City {
        seo {
          ...SeoFields
        }
      }

      ... on Service {
        seo {
          ...SeoFields
        }
      }

      ... on CaseStudy {
        seo {
          ...SeoFields
        }
      }
    }
  }
`;


type request = {
   nodeByUri: {
    seo : {
        canonicalUrl:string;
        description:string;
        jsonLd:{
            raw:string;
        };
        openGraph: {
            alternateLocales:string | null;
            author:string | null;
            description:string;
            image: {
                height:number;
                type:string;
                url:string;
                width:number;
            } | null;
            locale:string;
            modifiedTime:string;
            publishedTime:string;
            publisher:string | null;
            section:string | null;
            siteName:string;
            slackEnhancedData:Array<{
                label:string;
                data:string;
            }>;
            tags:Array<string> | null;
            title:string;
            type:string;
            updatedTime:string;
            url:string;
        };
        robots:Array<string>;
        title:string;
    }
   }
}

type response = {
    meta: {
        canonical:string;
        description:string;
        structuredData:string;
        title:string;
        robots:string;
    };
    og?: {
      alternateLocales:string | null;
        author:string | null;
        description:string;
        image: {
            height:number;
            type:string;
            url:string;
            width:number;
        } | null;
        locale:string;
        modifiedTime:string;
        publishedTime:string;
        publisher:string | null;
        section:string | null;
        siteName:string;
        slackEnhancedData:Array<{
            label:string;
            data:string;
        }>;
        tags:Array<string> | null;
        title:string;
        type:string;
        updatedTime:string;
        url:string;
    }
}


export async function getSEO({uri}:{uri:string}):Promise<response> {
    const data = await wordpress.request<request>(query, {
        uri:'/najwazniejsze-czynniki-rankingowe-seo'
    })

    console.log('seo sync',data)
    return {
        meta:{
            canonical:'seo.canonicalUrl',
            description:'seo.description',
            structuredData:'seo.jsonLd.raw',
            title:'seo.title',
            robots:"seo.robots.join('')"
        },
        
    }
}


`   "jsonLd": {
          "raw": "<script type=\"application/ld+json\" class=\"rank-math-schema-pro\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Place\",\"@id\":\"https://cms.adamczyk.top/#place\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Donatowo 53, 53\",\"addressLocality\":\"Czempi\\u0144\",\"postalCode\":\"64-020\",\"addressCountry\":\"Polska\",\"addressRegion\":\"wielkopolskie\"}},{\"@type\":[\"OnlineBusiness\",\"Organization\"],\"@id\":\"https://cms.adamczyk.top/#organization\",\"name\":\"Rados\\u0142aw Adamczyk\",\"url\":\"https://adamczyk.top\",\"sameAs\":[\"https://www.facebook.com/profile.php?id=61563233255885\"],\"email\":\"kontakt@adamczyk.top\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Donatowo 53, 53\",\"addressLocality\":\"Czempi\\u0144\",\"postalCode\":\"64-020\",\"addressCountry\":\"Polska\",\"addressRegion\":\"wielkopolskie\"},\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://cms.adamczyk.top/#logo\",\"url\":\"https://cms.adamczyk.top/wp-content/uploads/2026/04/adamczyk-top-logo-scaled.webp\",\"contentUrl\":\"https://cms.adamczyk.top/wp-content/uploads/2026/04/adamczyk-top-logo-scaled.webp\",\"caption\":\"AdamczykTOP\",\"inLanguage\":\"pl-PL\",\"width\":\"2560\",\"height\":\"2560\"},\"contactPoint\":[{\"@type\":\"ContactPoint\",\"telephone\":\"+48794100413\",\"contactType\":\"customer support\"}],\"description\":\"Specjalista SEO oferuj\\u0105cy us\\u0142ugi zwi\\u0105zane z widoczno\\u015bci\\u0105 stron internetowych w wyszukiwarkach internetowych i modelach AI.\",\"location\":{\"@id\":\"https://cms.adamczyk.top/#place\"}},{\"@type\":\"WebSite\",\"@id\":\"https://cms.adamczyk.top/#website\",\"url\":\"https://cms.adamczyk.top\",\"name\":\"AdamczykTOP\",\"alternateName\":\"A.TOP\",\"publisher\":{\"@id\":\"https://cms.adamczyk.top/#organization\"},\"inLanguage\":\"pl-PL\",\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":\"https://cms.adamczyk.top/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}},{\"@type\":\"WebPage\",\"@id\":\"https://cms.adamczyk.top#webpage\",\"url\":\"https://cms.adamczyk.top\",\"name\":\"AdamczykTOP | Zbuduj swoj\\u0105 widoczno\\u015b\\u0107 w Google, AI - Pozna\\u0144\",\"datePublished\":\"2026-04-25T07:49:53+00:00\",\"dateModified\":\"2026-04-25T08:18:30+00:00\",\"about\":{\"@id\":\"https://cms.adamczyk.top/#organization\"},\"isPartOf\":{\"@id\":\"https://cms.adamczyk.top/#website\"},\"inLanguage\":\"pl-PL\"},{\"@type\":\"Person\",\"@id\":\"https://cms.adamczyk.top/author/admin\",\"name\":\"Rados\\u0142aw Adamczyk\",\"url\":\"https://cms.adamczyk.top/author/admin\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/a6a0691679a72b173c1cf9eec4345edd8531d880b9182397007562eb75c454c5?s=96&amp;d=mm&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/a6a0691679a72b173c1cf9eec4345edd8531d880b9182397007562eb75c454c5?s=96&amp;d=mm&amp;r=g\",\"caption\":\"Rados\\u0142aw Adamczyk\",\"inLanguage\":\"pl-PL\"},\"sameAs\":[\"https://adamczyk.top\"],\"worksFor\":{\"@id\":\"https://cms.adamczyk.top/#organization\"}},{\"@type\":\"Article\",\"headline\":\"AdamczykTOP | Zbuduj swoj\\u0105 widoczno\\u015b\\u0107 w Google, AI - Pozna\\u0144\",\"keywords\":\"AdamczykTOP,seo,ai seo,automatyzacje,strony,ppc,pozycjonowanie seo,pozycjonowanie ai,widoczno\\u015b\\u0107 w Google,widoczno\\u015b\\u0107 w AI\",\"datePublished\":\"2026-04-25T07:49:53+00:00\",\"dateModified\":\"2026-04-25T08:18:30+00:00\",\"author\":{\"@id\":\"https://cms.adamczyk.top/author/admin\",\"name\":\"Rados\\u0142aw Adamczyk\"},\"publisher\":{\"@id\":\"https://cms.adamczyk.top/#organization\"},\"description\":\"Sprawd\\u017a ofert\\u0119 specjalisty SEO!\",\"name\":\"AdamczykTOP | Zbuduj swoj\\u0105 widoczno\\u015b\\u0107 w Google, AI - Pozna\\u0144\",\"@id\":\"https://cms.adamczyk.top#richSnippet\",\"isPartOf\":{\"@id\":\"https://cms.adamczyk.top#webpage\"},\"inLanguage\":\"pl-PL\",\"mainEntityOfPage\":{\"@id\":\"https://cms.adamczyk.top#webpage\"}}]}</script>\n"`