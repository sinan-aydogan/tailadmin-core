import { ref } from "vue";
import { useI18n } from "vue-i18n";

export default function (roles, permissions) {
    //Translate
    const { t } = useI18n();

    // Links
    const menuLinks = ref([
        {
            id: "dashboard",
            label: t("menuLabel.dashboard"),
            type: "dropdown",
            link: "dashboard",
            icon: "fa-solid fa-home",
        },
        {
            id: "uiComponent",
            label: t("menuLabel.uiComponents"),
            type: "dropdown",
            icon: "fa-solid fa-paint-roller",
            subLinks: [
                {
                    id: "uiComponent-alert",
                    label: t("menuLabel.alert"),
                    type: "route",
                    link: "component.alert",
                    icon: "fa-solid fa-triangle-exclamation",
                },
                {
                    id: "uiComponent-avatar",
                    label: t("menuLabel.avatar"),
                    type: "route",
                    link: "component.avatar",
                    icon: "fa-solid fa-image-portrait",
                },
                {
                    id: "uiComponent-badge",
                    label: t("menuLabel.badge"),
                    type: "route",
                    link: "component.badge",
                    icon: "fa-solid fa-tags",
                },
                {
                    id: "uiComponent-breadcrumb",
                    label: t("menuLabel.breadcrumb"),
                    type: "route",
                    link: "component.breadcrumb",
                    icon: "fa-solid fa-bookmark",
                },
                {
                    id: "uiComponent-button",
                    label: t("menuLabel.button"),
                    type: "route",
                    link: "component.button",
                    icon: "fa-solid fa-arrow-pointer",
                },
                {
                    id: "uiComponent-collapsible",
                    label: t("menuLabel.collapsible"),
                    type: "route",
                    link: "component.collapsible",
                    icon: "fa-solid fa-arrow-down-up-across-line",
                },
                {
                    id: "uiComponent-list",
                    label: t("menuLabel.list"),
                    type: "route",
                    link: "component.list",
                    icon: "fa-solid fa-list-check",
                },
                {
                    id: "uiComponent-modal",
                    label: t("menuLabel.modal"),
                    type: "route",
                    link: "component.modal",
                    icon: "fa-solid fa-window-restore",
                },
                {
                    id: "uiComponent-pagination",
                    label: t("menuLabel.pagination"),
                    type: "route",
                    link: "component.pagination",
                    icon: "fa-solid fa-pager",
                },
                {
                    id: "uiComponent-tab",
                    label: t("menuLabel.tab"),
                    type: "route",
                    link: "component.tab",
                    icon: "fa-solid fa-diagram-predecessor",
                },
                {
                    id: "uiComponent-table",
                    label: t("menuLabel.table"),
                    type: "dropdown",
                    icon: "fa-solid fa-table",
                    subLinks: [
                        {
                            id: "uiComponent-table-fe",
                            label: t("menuLabel.frontendTable"),
                            type: "route",
                            link: "component.table-fe",
                            icon: "fa-solid fa-desktop",
                        },
                        {
                            id: "uiComponent-table-be",
                            label: t("menuLabel.backendTable"),
                            type: "route",
                            link: "component.table-be",
                            icon: "fa-solid fa-server",
                        }
                    ]
                },
                {
                    id: "uiComponent-tooltip",
                    label: t("menuLabel.tooltip"),
                    type: "route",
                    link: "component.tooltip",
                    icon: "fa-solid fa-location-pin",
                },
            ],
        },
        {
            id: "layoutComponent",
            label: t("menuLabel.layoutComponents"),
            type: "dropdown",
            icon: "fa-solid fa-cubes",
            subLinks: [
                {
                    id: "layoutComponent-contentCard",
                    label: t("menuLabel.contentCard"),
                    type: "route",
                    link: 'component.contentCard',
                    icon: "fa-solid fa-images",
                },
                {
                    id: "layoutComponent-grid",
                    label: t("menuLabel.grid"),
                    type: "route",
                    link: 'component.grid',
                    icon: "fa-solid fa-table-cells",
                },
                {
                    id: "layoutComponent-loadingScreen",
                    label: t("menuLabel.loadingScreen"),
                    type: "route",
                    link: 'component.loadingScreen',
                    icon: "fa-solid fa-spinner",
                },
                {
                    id: "layoutComponent-sideMenu",
                    label: t("menuLabel.sideMenu"),
                    type: "route",
                    link: 'component.sideMenu',
                    icon: "fa-solid fa-list",
                }
            ]
        },
        {
            id: "formComponent",
            label: t("menuLabel.formComponents"),
            type: "dropdown",
            icon: "fa-solid fa-keyboard",
            subLinks: [
                {
                    id: "formComponent-formLayout",
                    label: t("menuLabel.formLayout"),
                    type: "route",
                    link: 'component.formLayout',
                },
                {
                    id: "formComponent-buttonInput",
                    label: t("menuLabel.buttonInput"),
                    type: "route",
                    link: 'component.buttonInput',
                },
                {
                    id: "formComponent-checkboxInput",
                    label: t("menuLabel.checkboxInput"),
                    type: "route",
                    link: 'component.checkboxInput',
                },
                {
                    id: "formComponent-fileInput",
                    label: t("menuLabel.fileInput"),
                    type: "route",
                    link: 'component.fileInput',
                },
                {
                    id: "formComponent-radioInput",
                    label: t("menuLabel.radioInput"),
                    type: "route",
                    link: 'component.radioInput',
                },
                {
                    id: "formComponent-rangeInput",
                    label: t("menuLabel.rangeInput"),
                    type: "route",
                    link: 'component.rangeInput',
                },
                {
                    id: "formComponent-selectInput",
                    label: t("menuLabel.selectInput"),
                    type: "route",
                    link: 'component.selectInput',
                },
                {
                    id: "formComponent-virtualSelectInput",
                    label: t("menuLabel.virtualSelectInput"),
                    type: "route",
                    link: 'component.virtualSelectInput',
                },
                {
                    id: "formComponent-textInput",
                    label: t("menuLabel.textInput"),
                    type: "route",
                    link: 'component.textInput',
                },
                {
                    id: "formComponent-textAreaInput",
                    label: t("menuLabel.textAreaInput"),
                    type: "route",
                    link: 'component.textAreaInput',
                }
            ]
        },
        {
            id: "menu",
            label: "TailAdmin",
            type: "link",
            link: "http://tailadmin.dev",
            target: "_blank",
            icon: "fa-solid fa-star",
        },
    ]);

    return {
        menuLinks,
    };
}
