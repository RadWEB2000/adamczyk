import { gql } from "graphql-request";
import { wordpress } from "@/lib/configs/wordpress";
import type { T_ButtonBase } from "@/ts/buttons.types";

const query:string = gql`
query HomePageQuery {
  page(id: "/", idType: URI) {
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
    viewHome {
      hero {
        title
        subtitle
        content
        buttons {
          button {
            title
            url
          }
        }
        image {
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
      overview
      about {
        title
        subtitle
        content
        button {
          title
          url
        }
        badges {
          badge
        }
        image {
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
      services {
        title
        subtitle
        content
        button {
          title
          url
        }
        cards {
          title
          subtitle
          content
          button {
            title
            url
          }
          subservices {
            nodes {
              ... on Service {
                title
                uri
                excerpt
              }
            }
          }
        }
      }
      case_studies {
        title
        subtitle
        content
        button {
          title
          url
        }
        works {
          nodes {
            ... on CaseStudy {
              uri
              excerpt
              featuredImage {
                node {
                  altText
                  sourceUrl
                  srcSet
                  title
                  sizes
                    mediaDetails {
                        height
                        width
                    }
                }
              }
              date
              viewCaseStudy {
                hero {
                  title
                }
              }
            }
          }
        }
      }
      blog {
        title
        subtitle
        content
        button {
          title
          url
        }
        posts {
          nodes {
            ... on Post {
              date
              excerpt(format: RENDERED)
              author {
                node {
                  name
                }
              }
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
    }
  }
}
`

type request = {
    page :{
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
        viewHome: {
            hero : {
                title:string;
                subtitle:string;
                content:string;
                buttons: Array<{
                    button: {
                        title:string;
                        url:string;
                    }
                }>;
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
                }
            };
            overview:string;
            about:{
                title:string;
                subtitle:string;
                content:string;
                button:{
                    title:string;
                    url:string;
                };
                badges:Array<{
                    badge:string;
                }>;
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
                }
            };
            services:{
                title:string;
                subtitle:string;
                content:string;
                button: {
                    title:string;
                    url:string;
                };
                cards:Array<{
                    title:string;
                    subtitle:string;
                    content:string;
                    button: {
                        title:string;
                        url:string;
                    };
                    subservices: {
                        nodes:Array<{
                            title:string;
                            uri:string;
                            excerpt:string;
                        }>
                    }
                }>
            };
            case_studies: {
                title:string;
                subtitle:string;
                content:string;
                button: {
                    title:string;
                    url:string;
                };
                works:{
                    nodes:Array<{
                        uri:string;
                        excerpt:string;
                        featuredImage: {
                            node: {
                                altText:string;
                                sourceUrl:string;
                                srcSet:string;
                                title:string;
                                sizes:string;
                                mediaDetails: {
                                    height:number;
                                    width:number;
                                }
                            }
                        };
                        date:string;
                        viewCaseStudy: {
                            hero: {
                                title:string;
                            }
                        }
                    }>
                }
            };
            blog:{
                title:string;
                subtitle:string;
                content:string;
                button: {
                    title:string;
                    url:string;
                };
                posts:{
                    nodes:Array<{
                        date:string;
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
                }
            };
            faq:{
                title:string;
                questions:{
                    nodes:Array<{
                        title:string;
                        id:string;
                        viewFaq:{
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
    page: {
        hero: {
            title:string;
            subtitle:string;
            content:string;
            buttons:Array<T_ButtonBase>;
            image: {
                alt:string;
                src:string;
                srcSet:string;
                title:string;
                sizes:string;
                height:number;
                width:number;
            }
        };
        overview:string;
        about:{
            title:string;
            subtitle:string;
            content:string;
            button:T_ButtonBase;
            badges:Array<string>;
            image:{
                alt:string;
                src:string;
                srcSet:string;
                title:string;
                sizes:string;
                height:number;
                width:number;
            }
        };
        services: {
            title:string;
            subtitle:string;
            content:string;
            button:T_ButtonBase;
            cards:Array<{
                title:string;
                subtitle:string;
                content:string;
                button:T_ButtonBase;
                cards:Array<{
                    title:string;
                    uri:string;
                    excerpt:string;
                }> | null;
            }>
        };
        caseStudies: {
            title:string;
            subtitle:string;
            content:string;
            button:T_ButtonBase;
            cards:Array<{
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
            }>
        };
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
            }>
        };
        faq:{
            title:string;
            questions:Array<{
                question:string;
                id:string;
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

export async function getHomePage():Promise<response> {
    const {page: {seo,viewHome:page}} = await wordpress.request<request>(query);
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
            hero:{
                title:page.hero.title,
                subtitle:page.hero.subtitle,
                content:page.hero.content,
                buttons:page.hero.buttons.map(({button:{title,url}}) => {
                    return {
                        href:url,
                        label:title,
                    }
                }),
                image:{
                    alt:page.hero.image.node.altText,
                    src:page.hero.image.node.sourceUrl,
                    title:page.hero.image.node.title,
                    sizes:page.hero.image.node.sizes,
                    srcSet:page.hero.image.node.srcSet,
                    height:page.hero.image.node.mediaDetails.height,
                    width:page.hero.image.node.mediaDetails.width
                },
            },
            overview:page.overview,
            about: {
                title:page.about.title,
                subtitle:page.about.subtitle,
                content:page.about.content,
                image: {
                    alt:page.about.image.node.altText,
                    src:page.about.image.node.sourceUrl,
                    title:page.about.image.node.title,
                    sizes:page.about.image.node.sizes,
                    srcSet:page.about.image.node.srcSet,
                    height:page.about.image.node.mediaDetails.height,
                    width:page.about.image.node.mediaDetails.width
                },
                badges:page.about.badges.map(({badge}) => badge),
                button: {
                    href:page.about.button.url, 
                    label:page.about.button.title
                }
            },
            services: {
                title:page.services.title,
                subtitle:page.services.subtitle,
                content:page.services.content,
                button: {
                    href:page.services.button.url,
                    label:page.services.button.title
                },
                cards:page.services.cards.map(({button,content,subservices,subtitle,title}) => {
                    return {
                        button : {
                            href:button.url,
                            label:button.title
                        },
                        content,
                        title,
                        subtitle,
                        cards:subservices ? subservices.nodes : null
                    }
                })
            },
            blog: {
                title:page.blog.title,
                subtitle:page.blog.subtitle,
                content:page.blog.content,
                button: {
                    href:page.blog.button.url,
                    label:page.blog.button.title
                },
                cards: page.blog.posts.nodes.map(({author,date,excerpt,featuredImage,title,uri}) => {
                    return {
                        author:author.node.name,
                        date,
                        excerpt,
                        title,
                        image:{
                            alt:featuredImage.node.altText,
                            src:featuredImage.node.sourceUrl,
                            title:featuredImage.node.title,
                            sizes:featuredImage.node.sizes,
                            srcSet:featuredImage.node.srcSet,
                            height:featuredImage.node.mediaDetails.height,
                            width:featuredImage.node.mediaDetails.width,
                        },
                        uri
                    }
                })
            },
            caseStudies:{
                title:page.case_studies.title,
                subtitle:page.case_studies.subtitle,
                content:page.case_studies.content,
                button: {
                    href:page.case_studies.button.url,
                    label:page.case_studies.button.title    
                },
                cards:page.case_studies.works.nodes.map(({date,excerpt,featuredImage,uri,viewCaseStudy:{hero:{title}}}) => {
                    return {
                        date,
                        excerpt,
                        title,
                        uri,
                        image:{
                            alt:featuredImage.node.altText,
                            src:featuredImage.node.sourceUrl,
                            title:featuredImage.node.title,
                            sizes:featuredImage.node.sizes,
                            srcSet:featuredImage.node.srcSet,
                            height:featuredImage.node.mediaDetails.height,
                            width:featuredImage.node.mediaDetails.width
                        },
                    }
                })
            },
            faq:{
                title:page.faq.title,
                questions:page.faq.questions.nodes.map(({id,title,viewFaq:{answer}}) => {
                    return {
                        answer,
                        id,
                        question:title
                    }
                })
            },
            testimonials:page.testimonials.nodes.map(({date,featuredImage:image,title,viewTestimonial:{company,opinion}}) => {
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