import React,{Component} from 'react'
import { Container } from 'vtex.store-components'
import shopperApprovedSealWithSettings from './components/ShopperApprovedSealWithSettings'

type settings = {
    settings: settingsFields
    
}
type settingsFields =
{
    ShopperApprovedID : string
}
class ShopperApprovedSeal extends Component<settings> {
    
constructor(props: Readonly<settings>) 
    {
        super(props);
        this.contextMenuFunction = this.contextMenuFunction.bind(this);
    }

        componentDidMount() 
        {
            var js = window.document.createElement("script"); 
            js.src = ('//www.shopperapproved.com/seals/certificate.js'); 
            js.type = "text/javascript"; 
            document.getElementsByTagName("head")[0].appendChild(js);
        }
    contextMenuFunction(e: { preventDefault: () => void; })
    {
        var d = new Date(); 
        alert('Copying Prohibited by Law - This image and all included logos are copyrighted by Shopper Approved © '+d.getFullYear()+'.'); 
        e.preventDefault();
        return false;
    }
    render()
    {
        return(
            <Container>
            <a href="https://www.shopperapproved.com/reviews/invictastores.com/" className="shopperlink">
            <img src={"//www.shopperapproved.com/newseals/"+this.props.settings.ShopperApprovedID+"/white-mini-icon.gif"} style={{border: 0}} alt="Customer Reviews" onContextMenu={this.contextMenuFunction} />
            </a>
            </Container>
        )
        
    }
    
}

export default shopperApprovedSealWithSettings(ShopperApprovedSeal)