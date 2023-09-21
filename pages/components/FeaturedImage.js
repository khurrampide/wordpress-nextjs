import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedImage({post}){
    let img=''
    const defaultFeaturedImage = "http://localhost/wordpressnextjs/wp-content/uploads/2023/09/3rd-rasta-conference.jpg"

    const defaultWidth = "200"
    const defaultHeight = "300"

    if (post.featuredImage)
    {
        let size = post.featuredImage.node.mediaDetails.sizes[0]
        img = {
            src: size.sourceUrl,
            width: size.width,
            height: size.height
        }
    }else{
        img = {
            src: defaultFeaturedImage,
            width: defaultWidth,
            height: defaultHeight
        }
        return (
            <Image src={img.src} width={img.width} height={img.height} alt={post.title} />
        )
    }
}