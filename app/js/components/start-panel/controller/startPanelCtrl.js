class StartPanelCtrl {
	constructor($interval) {
		this._date = new Date();

		$interval(() => {
			this._date = new Date();
		}, 60 * 1000);
	}
	get date() {
		return this._date;
	}
}

StartPanelCtrl.$inject = ["$interval"];

export default StartPanelCtrl;