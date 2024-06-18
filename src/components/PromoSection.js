import React from "react";
import BioteenGuard from "../assets/BioteenGuard.png";
import BioteenHeal from "../assets/BioteenHeal.png";
import BioteenLean from "../assets/BioteenLean.png";
import BioteenMag from "../assets/BioteenMag.png";
import BioteenSleep from "../assets/BioteenSleep.png";
import BioteenLearn from "../assets/BioteenLearn.png";
import BioteenPMS from "../assets/BioteenPMS.png";

export default function PromoSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The future of natural supplements is here.
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Bioteen is a company that specializes in nutritional supplements
              tailored for active lifestyles and overall well-being. Their
              product line includes a variety of vitamins, minerals, and
              specialized supplements aimed at enhancing athletic performance,
              recovery, and general health. Bioteen emphasizes quality
              ingredients and scientific research in the development of their
              products, catering to fitness enthusiasts, athletes, and
              individuals seeking to improve their nutritional intake. The brand
              is dedicated to promoting healthy living through effective and
              reliable nutritional solutions.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg hidden lg:block">
                        <img
                          src={BioteenGuard}
                          alt="Bioteen Guard"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg hidden lg:block">
                        <img
                          src={BioteenHeal}
                          alt="Bioteen Heal"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg hidden lg:block">
                        <img
                          src={BioteenLean}
                          alt="Bioteen Lean"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg hidden lg:block">
                        <img
                          src={BioteenMag}
                          alt="Bioteen Mag"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg hidden lg:block">
                        <img
                          src={BioteenSleep}
                          alt="Bioteen Sleep"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg hidden lg:block">
                        <img
                          src={BioteenPMS}
                          alt="Bioteen PMS"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg hidden lg:block">
                        <img
                          src={BioteenLearn}
                          alt="Bioteen Learn"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
