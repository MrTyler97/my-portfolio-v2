'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogImage,
} from '@/components/ui/morphing-dialog'
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from '@/components/motion-primitives/carousel'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'
import { GlowEffect } from '@/components/motion-primitives/glow-effect'
import { Spotlight } from '@/components/motion-primitives/spotlight'
import { useState, useEffect } from 'react'
import { TextMorph } from '@/components/ui/text-morph'
import { TextLoop } from '@/components/ui/text-loop'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be')
  const isImage =
    src.includes('.png') ||
    src.includes('.jpg') ||
    src.includes('.jpeg') ||
    src.includes('.gif') ||
    src.includes('.webp')

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <div className="relative w-full">
          {isYouTube ? (
            <>
              <iframe
                src={src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="pointer-events-none aspect-video w-full rounded-xl"
              />
              {/* Invisible overlay to capture clicks */}
              <div className="absolute inset-0 cursor-zoom-in" />
            </>
          ) : isImage ? (
            <MorphingDialogImage
              src={src}
              alt="Project preview"
              className="aspect-video w-full cursor-zoom-in rounded-xl object-contain"
            />
          ) : (
            <video
              src={src}
              autoPlay
              loop
              muted
              className="aspect-video w-full cursor-zoom-in rounded-xl"
            />
          )}
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          {isYouTube ? (
            <iframe
              src={src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
            />
          ) : isImage ? (
            <MorphingDialogImage
              src={src}
              alt="Project preview"
              className="aspect-video h-[70vh] w-full rounded-xl object-contain md:h-[70vh]"
            />
          ) : (
            <video
              src={src}
              autoPlay
              loop
              muted
              className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
            />
          )}
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
function ProjectsSection({ variants, transition }: { variants: any, transition: any }) {
  // Determine if we should use carousel on desktop based on project count
  const useDesktopCarousel = PROJECTS.length > 2
  
  return (
    <motion.section
      variants={variants}
      transition={transition}
    >
      <h3 className="mb-5 text-lg font-medium">Projects</h3>
      
      {/* Mobile: Always Carousel View (single item) */}
      <div className="sm:hidden">
        <Carousel>
          <CarouselContent>
            {PROJECTS.map((project) => (
              <CarouselItem key={project.name} className="p-1">
                <div className="space-y-2">
                  <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                    <Spotlight
                      className="from-[#FF5733] to-[#3357FF] blur-3xl dark:from-[#FF5733] dark:to-[#3357FF]"
                      size={175}
                    />
                    <ProjectVideo src={project.media} />
                  </div>
                  <div className="px-1">
                    <a
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                      href={project.link}
                      target="_blank"
                    >
                      {project.name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                    </a>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation alwaysShow />
          <CarouselIndicator />
        </Carousel>
      </div>

      {/* Desktop: Grid View for ≤2 projects, Carousel for >2 projects */}
      <div className="hidden sm:block">
        {useDesktopCarousel ? (
          // Carousel view for more than 2 projects
          <Carousel>
            <CarouselContent>
              {PROJECTS.map((project) => (
                <CarouselItem key={project.name} className="p-1 basis-1/2">
                  <div className="space-y-2">
                    <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                      <Spotlight
                        className="from-[#FF5733] to-[#3357FF] blur-3xl dark:from-[#FF5733] dark:to-[#3357FF]"
                        size={175}
                      />
                      <ProjectVideo src={project.media} />
                    </div>
                    <div className="px-1">
                      <a
                        className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                        href={project.link}
                        target="_blank"
                      >
                        {project.name}
                        <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                      </a>
                      <p className="text-base text-zinc-600 dark:text-zinc-400">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNavigation alwaysShow />
            <CarouselIndicator />
          </Carousel>
        ) : (
          // Grid view for 2 or fewer projects
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <Spotlight
                    className="from-[#FF5733] to-[#3357FF] blur-3xl dark:from-[#FF5733] dark:to-[#3357FF]"
                    size={175}
                  />
                  <ProjectVideo src={project.media} />
                </div>
                <div className="px-1">
                  <a
                    className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                    href={project.link}
                    target="_blank"
                  >
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                  </a>
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const [trigger, setTrigger] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])
  const blurSlideVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.01 },
      },
      exit: {
        transition: { staggerChildren: 0.01, staggerDirection: 1 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        filter: 'blur(10px) brightness(0%)',
        y: 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px) brightness(100%)',
        transition: {
          duration: 0.4,
        },
      },
      exit: {
        opacity: 0,
        y: -30,
        filter: 'blur(10px) brightness(0%)',
        transition: {
          duration: 0.4,
        },
      },
    },
  }
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Focused on Full-Stack, Mobile, and AI/ML Engineering.
          </p>
        </div>
      </motion.section>

    <ProjectsSection variants={VARIANTS_SECTION} transition={TRANSITION_SECTION} />

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-[#FF5733] to-[#3357FF] blur-3xl dark:from-[#FF5733] dark:to-[#3357FF]"
                size={175}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      {/*Resume section: Glow component. Nest Resume in glow component. On click (show), trigger glow and show resume. Click on resume to download*/}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="relative inline-block">
          <div className="pointer-events-none absolute -inset-2">
            <GlowEffect
              colors={['#0894FF', '#C959DD', '#ff2e2eff', '#04ff5cff']}
              mode="rotate"
              blur="strongest"
              duration={9}
              scale={0.9}
            />
          </div>
          <div className="relative flex flex-col items-start space-y-3 rounded-2xl border border-zinc-300/40 bg-zinc-100 p-6 dark:border-zinc-700/40 dark:bg-zinc-900">
            <div className="flex items-center space-x-3">
              <TextLoop className="text-xl font-medium text-zinc-950 dark:text-zinc-50">
                <span>Impact @ Honeywell</span>
                <span>National Society of Black Engineers</span>
                <span>Skills</span>
              </TextLoop>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              View my resume to see my professional experience and skills.
            </p>
            <div className="flex items-center space-x-3">
              <button
                className="relative flex h-9 scale-100 appearance-none items-center justify-center overflow-hidden rounded-lg border border-zinc-950/10 bg-zinc-950 px-4 text-sm text-zinc-50 transition-all select-none hover:bg-zinc-800 focus-visible:ring-2 active:scale-[0.96] dark:border-zinc-50/10 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                type="button"
                aria-label="View Resume"
                onClick={() => {
                  window.open('/Victor-SWE-Resume.pdf', '_blank')
                }}
              >
                <TextMorph>View</TextMorph>
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <div key={link.label} className="relative">
              <div className="relative">
                <MagneticSocialLink link={link.link}>
                  {link.label}
                </MagneticSocialLink>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
