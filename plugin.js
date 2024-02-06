import { UiManager } from './uiManager.js';

export default class MoreNgpLoader {
	prestart() {
		sc.NewGamePlusModel.inject({
			getEXPMultiplier: function() {
				if (!this.active)
					return 1;
				if (this.options["exp-plus-2"])
					return 2;
				if (this.options["exp-plus-4"])
					return 4;
				if (this.options["exp-plus-8"])
					return 8;
				if (this.options["exp-plus-16"])
					return 16;
				return 1;
			}
		});
		sc.NewGamePlusModel.inject({
			getMoneyMultiplier: function() {
				if (!this.active)
					return 1;
				if (this.options["money-plus-2"])
					return 2;
				if (this.options["money-plus-4"])
					return 4;
				if (this.options["money-plus-8"])
					return 8;
				if (this.options["money-plus-16"])
					return 16;
				return 1;
			}
		});
		sc.NewGamePlusModel.inject({
			getDropRateMultiplier: function() {
				if (!this.active)
					return 1;
				if (this.options["drop-rate-2"])
					return 2;
				if (this.options["drop-rate-4"])
					return 4;
				if (this.options["drop-rate-8"])
					return 8;
				if (this.options["drop-rate-16"])
					return 16;
				return 1;
			}
		});
	}
	
	main() {
		let uiManager = new UiManager();
		uiManager.addEntry('exp-plus-8', 'EXP x 8', 'Gain 700% more experience from all sources.', 'exp', 100);
		uiManager.addEntry('exp-plus-16', 'EXP x 16', 'Gain 1500% more experience from all sources.', 'exp', 200);
		uiManager.addEntry('money-plus-8', 'Credits x 8', 'Gain 700% more credits from all sources.', 'money', 100);
		uiManager.addEntry('money-plus-16', 'Credits x 16', 'Gain 1500% more credits from all sources.', 'money', 200);
		uiManager.addEntry('drop-rate-8', 'Drop Rate x 8', 'Increases drop rate for items from plants and enemies by 700%.', 'drop-rate', 100);
		uiManager.addEntry('drop-rate-16', 'Drop Rate x 16', 'Increases drop rate for items from plants and enemies by 1500%.', 'drop-rate', 200);
	}
}