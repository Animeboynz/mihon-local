// @ts-nocheck

if (process.env.VITE_APP_ANALYTICS_ID?.length) {
  const analyticsScript = document.createElement('script')

  analyticsScript.addEventListener('load', () => {
    if (window.location.hostname !== 'localhost') {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments) }

      gtag('js', new Date())
      gtag('config', process.env.VITE_APP_ANALYTICS_ID)
    }
  })

  analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.VITE_APP_ANALYTICS_ID}`

  document.body.appendChild(analyticsScript)
}
