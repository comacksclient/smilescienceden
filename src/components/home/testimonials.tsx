"use client"

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marque" // Adjust path if needed

import { ScrollAnimation } from '@/components/ui/scroll-animation'


const reviews = [
  {
    name: "Piyush Raj",
    username: "2 months ago",
    body: "Dr. Raksha & Dr. Pranjal both are very good with dental procedure. It was seamless & flawless experience.",
    img: "https://api.dicebear.com/7.x/initials/svg?seed=PR&backgroundColor=1d5343",
  },
  {
    name: "Divyangshu Bariyar",
    username: "Local Guide · 5 months ago",
    body: "Dr. Pranjal is One of the best dentists in this area. Very Precise work, Neat & Clean Clinic, highly recommended !!",
    img: "https://api.dicebear.com/7.x/initials/svg?seed=DB&backgroundColor=0F172A",
  },
  {
    name: "Sara",
    username: "3 months ago",
    body: "Very good place for starting treatments, Doctor Raksha is super kind and explains everything properly. Highly recommend.",
    img: "https://api.dicebear.com/7.x/initials/svg?seed=S&backgroundColor=166534",
  },
  {
    name: "Pradosh Tripathy",
    username: "a month ago",
    body: "The dentists here are very good. The RCT was very smooth and they were very cooperative.",
    img: "https://api.dicebear.com/7.x/initials/svg?seed=PT&backgroundColor=334155",
  },
  {
    name: "Shweta Dharmdas",
    username: "2 months ago",
    body: "I'm very satisfied with the results and would highly recommend this clinic to others.",
    img: "https://api.dicebear.com/7.x/initials/svg?seed=SD&backgroundColor=be123c",
  },
  {
    name: "Michael Chen",
    username: "Patient since 2021",
    body: "Affordable membership plans and excellent service. My whole family benefits from their preventive care programs.",
    img: "https://api.dicebear.com/7.x/initials/svg?seed=MC&backgroundColor=000000",
  },
]

// Split reviews into two rows for the "Wall of Love" effect
const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

// --- 2. CUSTOM CARD COMPONENT (Odentrics Design) ---
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-[350px] md:w-[450px] cursor-pointer overflow-hidden rounded-[2rem] p-8 mx-4",
        // Light/Cream Theme Styles
        "border border-[#1d5343]/5 bg-white hover:border-[#1d5343]/20 shadow-[0_2px_20px_rgb(0,0,0,0.02)] hover:shadow-lg transition-all duration-300",
      )}
    >
      

      <blockquote className="mt-2 text-[#4B5563] text-base leading-relaxed font-medium mb-8">
        "{body}"
      </blockquote>

      <div className="flex flex-row items-center gap-4 pt-6 border-t border-gray-50">
        <img className="rounded-full w-10 h-10 bg-gray-100" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold font-serif text-[#1A1A1A]">
            {name}
          </figcaption>
          <div className="flex items-center gap-1.5">
             <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="w-3 h-3" />
             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wide">{username}</p>
          </div>
        </div>
      </div>
    </figure>
  )
}

// --- 3. MAIN SECTION ---
export function Testimonials() {
  return (
    <section className="bg-[#FDFBF0] py-24 relative overflow-hidden">
      
      {/* Header Content */}
      <ScrollAnimation>
        <div className="px-6 md:px-12 mb-16 flex flex-col items-center text-center">
          <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
            004 — Patient Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] tracking-tight mb-4">
            Loved by Neeladri Locals
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto">
            Real experiences from your neighbors in Electronic City. Rated 4.9/5 on Google.
          </p>
        </div>
      </ScrollAnimation>

      {/* MagicUI Marquee Implementation */}
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
        
        {/* Row 1: Left to Right */}
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        
        {/* Row 2: Right to Left (Reverse) */}
        <Marquee reverse pauseOnHover className="[--duration:40s] mt-6">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        
        {/* Fade Gradients - Matched to Cream Background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#FDFBF0] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#FDFBF0] to-transparent"></div>
      </div>

    </section>
  )
}