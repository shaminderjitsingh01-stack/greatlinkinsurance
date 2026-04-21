import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | GreatLink Insurance",
  description:
    "Learn about GreatLink Insurance - Singapore's trusted corporate insurance broker. MAS licensed with a commitment to excellence.",
};

const values = [
  {
    title: "Integrity",
    description:
      "We conduct our business with the highest ethical standards, ensuring complete transparency and accountability in every transaction.",
    icon: (
      <svg
        className="h-8 w-8 text-[#0D9488]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Honesty",
    description:
      "We believe in honest communication, providing straightforward advice and clear explanations without hidden agendas.",
    icon: (
      <svg
        className="h-8 w-8 text-[#0D9488]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: "Customer Centric",
    description:
      "Your needs are our priority. We listen, understand, and tailor solutions that best protect your business interests and assets.",
    icon: (
      <svg
        className="h-8 w-8 text-[#0D9488]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Excellence of Trust",
    description:
      "We strive to be a trusted partner you can rely on, building lasting relationships through consistent delivery and dependable service.",
    icon: (
      <svg
        className="h-8 w-8 text-[#0D9488]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D9488] to-[#115E59] py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About GreatLink Insurance
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-teal-100">
            Your trusted corporate insurance partner in Singapore
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-lg text-gray-600">
                <p>
                  With more than 10 years of experience in the industry, Greatlink Insurance Agency Pte Ltd has been applying our expertise via linking our customers to reputable insurers, helping them understand and protecting them from various risks, giving them a safety net to move forward with their life and businesses with peace of mind.
                </p>
                <p>
                  Our key clients are from sectors of the construction engineering,
                  logistics, and motor trade industry. These sectors demand fast,
                  reliable and value for money insurance quotes. We strive to be the
                  leader in performing our core competencies.
                </p>
                <p>
                  Today, Greatlink Insurance Agency Pte Ltd maintains a strong and
                  united team, guided by our core values of integrity, honesty,
                  customer centric, and excellence of trust.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl font-bold text-[#0D9488]">Your Trusted</div>
                  <div className="mt-2 text-xl text-gray-600">
                    Insurance Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <div className="mt-8 rounded-2xl bg-white p-8 shadow-lg border-l-4 border-[#0D9488]">
            <p className="text-xl text-gray-700 italic leading-relaxed">
              &ldquo;To provide businesses in Singapore with comprehensive,
              tailored insurance solutions that protect their assets, employees,
              and operations, while delivering exceptional service and building
              lasting partnerships based on trust and expertise.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses and Accreditations Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Licenses &amp; Accreditations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Fully licensed and accredited for your peace of mind
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-gradient-to-br from-[#0D9488] to-[#115E59] p-8 text-center text-white">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Regulated by GIA</h3>
              <p className="mt-2 text-teal-100">
                Licensed and regulated by the General Insurance Association of Singapore
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 text-center shadow-md border border-gray-100">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                <svg className="h-8 w-8 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Agency Excellence Award 2024</h3>
              <p className="mt-2 text-gray-600">China Taiping Insurance</p>
            </div>
            <div className="rounded-xl bg-white p-8 text-center shadow-md border border-gray-100">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                <svg className="h-8 w-8 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Agency Excellence Award 2025</h3>
              <p className="mt-2 text-gray-600">China Taiping Insurance</p>
            </div>
            <div className="rounded-xl bg-white p-8 text-center shadow-md border border-gray-100">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                <svg className="h-8 w-8 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">General Agency Award 2025</h3>
              <p className="mt-2 text-gray-600">Great Eastern</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0D9488] to-[#115E59] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Work with Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-teal-100">
            Let us help protect your business with the right insurance coverage
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-lg font-semibold text-[#0D9488] shadow-lg hover:bg-teal-50 transition-colors"
            >
              Get in Touch
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
