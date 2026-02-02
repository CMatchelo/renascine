export interface VideoItem {
  id?: string;
  category?: string;
  link: string
  title: string
  subTitle: string
  role?: string | null
}

export interface VideoCategory {
  id?: string;
  title: string
  videos: VideoItem[]
}

export type VideoPagesMap = Record<string, VideoCategory>