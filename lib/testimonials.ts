export type TestimonialCategory =
  | "ecosystem"
  | "eyerov"
  | "mentoring"
  | "masterclass";

export type Testimonial = {
  name: string;
  role: string;
  quote?: string;
  category: TestimonialCategory;
};

export const testimonialTabs = [
  { id: "all", label: "All" },
  { id: "eyerov", label: "EyeROV" },
  { id: "mentoring", label: "Mentoring" },
  { id: "masterclass", label: "Masterclass" },
  { id: "ecosystem", label: "Ecosystem" },
] as const;

export const testimonialsIntro = [
  "With over three decades of entrepreneurial grit, global leadership, and deep operational wisdom, Salma Moosa stands as a rare force in the startup and business world.",
  "She is the go-to Growth Execution Mentor for founders who are done with theory and ready for traction. Her signature approach blends strategic clarity, tactical action, and emotional resilience—helping startups scale with purpose, and mature businesses rediscover momentum.",
] as const;

export const testimonials: Testimonial[] = [
  {
    name: "Cherian Kuruvila",
    role: "Business Coach",
    category: "ecosystem",
  },
  {
    name: "Vivek Srinivasan",
    role: "Managing Partner, WELL Labs",
    quote:
      "I have had the pleasure of working with Salma for close to two decades, and during this time, we have worked on several ventures together. Salma can understand the technical and the human side of the problem and craft appropriate responses to them, which are pragmatic. This makes her a formidable mentor and gives her incredible market insight.",
    category: "ecosystem",
  },
  {
    name: "Dr. Balachandran A",
    role: "General Manager, VIT – Technology Business Incubator",
    quote: `It has been over 13+ years of associating with Ms. Salma Moosa. I have seen her in different roles and what stands out across is her passion for innovation and entrepreneurship.

A rare experiment in the coffee club meet ups in Bangalore when the start-up ecosystem was in nascent stage transformed into an all-India activity under Startups Club. A smaller version of it was rolled out exclusively for VIT students under an initiative known as The Blueprints Club.

Ms. Salma and her cofounder Mr. Vivek travelled to Vellore on most Fridays just to motivate the students and provide them confidence to try. She also provided some early grants for validating ideas and helped to kick-start a good number of student start-up venturing activity in the campus. Notable success stories among them are Vicara (Araciv Technologies), Ashva Wearable technologies and Renaura Wellness.

Ms. Salma and Startups Club provided many opportunities for our VIT-Technology Business Incubator during start-up club events / mega annual demo days in the Chennai–Bangalore region. A true ecosystem builder, people’s person and with greater empathy for founders, Salma had the perseverance and tenacity to handle challenging times. This recommendation is more a gratitude from my side for her unconditional support and opportunities provided to us.

Wishing her the best!`,
    category: "ecosystem",
  },
  {
    name: "Johns T Mathai",
    role: "Founder / CEO, EyeROV",
    quote: `Thank you for your outstanding contributions.

You built the EyeROV Marketing team from the ground up and led it by example. One quality I deeply admire is your ability to inspire and manage your team with positivity and confidence. The marketing team has always been energetic and committed, and the fact that they have never complained about the work is a true reflection of your leadership.

Your contributions in establishing our marketing processes, social media, blogs, TechDive, and overall brand communication have created a strong foundation for EyeROV.

I also remember the energy you brought to all our meetings, like All Hands, Dinners and Workshops. You made a real impact at EyeROV.

And finally, this is not a farewell. You will continue to be part of EyeROV’s journey, supporting us as a valued member. You will always remain a part of the EyeROV family.

Wishing you the very best ahead.`,
    category: "eyerov",
  },
  {
    name: "Kannappa Palaniappan P",
    role: "Founder / CTO, EyeROV",
    quote: `As you transition from your role as Fractional CMO, I wanted to take a moment—not just to say goodbye, but to genuinely thank you for what you’ve built at EyeROV.

You came in at a time when marketing at EyeROV was not a function, but many ideas, scattered between many people and functions sporadically. From day one, your mandate was never simply visibility—it was to build a marketing discipline from scratch, align it deeply with our purpose, and prepare a young, lean, ambitious team for the rigour that deep-tech and marine robotics demand. You did exactly that.

Whether it was shaping our LinkedIn engine, launching TechDive, creating newsletters with clarity and intent, or enabling SDRs and RSMs with structured outreach—your work consistently reinforced one important truth: sustainable success comes from habits and systems.

One of the most lasting contributions you’ve made is embedding the belief that everyone at EyeROV markets EyeROV. The marketing communication ethos you helped establish—thoughtful, honest, technically rooted—will continue to guide how we show up in the ecosystem.

From the extensive logo corrections across establishments, to driving the new website into reality through internal development, your attention to detail and insistence on doing things right set a high bar. Your energy—infectious, focused, and optimistic—brought momentum to everything you touched.

Equally important was the way you showed up as a colleague. Your benevolent appreciation of the team, the positivity you consistently infused into the system, and the respect you extended to every function created trust and ownership. That culture shift is not small—it compounds.

Your work on partnerships, nurturing relationships, ensuring timely follow-ups, driving events, validating leads, and setting up robust lead management systems reflects what I’ll remember most about your time here: a relentless focus on building processes that scale, long after individuals move on.

From a CTO’s perspective, it was reassuring—and inspiring—to work with a marketing leader who thought in systems, cared about execution discipline, and respected the realities of engineering-driven organisations.

Thank you, Salma, for everything you’ve contributed to EyeROV. What you’ve built will continue to shape how we grow, communicate, and collaborate. I’m confident your journey ahead will be just as impactful, and EyeROV will always carry a part of your legacy.

Though the formal engagement as CMO comes to an end today, our engagement with you as mentor-mentee will continue and your guidance for bettering EyeROV to be the legacy, will continue.

A session that truly reminded us — leadership begins within.`,
    category: "eyerov",
  },
  {
    name: "Akhil Manisery",
    role: "Head of Sales, EyeROV",
    quote: `On behalf of the entire team and the whole organisation — Gratitude and Thank you.

Your time as our Fractional CMO didn’t just build EyeROV’s marketing engine; it reshaped how we think, how we speak, and how we show up as a company.

You didn’t give us a playbook.

You helped us become the kind of team that can write one.

From redefining our brand narrative to bringing discipline into communication, from pushing us to think beyond features to owning the story behind the product, your impact is now deeply woven into EyeROV’s culture.

As Sales, we felt that shift the most.

You made us realise that every pitch, every demo, every handshake, and every follow-up is a marketing moment.

Because of that, we now operate with a stronger sense of clarity, alignment, and purpose.

Your reflections are not just lessons but they are standards. Standards we will carry forward with pride.

Thank you for the clarity, the energy, the push, and the belief.

The foundation you’ve helped build ensures we move faster, sharper, and with greater conviction.

You dropped the mic — but your voice, and the echo of it, stays.

Though the formal engagement as CMO comes to an end today, our engagement with you as mentor-mentee will continue and your guidance for bettering EyeROV to be the legacy, will continue.

A session that truly reminded us — leadership begins within.`,
    category: "eyerov",
  },
  {
    name: "Sebatian K T",
    role: "GM Operations, EyeROV",
    quote: `I would like to express my deepest gratitude for the exceptional leadership and dedication you have shown over the past year in your role as Chief Marketing Officer.

When we had no marketing function in place, you stepped in with vision, clarity, and unmatched commitment. You built the marketing team from the ground up, shaped its direction, and set strong foundations that have significantly expanded our market reach and strengthened our brand presence. Your strategic thinking, creative approach, and ability to bring out the best in people have truly transformed this part of the organisation.

While today marks your sign-off as CMO, we are incredibly grateful that you continue to stay with us as a mentor. Your guidance has always been invaluable, and we look forward to learning even more from you in the journey ahead.

Thank you once again, Salma, for everything you have done and hope you will continue to do the same for EyeROV as a Mentor and even more.`,
    category: "eyerov",
  },
  {
    name: "Nagaraj",
    role: "Managing Director, Nativer",
    quote:
      "Working with Salma as our growth mentor has been a transformative journey for all of us at Nativer. Her strategic direction, relentless follow-ups, and deep belief in our potential helped us achieve a major milestone, hitting our revenue targets after months of pursuit. What sets her apart is not just her guidance but her ability to instil faith, structure, and purpose in every team member. She made us believe this was just the beginning, and that belief became fuel. From operations to customer experience, every department felt empowered and aligned under her mentorship. As one team member said, “It’s not just a number, it’s our team’s hard work, spirit, and her unwavering support.” We now move forward with confidence, gratitude, and clarity, knowing that under her mentorship, the sky is truly the limit.",
    category: "mentoring",
  },
  {
    name: "Shravan Shetty",
    role: "Advisor to NGOs and Startups",
    quote:
      "The synergy of experience & business insights that Salma Moosa has will ensure that all clients who work with her will scale up the value chain with ease. I have known Salma for a few years now. We met through a common friend. Salma is a proactive professional who understands business in practise being at ease across business scenarios be it negotiating in Shivajinagar or providing management consulting to a top MNC in the Board room at the Taj West End. Her ability to size up a business opportunity and provide value to clients is based on sound understanding of business dynamics and foresight of what is best for the client. I recommend Salma as a management, growth mentor and a dynamic entrepreneur.",
    category: "ecosystem",
  },
  {
    name: "Anitha Selvan",
    role: "Founder, Career Cognizance",
    quote:
      "Salma Moosa is an exceptional mentor who has guided thousands of startups with her unique insight and unwavering dedication. Despite personal challenges, she emerged stronger, demonstrating resilience that inspires everyone around her. Salma’s ability to market and position services is unmatched, leaving a lasting impact on every venture she touches. Her dynamic personality, passion, and expertise make her one of the most remarkable leaders I’ve had the privilege to learn from. She truly redefines mentorship!",
    category: "mentoring",
  },
  {
    name: "Melbin Mathew Arackal",
    role: "Senior Sales Coordinator, EyeROV Technologies",
    quote:
      "Working closely with Salma has been one of the most meaningful parts of my journey so far. During my time as Sales & Marketing Coordinator and especially when I stepped in as proxy CMO under her guidance, trust and mentorship made all the difference. What stood out most was how approachable and supportive she always was. No matter how challenging things were her encouragement gave me the confidence to take on new responsibilities and grow in ways I hadn’t imagined. Salma brings a rare mix of clarity, empathy, and strategic thinking. She doesn’t just lead she uplifts and empowers the people around her. I’ve learned so much from her, not just about marketing but about what it means to be a thoughtful and inspiring leader. I’m genuinely grateful for the chance to learn from her and any team would be lucky to have someone like Salma guiding the way.",
    category: "eyerov",
  },
  {
    name: "Riya Mary Varghese",
    role: "Lead Engineer, EyeROV",
    quote:
      "Salma is more than a marketing leader—a kind of leader that every team dreams of. She brings an infectious energy that lifts everyone around her, turning challenges into opportunities. She celebrates team wins loudly, supports people through setbacks, and encourages bold thinking at every level. Whether in a high-stakes meeting or a casual brainstorming session, she creates space for every voice to be heard. She is also a culture builder, a motivator, and a trusted guide. I’m grateful to have worked alongside her and would recommend her without hesitation for any senior leadership role. She will surely create an impact!",
    category: "eyerov",
  },
  {
    name: "Abhishek George Zechariah",
    role: "B2B Sales, EyeROV",
    quote:
      "Salma always makes sure she brings out the best in the team. Her energy is out of this world, exactly what anyone needs to stay motivated and keep moving forward. She’s been a huge support when it comes to sharpening marketing insights and helping to look at things from a fresh perspective. Whether it is planning campaigns, brainstorming ideas, or just navigating day-to-day challenges, Salma has always been approachable, encouraging, and ready to help. Her positive attitude and leadership style truly make a difference, and working with her has been both inspiring and uplifting.",
    category: "eyerov",
  },
  {
    name: "Women in STEM Network",
    role: "Volunteer Fundraising Team",
    quote:
      "Our volunteer Fundraising Team is key to sustaining and growing the Women in STEM Network. This dedicated group works collaboratively to secure financial support through grant writing and sponsorships. Each team member brings their unique skills to the process—whether researching funding opportunities, crafting compelling proposals, or cultivating sponsor relationships. Through their efforts, they help ensure our events, training, and community initiatives continue to thrive, making a meaningful impact on women in STEM worldwide.",
    category: "ecosystem",
  },
  {
    name: "Dr. Rakshit N",
    role: "Founder, NammaCoders",
    quote: `Yesterday, I had one of the most insightful conversations in my Entrepreneurial journey. I had the privilege of spending nearly an hour in an in-depth discussion with Salma Moosa, an entrepreneur and mentor who has guided and empowered 100+ founders across diverse domains. Our conversation revolved around NammaCoders and our product sessionslot.com, where we explored:

Building and scaling innovative AI-driven applications that simplify everyday business operations.

Designing a scalable sales funnel to create early traction in service-based industries.

Crafting a strong brand narrative that connects with our audience.

The importance of focus, execution, and founder clarity during the early stages of growth.

What truly stood out was Salma Moosa’s genuine intent, strategic depth, and her ability to bring clarity through experience. Her insights have already sparked new ideas for how we can strengthen sessionslot.com’s direction and impact.

Excited to have more mentoring sessions in the future as we continue to grow together.`,
    category: "mentoring",
  },
  {
    name: "TiE Mysuru",
    role: "Chapter Host",
    quote: `TiE Mysuru Chapter hosted a deeply transformative Masterclass by Ms. Salma Moosa, Founder & President of Twelve 77 Ventures and a renowned Growth Execution Mentor.

Through the session titled “The War Inside the Leader’s Head — Rewiring Guilt, Fear & Pressure”, Ms. Moosa offered a raw and powerful exploration of the emotional battles every entrepreneur and leader faces on their journey.

She invited participants to look inward — to transform guilt into growth, fear into focus, and pressure into purpose. Drawing from her own experiences of failure and resurgence, she emphasised that leadership collapses when emotions are left unmanaged — and that self-awareness is the first strategy every leader must master.

From decoding fear as valuable information, to reframing pressure as a path to purpose, and cultivating emotional fitness through reflection and boundaries, Ms. Moosa guided attendees toward building emotional endurance, authenticity, and clarity — the true pillars of conscious leadership.

The evening concluded with a vibrant Networking High Tea, where participants connected over personal reflections and shared stories of resilience, purpose, and rediscovered clarity.`,
    category: "masterclass",
  },
  {
    name: "Manas H Aravali",
    role: "Startup Founder",
    quote: `Today I attended a masterclass titled “The War Inside the Leader’s Head: Rewiring Guilt, Fear & Pressure” – and it was nothing short of transformative.

The session was led by Salma Moosa, Founder & President of Twelve 77 Ventures, a powerhouse mentor who has guided hundreds of founders through the hardest parts of leadership, the emotional, unseen ones.

Here’s what hit the hardest:

Leadership isn’t about control. It’s about clarity. When emotions run unchecked, leadership fractures. Self-awareness is not optional, it’s the foundation.

Pressure doesn’t destroy leaders – denial does. The key is to rewire pressure into purpose, and fear into fuel.

Authenticity over applause. Stop performing leadership. Start practicing it.

Just like physical strength needs training, emotional strength needs discipline – reflection, rest, and honest boundaries.

Fear isn’t your enemy; it’s data. Listen to it, but don’t let it steer you.

Guilt is noise. Accountability is signal. The goal isn’t perfection – it’s progress.

The true battle of leadership isn’t out there. It’s in your own head.

I left with a sharper mindset, a quieter ego, and a stronger sense of direction – to lead with intent, not impulse.`,
    category: "masterclass",
  },
  {
    name: "Pranav Kumar Adiga",
    role: "Aspiring Entrepreneur",
    quote: `Honoured to attend the TiE Masterclass today!

Today, I had the wonderful opportunity to attend the Session organised. The session was led by the inspiring Salma Moosa Ma’am, who shared powerful insights on “The War Inside the Leader’s Head – Rewiring Guilt, Fear & Pressure.”

This session was more than just a talk — it was a deep dive into leadership, emotional resilience, and the real challenges entrepreneurs face. I also had the chance to connect with aspiring entrepreneurs, innovators, and industry leaders, and got a glimpse into how TiE creates bridges between startups and investors. Grateful to Salma Moosa Ma’am for her wisdom and authenticity, and for bringing together such a meaningful learning and networking experience.

Key Takeaways:

Leadership starts with mastering your inner battles.
Fear, pressure, and guilt are not barriers — they’re signals for growth.
Building the right mindset attracts the right people and investors.
Networking with purpose can shape future collaborations.

Feeling inspired and motivated to apply these learnings in my journey ahead!`,
    category: "masterclass",
  },
  {
    name: "Disha P",
    role: "Student Entrepreneur",
    quote: `“The War Inside the Leader’s Head – Rewiring Guilt, Fear & Pressure.” Today’s session with Ms. Salma Moosa honestly hit differently.

It wasn’t about strategy or business tactics — it was about emotional intelligence and endurance as a leader. I learned that leadership isn’t about performing, it’s about living it. That guilt and self-doubt only drain you, while self-accountability helps you grow.

That fear is just data — something that we need to question, not avoid. That pressure can actually turn into purpose when your priorities, purpose, and energy align. And also, taking a break isn’t a sign of weakness — it’s how you recharge your clarity.

Emotional strength, just like fitness, comes from consistent practice. So when we rewire “Guilt into Growth”, “Fear into Focus” and “Pressure into Purpose” you don’t just lead better, you LIVE BETTER. Truly grateful to Salma Moosa mam for such a warm, powerful, and grounding session.`,
    category: "masterclass",
  },
  {
    name: "Srinidhi TG",
    role: "MIT Thandavapura",
    quote: `Masterclass Reflection, TiE Mysuru

Today, I had the incredible opportunity to attend a powerful and thought-provoking masterclass by Salma Moosa, the inspiring Founder & President of Twelve 77 Ventures. The session was a deep dive into topics we often shy away from — guilt, pressure, fear, and the importance of authenticity over applause. Salma Ma’am’s insights truly resonated, reminding us that growth begins the moment we confront our emotions with honesty and courage.

Her words encouraged us to embrace our imperfections, channel fear into focus, and stay true to ourselves — even when the world expects otherwise. It was more than just a talk; it was a mirror to self-reflection and resilience. So grateful for this learning experience and the chance to grow alongside some amazing minds!`,
    category: "masterclass",
  },
  {
    name: "Akhilesh G",
    role: "Management Student, JSS Mysuru",
    quote: `From Guilt to Growth, Fear to Focus, and Pressure to Purpose — The Leadership Reset We All Needed

Key Takeaways that deeply resonated:

Guilt isn’t leadership — it clouds clarity. True leaders practice self-accountability without self-punishment.
Fear isn’t a stop sign — it’s valuable information that can sharpen your focus.
Pressure isn’t the enemy — it can be rewired into purpose, turning stress into stamina and chaos into direction.
Authenticity over applause — real respect grows when leaders choose truth over approval.
Clarity is your greatest competitive advantage — when your inner compass is steady, your strategy aligns effortlessly.

Immense gratitude to Ms. Salma Moosa for sharing her real-life experiences with honesty, warmth, and wisdom. Her words were not just powerful — they were deeply human. It was truly heartening to interact with her and feel her passion for helping leaders grow from within.

A heartfelt thank you to TiE Mysuru for hosting such a meaningful and thought-provoking masterclass. I’m walking away with renewed clarity, stronger emotional muscles, and a reminder that leadership begins from the inside out.`,
    category: "masterclass",
  },
];
