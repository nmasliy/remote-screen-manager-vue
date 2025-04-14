import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({ widgets: <string[]>[], visibleWidgetIds: <number[]>[] }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    setWidgets(widgets: string[]) {
      this.widgets = widgets
    },
  },
})
