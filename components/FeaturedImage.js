import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedImage({post}){
    let img=''
    let a="TEST"
    const defaultFeaturedImage = "http://localhost/wordpressnextjs/wp-content/uploads/2023/09/3rd-rasta-conference.jpg"

    const defaultWidth = "200"
    const defaultHeight = "300"

    if (post.featuredImage && post.featuredImage.node.sizes.length > 0)
    {
        let size = post.featuredImage.node.sizes[0]
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
        
    }
    return (
        <>
        <div>{img.src}</div>
         <Image src={defaultFeaturedImage} width={300} height={400} alt={post.title} /> 
        
        </>
    )
}