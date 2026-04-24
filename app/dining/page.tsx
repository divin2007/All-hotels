import Image from "next/image";

export default function DiningPage() {
  return (
    <main className="max-w-[1440px] mx-auto px-12 pt-32">
      {/* Hero Section */}
      <header className="mb-section-gap">
        <div className="flex flex-col md:flex-row gap-gutter items-end">
          <div className="w-full md:w-2/3">
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8">
              Epicurean <br /> <span className="serif-italic">Excellence</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              At Aetheria, dining is a multisensory journey through the seasons. Our Michelin-star kitchen celebrates the purity of ingredients with technical mastery.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-end">
            <button className="flex items-center gap-4 text-on-surface hover:text-on-tertiary-container transition-colors group">
              <span className="font-label-caps text-label-caps uppercase tracking-widest">Book a Table</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="mt-16 relative h-[716px] w-full overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJbc4YYXSkPaSDDmiau2R4OXIVuDynzZuuQajkVBpUekFDFD4SP0NR9kV2e4PtRhojr-fN18DiAkUT-DQkIXO0LCfErcTUsJHtsMJkIMbd0HsTlaWtt4BIJOEKw9KAcodioqGMDPSh_x8tn_CzZr-3JNZdElWzB1RCknuB2-d9N0pNQNdb6t-ROktMTSrEibn4WPWmMvJ50x10NK9YTCwdH_mjTPO3f_MshOq40lt9tYzk96mixJtDEo4gHtTSi1je6LgoT5UASM"
            alt="Exquisite Michelin-star plated dish"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-12 right-12 glass-overlay p-8 max-w-sm">
            <span className="font-label-caps text-label-caps uppercase text-on-tertiary-container block mb-4">Featured Venue</span>
            <h3 className="font-headline-md text-headline-md mb-2">The Gastronomy Room</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">A dialogue between nature and plate.</p>
          </div>
        </div>
      </header>

      {/* Section 1: The Main Restaurant */}
      <section className="mb-section-gap">
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <span className="font-label-caps text-label-caps uppercase text-on-tertiary-container mb-6">The Atmosphere</span>
            <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">
              The Main <br />
              Restaurant
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              Designed with high ceilings and floor-to-ceiling windows, our flagship venue offers panoramic views that shift with the evening light. A sanctuary of understated luxury.
            </p>
            <div className="flex gap-8">
              <div className="border-l border-outline-variant pl-6">
                <span className="block font-label-caps text-[10px] uppercase text-on-surface-variant mb-1">Dinner</span>
                <span className="font-body-md text-body-md italic">19:00 — 23:00</span>
              </div>
              <div className="border-l border-outline-variant pl-6">
                <span className="block font-label-caps text-[10px] uppercase text-on-surface-variant mb-1">Dress Code</span>
                <span className="font-body-md text-body-md italic">Elegant Casual</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXCu4GfCwIP-ydrFDaTNXGiPQfK9eK9IqpCDxHR5FGF3f233BLKTl6WliAOvQuGG4cR5GM-YtRbKGI0Tsj7licnDpeVSV2uNZMr56J2_uQ7gFRAeSJ55uGtg46gsL3XRZG7WnfboswySXeAklspe6uRqZrlf-Y7VZx3FgWQytHKTkGv16w8hjxQ4VIjwpKo7OpTFevYal1Pej7Z8WCHWenCvEty6YcHacIEXUlUnNShpXg3cwrgUNNXlQNi-UMe5IguTD6kiekaEE"
                alt="Modern minimalist luxury restaurant interior"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Chef's Table */}
      <section className="mb-section-gap">
        <div className="bg-surface-container-low p-16">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-label-caps text-label-caps uppercase text-on-tertiary-container mb-6 block">Exclusive Experience</span>
            <h2 className="font-headline-lg text-headline-lg mb-8">The Chef's Table</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              An intimate encounter with our culinary vision. Limited to six guests nightly for a bespoke 12-course tasting menu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDJIbnw0zySIPPEHpCLoBAwv_6ipXDJHIHipP9lrNVnz2pZsSpfZDqm35CPkqiJZ_-9rm1-jfOS3uwt-PMYupcxirhDjPJR7D0hOTB6A3dbH_RBURmahm6kpFXrjrmL61oGgIpeqk_nAzkc4oMlMLdLYLg7i4psX8vI169luC50AHiZtjFSzQMpMeozIu8w976t_DbsQdfJZMRjWzp7JzO3LBSwCd2fQNDa7VXh287pcRO2NmBmvENzLqd2dAjHbiHEz0pXqT_Csck",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCwl6fFz0aI3j4W0G7ionXJb9fGOPIxif8FYY9xwP-qY1vNePbNVmNfsri_u51pqwTGwr-IQWGDbQGYa9Dg2Hy0gd8pZqAGbhyYh-6XymXWJqO1su78_uD97I26Tuiqo-6lR5p8ZMIWRDjRTCAdETtvFqGyeE9TF2W1OFlzT_rrCvpY7nI1BBCPVa_rZKrM3KRlYaYkSaPaCvbivySB7G63ad66xjaZgaKAIFMZRmEg4o7KGjFjdFUxuljPhd44wTER1DFtF3Y_2kQ",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBtqaIUlWftEE688aPHEsGXpIaelTGjOerJrz3hS-efau4-9o_jzp8J1ucYDoNB5u0XJb0z_Ec03cVhzFnZy4lZABewqRpEQOVK5L7yRYE3j8IfjG4OwnIgfTvuT7Ye8io_otf4PQw8CrLOd87bLXSc6ieVUKX2gPkMNpb38OsD4deQYCVCZSXcOrkH0kV6iLzotm0FchoJ7C84XT_r26IZtz0tF9eoHmH642UpuhE3m5Nk8-1FOrDAArgqmaQzawD283omyf0D0mk",
            ].map((src, idx) => (
              <div key={idx} className="aspect-square relative overflow-hidden group">
                <Image
                  src={src}
                  alt={`Chef's Table detail ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <button className="bg-on-tertiary-container text-on-tertiary px-12 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:opacity-90 transition-opacity">
              Inquire Availability
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: In-Room Dining */}
      <section className="mb-section-gap">
        <div className="flex flex-col md:flex-row-reverse gap-gutter items-center">
          <div className="w-full md:w-1/2">
            <div className="pl-0 md:pl-20">
              <span className="font-label-caps text-label-caps uppercase text-on-tertiary-container mb-6 block">Private Serenity</span>
              <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">
                In-Room <br />
                Dining
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Experience the same Michelin-standard quality in the comfort of your sanctuary. Available 24 hours a day, our private dining menu is tailored for moments of quiet indulgence.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { icon: "room_service", label: "Chef's Selection Breakfast" },
                  { icon: "nightlight", label: "Late Night Gourmet Menu" },
                  { icon: "local_bar", label: "Sommelier's Private Selection" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-on-surface-variant border-b border-outline-variant/30 pb-4">
                    <span className="material-symbols-outlined text-on-tertiary-container">{item.icon}</span>
                    <span className="font-body-md">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeM4fNm_nXyYpYHADGuUc4P460xWGw5EX0QbQnE9cAPtkTWVliq9444GdbqNOOnKi6tSitODvt6W8nuxveSazqvynk5viK79K8tUj5VuXk1wQmveh1Y9eRXjHVBUspEju5dieO5apaBKXOA_FJ-82WP4cmqXdjbMTv0IDe0asOY9vWFf-bk7jGnKfWS5YHYjtKHh7Cd6ucoL2a-e-QhlQi1p1mifdV6QGdSU6fXhi12w8EWg_Pbrs9FSjONbT1ODK-Qh6kyBjBi_M"
                alt="Luxury hotel breakfast tray"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
