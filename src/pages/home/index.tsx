import { ProjectCard } from "../../components/projectCard";

export default function Home() {
  return (
    <section className="flex flex-col items-center pb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4">
        <ProjectCard
          ariaLabel="Go to Brand Content category"
          title="Brand Content"
          coverUrl="./brandContentCover.png"
          linkTo="/brandContent"
        />
        <ProjectCard
          ariaLabel="Go to Brand Activation category"
          title="Brand Activation"
          coverUrl="./brandActivationCover.png"
          linkTo="/brandActivation"
        />
        <ProjectCard
          ariaLabel="Go to Episodic category"
          title="Episodic"
          coverUrl="./episodicCover.png"
          linkTo="/episodic"
        />
        <ProjectCard
          ariaLabel="Go to Docs category"
          title="Docs"
          coverUrl="./docsCover.png"
          linkTo="/docs"
        />
        <ProjectCard
          ariaLabel="Go to Music category"
          title="Music"
          coverUrl="./musicCover.png"
          linkTo="/music"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <span className="text-xs">
          Formado em Cinema em 2017, me chamo Renato Bertoni. Trabalho entre a
          edição, a assistência e color grading, lidando com tempo, ritmo e
          respiração das imagens. Há quase 10 anos, acompanho projetos do
          material bruto ao corte final, buscando precisão, textura e intenção,
          deixando que cada filme encontre sua própria forma.
        </span>
        <span className="text-xs text-gray-400">
          Graduated in Cinema in 2017, my name is Renato Bertoni. I work across
          editing, editing assist, and color grading, dealing with time, rhythm,
          and the breathing of images. For nearly 10 years, I have followed
          projects from raw footage to final cut, seeking precision, texture,
          and intention, allowing each film to find its own form.
        </span>
      </div>
    </section>
  );
}
