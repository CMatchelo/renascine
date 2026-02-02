import { useState } from "react";
import { useVideos } from "../../contexts/VideosContext";
import type { VideoItem } from "../../types/video";
import { useVideosActions } from "../../hooks/useVideosActions";
import { FormLine } from "./components/formLine";
import { TableHeaderCell } from "./components/tableHeaderCell";
import { TableBodyCell } from "./components/tableBodyCell";

type Category =
  | "brandContent"
  | "brandActivation"
  | "episodics"
  | "docs"
  | "music";

export default function AdminVideos() {
  const { videos } = useVideos() as { videos: VideoItem[] };
  const { registerVideo, deleteVideo } = useVideosActions();

  const [link, setLink] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [category, setCategory] = useState<Category>("brandContent");

  const sendVideo = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!title.trim() || !subTitle.trim()) {
      alert("Titulo e subtitulo são obrigatórios");
      return;
    }
    const formData = {
      link: "https://www.youtube.com/embed/" + link,
      title,
      subTitle,
      role: role || null,
      category,
    };

    registerVideo(formData);

    setLink("");
    setTitle("");
    setSubTitle("");
    setRole("");
  };

  return (
    <div className="flex flex-col w-full items-center ">
      <form
        onSubmit={sendVideo}
        className="w-1/2 rounded-md p-4 bg-neutral-900 my-8 flex flex-col gap-2"
      >
        <FormLine>
          <label>ID do vídeo *</label>
          <input
            className="bg-neutral-100 p-1 ml-4 rounded-md text-neutral-800 text-sm"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Ex: aDT3iQ-JSno"
            required
          />
        </FormLine>

        <FormLine>
          <label>Título *</label>
          <input
            className="bg-neutral-100 p-1 ml-4 rounded-md text-neutral-800 text-sm"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex: JOVI – Reflexo Mortal"
            required
          />
        </FormLine>

        <FormLine>
          <label>Subtítulo *</label>
          <input
            className="bg-neutral-100 p-1 ml-4 rounded-md text-neutral-800 text-sm"
            type="text"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            placeholder="Ex: AI Short Film"
            required
          />
        </FormLine>

        <FormLine>
          <label>Role</label>
          <input
            className="bg-neutral-100 p-1 ml-4 rounded-md text-neutral-800 text-sm"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Ex: Editing / Finishing / Color Grading"
          />
        </FormLine>

        <FormLine>
          <label>Categoria *</label>
          <select
            className="bg-neutral-100 p-1 ml-4 rounded-md text-neutral-800 text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            <option value="brandContent">Brand Content</option>
            <option value="brandActivation">Brand Activation</option>
            <option value="episodic">Episodic</option>
            <option value="docs">Docs</option>
            <option value="music">Music</option>
          </select>
        </FormLine>

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-linear-to-r from-indigo-600 to-fuchsia-600 
             py-3 text-sm font-semibold tracking-wide text-white
             transition hover:opacity-90"
        >
          Registrar vídeo
        </button>
      </form>

      <div className="overflow-x-auto mb-10">
        <table className="min-w-full bg-neutral-800 border border-zinc-200 rounded-lg overflow-hidden">
          <thead className="bg-neutral-900 text-neutral-100">
            <tr>
              <TableHeaderCell label="Titulo" />
              <TableHeaderCell label="Subtitulo" />
              <TableHeaderCell label="Role" />
              <TableHeaderCell label="Categoria" />
              <TableHeaderCell label="" />
            </tr>
          </thead>
          <tbody className="divide-y">
            {videos.map((video) => (
              <tr
                key={video.id}
                className="hover:bg-neutral-900/60 text-neutral-200  transition-all"
              >
                <TableBodyCell label={video.title} />
                <TableBodyCell label={video.subTitle} />
                <TableBodyCell label={video.role || ""} />
                <TableBodyCell label={video.category || ""} />
                <td
                  onClick={() => deleteVideo(video.id || "")}
                  className="px-4 py-2 cursor-pointer hover:text-red-500  transition-all"
                >
                  Apagar
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
