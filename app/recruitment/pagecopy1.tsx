import Link from "next/link";

export const metadata = {
  title: "Join CHiPSET | Careers & Opportunities",
  description: "Explore opportunities to join CHiPSET, SRM University Ramapuram's premier technical club. Learn about our mission, past events, and community.",
};

export default function Careers() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#f39e2f]">Join Our Community</h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8">
            CHiPSET is the technical heartbeat of SRM University Ramapuram. We foster innovation, collaboration, and learning through cutting-edge technology and hands-on projects.
          </p>
        </div>
      </section>

      {/* About CHiPSET Section */}
      <section className="py-16 px-4 md:px-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">About CHiPSET</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[#f39e2f] mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              CHiPSET is dedicated to creating a vibrant technical community where passionate individuals collaborate on innovative projects, share knowledge, and push the boundaries of technology. We believe in learning by doing and fostering a culture of excellence.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#f39e2f] mb-4">What We Do</h3>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start">
                <span className="text-[#f39e2f] font-bold mr-3">✓</span>
                <span>Host technical workshops and seminars</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f39e2f] font-bold mr-3">✓</span>
                <span>Organize hackathons and coding competitions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f39e2f] font-bold mr-3">✓</span>
                <span>Create meaningful technical content</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f39e2f] font-bold mr-3">✓</span>
                <span>Build collaborative development projects</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 px-4 md:px-12 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Join CHiPSET?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-[#f39e2f] mb-4">Learn & Grow</h3>
              <p className="text-gray-700">
                Access mentorship from experienced members, attend technical talks, and develop skills in cutting-edge technologies.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-[#f39e2f] mb-4">Network</h3>
              <p className="text-gray-700">
                Connect with like-minded developers, engineers, and innovators from across the university and industry.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-[#f39e2f] mb-4">Build Projects</h3>
              <p className="text-gray-700">
                Collaborate on real-world projects, contribute to open-source, and showcase your portfolio to potential employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="py-16 px-4 md:px-12 max-w-5xl mx-auto">
        <div className="bg-blue-50 border-l-4 border-[#f39e2f] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Recruitment Status</h2>
          <p className="text-gray-700 text-lg mb-6">
            Registrations for this year&apos;s recruitment cycle are currently closed. However, CHiPSET is always looking for passionate members who want to contribute to our community!
          </p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Next Recruitment Window:</strong> Look out for announcements in the coming months</p>
            <p><strong>Stay Connected:</strong> Follow our social media channels for updates</p>
            <p><strong>Get Involved:</strong> Even if formal recruitment is closed, reach out to our team about other opportunities to participate</p>
          </div>
        </div>
      </section>

      {/* Contact & Follow Section */}
      <section className="py-16 px-4 md:px-12 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Want to Connect?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Have questions about CHiPSET or want to stay updated on opportunities?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#f39e2f] text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition"
            >
              Contact Us
            </Link>
            <a
              href="https://www.instagram.com/chipsetsrmrmp/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#f39e2f] text-[#f39e2f] font-semibold py-3 px-8 rounded-lg hover:bg-[#f39e2f] hover:text-white transition"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 md:px-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Explore More</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/about" className="p-6 border border-slate-200 rounded-lg hover:border-[#f39e2f] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">About CHiPSET</h3>
            <p className="text-gray-600">Learn more about our history, mission, and impact</p>
          </Link>
          <Link href="/events" className="p-6 border border-slate-200 rounded-lg hover:border-[#f39e2f] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Events</h3>
            <p className="text-gray-600">Check out our upcoming events and past initiatives</p>
          </Link>
          <Link href="/team" className="p-6 border border-slate-200 rounded-lg hover:border-[#f39e2f] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Team</h3>
            <p className="text-gray-600">Meet the passionate members leading CHiPSET</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
