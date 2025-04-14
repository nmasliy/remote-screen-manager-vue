<script lang="ts">
import { StorageKey } from '@/shared/config/constants'
import { formatDate } from '@/shared/utils/date'
import { defineComponent, type PropType } from 'vue'

type UserData = {
  ip: string
}

export default defineComponent({
  name: 'UserInfo',
  components: {},
  data: () => ({
    valid: false,
    firstname: '',
    savedFirstname: window.localStorage.getItem(StorageKey.Username),
    nameRules: [
      (value: string) => {
        if (value) return true

        return 'Name is required.'
      },
      (value: string) => {
        if (value?.length <= 10) return true

        return 'Name must be less than 10 characters.'
      },
    ],
    isSubmitted: false,
  }),
  props: {
    userData: {
      type: Object as PropType<UserData>,
      required: true,
    },
  },
  methods: {
    formatDate,
    handleSubmit() {
      this.savedFirstname = this.firstname
      window.localStorage.setItem(StorageKey.Username, this.firstname)
    },
  },
})
</script>

<template>
  <v-card
    class="d-flex flex-column flex-grow-1 align-start px-4 py-4 ga-4"
    min-height="300px"
    outlined
  >
    <p class="text-overline">user</p>
    <p class="text-h5">Hello, {{ savedFirstname || 'Guest' }}</p>
    <p class="text-h5">IP: {{ userData.ip }}</p>
    <p class="text-h6">Today: {{ formatDate(new Date()) }}</p>
    <v-form class="w-100 mt-auto" v-model="valid" @submit.prevent="handleSubmit">
      <v-text-field
        v-model="firstname"
        :counter="10"
        :rules="nameRules"
        label="Your name"
        required
      ></v-text-field>
      <v-btn type="submit">Save</v-btn>
    </v-form>
  </v-card>
</template>

<style scoped></style>
