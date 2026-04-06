import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '~/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { PROJECTS } from '~/constants/projects';

import { H2 } from './ui/h2';

export const Projects: React.FC = () => (
  <section className="scroll-m-8 py-24" id="projects">
    <div className="container flex flex-col gap-8">
      <H2>Projects</H2>

      <div className="gap-6 md:columns-2">
        {PROJECTS.map((project) => (
          <div className="break-inside-avoid-column pb-6" key={project.title}>
            <Card className="hover:border-foreground/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-4">
                  <span className="text-lg">{project.title}</span>{' '}
                  <Link
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
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
                  <Badge className="text-xs" key={tagIndex} variant="secondary">
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
