import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={760}
        />
      </div>
      <div className="project-content">
        <p className="project-role">{project.role}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">
          {project.ownership.slice(0, 4).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.impact && (
          <p className="project-impact">{project.impact.slice(0, 2).join("  /  ")}</p>
        )}
        <div className="project-links">
          <Link className="text-link" href={`/work/${project.slug}`}>
            {project.cta}
            <ArrowRight size={16} />
          </Link>
          {project.externalLink && (
            <a
              className="text-link text-link-secondary"
              href={project.externalLink.href}
              target="_blank"
              rel="noreferrer"
            >
              {project.externalLink.label}
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
