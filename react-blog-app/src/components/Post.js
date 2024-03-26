import './component-styles/post.css'
export default function Post() {
    return (
        <div className="post">
            <div className="image">
                <img alt="asd" src="https://media.istockphoto.com/id/543336084/photo/silhouette-telecommunication-towers-with-tv-antennas-satellite-dish-in-sunset.jpg?s=2048x2048&w=is&k=20&c=O8mP-L5sUYpfc7iBvB_343auoLKE1vKmWivn0Sm8FGI=" />
            </div>
            <div className="texts">
                <div><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</b></div>
                <div className="info">
                    <div className="info-author">
                        <div>
                            Swarnim Bhatt
                        </div>
                        <time>
                            23:58 23-03-2024
                        </time>
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy

                    </div>
                </div>
            </div>
        </div>
    )
}