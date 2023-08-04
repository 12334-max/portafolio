import Avatar from "./Avatar";
import Presentation from './Presentation'
import Kill from "./Kills";
import DownloandCv from "../cv/DownloandCv";
import Icons from "../cv/Icons";

function Profile() {
    return <div className="px-3">
        <Avatar />
        <Presentation />
        <Kill />
        <Icons />
        <DownloandCv />
    </div>

}

export default Profile