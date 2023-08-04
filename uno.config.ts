import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-2 rounded-full inline-block border border-gray-300 text-sm font-normal text-gray-900 cursor-pointer hover:bg-gray-300 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 focus:outline-none hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['avatar_icon', 'h-10 w-10 cursor-pointer rounded-full bg-cover object-cover'],
    ['team_avatar_icon', 'h-36 w-36 cursor-pointer rounded bg-cover object-cover'],
    ['text_footer_link', 'leading[5px] !important whitespace-pre-line text-center text-base hover:text-black hover:underline hover:underline-offset-7'],
    ['normal_text', 'text-base font-light text-gray-500 dark:text-gray-400'],
    ['b_text', 'leading[20px] !important whitespace-pre-line pt-4 text-[19px] font-light text-gray-500 md:text-left'],
    ['b_card', 'w-[200px] border border-gray-200 rounded-lg py-7 hover:border-gray-900'],
    ['btn_reaction', 'border rounded-full bg-gray-100 px-3 py-1.5 text-center text-sm hover:bg-gray-200'],
    ['star', 'h-3.5 w-3.5'],
    ['icon', 'h-5 w-5'],
    ['date', 'text-sm font-light text-gray-400'],
    ['share_button', 'h-9 w-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100'],
    ['header_text', 'text-3xl font-sans text-center font-semibold leading-9  tracking-wide text-[#222222] md:text-4xl dark:text-white'],
    ['b_header', 'text-xl font-sans font-medium leading-9  tracking-wide text-[#222222] md:text-2xl dark:text-white'],
    ['team_social_icons', 'h-10 w-10 flex cursor-pointer items-center justify-center rounded-full hover:border hover:bg-gray-200'],
    ['team_a_link', 'flex items-center justify-center text-gray-900 hover:text-gray-900 dark:hover:text-white'],
    ['btn_green', 'text-centet cursor-pointer rounded-full font-normal border inline-block bg-green-500 px-4 py-2 text-center text-sm text-white hover:bg-green-600'],
    ['btn_inner', 'px-6 py-3 rounded-full inline-block border border-gray-300 text-sm font-normal text-black cursor-pointer hover:bg-gray-300 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200'],
    ['btn_inner_green', 'px-6 py-3 rounded-full inline-block border text-sm bg-green-500 font-normal text-white cursor-pointer hover:bg-green-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['btn_signup', 'px-6 py-4 rounded-lg inline-block border border-gray-300 text-base font-normal text-gray-900 cursor-pointer hover:bg-gray-300 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        'sans': 'DM Sans',
        'serif': 'DM Serif Display',
        'mono': 'DM Mono',
        'san-mono': 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
