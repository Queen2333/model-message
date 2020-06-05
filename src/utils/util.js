import { createBrowserHistory  } from 'history';

const history = createBrowserHistory ();


/**
 * 路由跳转
 * @param {object} params
 */
export function routerChange(url) {
	history.push(url)
}