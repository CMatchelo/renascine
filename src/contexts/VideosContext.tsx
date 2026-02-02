import { createContext, useContext, useEffect, useState } from "react";
import type { VideoItem } from "../types/video";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";

const VideosContext = createContext({});

export function VideosProvider({ children }: {children: React.ReactNode}) {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "videos"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as VideoItem[];
      setVideos(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);
  return (
    <VideosContext.Provider value={{ videos, loading }}>
      {children}
    </VideosContext.Provider>
  );
}

export const useVideos = () => useContext(VideosContext);
