import Avatar from "./Avatar";
import Presentation from './Presentation'
import Kill from "./Kills";
import DownloandCv from "../cv/DownloandCv";

function Profile() {
    return <div className="px-3">
        <Avatar />
        <Presentation />
        <Kill />
        <DownloandCv />

    </div>

}

export default Profile