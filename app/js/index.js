import angular from "angular";
import desktopView from "./components/desktop-view/index";
import startPanelView from "./components/start-panel/index";
import iconView from "./components/icon/index";
import explorerView from "./components/explorer/index";

const desktopApp = angular.module("desktop-app", []);

/* inner components */
desktopApp.component("desktopIcon", iconView);
desktopApp.component("explorerPanel", explorerView);

/* outer components */
desktopApp.component("desktopView", desktopView);
desktopApp.component("startPanel", startPanelView);

export default desktopApp;
