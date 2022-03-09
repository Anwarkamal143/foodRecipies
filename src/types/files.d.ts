declare module "*.svg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}

declare module "*.svg?inline" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}
declare module "*.jpg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}
declare module "*.module.css" {
  const classes: { [key: string]: string }
  export default classes
}

// For LESS
declare module "*.module.less" {
  const classes: { [key: string]: string }
  export default classes
}

// For SCSS
declare module "*.module.scss" {
  const classes: { [key: string]: string }
  export default classes
}
