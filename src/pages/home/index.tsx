import { ProjectCard } from "../../components/projectCard";

export default function Home() {
  return (
    <section className="flex row gap-4 py-4">
      <ProjectCard
        title="Brand Content"
        coverUrl="./brandContentCover.png"
        linkTo="/brandContent"
      />
      <ProjectCard
        title="Brand Activation"
        coverUrl="./brandActivationCover.png"
        linkTo="/brandActivation"
      />
      <ProjectCard
        title="Episodic"
        coverUrl="./episodicCover.png"
        linkTo="/episodic"
      />
      <ProjectCard title="Docs" coverUrl="./docsCover.png" linkTo="/docs" />
      <ProjectCard title="Music" coverUrl="./musicCover.png" linkTo="/music" />
    </section>
  );
}
