const TPL_URL = "app/js/components/explorer/template/explorer.html";

export default {
	templateUrl: TPL_URL,
	bindings: {
		data: "<",
		actionEvent: "<",
		isExpanded: "<"
	}
}