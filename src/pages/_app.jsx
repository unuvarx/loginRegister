import React from "react";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
