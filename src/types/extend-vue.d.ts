import Vue from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        onMapClick : any
    }
}

declare global {
    interface Window {
        G: any
    }
}
