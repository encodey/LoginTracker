import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
    @SliderProperty
} from '../Vigilance/index';

@Vigilant("LoginTracker", "LoginTracker", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },
})

class config {

    @TextProperty({
        name: "Username",
        description: "ign you want to show when u log",
        category: "General",
        subcategory: "Data",
    })
    ign = "unknown";

@SwitchProperty({
        name: "Send ping message",
        description: "Toggle pinging users",
        category: "General",
        subcategory: "Ping",
    })
    ping = false;

@SwitchProperty({
        name: "Check for updates",
        description: "Automatically checks for updates",
        category: "General",
        subcategory: "Updates",
    })
    updater = false;


	

    constructor() {
        this.initialize(this)
        this.setCategoryDescription("General", 
        "&b&lLoginTracker\n" + 
        "\n&aWHO LOGGED ME OFF!!!!!!!\n" +
        "\n&c&lMade by encodey")

    }
}
export default new config()