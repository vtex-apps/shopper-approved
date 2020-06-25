/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'
import { Container } from 'vtex.store-components'

import shopperApprovedWidgetWithSettings from './components/ShopperApprovedWidgetWithSettings'

type settings = {
  settings: settingsFields
}
type settingsFields = {
  ShopperApprovedID: string
  ShopperApprovedDomain: string
}
class ShopperApprovedWidget extends Component<settings> {
  constructor(props: Readonly<settings>) {
    super(props)
    this.saLoadScript = this.saLoadScript.bind(this)
  }

  public saLoadScript(src: string) {
    const js = window.document.createElement('script')

    js.src = src
    js.type = 'text/javascript'
    document.getElementsByTagName('head')[0].appendChild(js)
  }

  public componentDidMount() {
    this.saLoadScript(
      `//www.shopperapproved.com/merchant/${this.props.settings.ShopperApprovedID}.js`
    )
  }

  public render() {
    const script = `var sa_review_count = 1; var sa_date_format = 'F j, Y';`

    return (
      <Container>
        <div className="block-title customNavigation">
          Reviews from past customers
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
              href={`https://www.shopperapproved.com/reviews/${this.props.settings.ShopperApprovedDomain}/`}
              target="_blank"
              rel="nofollow noreferrer"
            />
          </div>
        </div>
      </Container>
    )
  }
}

export default shopperApprovedWidgetWithSettings(ShopperApprovedWidget)
