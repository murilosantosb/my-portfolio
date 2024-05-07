import { LinkedInIcon } from "../icones/linkedin-icon"
import { GitHubIcon } from "../icones/github-icon"
import { InstaIcon } from "../icones/insta-icon"
import { EmailIcon } from "../icones/email-icon"

const SocialBtns = () => {
  return (
    <section>
        <InstaIcon/>
        <LinkedInIcon/>
        <GitHubIcon/>

        <span>
            <h2>Contate-me</h2>
            <EmailIcon />
        </span>
    </section>
  )
}

export default SocialBtns
