<script setup>
// Components
import TChevronDown from "@/TailAdmin/Components/Icons/TChevronDown.vue";
import { Link } from "@inertiajs/inertia-vue3";

// Menu Styles
import { storeToRefs } from "pinia";
import { useConfigStore } from "@/Stores/tailadminConfigStore";

const configStore = useConfigStore();
const { styles } = storeToRefs(configStore);

// Menu Activity Tracking
import { useMenuStore } from "@/TailAdmin/Stores/menuStore.js";

const menuStore = useMenuStore();
const { activeLinks,menuStatus } = storeToRefs(menuStore);

//Detecting Link Type
const detectedLinkType = (type) => {
  let i;
  switch (type) {
    case "dropdown":
      i = "div";
      break;
    case "route":
      i = Link;
      break;
    case "link":
      i = "a";
      break;
  }

  return i;
};

defineProps({
  data: Object,
});
</script>

<template>
  <div
      :class="[
            styles.sideMenu.classic.rootLinkWrapper.base,
            styles.sideMenu.classic.rootLinkWrapper[
                activeLinks.includes(data.id) ? 'active' : 'default'
            ],
        ]"
  >
    <!--Root Link-->
    <component
        :is="detectedLinkType(data.type)"
        :href="data['link']"
        :target="data['target']"
        :class="[
                styles.sideMenu.classic.rootLink.base,
                styles.sideMenu.classic.rootLink[
                    activeLinks[0] === data.id ? 'active' : 'default'
                ],
            ]"
        @click="menuStore.selectLink(data.id)"
    >
      <!-- Link Text -->
      <div class="flex items-center overflow-hidden">
        <!-- Icon -->
        <font-awesome-icon v-if="data['icon']" :icon="data.icon" :size="menuStatus === 'mini' ? 'xl' : ''" class="transition-all duration-500"/>
        <!-- Label -->
        <span v-text="data.label" class="mx-4 overflow-hidden whitespace-nowrap" v-if="menuStatus==='show'"/>
      </div>
      <!-- Dropdown Icon for Root Link -->
      <t-chevron-down
          v-if="data.hasOwnProperty('subLinks') && menuStatus==='show'"
          class="w-5 h-5 transition-all"
          :class="
                    activeLinks.includes(data.id) ? 'rotate-90' : 'rotate-0'
                "
      />
    </component>

    <!--Sub Links-->
    <transition name="subMenuTransition">
      <div
          v-if="
                    data.hasOwnProperty('subLinks') &&
                    activeLinks.includes(data.id)
                "
          :class="styles.sideMenu.classic.secondLinkContainer"
      >
        <template v-for="secondLink in data.subLinks">
          <component
              :is="detectedLinkType(secondLink.type)"
              :href="secondLink['link']"
              :target="secondLink['target']"
              :class="[
                            styles.sideMenu.classic.secondLinkWrapper.base,
                            styles.sideMenu.classic.secondLinkWrapper[
                                activeLinks.includes(secondLink.id)
                                    ? 'active'
                                    : 'default'
                            ],
                        ]"
          >
            <!--Second Link-->
            <div
                :class="[
                                styles.sideMenu.classic.secondLink.base,
                                styles.sideMenu.classic.secondLink[
                                    activeLinks[0] === secondLink.id
                                        ? 'active'
                                        : 'default'
                                ],
                            ]"
                @click="menuStore.selectLink(secondLink.id)"
            >
              <!-- Link Text -->
              <div class="flex items-center overflow-hidden">
                <!-- Icon -->
                <font-awesome-icon
                    v-if="secondLink['icon']"
                    :icon="secondLink.icon"
                    :size="menuStatus === 'mini' ? 'xl' : ''" class="transition-all duration-500"
                />
                <!-- Label -->
                <span v-text="secondLink.label" class="mx-4 overflow-hidden whitespace-nowrap" v-if="menuStatus==='show'"/>
              </div>
              <!-- Dropdown Icon for Root Link -->
              <t-chevron-down
                  v-if="secondLink.hasOwnProperty('subLinks') && menuStatus==='show'"
                  class="w-5 h-5 transition-all"
                  :class="
                                    activeLinks[1] ===
                                    secondLink.id.split('-')[1]
                                        ? 'rotate-90'
                                        : 'rotate-0'
                                "
              />
            </div>

            <!--Third Link-->
            <transition name="subMenuTransition">
              <div
                  v-if="
                                    (secondLink.hasOwnProperty('subLinks') &&
                                        activeLinks.length === 2 &&
                                        activeLinks[1] ===
                                            secondLink.id.split('-')[1]) ||
                                    (secondLink.hasOwnProperty('subLinks') &&
                                        secondLink.subLinks.find((i) =>
                                            i.id.includes(activeLinks[2])
                                        ))
                                "
                  :class="
                                    styles.sideMenu.classic.thirdLinkContainer
                                "
              >
                <template
                    v-for="thirdLink in secondLink.subLinks"
                >
                  <component
                      :is="detectedLinkType(thirdLink.type)"
                      :href="thirdLink['link']"
                      :target="thirdLink['target']"
                      :class="[
                                            styles.sideMenu.classic
                                                .thirdLinkWrapper.base,
                                            styles.sideMenu.classic
                                                .thirdLinkWrapper[
                                                activeLinks.includes(
                                                    thirdLink.id
                                                )
                                                    ? 'active'
                                                    : 'default'
                                            ],
                                        ]"
                  >
                    <!--Second Link-->
                    <div
                        :class="[
                                                styles.sideMenu.classic
                                                    .secondLink.base,
                                                styles.sideMenu.classic
                                                    .secondLink[
                                                    activeLinks[0] ===
                                                    thirdLink.id
                                                        ? 'active'
                                                        : 'default'
                                                ],
                                            ]"
                        @click="
                                                menuStore.selectLink(
                                                    thirdLink.id
                                                )
                                            "
                    >
                      <!-- Link Text -->
                      <div
                          class="flex items-center overflow-hidden"
                      >
                        <!-- Icon -->
                        <font-awesome-icon
                            v-if="thirdLink['icon']"
                            :icon="thirdLink.icon"
                            :size="menuStatus === 'mini' ? 'xl' : ''" class="transition-all duration-500"
                        />
                        <!-- Label -->
                        <span
                            v-text="thirdLink.label"
                            class="mx-4 overflow-hidden whitespace-nowrap"
                        />
                      </div>
                      <!-- Dropdown Icon for Root Link -->
                      <t-chevron-down
                          v-if="
                                                    thirdLink.hasOwnProperty(
                                                        'subLinks'
                                                    )
                                                "
                          class="w-5 h-5"
                      />
                    </div>

                    <!--Third Link-->
                  </component>
                </template>
              </div>
            </transition>
          </component>
        </template>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.subMenuTransition-enter-active,
.subMenuTransition-leave-active {
  transition: all 300ms ease;
}

.subMenuTransition-enter-from,
.subMenuTransition-leave-to {
  max-height: 0;
  opacity: 0;
}

.subMenuTransition-leave-from,
.subMenuTransition-enter-to {
  max-height: 100vh;
  opacity: 1;
}
</style>
