import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { H2 } from './ui/h2';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '~/constants/projects';

export const Projects: React.FC = () => (
  <section id="projects" className="scroll-m-8 py-20">
    <div className="container flex flex-col gap-8">
      <H2>Projects</H2>

      <div className="gap-6 md:columns-2">
        {PROJECTS.map((project) => (
          <div key={project.title} className="break-inside-avoid-column pb-6">
            <Card className="hover:border-foreground/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-4">
                  <span className="text-lg">{project.title}</span>{' '}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={22} />
                  </Link>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </section>
);
