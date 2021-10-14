export default function ({ $axios, redirect,store }) {
    $axios.onRequest((config) => {
      // console.log('Making request to ' + config.url)
      if (store.state.token) {
        config.headers.common['Bearer'] = `${store.state.token}`
        config.headers.common['sdata'] = store.state.sdata
      }
    })
  
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        // console.log('error 123')
        redirect('/')
      }
    })
  }
