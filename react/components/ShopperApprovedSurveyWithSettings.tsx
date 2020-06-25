import React, { PureComponent } from 'react'
import { graphql } from 'react-apollo'
import { Spinner } from 'vtex.styleguide'

import shopperApprovedSettings from '../graphql/shopperApprovedSettings.graphql'

type WithSettingsProps = {
  data?: any
}

export default function shopperApprovedSurveyWithSettings(Component: any): any {
  class ShopperApprovedSurveyWithSettings extends PureComponent<
    WithSettingsProps
  > {
    public render() {
      const {
        data: { loading, error, appSettings },
        ...rest
      } = this.props

      if (loading) {
        return (
          <div className="mv5 flex justify-center" style={{ minHeight: 800 }}>
            <Spinner />
          </div>
        )
      }

      if (error) {
        return (
          <div className="ph5" style={{ minHeight: 800 }}>
            Error! {error.message}
          </div>
        )
      }

      if (appSettings.message != null) {
        return (
          <Component settings={JSON.parse(appSettings.message)} {...rest} />
        )
      }

      return null
    }
  }

  return graphql(shopperApprovedSettings, { options: { ssr: false } })(
    ShopperApprovedSurveyWithSettings
  )
}
