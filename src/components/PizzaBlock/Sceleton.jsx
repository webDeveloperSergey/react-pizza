import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="125" /> 
    <rect x="4" y="279" rx="10" ry="10" width="269" height="23" /> 
    <rect x="3" y="326" rx="10" ry="10" width="269" height="88" /> 
    <rect x="116" y="427" rx="25" ry="25" width="150" height="45" /> 
    <rect x="13" y="436" rx="10" ry="10" width="90" height="28" />
  </ContentLoader>
)

export default Sceleton