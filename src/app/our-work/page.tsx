import { businessSettings } from "@/content/business";
import { representativeGalleryIds, getImage } from "@/content/images";
import { publishedProjects } from "@/content/projects";
import { publishedVideos } from "@/content/videos";
import { pageSeo } from "@/content/copy";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StockPhoto } from "@/components/ui/StockPhoto";
import { buttonClassName } from "@/components/ui/button-styles";
import Link from "next/link";

export const metadata = createMetadata(pageSeo.ourWork);

export default function OurWorkPage() {
  const projects = publishedProjects();
  const videos = publishedVideos();

  return (
    <>
      <PageHero
        image={getImage("polished-conference-floor")}
        eyebrow="Our work"
        title="Spaces kept ready for daily use."
      >
        <p className="mt-5 max-w-2xl text-base leading-7 text-ivory/85 sm:text-lg">
          Photographs of completed Power In Service projects will appear here
          when they are ready to publish. Until then, the images below are
          licensed representative photographs of the kinds of spaces we service.
        </p>
      </PageHero>

      <section className="bg-white py-20">
        <Container>
          {projects.length === 0 ? (
            <SectionHeading title="Completed project photographs are being prepared.">
              Client names, addresses, logos, faces, licence plates, and other
              identifying details stay hidden unless they have been approved for
              publication.
            </SectionHeading>
          ) : (
            <div className="grid gap-8">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-lg border border-line p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    {project.serviceCategory.replace("-", " ")}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-forest">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-base leading-7 text-muted">
                    {project.propertyType} · {project.serviceArea}
                  </p>
                  <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-gold">
                        Challenge
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-muted">
                        {project.challenge}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-gold">
                        Work completed
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-muted">
                        {project.workCompleted}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-gold">
                        Result
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-muted">
                        {project.result}
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          )}

          <p className="mt-10 text-base leading-7 text-muted">
            {businessSettings.stockDisclosure}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {representativeGalleryIds.map((id) => (
              <StockPhoto
                key={id}
                image={getImage(id)}
                className="aspect-[4/3] h-auto rounded-md"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ))}
          </div>

          {videos.length > 0 ? (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-forest">Project video</h2>
              <div className="mt-6 grid gap-6">
                {videos.map((video) => (
                  <article key={video.id}>
                    <h3 className="font-semibold text-forest">{video.title}</h3>
                    <p className="mt-2 text-base leading-7 text-muted">{video.description}</p>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          <Link href="/request-quote" className={`${buttonClassName("gold", "lg")} mt-10`}>
            Request a Site Visit
          </Link>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
