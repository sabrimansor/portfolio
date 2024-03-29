import { graphql } from "gatsby";

export const query = graphql`
    fragment InnerContent on InnerContent {
        id
        inner_title
        section_title {
            title
            subtitle
            description
        }
        title
        subtitle
        is_featured
        price
        description
        orderLink
        deliveryTime
        revision
        items {
            id
            title
            subtitle
            rating
            description
            value
            path
            available
            images {
                src {
                    childImageSharp {
                        gatsbyImageData(
                            quality: 100
                            formats: WEBP
                            placeholder: DOMINANT_COLOR
                        )
                    }
                }
                alt
            }
        }
    }
`;
