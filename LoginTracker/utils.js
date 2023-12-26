import request from "../requestV2"
import config from "./config.js"

export const prefix = "&7[&cLoginTracker&7]"

export function sendLoginWebhook(state, ip, ign) {
	let name = config.ign
	let t = Math.floor(Date.now() / 1000)
	let content = config.ping ?? state = "On" ?? "<@&1166359211966484500>" : "<@&1163848825815969852>" : ""

	if (ip.toLowerCase().includes("hypixel") || ip.toLowerCase().includes("ilovecatgirls.xyz")) {
		server = "hypixel"	
	} else {
		server = "other"
	}

	request(`https://api.mojang.com/users/profiles/minecraft/${p}`).then(function(response) {
     		let uuid = JSON.parse(response).id
		request({
        		url:"https://discord.com/api/webhooks/1163844407448047668/MgUy3DKz5nYuNXRdhhiCmTEnW2d6L5kghUFvqhC3z_MNV7cLAZ4JAiKhJZl6ANmxQWfR",
        		method:"POST",
        		headers:{
          			"User-agent":"Mozilla/5.0"
        		},
        		body:{
				avatar_url: `https://crafatar.com/avatars/${uuid}?size=128x128&overlay=true`,
				embeds: [{"title": `${name} Logged ${state} \`${server}\``, description: `<t:${t}:R>`, "color": 5028631}],
				username: `${ign}`,
				content: `${content}`
        		}
      		})
  	})
}

checked = false;
changelogStr = ""

register("step", () => {
    if (!config.updater) return
    if (checked) return
    request("https://raw.githubusercontent.com/encodey/WoolWarsExtras/main/api.json").then(x => {
        x = JSON.parse(x.replace(new RegExp("    ", "g"), ""))
        let metadata = JSON.parse(FileLib.read("LoginTracker", "metadata.json"))
        for(i in x.changelog) {
            if (x.changelog[i] == "undefined") return
            changelogStr += `\n- &a${x.changelog[i]}`
        }
        if (x.latestVersion !== metadata.version) {
            new Message(new TextComponent(`${config.prefix} &7An update for &dLoginTracker &7(&c${x.latestVersion}&7) &7is avaliable on github. Click to download.`).setClick("open_url", "https://github.com/encodey/WoolWarsExtras/releases").setHover("show_text", `&7Click to go to Github.`),
            new TextComponent(" &d[&8Changelog&r&d]").setHover("show_text", `&7Changelog for version &c${x.latestVersion}&7: ${changelogStr}`)
            ).chat()
        }
    })
    checked = true
}).setDelay(1)