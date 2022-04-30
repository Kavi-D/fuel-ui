import type * as Stiches from '@stitches/react'
import { ComponentPropsWithRef, ElementType, ReactNode } from 'react'

/**
 * The `as` prop.
 * @template P Props
 */
export type As<P = any> = ElementType<P>

/**
 * Props with the `as` prop.
 * @template T The `as` prop
 * @example
 * type ButtonOptions = Options<"button">;
 */
export type Options<T extends As = any> = { as?: T }

/**
 * The `children` prop
 * @template T Element type.
 */
export type Children = ReactNode

/**
 * Props that automatically includes base props based on the `as` prop.
 * @template O Options
 * @example
 * type ButtonBaseProps = BaseProps<Options<"button">>;
 */
export type BaseProps<O extends Options> = {
  children?: Children
  className?: string
} & Omit<ComponentPropsWithRef<NonNullable<O['as']>>, keyof O | 'children'>

export type Props<P> = P & BaseProps<P>

/**
 * TODO: add annotations
 */
export type PropsWithAsAndCSS<P = any> = Props<P> & {
  as?: ElementType
  css?: Stiches.CSSProperties
}

/**
 * TODO: add annotations
 */
export type HTMLProps = {
  a: React.AnchorHTMLAttributes<HTMLAnchorElement>
  abbr: React.HTMLAttributes<HTMLElement>
  address: React.HTMLAttributes<HTMLElement>
  area: React.AreaHTMLAttributes<HTMLAreaElement>
  article: React.HTMLAttributes<HTMLElement>
  aside: React.HTMLAttributes<HTMLElement>
  audio: React.AudioHTMLAttributes<HTMLAudioElement>
  b: React.HTMLAttributes<HTMLElement>
  base: React.BaseHTMLAttributes<HTMLBaseElement>
  bdi: React.HTMLAttributes<HTMLElement>
  bdo: React.HTMLAttributes<HTMLElement>
  big: React.HTMLAttributes<HTMLElement>
  blockquote: React.BlockquoteHTMLAttributes<HTMLQuoteElement>
  body: React.HTMLAttributes<HTMLBodyElement>
  br: React.HTMLAttributes<HTMLBRElement>
  button: React.ButtonHTMLAttributes<HTMLButtonElement>
  canvas: React.CanvasHTMLAttributes<HTMLCanvasElement>
  caption: React.HTMLAttributes<HTMLElement>
  cite: React.HTMLAttributes<HTMLElement>
  code: React.HTMLAttributes<HTMLElement>
  col: React.ColHTMLAttributes<HTMLTableColElement>
  colgroup: React.ColgroupHTMLAttributes<HTMLTableColElement>
  data: React.DataHTMLAttributes<HTMLDataElement>
  datalist: React.HTMLAttributes<HTMLDataListElement>
  dd: React.HTMLAttributes<HTMLElement>
  del: React.DelHTMLAttributes<HTMLModElement>
  details: React.DetailsHTMLAttributes<HTMLDetailsElement>
  dfn: React.HTMLAttributes<HTMLElement>
  dialog: React.DialogHTMLAttributes<HTMLDialogElement>
  div: React.HTMLAttributes<HTMLDivElement>
  dl: React.HTMLAttributes<HTMLDListElement>
  dt: React.HTMLAttributes<HTMLElement>
  em: React.HTMLAttributes<HTMLElement>
  embed: React.EmbedHTMLAttributes<HTMLEmbedElement>
  fieldset: React.FieldsetHTMLAttributes<HTMLFieldSetElement>
  figcaption: React.HTMLAttributes<HTMLElement>
  figure: React.HTMLAttributes<HTMLElement>
  footer: React.HTMLAttributes<HTMLElement>
  form: React.FormHTMLAttributes<HTMLFormElement>
  h1: React.HTMLAttributes<HTMLHeadingElement>
  h2: React.HTMLAttributes<HTMLHeadingElement>
  h3: React.HTMLAttributes<HTMLHeadingElement>
  h4: React.HTMLAttributes<HTMLHeadingElement>
  h5: React.HTMLAttributes<HTMLHeadingElement>
  h6: React.HTMLAttributes<HTMLHeadingElement>
  head: React.HTMLAttributes<HTMLHeadElement>
  header: React.HTMLAttributes<HTMLElement>
  hgroup: React.HTMLAttributes<HTMLElement>
  hr: React.HTMLAttributes<HTMLHRElement>
  html: React.HtmlHTMLAttributes<HTMLHtmlElement>
  i: React.HTMLAttributes<HTMLElement>
  iframe: React.IframeHTMLAttributes<HTMLIFrameElement>
  img: React.ImgHTMLAttributes<HTMLImageElement>
  input: React.InputHTMLAttributes<HTMLInputElement>
  ins: React.InsHTMLAttributes<HTMLModElement>
  kbd: React.HTMLAttributes<HTMLElement>
  keygen: React.KeygenHTMLAttributes<HTMLElement>
  label: React.LabelHTMLAttributes<HTMLLabelElement>
  legend: React.HTMLAttributes<HTMLLegendElement>
  li: React.LiHTMLAttributes<HTMLLIElement>
  link: React.LinkHTMLAttributes<HTMLLinkElement>
  main: React.HTMLAttributes<HTMLElement>
  map: React.MapHTMLAttributes<HTMLMapElement>
  mark: React.HTMLAttributes<HTMLElement>
  menu: React.MenuHTMLAttributes<HTMLElement>
  menuitem: React.HTMLAttributes<HTMLElement>
  meta: React.MetaHTMLAttributes<HTMLMetaElement>
  meter: React.MeterHTMLAttributes<HTMLMeterElement>
  nav: React.HTMLAttributes<HTMLElement>
  noindex: React.HTMLAttributes<HTMLElement>
  noscript: React.HTMLAttributes<HTMLElement>
  object: React.ObjectHTMLAttributes<HTMLObjectElement>
  ol: React.OlHTMLAttributes<HTMLOListElement>
  optgroup: React.OptgroupHTMLAttributes<HTMLOptGroupElement>
  option: React.OptionHTMLAttributes<HTMLOptionElement>
  output: React.OutputHTMLAttributes<HTMLOutputElement>
  p: React.HTMLAttributes<HTMLParagraphElement>
  param: React.ParamHTMLAttributes<HTMLParamElement>
  picture: React.HTMLAttributes<HTMLElement>
  pre: React.HTMLAttributes<HTMLPreElement>
  progress: React.ProgressHTMLAttributes<HTMLProgressElement>
  q: React.QuoteHTMLAttributes<HTMLQuoteElement>
  rp: React.HTMLAttributes<HTMLElement>
  rt: React.HTMLAttributes<HTMLElement>
  ruby: React.HTMLAttributes<HTMLElement>
  s: React.HTMLAttributes<HTMLElement>
  samp: React.HTMLAttributes<HTMLElement>
  slot: React.SlotHTMLAttributes<HTMLSlotElement>
  script: React.ScriptHTMLAttributes<HTMLScriptElement>
  section: React.HTMLAttributes<HTMLElement>
  select: React.SelectHTMLAttributes<HTMLSelectElement>
  small: React.HTMLAttributes<HTMLElement>
  source: React.SourceHTMLAttributes<HTMLSourceElement>
  span: React.HTMLAttributes<HTMLSpanElement>
  strong: React.HTMLAttributes<HTMLElement>
  style: React.StyleHTMLAttributes<HTMLStyleElement>
  sub: React.HTMLAttributes<HTMLElement>
  summary: React.HTMLAttributes<HTMLElement>
  sup: React.HTMLAttributes<HTMLElement>
  table: React.TableHTMLAttributes<HTMLTableElement>
  template: React.HTMLAttributes<HTMLTemplateElement>
  tbody: React.HTMLAttributes<HTMLTableSectionElement>
  td: React.TdHTMLAttributes<HTMLTableDataCellElement>
  textarea: React.TextareaHTMLAttributes<HTMLTextAreaElement>
  tfoot: React.HTMLAttributes<HTMLTableSectionElement>
  th: React.ThHTMLAttributes<HTMLTableHeaderCellElement>
  thead: React.HTMLAttributes<HTMLTableSectionElement>
  time: React.TimeHTMLAttributes<HTMLTimeElement>
  title: React.HTMLAttributes<HTMLTitleElement>
  tr: React.HTMLAttributes<HTMLTableRowElement>
  track: React.TrackHTMLAttributes<HTMLTrackElement>
  u: React.HTMLAttributes<HTMLElement>
  ul: React.HTMLAttributes<HTMLUListElement>
  video: React.VideoHTMLAttributes<HTMLVideoElement>
  wbr: React.HTMLAttributes<HTMLElement>
  webview: React.WebViewHTMLAttributes<HTMLWebViewElement>
}