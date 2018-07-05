import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'


const CustomElement = wrap(Vue, () => import(`${process.env.COMPONENT_PATH}`))
window.customElements.define(process.env.COMPONENT_NAME, CustomElement)
