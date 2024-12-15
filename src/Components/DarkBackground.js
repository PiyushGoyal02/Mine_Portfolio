import DarkVideo from "../Assets/DarkVideo.mp4";
import "../CSS_Code/DarkBackgroundCSS.css"

function DarkBackground() {
    return (
        <div>
            <video className="dark-video" loop muted autoPlay>
                <source src={DarkVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default DarkBackground;
