"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Harley Johnson",
    university: "South Dakota State University",
    image: "/harley-johnson.jpeg",
    review:
      "CCC has been amazing so far. I've gotten plenty of great opportunities to expand my account and the ability to connect with others my age doing the same thing.",
  },
  {
    name: "Allison Gedeon",
    university: "Duquesne",
    image: "/allison-gedeon.jpeg",
    review:
      "CCC has provided many opportunities to get advice and tips on growing my platform! Every experience I've had with CCC management has been positive, and I have been welcomed with nothing but kindness. CCC has been a great outlet to add to my resume and open doors to brand opportunities, altogether teaching me more and more about social media and marketing.",
  },
  {
    name: "Emily Siano",
    university: "Florida Atlantic University",
    image: "/emily-siano.jpeg",
    review:
      "I've gotten to connect with so many new people who all have similar interests and goals as me which is an amazing experience. I also have now gotten two collabs with two really cool brands.",
  },
  {
    name: "MaryKate Richmond",
    university: "Miami University",
    image: "/marykate-richmond.jpeg",
    review:
      "Great opportunities and they have come in quick! You guys are so helpful and kind. I love it :)",
  },
  {
    name: "Katherine Leyden",
    university: "The University of Mississippi",
    image: "/katherine-leyden.jpeg",
    review:
      "The platform makes it easy to stay in the loop with new campaigns, and I genuinely feel encouraged and valued as a creator. It's been so refreshing to be surrounded by like-minded people who uplift and motivate one another, all while building our brands together. I'm so glad I found this space—it's helped open doors I didn't even know existed!",
  },
  {
    name: "Kaitlyn Cope",
    university: "Roberts Wesleyan University",
    image: "/kaitlyn-cope.jpeg",
    review:
      "I love being a part of CCC! I've already learned so much about content creation and seen growth in my accounts! I'm thankful for the opportunity to learn from creators like Abby Gendell! I think it's so cool that we get the chance to be featured on CCC's socials and make new friends along the way! I'm super excited about the brand deals coming up as well!",
  },
  {
    name: "Henley Barz",
    university: "Florida Gulf Coast University",
    image: "/henley-barz.jpeg",
    review:
      "Campus Creator Club is the real deal. It's not just tips and emails — it's a community of creators who actually support each other. I've learned more about content, landed opportunities, and grown my platform just by being part of it. If you're serious about creating, join CCC.",
  },
  {
    name: "Isabella Morreale",
    university: "Lynn University",
    image: "/isabella-morreale.jpeg",
    review:
      "It's really the most supportive group of people and so inspiring to see & help others with their journeys as well as the incredible opportunities that are presented to us with this club.",
  },
  {
    name: "Hannah McCabe",
    university: "San Jose State University",
    image: "/hannah-mccabe.jpeg",
    review:
      "I love the campus creator club! All the members are so supportive on my social media platforms, and the amount of opportunities offered from the CCC are amazing considering I've only been in it for about a month.",
  },
  {
    name: "Madison Tessar",
    university: "University of Tampa",
    image: "/madison-tessar.jpeg",
    review:
      "CCC has been a great resource for me to connect with other creators and be able to work with brands to promote content! I have been able to gain followers and connect with other people to learn how to grow my account to make my social image better! I would recommend CCC to anyone who is interested in becoming a (micro)influencer and wants to take the first steps into learning how to do so!",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-opposite {
          0%,
          100% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(5px);
          }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .float-animation-delayed {
          animation: float-delayed 4s ease-in-out infinite 0.5s;
        }

        .float-animation-opposite {
          animation: float-opposite 3.5s ease-in-out infinite 1s;
        }
      `}</style>

      {/* Navigation - Adjusted padding for mobile */}
      <header className="container mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Campus Creator Club"
            width={60}
            height={60}
            className="rounded-lg"
          />
        </div>
        <Link
          href="https://apps.apple.com/us/app/campus-creator-club/id6746701396"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 font-semibold">
            DOWNLOAD
          </Button>
        </Link>
      </header>

      {/* Hero Section - Adjusted padding for mobile */}
      <main className="container mx-auto px-4 py-12 sm:py-20 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-center max-w-5xl leading-tight text-gray-900 mb-6 font-heading">
          Where College Creators{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Connect, Grow, and Earn
          </span>
        </h1>

        <p className="text-center text-gray-600 max-w-2xl text-lg sm:text-xl leading-relaxed mb-12 font-medium">
          Connect with college creators nationwide, access exclusive brand
          deals, and level up your content through webinars with top creators.
        </p>

        {/* App Store Buttons - Using same style as QuitBet */}
        <div className="flex flex-row gap-4 sm:gap-6 mb-16 sm:mb-20 justify-center">
          <Link
            href="https://apps.apple.com/us/app/campus-creator-club/id6746701396"
            target="_blank"
            rel="noopener noreferrer"
            className="store-link"
          >
            <Image
              src="/app.svg.png"
              alt="Download on the App Store"
              width={200}
              height={60}
              className="store-button fade-in transition-transform hover:scale-105"
            />
          </Link>
        </div>

        {/* App Screenshots - Static (No Float Animation) */}
        <div className="w-full max-w-2xl px-4 mb-12 relative overflow-hidden h-96">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-center items-start pt-4">
            <div className="flex justify-center items-center -space-x-12">
              <div className="transform -rotate-6 transition-transform hover:rotate-0 hover:scale-105 z-10">
                <Image
                  src="/dashboard-screen.PNG"
                  alt="Dashboard Screen"
                  width={150}
                  height={300}
                  className="w-auto h-auto"
                  priority
                />
              </div>
              <div className="transform scale-125 transition-transform hover:scale-130 z-20">
                <Image
                  src="/community-screen.PNG"
                  alt="Community Screen"
                  width={180}
                  height={360}
                  className="w-auto h-auto"
                  priority
                />
              </div>
              <div className="transform rotate-6 transition-transform hover:rotate-0 hover:scale-105 z-10">
                <Image
                  src="/campaigns-screen.PNG"
                  alt="Campaigns Screen"
                  width={150}
                  height={300}
                  className="w-auto h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout - Smaller */}
          <div className="md:hidden flex justify-center pt-4">
            <div className="flex justify-center items-center -space-x-8">
              <div className="transform -rotate-6 scale-75 z-10">
                <Image
                  src="/dashboard-screen.PNG"
                  alt="Dashboard Screen"
                  width={120}
                  height={240}
                  className="w-auto h-auto"
                  priority
                />
              </div>
              <div className="transform scale-100 z-20">
                <Image
                  src="/community-screen.PNG"
                  alt="Community Screen"
                  width={140}
                  height={280}
                  className="w-auto h-auto"
                  priority
                />
              </div>
              <div className="transform rotate-6 scale-75 z-10">
                <Image
                  src="/campaigns-screen.PNG"
                  alt="Campaigns Screen"
                  width={120}
                  height={240}
                  className="w-auto h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Fade Overlay - Subtle bottom fade only */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-30"></div>
        </div>

        {/* Enhanced Animated Testimonials Section */}
        <section className="w-full px-4 py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
                <Star className="w-4 h-4 fill-current" />
                2,000+ Happy Creators
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 font-heading animate-fade-in-up animation-delay-200">
                What Our{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Creators
                </span>{" "}
                Say
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                Real stories from college creators who transformed their social
                media presence and started earning through our platform.
              </p>
            </div>

            {/* Main Featured Testimonial - Static */}
            <div className="mb-16 animate-fade-in-up animation-delay-600">
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2"></div>
                  <div className="p-8 md:p-12 relative">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      {/* Enhanced Profile Image */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                          <Image
                            src={testimonials[0].image || "/placeholder.svg"}
                            alt={testimonials[0].name}
                            width={192}
                            height={192}
                            className="w-full h-full object-cover relative z-10"
                          />
                        </div>
                        {/* Static Blue Dot */}
                        <div className="absolute -bottom-2 -left-2 bg-blue-500 rounded-full p-2">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Enhanced Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Static Stars */}
                        <div className="flex justify-center md:justify-start gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-6 h-6 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-8 italic font-medium relative">
                          <span className="text-6xl text-blue-200 absolute -top-4 -left-4 font-serif">
                            "
                          </span>
                          {testimonials[0].review}
                          <span className="text-6xl text-blue-200 absolute -bottom-8 -right-4 font-serif">
                            "
                          </span>
                        </blockquote>

                        {/* Enhanced Author Info */}
                        <div className="relative">
                          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-2xl text-gray-900 mb-2">
                              {testimonials[0].name}
                            </h3>
                            <p className="text-blue-600 font-semibold text-lg">
                              {testimonials[0].university}
                            </p>
                            <div className="mt-3 flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              Active Creator
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Grid - Interactive Cards Only */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {testimonials.slice(1, 7).map((testimonial, index) => (
                <div
                  key={index}
                  className="group transform transition-all duration-500 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                    {/* Mini Profile */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-600 text-xs font-medium">
                          {testimonial.university}
                        </p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Review Preview */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      "{testimonial.review}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA - Moved closer to bottom */}
            <div className="text-center mt-12 animate-fade-in-up animation-delay-1000">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent transform rotate-45"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Join 2,000+ Successful Creators?
                  </h3>
                  <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                    Start your creator journey today and unlock exclusive brand
                    partnerships, educational content, and a supportive
                    community.
                  </p>
                  <Link
                    href="https://apps.apple.com/us/app/campus-creator-club/id6746701396"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-10 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                      Get Started Today
                      <div className="ml-2 inline-block animate-bounce">→</div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
