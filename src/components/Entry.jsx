export default function Entry(props) {
    return (
        <article className="journal-entry"> {/*more semantically accurate  than just a div*/}
            <div className="main-image-container"> {/*added to fit image without ruining aspect ratio or shrinking image*/}
                <img className="main-image" src={props.img.src} alt={props.img.alt} />
            </div>
            
            <div className="main-content">
                <div className="section1">
                    <img src="src/assets/marker.png" alt="globeIcon" className="entrymarker"/>
                    <span className="country">{props.country}</span> {/*used for inline text*/}
                    <a className="gmlink" href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2 className="section2">{props.title}</h2>
                <p className="section3">{props.dates}</p>
                <p className="section4">{props.text}</p>
            </div>
        </article>
    );
}