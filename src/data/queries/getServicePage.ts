import { wordpress } from "@/lib/configs/wordpress";
import type { T_ButtonBase } from "@/types/buttons.types";
import { gql } from "graphql-request";

const query:string = gql`
query ServicePageQuery($uri: ID!) {
  service(id: $uri, idType: URI) {
    seo {
      canonicalUrl
      description
      title
      openGraph {
        description
        image {
          height
          secureUrl
          type
          url
          width
        }
        locale
        siteName
        title
        type
        updatedTime
        url
      }
      robots
    }
    content
    title
    featuredImage {
      node {
        altText
        mediaDetails {
          height
          width
        }
        sizes
        sourceUrl
        srcSet
        title
      }
    }
    viewService {
      hero {
        content
        subtitle
        title
      }
      targetGroups {
        title
        subtitle
        content
        cards {
          title
          content
          button {
            url
            title
          }
        }
      }
      benefits {
        title
        subtitle
        content
        image {
          node {
            altText
            mediaDetails {
              height
              width
            }
            sizes
            sourceUrl
            srcSet
            title
          }
        }
        reasons {
          title
          content
        }
      }
      collaborationProcess {
        title
        subtitle
        content
        steps {
          title
          content
        }
      }
      caseStudies {
        title
        subtitle
        content
        button {
          title
          url
        }
        cards {
          nodes {
            ... on CaseStudy {
              id
              viewCaseStudy {
                hero {
                  title
                }
              }
              uri
              excerpt
              featuredImage {
                node {
                  altText
                  sizes
                  sourceUrl
                  srcSet
                  title
                  mediaDetails {
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
        services {
        title
        subtitle
        cards {
          nodes {
            ... on Service {
              excerpt
              title
              uri
            }
          }
        }
      }
      faq {
        title
        questions {
          nodes {
            ... on Faq_question {
              id
              title
              viewFaq {
                answer
              }
            }
          }
        }
      }
      testimonials {
        nodes {
          ... on Testimonial {
            date
            featuredImage {
              node {
                altText
                sizes
                sourceUrl
                srcSet
                title
                mediaDetails {
                  height
                  width
                }
              }
            }
            viewTestimonial {
              company
              opinion
            }
            title
          }
        }
      }
      blog {
        title
        subtitle
        content
        button {
          url
          title
        }
        posts {
          nodes {
            ... on Post {
              id
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
                  mediaDetails {
                    height
                    width
                  }
                  sizes
                  sourceUrl
                  srcSet
                  title
                }
              }
              title
              uri
            }
          }
        }
      }
      cities {
        title
        subtitle
        content
        button {
          url
          title
        }
        locations {
          nodes {
            ... on City {
              id
              title
              uri
              featuredImage {
                node {
                  altText
                  mediaDetails {
                    height
                    width
                  }
                  sizes
                  sourceUrl
                  srcSet
                  title
                }
              }
            }
          }
        }
      }
    }
  }
}
`


type request = {
    // data: {
        service: {
            content:string;
            featuredImage:{
                node: {
                    altText:string;
                    sizes:string;
                    sourceUrl:string;
                    srcSet:string;
                    title:string;
                    mediaDetails: {
                        height:number;
                        width:number;
                    }
                }
            };
            title:string;
            seo: {
                canonicalUrl:string;
                description:string;
                title:string;
                openGraph: {
                    description:string;
                    image:{
                        height:number;
                        type:string;
                        url:string;
                        width:number;
                    }
                    locale:string;
                    siteName:string;
                    title:string;
                    type:"website" | "article" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other";
                    updatedTime:string;
                    url:string;
                };
                robots:Array<string>;
            };
            viewService: {
                hero:{
                    title:string;
                    content:string;
                    subtitle:string;
                }
                targetGroups: {
                    title:string;
                    content:string;
                    subtitle:string;
                    cards:Array<{
                        title:string;
                        content:string;
                        button:{
                            url:string;
                            title:string;
                        } | null;
                    }>
                };
                services:{
                    title:string;
                    subtitle:string;
                    button:{
                        url:string;
                        title:string;
                    };
                    cards:{
                        nodes:Array<{
                            title:string;
                            uri:string;
                            excerpt:string;
                        }> 
                    }| null
                };
                benefits: {
                    title:string;
                    content:string;
                    subtitle:string;
                    image: {
                        node: {
                            altText:string;
                            sizes:string;
                            sourceUrl:string;
                            srcSet:string;
                            title:string;
                            mediaDetails: {
                                height:number;
                                width:number;
                            }
                        }
                    };
                    reasons: Array<{
                        title:string;
                        content:string;
                    }>
                };
                collaborationProcess: {
                    title:string;
                    content:string;
                    subtitle:string;
                    steps:Array<{
                        title:string;
                        content:string;
                    }>
                };
                caseStudies: {
                    title:string;
                    content:string;
                    subtitle:string;
                    button:{
                        url:string;
                        title:string;
                    };
                    cards:{
                        nodes:Array<{
                            id:string;
                            viewCaseStudy: {
                                hero:{
                                    title:string;
                                }
                            };
                            uri:string;
                            excerpt:string;
                            featuredImage: {
                                node: {
                                    altText:string;
                                    sizes:string;
                                    sourceUrl:string;
                                    srcSet:string;
                                    title:string;
                                    mediaDetails: {
                                        height:number;
                                        width:number;
                                    }
                                }
                            };
                        }>
                    } 
                } | null;
                faq: {
                    title:string;
                    questions: {
                        nodes:Array<{
                            id:string;
                            title:string;
                            viewFaq : {
                                answer:string;
                            }
                        }>
                    }
                };
                testimonials:{
                    nodes:Array<{
                        date:string;
                        featuredImage:{
                            node:{
                                altText:string;
                                sizes:string;
                                sourceUrl:string;
                                srcSet:string;
                                title:string;
                                mediaDetails: {
                                    height:number;
                                    width:number;
                                }
                            }
                        };
                        viewTestimonial:{
                            company:string;
                            opinion:string;
                        };
                        title:string;
                    }>
                }
                blog: {
                    title:string;
                    content:string;
                    subtitle:string;
                    button:{
                        url:string;
                        title:string;
                    };
                    posts:{
                        nodes:Array<{
                            date:string;
                            id:string;
                            excerpt:string;
                            author:{
                                node:{
                                    name:string;
                                }
                            };
                            featuredImage: {
                                node: {
                                    altText:string;
                                    sizes:string;
                                    sourceUrl:string;
                                    srcSet:string;
                                    title:string;
                                    mediaDetails: {
                                        height:number;
                                        width:number;
                                    }
                                }
                            };
                            title:string;
                            uri:string;
                        }>
                    } | null
                };
                cities: {
                    title:string;
                    content:string;
                    subtitle:string;
                    button:{
                        url:string;
                        title:string;
                    };
                    locations:{
                        nodes:Array<{
                            id:string;
                            title:string;
                            uri:string;
                            featuredImage: {
                                node: {
                                    altText:string;
                                    sizes:string;
                                    sourceUrl:string;
                                    srcSet:string;
                                    title:string;
                                    mediaDetails: {
                                        height:number;
                                        width:number;
                                    }
                                }
                            };
                        }>
                    }
                }

            }
        }
    // }
}


type response = {
    seo: {
        canonical:string;
        metaDescription:string;
        metaTitle:string;
        robots:string;
        locale:string;   
        site:string;
        ogTitle:string;
        ogDescription:string;
        type:"website" | "article" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other";
        url:string;
        updatedTime:string;
        image:{
            height:number;
            width:number;
            url:string;
            type:string;
        }
    };
    page: {
        featuredImage: {
            alt:string;
            src:string;
            srcSet:string;
            title:string;
            sizes:string;
            height:number;
            width:number;
        };
        content:string;
        title:string;
        hero : {
            title:string;
            content:string;
            subtitle:string;
        };
        targetGroups: {
            title:string;
            content:string;
            subtitle:string;
            cards:Array<{
                title:string;
                content:string;
                button:T_ButtonBase | null;
            }>
        };
        benefits: {
            title:string;
            content:string;
            subtitle:string;
            image: {
                alt:string;
                src:string;
                srcSet:string;
                title:string;
                sizes:string;
                height:number;
                width:number;
            };
            reasons: Array<{
                title:string;
                content:string;
            }>
        };
        services:{
            title:string;
            subtitle:string;
            button:T_ButtonBase;
            cards:Array<{
                title:string;
                uri:string;
                excerpt:string;
            }>| null
        };
        collaborationProcess: {
            title:string;
            content:string;
            subtitle:string;
            steps:Array<{
                title:string;
                content:string;
            }>
        };
        caseStudies: {
            title:string;
            content:string;
            subtitle:string;
            button:T_ButtonBase;
            cards:Array<{
                id:string;
                title:string;
                uri:string;
                excerpt:string;
                image: {
                    alt:string;
                    src:string;
                    srcSet:string;
                    title:string;
                    sizes:string;
                    height:number;
                    width:number;
                }
            }> | null
        } | null
        faq: {
            title:string;
            questions: Array<{
                id:string;
                question:string;
                answer:string;
            }>
        };
        testimonials:Array<{
            date:string;
            image:{
                alt:string;
                src:string;
                srcSet:string;
                title:string;
                sizes:string;
                height:number;
                width:number;
            };
            fullname:string;
            company:string;
            opinion:string;
        }>
        blog: {
            title:string;
            subtitle:string;
            content:string;
            button:T_ButtonBase;
            cards:Array<{
                author:string;
                title:string;
                date:string;
                excerpt:string;
                uri:string;
                image:{
                    alt:string;
                    src:string;
                    srcSet:string;
                    title:string;
                    sizes:string;
                    height:number;
                    width:number;
                }
            }> | null
        };
        
        cities: {
            title:string;
            subtitle:string;
            content:string;
            button:T_ButtonBase;
            locations: Array<{
                title:string;
                uri:string;
                image:{
                    alt:string;
                    src:string;
                    srcSet:string;
                    title:string;
                    sizes:string;
                    height:number;
                    width:number;                
                };
            }>
        }
    }
}


export async function getServicePage(uri:string):Promise<response>{
// export async function getServicePage(){
    const {service:{title,content,featuredImage,seo,viewService:{benefits,blog,caseStudies,cities,services, collaborationProcess,faq,hero,targetGroups,testimonials}}} = await wordpress.request<request>(query,{uri});



    return {
         seo:{
            canonical:seo.canonicalUrl,
            metaDescription:seo.description,
            metaTitle:seo.title,
            robots:seo.robots.join(","),
            locale:seo.openGraph.locale,
            site:seo.openGraph.siteName,
            ogTitle:seo.openGraph.title,
            ogDescription:seo.openGraph.description,
            type:seo.openGraph.type,
            image:{
                height:seo.openGraph.image.height,
                width:seo.openGraph.image.width,
                url:seo.openGraph.image.url,
                type:seo.openGraph.image.type
            },
            url:seo.openGraph.url,
            updatedTime:seo.openGraph.updatedTime
        },
        page:{
            content,
            title,
            hero,
            featuredImage: {
                alt:featuredImage.node.altText,
                src:featuredImage.node.sourceUrl,
                srcSet:featuredImage.node.srcSet,
                title:featuredImage.node.title,
                sizes:featuredImage.node.sizes,
                height:featuredImage.node.mediaDetails.height,
                width:featuredImage.node.mediaDetails.width
            },        
            targetGroups: {
                cards:targetGroups.cards.map(({button,content,title}) => {
                    return {
                        button: button ? {
                            href:button.title,
                            label:button.url
                        } : null,
                        content,
                        title
                    }
                }),
                content:targetGroups.content,
                subtitle:targetGroups.subtitle,
                title:targetGroups.title
            },    
            benefits: {
                title:benefits.title,
                content:benefits.content,
                subtitle:benefits.subtitle,
                image:{
                    alt:benefits.image.node.altText,
                    src:benefits.image.node.sourceUrl,
                    srcSet:benefits.image.node.srcSet,
                    title:benefits.image.node.title,
                    sizes:benefits.image.node.sizes,
                    height:benefits.image.node.mediaDetails.height,
                    width:benefits.image.node.mediaDetails.width
                },
                reasons:benefits.reasons,
            },
            collaborationProcess:collaborationProcess,
            caseStudies: caseStudies ? {
                title:caseStudies.title,
                button: {
                    href:caseStudies.button.url,
                    label:caseStudies.button.title
                },
                subtitle:caseStudies.subtitle,
                content:caseStudies.content,
                cards:caseStudies.cards ? caseStudies.cards.nodes.map(({excerpt,featuredImage:image,id,viewCaseStudy:{hero:{title}},uri}) => {
                    return {
                        excerpt,
                        title,
                        uri,
                        id,
                        image: {
                            alt:image.node.altText,
                            src:image.node.sourceUrl,
                            srcSet:image.node.srcSet,
                            title:image.node.title,
                            sizes:image.node.sizes,
                            height:image.node.mediaDetails.height,
                            width:image.node.mediaDetails.width
                        }
                    }
                }) : null
            } : null,
            faq: {
                title:faq.title,
                questions: faq.questions.nodes.map(({id,title,viewFaq:{answer}}) => {
                    return {
                        id,
                        question:title,
                        answer
                    }
                })
            },
            testimonials:testimonials.nodes.map(({date,featuredImage:image,title,viewTestimonial:{company,opinion}}) => {
                return {
                    date,
                    fullname:title,
                    image: {
                        alt:image.node.altText,
                        src:image.node.sourceUrl,
                        title:image.node.title,
                        sizes:image.node.sizes,
                        srcSet:image.node.srcSet,
                        height:image.node.mediaDetails.height,
                        width:image.node.mediaDetails.width
                    },
                    company,
                    opinion
                }
            }),
            services:{
                title:services.title,
                subtitle:services.subtitle,
                button:{
                    href:services.button ?services.button.url  : '',
                    label:services.button ?services.button.title : ''
                },
                cards:services.cards ? services.cards.nodes.map((item) => {
                    return {
                        ...item
                    }
                }) : null
            },
            blog:{
                button:{
                    href:blog.button.url,
                    label:blog.button.title
                },
                content:blog.content,
                subtitle:blog.subtitle,
                title:blog.title,
                cards:blog.posts ? blog.posts.nodes.map(({author,date,excerpt,featuredImage,title,uri}) => {
                    return {
                        author:author.node.name,
                        date,
                        excerpt,
                        title,
                        uri,
                        image:{
                            alt:featuredImage.node.altText,
                            height:featuredImage.node.mediaDetails.height,
                            sizes:featuredImage.node.sizes,
                            src:featuredImage.node.sourceUrl,
                            srcSet:featuredImage.node.srcSet,
                            title:featuredImage.node.title,
                            width:featuredImage.node.mediaDetails.width
                        }
                    }
                }) : null
            },
            cities:{
                button:{
                    href:cities.button.url,
                    label:cities.button.title
                },
                content:cities.content,
                locations:cities.locations.nodes.map(({featuredImage,title,uri}) => {
                    return {
                        title,
                        uri,
                        image:{
                            alt:featuredImage.node.altText,
                            height:featuredImage.node.mediaDetails.height,
                            sizes:featuredImage.node.sizes,
                            src:featuredImage.node.sourceUrl,
                            srcSet:featuredImage.node.srcSet,
                            title:featuredImage.node.title,
                            width:featuredImage.node.mediaDetails.width
                        }
                    }
                }),
                subtitle:cities.subtitle,
                title:cities.title
            }

        }       
    }
}