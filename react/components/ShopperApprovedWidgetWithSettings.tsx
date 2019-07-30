import React,{Component,PureComponent} from 'react'
import { Helmet } from "react-helmet"
import { graphql } from 'react-apollo'
import shopperApprovedSettings from '../graphql/shopperApprovedSettings.graphql'
import { Spinner } from 'vtex.styleguide'

type WithSettingsProps = {
    data?: any
}

export default function shopperApprovedWidgetWithSettings(Component: any): any {
    class shopperApprovedWidgetWithSettings extends PureComponent<WithSettingsProps> {
        render() {
            const { data: { refetch, loading, error, appSettings }, ...rest } = this.props
            if (loading) {
                return <div className="mv5 flex justify-center" style={{minHeight: 800}}><Spinner /></div>;
            } else if (error) {
                return <div className="ph5" style={{minHeight: 800}}>Error! {error.message}</div>;
            } else if (appSettings.message != null) {
                return <Component settings={JSON.parse(appSettings.message)} {...rest} />
            } else {
                return null
            }
            
        }
    }

    return graphql(shopperApprovedSettings, { options: { ssr: false }})(shopperApprovedWidgetWithSettings)}