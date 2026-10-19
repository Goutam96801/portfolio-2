
import projects from "@/data/projects";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DemoCredentials from "@/components/demo-credentials";
import ProjectImageGallery from "@/components/module/project-image-gallery";

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params;

  const project = projects.find(
    (item) => item.id === id
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.subtitle,
  };
}

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const ProjectDetails = async ({ params }: Props) => {
  const { id } = await params;
  const project = projects.find(
    (item) => item.id === id
  );


  if (!project) {
    return (
      <div className="p-10 text-center text-2xl">
        Project not found
      </div>
    );
  }

  return (
    <main className="min-h-screen mx-auto px-4 md:px-6 lg:px-8 relative">
      <div className="py-6 mb-8">
        <Link
          href="/projects"
          className={`inline-flex items-center gap-2 text-ink-muted hover:text-ink cursor-pointer transition-opacity duration-300`}>
          <ArrowLeft size={18} />
          <span>Back to Projects</span>
        </Link>
      </div>



      {/* Hero */}
      <div className="mb-20 md:mb-28">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight opacity-0 animate-fadeInUp">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-ink-muted mb-8 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fadeInUp">
            {project.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fadeInUp">
            {
              project.demo &&
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-orange-400 text-ink px-8 py-4 rounded-none font-medium hover:bg-green-400 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Play size={20} />
                Demo Access
                <ExternalLink size={18} />
              </a>
            }

            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 border border-line px-8 py-4 rounded-none font-medium bg-surface hover:bg-ink text-ink hover:text-page transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Source Access
              <ExternalLink size={18} />
            </a>
          </div>

          {
            project.credentials && (
              <div
                className="max-w-2xl mx-auto opacity-0 animate-fadeInUp border-2 border-line bg-page p-6 md:p-8 shadow-[6px_6px_0px_0px_var(--shadow-solid)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-10 h-1 bg-orange-400"></span>
                  <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-orange-500">
                    Demo Credentials
                  </h3>
                </div>
                <DemoCredentials provider={project.credentials.provider} password={project.credentials.password} />
              </div>
            )
          }
        </div>

        {/* Cover Image */}
        <div className="mb-16 md:mb-20 group relative overflow-hidden opacity-0 animate-fadeInUp aspect-video bg-surface-muted/40">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-contain rounded-none transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        {/* Project description */}
        <section className="max-w-4xl mx-auto mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-10 h-1 bg-orange-400"></span>
            <h2 className="text-xs uppercase tracking-[0.25em] font-bold text-orange-500">
              About the project
            </h2>
          </div>
          <div
            className="project-richtext" dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </section>

        {project.galleryImages && project.galleryImages.length > 0 && (
          <ProjectImageGallery
            images={project.galleryImages}
            title={project.title}
          />
        )}

        {project.images.length > 0 && (
        <section className="mb-20 md:mb-24 space-y-12 md:space-y-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block w-10 h-1 bg-orange-400"></span>
            <h2 className="text-xs uppercase tracking-[0.25em] font-bold text-orange-500">
              A walkthrough
            </h2>
          </div>

          {project.images.map((img, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={img.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${isReversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
              >
                {/* Image */}
                <div
                  className="group relative overflow-hidden aspect-video bg-surface-muted/60 border-2 border-line opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <Image
                    src={img.image}
                    alt={img.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Description */}
                <div
                  className="space-y-4 opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${idx * 80 + 60}ms` }}
                >
                  <span
                    className="inline-block text-[11px] tracking-[0.18em] uppercase font-bold px-3 py-1.5 bg-orange-400 text-ink border-2 border-line shadow-[2px_2px_0px_0px_var(--shadow-solid)]"
                  >
                    {img.label}
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-ink leading-tight">
                    {img.title}
                  </h3>
                  <div
                    className="project-richtext" dangerouslySetInnerHTML={{ __html: img.description }}
                  />
                </div>
              </div>
            );
          })}
        </section>
        )}

        {/* Tech stack */}
        <section className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-10 h-1 bg-orange-400"></span>
            <h2 className="text-xs uppercase tracking-[0.25em] font-bold text-orange-500">
              Tech stack
            </h2>
          </div>

          <h3 className="text-3xl md:text-5xl font-black text-ink mb-10 md:mb-12 max-w-3xl leading-tight">
            Built with tools that earn their place.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg- border-2 bg-page border-line shadow-[6px_6px_0px_0px_var(--shadow-solid)]">
            {project.techStack.map((tech, idx) => (
              <div
                key={tech.name}
                className="bg-page p-6 md:p-8 group hover:bg-orange-400 transition-colors duration-300 opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-surface border-2 border-line shadow-[3px_3px_0px_0px_var(--shadow-solid)] group-hover:shadow-[1px_1px_0px_0px_var(--shadow-solid)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-300">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <h4 className="text-lg md:text-xl font-black text-ink truncate">
                        {tech.name}
                      </h4>
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.18em] font-bold mb-3 text-orange-500 group-hover:text-ink transition-colors duration-300">
                      {tech.role}
                    </p>
                    <p className="text-sm text-neutral-700 font-medium leading-relaxed group-hover:text-ink transition-colors duration-300">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProjectDetails;
