import React,{Component} from 'react'
import { Container } from 'vtex.store-components'
import shopperApprovedSurveyWithSettings from './components/ShopperApprovedSurveyWithSettings'

type settings = {
    settings: settingsFields
    
}
type settingsFields =
{
    ShopperApprovedID : string
    ShopperApprovedToken : string
}
class ShopperApprovedSurvey extends Component<settings> {
    constructor(props: Readonly<settings>) 
    {
        super(props);
        this.saLoadScript = this.saLoadScript.bind(this);
    }
    saLoadScript(src: string) 
    { 
        var js2 = window.document.createElement("script"); 
        js2.type = "text/javascript"; 
        js2.textContent = 'var sa_values = { "site":'+this.props.settings.ShopperApprovedID+', "token":"'+this.props.settings.ShopperApprovedToken+'" }';
        document.getElementsByTagName("head")[0].appendChild(js2); 

        var js = window.document.createElement("script"); 
        js.src = src; 
        js.type = "text/javascript"; 
        document.getElementsByTagName("head")[0].appendChild(js); 
        
    } 
        componentDidMount() 
        {
            var d = new Date(); 
            if (d.getTime() - 172800000 > 1477399567000) 
            {
                this.saLoadScript("//www.shopperapproved.com/thankyou/rate/"+this.props.settings.ShopperApprovedID+".js");
            } 
            else
            {
                this.saLoadScript("//direct.shopperapproved.com/thankyou/rate/"+this.props.settings.ShopperApprovedID+".js?d=" + d.getTime()); 
            }
        }
    
    render()
    {
       
        return(null)
        
    }
}

export default shopperApprovedSurveyWithSettings(ShopperApprovedSurvey)