import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

//Language
import { createI18n } from "vue-i18n";
import {translates} from "./Lang/Lang"
const i18n = createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        ...translates,
    },
});

// Icon
import {
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import "./Sources/Icons"

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        const App = createApp({ render: () => h(app, props) });

        // vue-i18n Global Import
        App.config.globalProperties.t = i18n.global.t;
        App.config.globalProperties.tc = i18n.global.tc;

        return App
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(i18n)
            .component("font-awesome-icon", FontAwesomeIcon)
            .component("font-awesome-layers", FontAwesomeLayers)
            .component("font-awesome-layers-text", FontAwesomeLayersText)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
