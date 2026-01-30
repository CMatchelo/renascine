export interface VideoItem {
  link: string
  title: string
  subTitle: string
  role: string
}

export interface VideoPage {
  title: string
  videos: VideoItem[]
}

export type VideoPagesMap = Record<string, VideoPage>