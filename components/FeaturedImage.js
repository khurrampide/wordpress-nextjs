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
        console.log("LOG", post.featuredImage.node.sourceUrl)
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
         <Image src={post.featuredImage.node.sourceUrl} width={100} height={100} alt={post.title} /> 
        
        </>
    )
}