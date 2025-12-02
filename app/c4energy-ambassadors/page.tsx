"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Star,
  Zap,
  Users,
  Gift,
  Trophy,
  Calendar,
  Target,
  Award,
  TrendingUp,
} from "lucide-react";

const perks = [
  {
    icon: <Gift className="w-10 h-10" />,
    title: "Monthly Product Drops",
    description: "Get the latest C4 Energy products delivered to your door",
  },
  {
    icon: <Trophy className="w-10 h-10" />,
    title: "Exclusive Merch",
    description: "Limited edition C4 Energy apparel and accessories",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Paid Challenges",
    description: "Earn money through creative content challenges",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Ambassador Community",
    description: "Connect with like-minded creators nationwide",
  },
  {
    icon: <Calendar className="w-10 h-10" />,
    title: "Unique Events & Activations",
    description: "Exclusive access to C4 Energy events and experiences",
  },
  {
    icon: <Target className="w-10 h-10" />,
    title: "Feature Opportunities",
    description: "Get featured on C4 Energy's official channels",
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "Retail Rewards",
    description: "Special discounts and rewards at partner retailers",
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Career Growth",
    description: "Build your resume and develop professional skills",
  },
];

export default function C4AmbassadorPage() {
  return (
    <div className="min-h-screen bg-c4-white">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent text-c4-white ">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Mobile/Tablet: CCC on left, C4 on right */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <Image
              src="/ccc-grey-logo.png"
              alt="Campus Creator Club"
              width={100}
              height={100}
              className="rounded-lg w-16 sm:w-20 h-auto"
            />
            <p className="font-pilat font-black text-c4-yellow italic text-2xl sm:text-3xl leading-none">
              C4
            </p>
          </div>

          {/* Desktop: Both logos on left, button on right */}
          <div className="hidden lg:flex items-center gap-8">
            <Image
              src="/ccc-grey-logo.png"
              alt="Campus Creator Club"
              width={100}
              height={100}
              className="rounded-lg w-24 h-auto"
            />
            <div className="w-px h-8 bg-c4-gray/30"></div>
            <p className="font-pilat font-black text-c4-yellow italic text-4xl leading-none">
              C4
            </p>
          </div>

          <Link
            href="https://apps.apple.com/us/app/campus-creator-club/id6746701396"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block"
          >
            <Button className="bg-c4-yellow text-c4-black hover:bg-c4-yellow/90 rounded-full px-8 py-3 font-pilat font-bold text-base shadow-lg">
              JOIN NOW
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-c4-black text-c4-white min-h-screen flex items-center overflow-hidden">
        {/* Background Collage Image with Overlays */}
        <div className="absolute inset-0">
          <Image
            src="/c4-influencer-collage.jpeg"
            alt="C4 Energy Student Ambassadors"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Multi-layer overlay for text readability but keep image visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
          {/* Soft top fade to reduce blocking without tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          {/* Header emphasis: strong, shallow top overlay */}
          <div className="absolute top-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-b from-black/95 via-black/80 to-transparent pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-32 pt-40">
          {/* Badge */}
          <div className="flex justify-center mb-12 animate-fadeIn">
            <div className="inline-flex items-center gap-1.5 bg-c4-yellow/15 text-c4-yellow rounded-full px-4 py-2 shadow-lg backdrop-blur-md border border-c4-yellow/40">
              <Zap className="w-3 h-3 text-c4-yellow" />
              <span className="font-inter font-semibold text-xs sm:text-sm text-c4-yellow uppercase tracking-wider">
                Now Recruiting Nationwide
              </span>
              <Zap className="w-3 h-3 text-c4-yellow" />
            </div>
          </div>

          {/* Main heading - No glass background */}
          <div className="text-center mb-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-pilat font-black uppercase leading-none">
                <span className="block text-4xl lg:text-6xl xl:text-7xl text-white mb-2 animate-slideDown drop-shadow-[0_6px_12px_rgba(0,0,0,0.9)]">
                  C4 Energy
                </span>
                <span className="block relative">
                  <span
                    className="text-3xl lg:text-5xl xl:text-6xl text-c4-yellow animate-slideUp font-black drop-shadow-[0_6px_12px_rgba(0,0,0,0.9)]"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Ambassador
                  </span>
                  <span
                    className="block text-3xl lg:text-5xl xl:text-6xl text-white mt-2 animate-fadeIn drop-shadow-[0_6px_12px_rgba(0,0,0,0.9)]"
                    style={{ animationDelay: "0.4s" }}
                  >
                    Program
                  </span>
                </span>
              </h1>
            </div>
          </div>

          {/* Description - No glass background */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="p-0">
              {/* Mobile/Tablet: solid black background behind the description; Desktop: transparent */}
              <div className="bg-black/90 lg:bg-transparent rounded-xl lg:rounded-none px-4 py-4 lg:px-0 lg:py-0">
                <p
                  className="font-poppins text-md lg:text-xl text-gray-200 leading-relaxed mb-6 animate-fadeIn drop-shadow-[0_6px_14px_rgba(0,0,0,0.95)]"
                  style={{
                    animationDelay: "0.6s",
                    textShadow:
                      "0 2px 8px rgba(0,0,0,0.95), 0 8px 24px rgba(0,0,0,0.85), 0 16px 48px rgba(0,0,0,0.7)",
                  }}
                >
                  We're powering a nationwide campus movement with{" "}
                  <span className="text-c4-yellow font-semibold">
                    C4 Energy
                  </span>{" "}
                  through Campus Creator Club. Student ambassadors get exclusive
                  access to product, events, and perks while creating authentic
                  content that drives awareness and sales on their campuses.
                </p>
              </div>

              {/* Tagline with special styling */}
              <div
                className="relative inline-block animate-fadeIn"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="absolute -inset-2 bg-c4-yellow/20 blur-lg"></div>
                <div className="relative font-pilat font-bold text-xl lg:text-2xl text-c4-yellow border-2 border-c4-yellow/50 px-6 py-3 backdrop-blur-sm rounded-xl">
                  {/* Desktop/tablet: single line */}
                  <span className="hidden sm:inline whitespace-nowrap">
                    Any Student. Any Campus. All Energy.
                  </span>
                  {/* Mobile: stacked lines */}
                  <span className="block sm:hidden leading-snug">
                    Any Student.
                    <br />
                    Any Campus.
                    <br />
                    All Energy.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section - No glass background */}
          <div className="flex justify-center mb-12">
            <div className="p-0">
              <Link
                href="https://apps.apple.com/us/app/campus-creator-club/id6746701396"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-fadeIn block"
                style={{ animationDelay: "1s" }}
              >
                <Button className="group relative bg-c4-yellow text-c4-black hover:bg-c4-yellow/90 rounded-full px-12 py-6 font-pilat font-bold text-lg transform hover:scale-105 transition-all duration-300">
                  <span className="relative z-10">JOIN THE MOVEMENT</span>
                  <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-c4-yellow rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-c4-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-c4-black rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-c4-yellow"></div>
              <span className="font-inter font-semibold text-sm text-c4-gray uppercase tracking-wider">
                Exclusive Benefits
              </span>
              <div className="h-1 w-12 bg-c4-yellow"></div>
            </div>
            <h2 className="font-pilat font-black text-4xl lg:text-6xl text-c4-black mb-6 uppercase">
              Ambassador{" "}
              <span className="text-c4-yellow bg-c4-black px-4 py-2 inline-block transform -rotate-2">
                Perks
              </span>
            </h2>
            <p className="font-inter text-lg text-c4-gray max-w-2xl mx-auto">
              Unlock exclusive benefits designed to fuel your creativity and
              amplify your impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden"
              >
                {/* Card background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-c4-yellow/0 to-c4-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon container with background */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-c4-black rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <div className="text-c4-yellow group-hover:scale-110 transition-transform duration-300">
                    {perk.icon}
                  </div>
                </div>

                <h3 className="relative z-10 font-pilat font-bold text-lg text-c4-black mb-3 uppercase tracking-wide">
                  {perk.title}
                </h3>
                <p className="relative z-10 font-poppins text-xs text-c4-gray leading-relaxed">
                  {perk.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-c4-yellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-c4-black text-c4-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-pilat font-black text-4xl lg:text-5xl mb-8 uppercase">
              Ready to <span className="text-c4-yellow">Power Up</span>?
            </h2>
            <p className="font-poppins text-xl text-c4-gray-light mb-12 max-w-2xl mx-auto">
              Join thousands of student ambassadors who are already making an
              impact on their campuses. Your energy, our fuel. Let's create
              something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="https://apps.apple.com/us/app/campus-creator-club/id6746701396"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-c4-yellow text-c4-black hover:bg-c4-yellow/90 rounded-full px-12 py-6 font-pilat font-bold text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  DOWNLOAD APP
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-c4-gray-light">
                <Star className="w-5 h-5 fill-c4-yellow text-c4-yellow" />
                <Star className="w-5 h-5 fill-c4-yellow text-c4-yellow" />
                <Star className="w-5 h-5 fill-c4-yellow text-c4-yellow" />
                <Star className="w-5 h-5 fill-c4-yellow text-c4-yellow" />
                <Star className="w-5 h-5 fill-c4-yellow text-c4-yellow" />
                <span className="ml-2 font-inter">Join 2,000+ creators</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-c4-gray-dark text-c4-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8">
              <Image
                src="/ccc-grey-logo.png"
                alt="Campus Creator Club"
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="w-px h-6 bg-c4-gray"></div>
              <Image
                src="/logo-c4.webp"
                alt="C4 Energy"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="font-inter text-c4-gray-light mb-2">
                © 2024 Campus Creator Club x C4 Energy
              </p>
              <p className="font-inter text-sm text-c4-gray">
                Empowering student creators nationwide
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
