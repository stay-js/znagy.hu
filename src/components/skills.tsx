import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/card';
import { Badge } from './ui/badge';
import { H2 } from './ui/h2';
import { SKILLS } from '~/constants/skills';

export const Skills: React.FC = () => (
  <section id="skills" className="bg-muted/30 scroll-m-8 py-20">
    <div className="container flex flex-col gap-8">
      <H2>Skills</H2>

      <div className="grid gap-6 md:grid-cols-2">
        {SKILLS.map((category) => (
          <Card key={category.title}>
            <CardHeader>
              <CardTitle className="text-lg">
                <h3>{category.title}</h3>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge variant="secondary" key={skill}>
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
