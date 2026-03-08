import PrizeCard from "@/components/PrizeCard";
import prizes from "../../public/prizes.json";
import RSVPButton from "./RSVPButton";
import ScrollEffects from "./ScrollEffects";
import Image from "next/image";

interface Prize {
  title: string;
  imageUrl: string;
  timeReq: string;
  sortOrder: number;
  description?: string;
}

const sortedPrizes = (prizes as Prize[]).sort(
  (a, b) => a.sortOrder - b.sortOrder
);

export default function Home() {
  return (
    <>
      <header className="relative w-full min-h-screen text-white flex items-center justify-center flex-col gap-2 overflow-hidden">
        <a
          href="https://hackclub.com"
          target="_blank"
          className="absolute top-0 left-4 z-50 w-48 hover:w-64 transition-all duration-300 ease-out"
        >
          <Image
            src="https://assets.hackclub.com/flag-orpheus-top.svg"
            alt="Hack Club"
            className="w-full"
            width={128}
            height={128}
          />
        </a>

        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/header.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 text-center flex flex-col gap-4 items-center w-10/12 sm:w-auto">
          <h1 className="text-5xl font-bold">Race Camp GP</h1>
          <hr className="w-full" />
          <p className="font-extralight text-xl">
            You Ship: An F1 Project | We Ship: F1 prizes!
          </p>
          <RSVPButton />
        </div>

        <div
          className="absolute bottom-10 z-10 animate-bounce transition"
          style={{ fontSize: "5rem" }}
        >
          ⬇
        </div>
      </header>

      {/* FAQ section */}
      <div className="py-8 flex flex-col w-10/12 lg:w-1/2 text-wrap items-center wrap-break-word">
        <h2 className="text-3xl font-bold text-center mb-4">FAQ</h2>
        <div className="max-w-3xl w-full space-y-6 [&>p]:text-wrap">
          {/* Can I participate */}
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="pb-4">
                <h3 className="text-2xl font-semibold underline pb-2">
                  Can I participate?
                </h3>
                <p className="w-full">
                  If you&apos;re between the ages of 13-18 and YSWS eligible,
                  you can participate!
                </p>
              </div>
            </div>
            <div className="hidden sm:block pl-18">
              <Image
                src="/rb21.jpg"
                alt="RB21"
                className="w-48 h-auto rounded-lg shadow-lg"
                width={192}
                height={192}
              />
            </div>
          </div>

          <hr className="w-full border-neutral-600" />

          {/* What are the requirements */}
          <div className="flex flex-row">
            <div className="hidden sm:block pr-18">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/amggt4.jpg"
                alt="AMG GT4"
                className="w-48 h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <div className="pb-4 w-full">
                <h3 className="text-2xl font-semibold underline pb-2">
                  What are the requirements?
                </h3>
                <ul className="list-disc list-inside">
                  <li>Your project must be F1 related.</li>
                  <li>
                    Your project &amp; source code must be original, no
                    copying!
                  </li>
                  <li>
                    Your code must be open-sourced in a public repository.
                  </li>
                  <li>You must track your coding time with Hackatime.</li>
                  <li>
                    You must be between the ages of 13-18 and YSWS eligible.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How do I get started */}
          <hr className="w-full border-neutral-600" />
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="pb-4 w-full">
                <h3 className="text-2xl font-semibold underline pb-2">
                  How do I get started?
                </h3>
                <ol className="list-decimal list-inside mb-4">
                  <li>
                    Install{" "}
                    <a
                      href="https://hackatime.hackclub.com/"
                      className="underline text-blue-500"
                    >
                      Hackatime
                    </a>{" "}
                    to track your coding time
                  </li>
                  <li>
                    Make a publicly accessible repository for your project,
                    the code must be open-sourced!
                  </li>
                  <li>
                    Start building your F1 related project! Don&apos;t forget
                    to commit your changes often.
                  </li>
                  <li>Once finished, submit via this link link here later</li>
                </ol>
              </div>
            </div>
            <div className="hidden sm:block pl-18">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bmw.jpg"
                alt="BMW"
                className="w-48 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* More questions */}
          <hr className="w-full border-neutral-600" />
          <div className="flex flex-row">
            <div className="hidden sm:block pr-18">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/rp20.jpg"
                alt="RP20"
                className="w-48 h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <div className="pb-4 w-full">
                <h3 className="text-2xl font-semibold underline pb-2">
                  I have more questions!
                </h3>
                <p>
                  Feel free to ask questions in the{" "}
                  <a
                    href="https://hackclub.enterprise.slack.com/archives/C09MZ097XGC"
                    className="underline text-blue-500"
                    target="_blank"
                  >
                    #race-camp-gp
                  </a>{" "}
                  channel on the Hack Club Slack!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full border-neutral-950" />

      {/* Prizes Section */}
      <div className="py-16 flex flex-col w-11/12 lg:w-3/4 items-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Prizes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {sortedPrizes.map((prize) => (
            <PrizeCard
              key={prize.title}
              title={prize.title}
              description={prize.description ?? undefined}
              imageUrl={`/${prize.imageUrl.replace(/^\/+/, "")}`}
              timeReq={prize.timeReq}
            />
          ))}
        </div>
      </div>

      <hr className="w-full border-neutral-950" />
      <footer className="w-full py-4 text-center text-sm text-white/50">
        <a
          href="https://github.com/BananaJeanss/race-camp-gp-site"
          className="underline"
        >
          Source Code
        </a>{" "}
        |{" "}
        <a href="https://hackclub.com/" className="underline">
          Hack Club
        </a>
      </footer>

      <ScrollEffects />
    </>
  );
}
