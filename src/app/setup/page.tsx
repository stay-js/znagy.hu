import type { NextPage } from 'next';
import Image from 'next/image';
import { Anchor } from '~/components/anchor';
import { Title } from '~/components/title';
import { createMetadata } from '~/utils/create-metadata';

export const metadata = createMetadata({
  path: '/setup',
  title: 'Setup',
  description: 'These are the things that I use everyday, hope you find it interesting...',
});

const Page: NextPage = () => (
  <main className="content flex flex-col gap-8">
    <Title title="Setup">
      These are the things that I use everyday, hope you find it interesting...
    </Title>

    <div className="sm:columns-2 lg:columns-3">
      {[
        {
          title: 'Apple MacBook Pro 14"',
          image: '/images/macbook-pro-14.jpg',
          url: 'https://www.apple.com/macbook-pro-14-and-16',
          body: (
            <ul>
              <li>Apple M1 Pro</li>
              <li>16GB unified memory</li>
              <li>512GB SSD</li>
            </ul>
          ),
        },
        {
          title: 'Apple iPhone 15 Pro Max',
          image: '/images/apple-iphone-15-pro-max.jpg',
          url: 'https://support.apple.com/en-us/111828',
          body: (
            <ul>
              <li>Apple A17 Pro</li>
              <li>8GB memory</li>
              <li>256GB storage</li>
            </ul>
          ),
        },
        {
          title: 'Apple AirPods 4 (ANC)',
          image: '/images/apple-airpods-4.jpg',
          url: 'https://www.apple.com/airpods-4',
          body: (
            <ul>
              <li>Apple H2 headphone chip</li>
              <li>Active Noise Cancellation</li>
            </ul>
          ),
        },
        {
          title: 'Acer NITRO VG240YS',
          image: '/images/acer-vg240ys.jpg',
          url: 'https://www.acer.com/us-en/monitors/gaming/nitro-vg0/pdp/UM.QV0AA.P01',
          body: (
            <ul>
              <li>1920x1080 Full HD</li>
              <li>IPS Panel</li>
              <li>HDR10</li>
              <li>165 Hz Refresh Rate</li>
              <li>2 ms Response Time</li>
            </ul>
          ),
        },
        {
          title: 'Home Server',
          image: '/images/server.jpg',
          body: (
            <ul>
              <li>Intel® Core™ i5-4460</li>
              <li>16GB DDR3 RAM</li>
              <li>GIGABYTE B85M-D2V</li>
              <li>Seasonic SSP-350SE Active PFC F3 350W 80+ Bronze</li>
              <li>Crucial BX500 240GB SSD</li>
            </ul>
          ),
        },
        {
          title: 'Dell OptiPlex 7060 SFF',
          image: '/images/dell-optiplex-7060-sff.jpg',
          body: (
            <ul>
              <li>Intel® Core™ i7-8700</li>
              <li>16GB DDR4 RAM</li>
              <li>SK hynix BC711 256GB NVMe SSD</li>
              <li>Samsung 870 EVO 1TB SSD</li>
            </ul>
          ),
        },
      ].map(({ title, image, url, body }, index) => (
        <div
          key={`setup-${index}`}
          className="mb-4 flex break-inside-avoid-column flex-col gap-4 rounded-lg bg-white px-4 py-8 text-black shadow-lg"
        >
          <h2 className="text-center text-xl font-bold">{title}</h2>

          {image && (
            <Image
              className="select-none"
              src={image}
              width={512}
              height={512}
              title={title}
              alt={title}
            />
          )}
          {body}
          {url && (
            <Anchor className="w-fit text-sm font-bold" href={url} target="_blank">
              More...
            </Anchor>
          )}
        </div>
      ))}
    </div>
  </main>
);

export default Page;
