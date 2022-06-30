import Image from 'next/image'

export const Loader = () => {
    return (
        <div className="loading">
            <Image src="/V8ls.gif"
                alt="loading_gif"
                layout='fill'
                >

            </Image>
        </div>
    )
}