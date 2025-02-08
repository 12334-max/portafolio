import Avatar from "../components/profile/Avatar"
import Presentation from "../components/profile/Presentation"
import Kill from "../components/profile/Kills"
import Icons from "../components/cv/Icons"
import DownloandCv from "../components/cv/DownloandCv"

function ProfileSection() {
    return <>
        <section className="dark:bg-slate-950 justify-items-center rounded-xl">
            <Avatar />
            <Presentation />
            <Kill />
            <Icons />
            <DownloandCv />
        </section>
    </>
}

export default ProfileSection