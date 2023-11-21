import facebook from '../assets/icons/facebook.svg'
import youtube from '../assets/icons/youtube.svg'
import twitter from '../assets/icons/twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'

const Footer = () => (
    <footer>
    <p className='footerText'>SENAI Florianópolis (CTAI)<br/>Fone: (48) 3239-5800<br/>
        SC-401, 3730 - Saco Grande, Florianópolis - SC, 88032-005</p>
    <div className="logos">
        <a href="https://www.facebook.com/senaisc/" title="Ir para Facebook" target="_blank">
              <img src={facebook} alt="Facebook" className='logoImg grow'/>
        </a>
        <a href="https://www.youtube.com/@senaiconhecimento" title="Ir para YouTube" target="_blank">
              <img src={youtube} alt="YouTube" className='logoImg grow'/>
        </a>
        <a href="https://twitter.com/SENAIsc" title="Ir para Twitter" target="_blank">
              <img src={twitter} alt="Twitter" className='logoImg grow'/>
        </a>
        <a href="https://www.linkedin.com/school/senai-sc/" title="Ir para LinkedIn" target="_blank">
              <img src={linkedin} alt="LinkedIn" className='logoImg grow'/>
        </a>
        <a href="https://www.instagram.com/senai.sc/" title="Ir para Instagram" target="_blank">
              <img src={instagram} alt="Instagram" className='logoImg grow'/>
        </a>
    </div>
</footer>
)

export default Footer;