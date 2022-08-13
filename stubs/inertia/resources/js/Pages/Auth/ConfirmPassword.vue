<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';
import JetAuthenticationCard from '@/Components/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import JetButton from '@/Components/Button.vue';
import JetInput from '@/Components/Input.vue';
import JetLabel from '@/Components/Label.vue';
import JetValidationErrors from '@/Components/ValidationErrors.vue';

const form = useForm({
    password: '',
});

const passwordInput = ref(null);

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => {
            form.reset();

            passwordInput.value.focus();
        },
    });
};
</script>

<template>
    <Head :title="t('system.auth.password.confirm.title')" />

    <JetAuthenticationCard>
        <template #logo>
            <JetAuthenticationCardLogo />
        </template>

        <div class="mb-4 text-sm text-gray-600">
            {{t('system.auth.password.confirm.desc')}}
        </div>

        <JetValidationErrors class="mb-4" />

        <form @submit.prevent="submit">
            <div>
                <JetLabel for="password" :value="t('system.auth.password.label')" />
                <JetInput
                    id="password"
                    ref="passwordInput"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="current-password"
                    autofocus
                />
            </div>

            <div class="flex justify-end mt-4">
                <JetButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    {{t('system.global.action.confirm')}}
                </JetButton>
            </div>
        </form>
    </JetAuthenticationCard>
</template>
