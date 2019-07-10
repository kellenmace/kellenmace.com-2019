import React from "react"

import { rhythm } from "../utils/typography"

// Google AdSense "Horizontal Ad"
const Ad = () => (
  <div
    style={{
      marginBottom: rhythm(1.2),
    }}
  >
    <script
      async
      src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    ></script>
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1787354583005184"
      data-ad-slot="7452273633"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
    <script
      dangerouslySetInnerHTML={{
        __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
      }}
    ></script>
  </div>
)

export default Ad
