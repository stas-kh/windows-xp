export default class {
	constructor() {
		this.data = {
			icons: [{
				bgUrl: "http://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/128/Computer-icon.png",
				title: "My computer",
				data: {
					folders: ["Gulp", "Yarn", "node_modules", "Music", "Pictures", "Football", "Photos"],
					files: [".yarnlock", ".gitignore", "nvm.msi", "silent-hill.mkv"]
				}
			}, {
				bgUrl: "http://www.graphicsfuel.com/wp-content/uploads/2012/03/folder-icon-512x512.png",
				title: "Downloads",
				data: {
					folders: ["Temp", "Roaming", "Data"],
					files: ["backup.jsx", "passwords.docx"]
				}
			}, {
				bgUrl: "http://icons.iconarchive.com/icons/arrioch/app/128/total-Commander-icon.png",
				title: "Total commander",
				data: {
					folders: ["Downloads", "Program Files (x86)"]
				}
			}]
		};

		this.dataInExplorer = null;
		this.isExplorerShown = false;

		this.openExplorer = (items, title) => {
			this.dataInExplorer = {items, title};
			this.isExplorerShown = true;
		};
		this.closeExplorer = () => {
			this.isExplorerShown = false;
			this.dataInExplorer = null;
		}
	}
}