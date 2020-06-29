import React, { FunctionComponent } from 'react'
import { useQuery } from 'react-apollo'

import useScriptLoader from './hooks/useScriptLoader'
import AppSettings from './graphql/shopperApprovedSettings.graphql'

interface SettingsProps {
  settings: Settings
}

interface Settings {
  ShopperApprovedID: string
  ShopperApprovedToken: string
}

const ShopperApprovedSurveyInner: FunctionComponent<SettingsProps> = ({
  settings,
}) => {
  const d = new Date()
  const js2 = window.document.createElement('script')

  js2.type = 'text/javascript'
  js2.textContent = `var sa_values = { "site":${settings.ShopperApprovedID}, "token":"${settings.ShopperApprovedToken}" }`
  document.getElementsByTagName('head')[0].appendChild(js2)

  useScriptLoader(
    d.getTime() - 172800000 > 1477399567000
      ? `//www.shopperapproved.com/thankyou/rate/${settings.ShopperApprovedID}.js`
      : `//direct.shopperapproved.com/thankyou/rate/${
          settings.ShopperApprovedID
        }.js?d=${d.getTime()}`,
    'shopperapproved'
  )

  return null
}

const ShopperApprovedSurvey: FunctionComponent = () => {
  const { data } = useQuery(AppSettings, { ssr: false })

  if (!data?.appSettings?.message) return null

  const settings = JSON.parse(data.appSettings.message)

  if (!settings.ShopperApprovedID) {
    console.warn(
      'No Shopper Approved ID defined. Please add it in the app settings.'
    )

    return null
  }

  if (!settings.ShopperApprovedID) {
    console.warn(
      'No Shopper Approved Token defined. Please add it in the app settings.'
    )

    return null
  }

  return <ShopperApprovedSurveyInner settings={settings} />
}

export default ShopperApprovedSurvey
