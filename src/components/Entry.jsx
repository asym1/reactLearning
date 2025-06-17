export default function Entry() {
    return (
        <article className="journal-entry"> {/*more semantically accurate  than just a div*/}
            <div className="main-image-container"> {/*added to fit image without ruining aspect ratio or shrinking image*/}
                <img className="main-image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fuji" />
            </div>
            
            <div className="main-content">
                <div className="section1">
                    <img src="src/assets/marker.png" alt="globeIcon" className="entrymarker"/>
                    <span className="country">JAPAN</span> {/*used for inline text*/}
                    <a className="gmlink" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                </div>
                <h2 className="section2">Mount Fuji</h2>
                <p className="section3">12 Jan, 2023 - 24 Jan, 2023</p>
                <p className="section4">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    );
}