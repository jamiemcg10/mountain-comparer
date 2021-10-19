
export const get = ({ params }) => {
    const { slug } = params

    return {
        body: {
            x: slug
        }
    }
}