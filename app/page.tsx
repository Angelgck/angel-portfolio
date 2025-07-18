"use client"

import { Facebook, Instagram} from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Palette,
  Database,
  Globe,
  Menu,
  Briefcase,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import BackToTop from "@/components/back-to-top"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // Height of fixed navigation
      const elementPosition = element.offsetTop - navHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after clicking
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"]
      const navHeight = 80

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop - navHeight - 100
          if (window.scrollY >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  const skills = [
    { name: "JavaScript", level: 65, icon: Code },
    { name: "PHP", level: 80, icon: Code },
    { name: "Vue.js", level: 80, icon: Code },
    { name: "HTML/CSS", level: 90, icon: Code },
    { name: "UI/UX Design", level: 75, icon: Palette },
    { name: "Database Design", level: 80, icon: Database },
    { name: "Digital Marketing", level: 85, icon: Globe },
  ]

  const projects = [
    {
      title: "Web Application Development",
      description:
        "Designing, developing, and deploying dynamic and responsive web applications from concept to completion.",
      technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
      image: "/images/Captura de pantalla 2025-07-16 211741.png",
    },
    {
      title: "Animations in 2D and 3D",
      description:
        "Creating animations, from motion graphics to character design. Bringing static concepts to life through compelling visual media and interactive platforms.",
      technologies: ["Blender", "Adobe Animate"],
      image: "/images/calacawalk.jpg",
      
    },
    {
      title: "Digital Modeling and Immersive Experiences",
      description: "Building detailed 3D models and crafting immersive experiences using Virtual Reality (VR) and Augmented Reality (AR). Focused on creating interactive and realistic digital environments for training, visualization, or entertainment.",
      technologies: ["Polycam", "Unity Technologies", "Blender"],
      image: "/images/Imagen de WhatsApp 2025-07-16 a las 21.32.51_cb028aa6.jpg",
      
    },
    {
      title: "Audiovisuals and content creation",
      description:
        "Producing high-quality audiovisual content, including video shooting, editing, sound design, and graphic creation.",
      technologies: ["Spotify", "Redes Sociales", "Podcasts"],
      image: "/images/grupo.jpg",
      
    },
  ]

  const experiences = [
    {
      title: "3D Art Digital", 
      company: "Self-Employed",
      period: "2024",
      description:
        "A company with its own employees, focused on designing flyers, posters, t-shirts, caps, etc.",
    },
    {
      title: "Purification machine manager for CEMEX",
      company: "Company CEMEX",
      period: "2023",
      description:
        "Responsible for ensuring water quality standards, operational efficiency, and adherence to safety protocols.",
    },
    {
      title: "Fotographer",
      company: "Self-Employed",
      period: "2023",
      description:
        "Capturing high-quality, compelling images across various styles, including portrait, event, and commercial photography.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer"
            >
              AGCK
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-gray-300 hover:text-blue-400 transition-colors font-medium ${
                    activeSection === item.id ? "text-blue-400" : ""
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b shadow-lg">
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 px-4 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium ${
                      activeSection === item.id ? "text-blue-600 bg-blue-50" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src= "/images/Imagen de WhatsApp 2025-07-15 a las 14.04.13_524d1fb8.jpg"
              alt="Angel Gabriel Caamal Kauil"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-transparent hover:border-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20 transform hover:scale-105"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Angel Gabriel
              </span>
              <br />
              <span className="text-white">Caamal Kauil</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">Information Technologies Student & Web Developer</p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Student of virtual environments and digital business with educational experience in web development, digital marketing, and interactive design solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Hello! I'm Angel Gabriel</h3>
              <p className="text-gray-300 mb-4">
                I'm a 19-year-old Information Technologies student at Universidad Tecnológica de la Riviera Maya,
                passionate about creating innovative digital solutions that bridge technology and business needs.
              </p>
              <p className="text-gray-300 mb-4">
                I'm currently working on various projects that combine design, functionality, and performance, always looking for new ways to optimize web development. I also have a keen interest in immersive technology, such as virtual and augmented reality, as well as cybersecurity and automation.
              </p>
              <p className="text-gray-300 mb-6">
                I'm always open to new challenges and opportunities to continue learning and growing in the world of technology.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Web Development</Badge>
                <Badge variant="secondary">Digital Marketing</Badge>
                <Badge variant="secondary">UI/UX Design</Badge>
                <Badge variant="secondary">Animation</Badge>
                <Badge variant="secondary">Database Design</Badge>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">Information Technologies</p>
                  <p className="text-gray-600">Virtual Environments & Digital Business</p>
                  <p className="text-sm text-gray-600">Universidad Tecnológica de la Riviera Maya</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2 h-5 w-5 text-purple-600" />
                    Specializations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Web Application Development</li>
                    <li>• Marketing Website Design</li>
                    <li>• Registration Systems</li>
                    <li>• Audiovisual Content Creation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Technical Skills</h2>
          <p className="text-center text-gray-400 mb-12">Pase el cursor sobre cada habilidad para verla iluminada.</p>

          {/* Programming Languages */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8 text-blue-400">Programming Languages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills
                .filter((skill) => ["JavaScript", "PHP", "Vue.js", "HTML/CSS"].includes(skill.name))
                .map((skill, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:rotate-1 group cursor-pointer"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center text-white group-hover:text-blue-400 transition-colors">
                        <skill.icon className="mr-2 h-5 w-5 text-blue-500 group-hover:text-blue-300 group-hover:animate-pulse" />
                        {skill.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 group-hover:from-blue-400 group-hover:to-purple-400 group-hover:animate-pulse"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                        {skill.level}% Proficiency
                      </p>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Design & Marketing */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-purple-400">Design & Marketing</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter((skill) => !["JavaScript", "PHP", "Vue.js", "HTML/CSS"].includes(skill.name))
                .map((skill, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 group cursor-pointer"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center text-white group-hover:text-purple-400 transition-colors">
                        <skill.icon className="mr-2 h-5 w-5 text-purple-500 group-hover:text-purple-300 group-hover:animate-pulse" />
                        {skill.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 group-hover:from-purple-400 group-hover:to-pink-400 group-hover:animate-pulse"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                        {skill.level}% Proficiency
                      </p>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden
                  transition-all duration-300
                 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
    {/* Contenedor de la Imagen con efecto de zoom al pasar el cursor */}
    <div className="relative overflow-hidden">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Overlay de gradiente para que el texto (si lo hubiera) se lea mejor */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
    </div>
    
    <CardHeader>
      <CardTitle className="text-xl font-bold text-gray-100 tracking-wide">
        {project.title}
      </CardTitle>
      <CardDescription className="text-gray-400 h-20"> {/* Altura fija para alinear tarjetas */}
        {project.description}
      </CardDescription>
    </CardHeader>
    
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, techIndex) => (
          <Badge 
            key={techIndex} 
            variant="outline"
            className="bg-blue-900/50 text-blue-300 border-blue-700/50"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Professional Experience</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium mt-4 pl-2 flex items-center">
                      <Briefcase className="mr-2 h-4 w-4" />
                      {exp.company}
                     </CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can bring your ideas
            to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Mail className="mr-2 h-4 w-4" />
              angelcaamal728@gmail.com
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="mr-2 h-4 w-4" />
              +52 (984) 136 1112
            </Button>
          </div>
          <div className="flex justify-center space-x-4">
             <Button variant="ghost" size="icon" asChild>
               <Link 
                 href="https://www.facebook.com/share/172U8RcV5u/?mibextid=wwXIfr" // <-- PEGA AQUÍ TU LINK DE FACEBOOK
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label="Facebook">
                 <Facebook className="h-5 w-5" />
               </Link>
             </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link 
                href="https://www.instagram.com/ckk.angels?igsh=aW8wcmZ6Z2RsajBk&utm_source=qr" // <-- PEGA AQUÍ TU LINK DE INSTAGRAM
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link 
                href="https://x.com/Xck_Angels" // <-- PEGA AQUÍ TU LINK DE x
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X">
                <X className="h-6 w-6" />
              </Link>
            </Button>
            
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 Angel Gabriel Caamal Kauil. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>

      <BackToTop />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </div>
  )
}
