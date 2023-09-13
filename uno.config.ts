import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'fcc': 'flex items-center justify-center',
    'btn': 'px-4 py-1 bg-orange-50 dark:bg-zinc-900 border rounded cursor-pointer inline-block hover:bg-orange-200 dark:hover:bg-zinc-700',
    'h-link': 'hover:(text-[#ff6600] decoration-dotted) decoration-[#ff6600] decoration-1 underline underline-offset-2',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
