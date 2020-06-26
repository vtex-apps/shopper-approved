/* eslint-disable jsx-a11y/anchor-has-content */
import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { Container } from 'vtex.store-components'
import { useQuery } from 'react-apollo'
import { useCssHandles } from 'vtex.css-handles'

import useScriptLoader from './hooks/useScriptLoader'
import AppSettings from './graphql/shopperApprovedSettings.graphql'

interface SettingsProps {
  settings: Settings
}

interface Settings {
  ShopperApprovedID: string
  ShopperApprovedDomain: string
}

const CSS_HANDLES = ['shopperApprovedWidgetContainer'] as const

const ShopperApprovedWidgetInner: FunctionComponent<SettingsProps> = ({
  settings,
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  useScriptLoader(
    `//www.shopperapproved.com/merchant/${settings.ShopperApprovedID}.js`,
    'shopperapproved'
  )

  const script = `var sa_review_count = 1; var sa_date_format = 'F j, Y';`

  return (
    <Container className={handles.shopperApprovedWidgetContainer}>
      <div className="block-title customNavigation">
        <FormattedMessage id="store/shopperApproved.widget.title" />
      </div>
      <div id="shopper_review_page">
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: script }}
        />
        <div id="review_header" />
        <div id="merchant_page" />
        <div id="review_image">
          <a
            href={`https://www.shopperapproved.com/reviews/${settings.ShopperApprovedDomain}/`}
            target="_blank"
            rel="nofollow noreferrer"
          />
        </div>
      </div>
    </Container>
  )
}

const ShopperApprovedWidget: FunctionComponent = () => {
  const { data } = useQuery(AppSettings, { ssr: false })

  if (!data?.appSettings?.message) return null

  const settings = JSON.parse(data.appSettings.message)

  if (!settings.ShopperApprovedID) {
    console.warn(
      'No Shopper Approved ID defined. Please add it in the app settings.'
    )

    return null
  }

  if (!settings.ShopperApprovedToken) {
    console.warn(
      'No Shopper Approved Token defined. Please add it in the app settings.'
    )

    return null
  }

  return <ShopperApprovedWidgetInner settings={settings} />
}

export default ShopperApprovedWidget
