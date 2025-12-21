import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white text-black py-32 px-6 md:px-12 rounded-t-[3rem] -mt-10 relative z-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-[10vw] font-black tracking-tighter uppercase leading-[0.8] mb-12">
          Let's Build
          <br />
          Something
          <br />
          <span className="text-blue-600">Legendary</span>
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20">
          <a
            href="mailto:sahdevpuran192@gmail.com"
            className="px-10 py-5 bg-black text-white text-xl font-bold rounded-full hover:bg-blue-600 hover:scale-105 transition-all duration-300"
          >
            Start a Project
          </a>

          <a
            href="/resume.pdf"
            className="px-10 py-5 border-2 border-black text-black text-xl font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300"
            download
          >
            Download CV
          </a>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-black pt-10 gap-8">
          
          {/* Social Links */}
          <div className="text-left">
            <p className="font-bold text-xl mb-3">Socials</p>
            <div className="flex gap-5">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <Github size={22} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="mailto:sahdevpuran192@gmail.com"
                className="hover:text-blue-600 transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-right font-mono text-sm">
            © 2025 SAHDEV PURAN
            <br />
            BHUBANESWAR, INDIA
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
