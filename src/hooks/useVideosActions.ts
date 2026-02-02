import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import type { VideoItem } from "../types/video";
import { db } from "../services/firebase";

export function useVideosActions() {
  const registerVideo = async (data: VideoItem) => {
    return addDoc(collection(db, "videos"), data);
  };

  const deleteVideo = async (id: string) => {
    return deleteDoc(doc(db, "videos", id));
  };

  return { registerVideo, deleteVideo };
}
