import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/card';
import { FAVORITES } from '~/constants/favorites';

export const About: React.FC = () => (
  <section id="about" className="container flex flex-col gap-8 py-20">
    <h2 className="text-foreground text-3xl font-bold md:text-4xl">About Me</h2>

    <div className="flex flex-col gap-6">
      <Card>
        <CardContent className="flex flex-col gap-4 leading-relaxed">
          <p>Glad you are here!</p>
          <p>
            My name is Zétény Nagy, I'm from Budapest, Hungary, currently enrolled at{' '}
            <Link
              href="https://neumann.bmszc.hu"
              className="font-semibold underline-offset-4 hover:underline"
            >
              BMSzC Neumann János Informatikai Technikum
            </Link>
            .
          </p>
          <p>
            My interest in web development started long ago, back in my early elementary school
            days. Mathematics has been my favorite subject since the first grade of elementary
            school. Additionally, I have a deep passion for Kyokushin Karate and Muay Thai. I aim to
            enhance both my coding and fighting skills, with the goal of becoming a full-time
            full-stack web developer.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {Object.entries(FAVORITES).map(([category, items]) => (
          <Card key={category} className="gap-4">
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-1 text-sm">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
