export default function Entry() {
    return (
        <div className="entry1">
            <img className="main-image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fuji" />
            <div className="main-content">
                <div className="section1">
                    <img src="src/assets/marker.png" alt="globeIcon" className="entrymarker"/>
                    <text className="country">JAPAN</text>
                    <a className="gmlink" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                </div>
                <h1 className="section2">Mount Fuji</h1>
                <div className="section3">12 Jan, 2023 - 24 Jan, 2023</div>
                <text className="section4">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</text>
            </div>
        </div>
    );
}