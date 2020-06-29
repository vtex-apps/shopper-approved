import React, { FunctionComponent } from 'react'
import { Container } from 'vtex.store-components'
import { useQuery } from 'react-apollo'
import { defineMessages, injectIntl, WrappedComponentProps } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import useScriptLoader from './hooks/useScriptLoader'
import AppSettings from './graphql/shopperApprovedSettings.graphql'

const CSS_HANDLES = ['shopperApprovedSealContainer'] as const

const messages = defineMessages({
  altText: {
    defaultMessage: 'Customer Reviews',
    id: 'store/shopperApproved.seal.altText',
  },
})

const ShopperApprovedSeal: FunctionComponent<WrappedComponentProps> = ({
  intl,
}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const { data } = useQuery(AppSettings, { ssr: false })

  useScriptLoader(
    '//www.shopperapproved.com/seals/certificate.js',
    'shopperapproved'
  )

  function handleContextMenuFunction(e: { preventDefault: () => void }) {
    const d = new Date()

    // eslint-disable-next-line no-alert
    alert(
      `Copying Prohibited by Law - This image and all included logos are copyrighted by Shopper Approved © ${d.getFullYear()}.`
    )
    e.preventDefault()

    return false
  }

  if (!data?.appSettings?.message) return null

  const settings = JSON.parse(data.appSettings.message)

  if (!settings.ShopperApprovedID) {
    console.warn(
      'No Shopper Approved ID defined. Please add it in the app settings.'
    )

    return null
  }

  if (!settings.ShopperApprovedDomain) {
    console.warn(
      'No Shopper Approved Domain defined. Please add it in the app settings.'
    )

    return null
  }

  return (
    <Container className={handles.shopperApprovedSealContainer}>
      <a
        href={`https://www.shopperapproved.com/reviews/${settings.ShopperApprovedDomain}/`}
        className="shopperlink"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`//www.shopperapproved.com/newseals/${settings.ShopperApprovedID}/white-mini-icon.gif`}
          style={{ border: 0 }}
          alt={intl.formatMessage(messages.altText)}
          onContextMenu={handleContextMenuFunction}
        />
      </a>
    </Container>
  )
}

export default injectIntl(ShopperApprovedSeal)
