import { Badge } from '~/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { H2 } from '~/components/ui/h2';
import { SKILLS } from '~/constants/skills';

export function Skills() {
  return (
    <section className="bg-muted/30 scroll-m-8 py-24" id="skills">
      <div className="container flex flex-col gap-8">
        <H2>Skills</H2>

        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((category) => (
            <Card className="hover:border-foreground/50 transition-colors" key={category.title}>
              <CardHeader>
                <CardTitle className="text-lg">
                  <h3>{category.title}</h3>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
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
}
