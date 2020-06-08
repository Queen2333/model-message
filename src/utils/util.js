import { withRouter } from 'react-router-dom';

/**
 * 路由跳转
 * @param {object} params
 */
export function routerChange(url) {
	// console.log(this.props, url)
	this.props.history.push(url)
}