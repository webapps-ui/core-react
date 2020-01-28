import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

class SubNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: !props.collapsed
    }
  }

  handleClickIcon = e => {
    e.preventDefault()
    for (const child of React.Children.toArray(this.props.children)) {
      if (child.type.name === 'NavItemGroup') {
        this.context.nav.handleSubNavClick(child.props.children[0].props)
        break
      }
      if (child.type.name === 'NavItem') {
        this.context.nav.handleSubNavClick(child.props)
        break
      }
    }
    this.setState({ open: true })
  }

  handleClick = e => {
    this.props.onClick && this.props.onClick(e)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ open: !nextProps.collapsed })
  }

  render () {
    const { open } = this.state
    const { children, className, icon, title, ...other } = this.props

    const NavIcon = icon && <Icon className={`${prefixCls}-nav-bar__sub-nav-icon`} src={icon} />
    let indentStyle

    const selectedId = this.context.nav.state.selectedId
    let active = false
    React.Children.forEach(children, child => {
      if (child.type.name === 'NavItemGroup') {
        if (React.Children.toArray(child.props.children).some(v => selectedId === v?.props?.id)) {
          active = true
        }
      }
      if (child.type.name === 'NavItem') {
        if (selectedId === child?.props?.id) {
          active = true
        }
      }
    })

    // Child nodes are no longer rendered when the nav item is closed.
    return (
      <li
        onClick={this.handleClick}
        className={cx(
          `${prefixCls}-nav-bar__sub-nav`,
          {
            [`${prefixCls}-nav-bar__sub-nav_open`]: open
          },
          {
            [`${prefixCls}-nav-bar__sub-nav--active`]: active
          },
          className
        )}
        {...other}
      >
        <div className={`${prefixCls}-nav-bar__sub-nav-entity`} onClick={this.handleClickIcon} style={indentStyle}>{NavIcon}</div>
        {open && active && children && (
          <div className={`${prefixCls}-nav-bar__sub-nav-right`}>
            <div className={`${prefixCls}-nav-bar__sub-nav-right-title`}>{title}</div>
            <ul>{children}</ul>
          </div>
        )}
      </li>
    )
  }
}

SubNav.contextTypes = {
  nav: PropTypes.object
}

SubNav.propTypes = {
  className: PropTypes.string,

  collapsed: PropTypes.bool,

  // 二级导航的导航项
  children: PropTypes.node.isRequired,

  // 二级导航标题，可以是文本字符串，也可以是 React 元素
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  // 点击二级导航项调用此函数
  onClick: PropTypes.func,

  // 二级导航项图标，参考 Icon 组件 type 属性
  icon: PropTypes.string
}

export default SubNav
