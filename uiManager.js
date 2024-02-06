export class UiManager {
	constructor() {
	}

	/**
     * 
     * @param {string} name
     * @param {string} display
     * @param {'SINGLE' | 'MULTI'} type How many options can be selected
     * @param {number} [order]
     */
	addCategory(name, display, type, order) {
		if (typeof order !== 'number') {
			order = this._getLastOrder() + 100;
		}

		sc.NEW_GAME_SETS[name] = {type, order};
		ig.lang.labels.sc.gui.menu['new-game'].sets[name] = display;

		const cat = name;
		return {
			/**
			 * 
			 * @param {string} name 
			 * @param {string} display
			 * @param {string} description
			 * @param {number} cost 
			 * @param {boolean} [needsSaveFile]
			 */
			addEntry: (name, display, description, cost, needsSaveFile) => {
				return this.addEntry(name, display, description, cat, cost, needsSaveFile); 
			}
		};
	}

	/**
     * 
     * @param {string} name 
     * @param {string} display
     * @param {string} description
     * @param {string} cat The exact name of the category
     * @param {number} cost 
     * @param {boolean} [needsSaveFile]
     */
	addEntry(name, display, description, cat, cost, needsSaveFile) {
		sc.NEW_GAME_OPTIONS[name] = {
			set: cat,
			cost: cost,
			needsSaveFile: needsSaveFile,
		};
        debugger;
		ig.lang.labels.sc.gui.menu['new-game'].options.names[name] = display;
		ig.lang.labels.sc.gui.menu['new-game'].options.descriptions[name] = description;
	}
    
}