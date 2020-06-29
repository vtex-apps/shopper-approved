📢 Use this project, [contribute](https://github.com/vtex-apps/shopper-approved) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Shopper Approved

This app provides blocks for the Shopper Approved survey, widget, and seal components, which allow shoppers to submit and view reviews of your store as a whole.

The app provides the following blocks:

- `shop-review-badge.shopper-approved-seal`: This block displays the average rating for your store and is typically placed in the footer. Shoppers can click the seal to visit the Shopper Approved site where all of the reviews of your store are listed.

- `shop-review-badge.shopper-approved-widget`: This block displays a paginated list of reviews of your store. This block is typically placed in a sidebar or perhaps on its own page of your site.

- `shop-review-badge.shopper-approved-survey`: This block opens a popup that prompts the shopper to submit a review of your store. This block is typically placed on the Order Placed page so that the shopper will be prompted to leave a review after placing an order.

## Configuration

1. In your `store-theme`, add `vtex.shopper-approved` and `vtex.shop-review-interfaces` as dependencies:

```json
"dependencies": {
    "vtex.shopper-approved": "1.x",
    "vtex.shop-review-interfaces": "0.x"
  }
```

2. In your `store-theme`, add the desired Shopper Approved blocks to the appropriate JSON files within your `store/` folder according to where you would like the blocks to appear.

3. In your admin dashboard, navigate to `Apps > Shopper Approved` and input the following settings:

- `Shopper Approved site ID`: Enter the site ID from your Shopper Approved account.

- `Shopper Approved Initial Survey token`: Enter the Initial Survey token from your Shopper Approved account.

- `Shopper Approved domain`: Enter your store domain as it appears in your Shopper Approved account. Typically this is in the form `yourstore.com`.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
