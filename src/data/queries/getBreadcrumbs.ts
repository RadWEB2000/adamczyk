import { wordpress } from "@/lib/configs/wordpress";
import { gql } from "graphql-request";

const query = gql`
    query getBreadcrumbs($uri: ID!) {
        nodeByUri(uri: $uri) {
            uri
            ... on CaseStudy {
            title
            }
            ... on Page {
            title
            }
            ... on Post {
            title
            }
            ... on City {
            title
            }
            ... on Service {
            title
            }
            ... on Location {
            name
            }
            ... on Category {
            name
            }
            ... on Tag {
            name
            }
        }
    }
`

type request = {
    nodeByUri: {
        uri:string;
        title:string;
        name:never;
    } | {
        uri:string;
        title:never;
        name:string;
    }
}

type response = {
    href:string;
    label:string;
}

export async function getBreadcrumbs(uri:string):Promise<response>{
    const {nodeByUri} = await wordpress.request<request>(query,{uri});
    return {
        href: nodeByUri.uri,
        label: nodeByUri.title ?? nodeByUri.name
    }
}