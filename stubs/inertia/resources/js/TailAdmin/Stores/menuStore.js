// State Management
import { defineStore } from "pinia";

// Breakpoint Tracker
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);

export const useMenuStore = defineStore("menuStore", {
    state: () => ({
        menuStatus: "show",
        breakpoints: {},
        activeLinks: [],
    }),
    actions: {
        toggle() {
            //Show hide side-menu
            if (this.isLargeScreen.value) {
                this.menuStatus = this.menuStatus === "show" ? "mini" : "show";
            } else {
                this.menuStatus =
                    this.menuStatus === "show" ? "hidden" : "show";
            }
        },
        selectLink(id) {
            //Parse link id for detection of the active links
            let i = id.split("-");

            if (Object.values(this.activeLinks).toString() === i.toString()) {
                //If same link
                i.pop();
                this.activeLinks = i;
            } else {
                //If new link
                this.activeLinks = i;
            }

            this.menuStatus = 'show'
        },
    },
    getters: {
        isLargeScreen: () => {
            //Detection of the large screen
            return breakpoints.greater("sm");
        },
    },
});
