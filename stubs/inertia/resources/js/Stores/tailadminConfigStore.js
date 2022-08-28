import { defineStore } from "pinia";

export const useConfigStore = defineStore("configStore", {
    state: () => ({
        app: {
            name: "TailAdmin",
            shortName: "TA",
        },
        layout: {
            menuType: "ClassicMenu",
        },
        styles: {
            sideMenu: {
                classic: {
                    wrapper: ["bg-slate-800"],
                    textLogo: [
                        "text-3xl",
                        "font-bold",
                        "text-center",
                        "text-white",
                        "mt-4",
                    ],
                    linksWrapper: ["mt-10", "px-2"],
                    rootLinkWrapper: {
                        base: ["flex", "flex-col", "justify-between", "w-full", "overflow-hidden"],
                        default: ["text-white"],
                        active: ["text-sky-500", "border", "border-sky-500", "rounded-md"],
                        passive: []
                    },
                    rootLink: {
                        base: ["flex", "justify-between", "items-center", "px-4", "w-full", "cursor-pointer", "py-2", "h-10"],
                        default: [],
                        active: ["bg-sky-500", "text-white", ],
                        passive: []
                    },
                    secondLinkContainer: [],
                    secondLinkWrapper: {
                        base: ["flex", "flex-col", "justify-between", "w-full", "overflow-hidden"],
                        default: ["text-white"],
                        active: ["text-sky-500", "border", "border-sky-500", "rounded-md"],
                        passive: []
                    },
                    secondLink: {
                        base: ["flex", "justify-between", "items-center", "px-4", "py-2","w-full", "cursor-pointer", "h-10"],
                        default: ["hover:bg-sky-500/25"],
                        active: [],
                        passive: []
                    },
                    thirdLinkContainer: ["border-t", "border-sky-500", "bg-sky-500/10"],
                    thirdLinkWrapper: {
                        base: ["flex", "flex-col", "justify-between", "w-full", "overflow-hidden"],
                        default: ["text-white"],
                        active: ["text-sky-500", "border", "border-sky-500", "rounded-md"],
                        passive: []
                    },
                    thirdLink: {
                        base: ["flex", "justify-between", "items-center", "px-4", "py-2","w-full", "cursor-pointer", "h-10"],
                        default: ["hover:bg-sky-500/25"],
                        active: [],
                        passive: []
                    },
                },
            },
        },
    }),
    actions: {},
});
