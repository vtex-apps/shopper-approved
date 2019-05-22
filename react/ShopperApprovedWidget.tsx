import React,{Component} from 'react'
import { Container } from 'vtex.store-components'
import shopperApprovedWidgetWithSettings from './components/ShopperApprovedWidgetWithSettings'

type settings = {
    settings: settingsFields
    
}
type settingsFields =
{
    ShopperApprovedID : string
}
class ShopperApprovedWidget extends Component<settings> {
    constructor(props: Readonly<settings>) 
    {
        super(props);
        this.saLoadScript = this.saLoadScript.bind(this);
    }

    saLoadScript(src: string) 
    { 
        var js = window.document.createElement("script"); 
        js.src = src; 
        js.type = "text/javascript"; 
        document.getElementsByTagName("head")[0].appendChild(js); 
    } 

    componentDidMount() 
    {
        this.saLoadScript('//www.shopperapproved.com/merchant/'+this.props.settings.ShopperApprovedID+'.js'); 
    }

render()
{
    return(
        <Container>
        <div className="block-title customNavigation">Reviews from past customers</div>
        <div id="shopper_review_page">
        <script type="text/javascript">var sa_review_count = 1; var sa_date_format = 'F j, Y'; </script>
        <div id="review_header"></div>
        <div id="merchant_page"></div>
        <div id="review_image">
        <a href="https://www.shopperapproved.com/reviews/invictastores.com/" target="_blank" rel="nofollow"></a>
        </div>
        </div>
        </Container>
    )
    
}
}

export default shopperApprovedWidgetWithSettings(ShopperApprovedWidget)