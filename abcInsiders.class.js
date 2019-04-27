/**
 * Created by afakes on 20/09/2016.
 *
 * @NAME: ABC Insiders
 * @ICON: http://www.abc.net.au/favicon.ico
 */

import * as rssBase from './rssBase.class.js';
export default class abcInsiders extends rssBase.default {

	/**
	 * @returns {string[]}
	 */
	get feeds() {
		return [
			'https://www.abc.net.au/insiders/feed/8618000/podcast.xml'
		];
	}

	get icon() {
		return "http://www.abc.net.au/favicon.ico"
	}

	get description() {
		return "ABC Insiders";
	}

}
