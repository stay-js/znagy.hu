import { Briefcase, GraduationCap } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

import { H2 } from './ui/h2';

export const Experience: React.FC = () => (
  <section className="scroll-m-8 py-24" id="experience">
    <div className="container flex flex-col gap-8">
      <H2>Experience</H2>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Briefcase className="text-muted-foreground" size={20} />
          <h3 className="text-foreground text-2xl font-semibold">Work Experience</h3>
        </div>

        <Card>
          <CardHeader className="flex items-center justify-between gap-4">
            <CardTitle>Full-stack Web Developer</CardTitle>
            <span className="text-muted-foreground text-sm">Freelance</span>
          </CardHeader>

          <CardContent>
            <ul className="text-card-foreground flex list-inside list-disc flex-col gap-2">
              <li>
                Creation and maintenance of{' '}
                <Link
                  className="font-semibold underline-offset-4 hover:underline"
                  href="https://babaconstructioncorp.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  babaconstructioncorp.com
                </Link>{' '}
                website
              </li>

              <li>
                Creation and maintenance of{' '}
                <Link
                  className="font-semibold underline-offset-4 hover:underline"
                  href="https://tatabanyaultrahang.eu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  tatabanyaultrahang.eu
                </Link>{' '}
                website
              </li>

              <li>
                Creation and maintenance of{' '}
                <Link
                  className="font-semibold underline-offset-4 hover:underline"
                  href="https://regale.hu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  regale.hu
                </Link>{' '}
                and{' '}
                <Link
                  className="font-semibold underline-offset-4 hover:underline"
                  href="https://admin.regale.hu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  admin.regale.hu
                </Link>{' '}
                web applications
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-col gap-2">
            <div className="flex w-full items-center justify-between gap-4">
              <CardTitle>Catering Staff</CardTitle>
              <span className="text-muted-foreground text-sm">Nebuló Meló</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Puskás Aréna, MVM Dome, Groupama Aréna, Bozsik Aréna, National Athletics Center
            </p>
          </CardHeader>

          <CardContent>
            <ul className="text-card-foreground flex list-inside list-disc flex-col gap-2">
              <li>F&B operations (Puskás Aréna, MVM Dome, external venues)</li>
              <ul className="flex list-inside list-disc flex-col gap-2 pl-4">
                <li>
                  performing runner / set-up tasks (restocking concession stands before and during
                  events, moving goods, building and dismantling pop-up stands)
                </li>
                <li>coordinating concession stand staff</li>
                <li>handling customer complaints</li>
              </ul>

              <li className="mt-4">Concession stand supervisor (MVM Dome, Groupama Aréna)</li>
              <ul className="flex list-inside list-disc flex-col gap-2 pl-4">
                <li>continuous communication with the operations team</li>
                <li>stocktaking, opening / closing concession stand</li>
                <li>coordinating staff</li>
                <li>handling customer complaints</li>
              </ul>

              <li className="mt-4">Counter service</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="text-muted-foreground" size={20} />
          <h3 className="text-foreground text-2xl font-semibold">Education</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="flex items-center justify-between gap-4">
              <CardTitle>High School</CardTitle>
              <span className="text-muted-foreground text-sm">2021 - Present</span>
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
              <p className="text-card-foreground">BMSzC Neumann János Informatikai Technikum</p>
              <p className="text-muted-foreground text-sm">
                Kerepesi út 124, 1144, Budapest, Hungary
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex items-center justify-between gap-4">
              <CardTitle>Elementary School</CardTitle>
              <span className="text-muted-foreground text-sm">2013 - 2021</span>
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
              <p className="text-card-foreground">Újlaki Általános Iskola</p>
              <p className="text-muted-foreground text-sm">
                Ürömi utca 64, 1023, Budapest, Hungary
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);
