import type { NextPage } from 'next';
import Image from 'next/future/image';
import Link from 'next/link';
import { TbKeyboard, TbMouse, TbHeadphones } from 'react-icons/tb';
import Title from '@components/Title';
import Layout from '@layouts/Layout';

const Contact: NextPage = () => (
  <Layout
    path="/setup"
    title="Setup - Zétény Nagy"
    desc="These are the things that I use everyday, hope you find it interesting..."
  >
    <main className="content flex flex-col gap-8">
      <Title title="Setup">
        These are the things that I use everyday, hope you find it interesting...
      </Title>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
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
            title: 'Apple iPhone XR',
            image: '/images/apple-iphone-xr.jpg',
            url: 'https://support.apple.com/kb/SP781?locale=en_US',
            body: (
              <ul>
                <li>Apple A12 Bionic</li>
                <li>3GB memory</li>
                <li>64GB storage</li>
              </ul>
            ),
          },
          {
            title: 'Apple AirPods 3',
            image: '/images/apple-airpods-3.jpg',
            url: 'https://www.apple.com/shop/product/MME73AM/A/airpods-3rd-generation',
            body: (
              <ul>
                <li>Apple H1 headphone chip</li>
                <li>Spatial Audio</li>
                <li>Adaptive EQ</li>
                <li>Sweat and water resistant (IPX4)</li>
              </ul>
            ),
          },
          {
            title: 'Acer NITRO VG240YS',
            image: '/images/acer-vg240ys.jpg',
            url: 'https://www.acer.com/ac/en/GB/content/model/UM.QV0EE.S01',
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
                <li>Seasonic SSP-350SE Active PFC F3</li>
                <li>Crucial BX500 240GB SSD</li>
                <li>Samsung 870 EVO 1TB SSD</li>
              </ul>
            ),
          },
          {
            title: 'Peripherals',
            body: (
              <ul>
                <li className="flex items-center gap-1">
                  <TbKeyboard size={28} color="cyan" />
                  <Link href="https://www.redragonzone.com/products/redragon-k550-rgb-yama-131-key-rgb-led-illuminated-backlit-mechanical-keyboard">
                    <a target="_blank">Redragon Yama K550</a>
                  </Link>
                </li>
                <li className="flex items-center gap-1">
                  <TbMouse size={28} color="violet" />
                  <Link href="https://www.gloriousgaming.com/products/glorious-model-o-black">
                    <a target="_blank">Glorious Model O</a>
                  </Link>
                </li>
                <li className="flex items-center gap-1">
                  <TbHeadphones size={28} color="orange" />
                  <Link href="https://spcgear.com/en/product/viro/">
                    <a target="_blank">SPC Gear Viro</a>
                  </Link>
                </li>
              </ul>
            ),
          },
        ].map(({ title, image, url, body }) => (
          <div
            key={url}
            className="flex h-fit flex-col gap-4 rounded-lg bg-white px-4 py-8 text-black shadow-lg"
          >
            <h1 className="text-center text-xl font-bold">{title}</h1>
            {image && (
              <Image
                src={image}
                width={512}
                height={512}
                title={title}
                alt={title}
                className="select-none"
              />
            )}
            {body}
            {url && (
              <Link href={url}>
                <a target="_blank" className="text-sm font-bold">
                  More...
                </a>
              </Link>
            )}
          </div>
        ))}
      </div>
    </main>
  </Layout>
);

export default Contact;
