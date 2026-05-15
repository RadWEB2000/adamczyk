import { wordpress } from "@/lib/configs/wordpress";
import type { T_ButtonBase } from "@/ts/buttons.types";
import { gql } from "graphql-request";

const query:string = gql`
query OfferPageQuery {
  page(id: "oferta", idType: URI) {
    seo {
      canonicalUrl
      description
      title
      openGraph {
        description
        image {
          height
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
    viewOffer {
      hero {
        title
        subtitle
        content
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
      services {
        title
        subtitle
        content
        button {
          url
          title
        }
        subservices {
          nodes {
            ... on Service {
              id
              title
              uri
            }
          }
        }
      }
      benefits {
        title
        subtitle
        content
        reasons {
          title
          content
        }
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
    }
    content
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
`

type request = {
    page: {
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
        content:string;
        viewOffer: {
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
            services: Array<{
                title:string;
                content:string;
                subtitle:string;
                button:{
                    url:string;
                    title:string;
                };
                subservices: {
                    nodes:Array<{
                        id:string;
                        title:string;
                        uri:string;
                    }>
                } | null;
            }>;
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
        }
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
    }
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
    page :{
        content:string;
        featuredImage: {
            alt:string;
            src:string;
            srcSet:string;
            title:string;
            sizes:string;
            height:number;
            width:number;
        };
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
        services : Array<{
            title:string;
            content:string;
            subtitle:string;
            button:T_ButtonBase;
            subservices:Array<{
                id:string;
                title:string;
                uri:string;
            }> | null;
        }>;
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
    }
}

export async function getOfferPage():Promise<response> {
    const {page:{seo,content,featuredImage,viewOffer:{benefits,caseStudies,collaborationProcess,faq,hero,services,targetGroups,testimonials}}} = await wordpress.request<request>(query);
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
        page: {
            content,
            featuredImage: {
                alt:featuredImage.node.altText,
                src:featuredImage.node.sourceUrl,
                srcSet:featuredImage.node.srcSet,
                title:featuredImage.node.title,
                sizes:featuredImage.node.sizes,
                height:featuredImage.node.mediaDetails.height,
                width:featuredImage.node.mediaDetails.width
            },
            hero:hero,
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
            services:  services.map(({button,content,subservices,subtitle,title}) => {
                return {
                    button:{
                        href:button ? button.url : '',
                        label:button ? button.title : '',
                    },
                    content:content,
                    subtitle:subtitle,
                    title:title,
                    subservices: subservices ? subservices.nodes.map(({id,title,uri}) => {
                        return {
                            id,
                            title,
                            uri
                        }
                    }) : null
                }
            }) ,
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
            })  
        }
    }
}