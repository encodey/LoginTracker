import { sendLoginWebhook } from "./utils.js"
import config from "./config.js"

register("command", () => {
	config.openGUI()
}).setCommandName("logintracker")

register("serverConnect", () => {
	sendLoginWebhook("On", Server.getIP(), Player.getName())
})

register("serverDisconnect", () => {
	sendLoginWebhook("Off", Server.getIP(), Player.getName())
})

