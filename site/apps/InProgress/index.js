import NProgress from 'nprogress'
import React from 'react'
import './index.less'

class InProgress extends React.Component {
  state = {
    imageStatus: 'loading'
  }

  handleImageLoaded = () => {
    this.setState({ imageStatus: 'loaded' })
    NProgress.done()
  }

  handleImageErrored = () => {
    this.setState({ imageStatus: 'failed' })
    NProgress.done()
  }

  render () {
    const text = 'Coming soon...'
    if (this.state.imageStatus === 'loading') {
      return (
        <img
          style={{ display: 'none' }}
          src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/in_progress.png"
          alt={text}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}
        />
      )
    }
    return (
      <div className="in-progress">
        {this.state.imageStatus === 'loaded' && (
          <img
            className="in-progress__image"
            src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/in_progress.png"
            alt={text}
            draggable="false"
          />
        )}
        <p>{text}</p>
      </div>
    )
  }
}

export default InProgress
