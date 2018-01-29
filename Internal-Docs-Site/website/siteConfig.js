/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = ["SteveKennaird"];

const siteConfig = {
  title: "Talent Toolbox Docs" /* title for your website */,
  tagline: "All that you need to know about Talent Toolbox",
  url: "https://www.purplecubed.com" /* your website url */,
  baseUrl: "/talent-toolbox/" /* base url for your project */,
  projectName: "talent-toolbox",
  headerLinks: [
    { doc: "doc1", label: "Docs" },
    { doc: "doc4", label: "API" },
    { page: "help", label: "Help" },
    { blog: true, label: "Blog" }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: null,
  footerIcon: null,
  favicon: "img/favicon.png",
  /* colors for website */
  colors: {
    primaryColor: "#31254b",
    secondaryColor: "#205C3B"
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + " Purple Cubed",
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: "https://github.com/facebook/test-site"
};

module.exports = siteConfig;
