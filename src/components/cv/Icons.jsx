import { BsGithub, BsLinkedin, BsFacebook, BsSkype } from "react-icons/bs";

function Icons() {
    return (
        <div className="flex space-x-3 pb-10 justify-center items-center w-60 md:w-60 lg:w-auto ">
            <a className="hover:-translate-y-1 hover:scale-100 duration-300" href="https://github.com/12334-max" target="_blank"><BsGithub size={30} /></a>
            <a className="hover:-translate-y-1 hover:scale-100 duration-300" href="https://www.linkedin.com/in/javier-p%C3%A9rez-059366247/" target="_blank"><BsLinkedin size={30} /></a>
            <a className="hover:-translate-y-1 hover:scale-100 duration-300" href="https://www.facebook.com/profile.php?id=100030794299370" target="_blank"><BsFacebook size={30} /></a>
            <a className="hover:-translate-y-1 hover:scale-100 duration-300" href="https://join.skype.com/invite/nd7GoUIUOfYp" target="_blank"><BsSkype size={30} /></a>
        </div>
    )
}

export default Icons