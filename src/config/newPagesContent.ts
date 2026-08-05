// Content for the 5 new nav pages, per
// "Alef Research - Website text for final cut" (2026-07-23).
import type { ChapterSection } from "./chapterContent";

// "Our founders" has no text blocks -- it's special-cased in
// ChapterSectionView (id === "founders") to render <FoundersGrid /> instead.
const foundersPage: ChapterSection = {
  id: "founders",
  heading: "Our founders",
  blocks: [],
};

const coworkerPage: ChapterSection = {
  id: "coworker",
  heading: "Be our co-worker if...",
  blocks: [
    {
      type: "point",
      marker: "(a).",
      text: "If you believe in natural intelligence, ability, dignity and experience as a human. Doesn't matter if you are a fail in school 10th class. It will be even better if you deliberately dropped out of college.",
    },
    {
      type: "point",
      marker: "(b).",
      text: "If your knowledge is actually useful to the industry of travelling and living in the kosmos in a democratic and non-profit way. So this discounts work types like HR, CSR, MBA-requiring positions, most IT-requiring positions and most finance-knowledge-requiring positions.",
    },
    {
      type: "point",
      marker: "(c).",
      text: "If your spoken and written language is simple, gentle, honest, receptive, educated ( in the real sense ) and enlightened. Not language full of nonsense corporate buzzwords ( Cutting Edge, Center of Excellence, Paradigm Shift etc ).",
    },
    {
      type: "point",
      marker: "(d).",
      text: "If you respect the natural laws which we present in our website's three chapters.",
    },
    {
      type: "point",
      marker: "(e).",
      text: "If you do innovative and simplifying thinking even if going against traditions, industry standards and fashions.",
    },
    {
      type: "point",
      marker: "(f).",
      text: "If you have no love for feudalism and profit and consider money as a temporary necessity for the now but which must be eventually abolished. Our company is a non-profit and Worker Cooperative type so is without feudalism, capitalism, profiteering but is with internal democracy.",
    },
    {
      type: "point",
      marker: "(g).",
      text: "If you desire a largely secular borderless unification of humanity on Earth and in the kosmos.",
    },
    {
      type: "point",
      marker: "(h).",
      text: "If you are well-presented in clothing, grooming and talking manner. Not fake but real. Not aggressive but gentle and genuine.",
    },
    {
      type: "point",
      marker: "(i).",
      text: "If you ideally consider the cat as the most perfect animal in the kosmos, ha ha.",
    },
    {
      type: "point",
      marker: "(j).",
      text: "If you consider tea as one of the main human gifts giveable to alien cultures in the kosmos, ha ha.",
    },
  ],
};

const bizPlanPage: ChapterSection = {
  id: "bizplan",
  heading: "Our simple business plan",
  blocks: [
    {
      type: "p",
      text: "We are a non-profit, B2G design organization and our direct clients will be the space departments of national governments who will purchase the designs of our products for a reasonably cheap license fee ( ten million dollars ) and build our systems in their societies as many as possible and make them available to their citizens without feudalism and tax including money.",
    },
    {
      type: "p",
      text: "Our presently in-design systems will enable a cheap, simple, safer and democratic manned space program for potentially every Earthen society by which any of their society's citizens can become kosmonauts who can travel through the kosmos, including the first human hollowed-asteroid city ZC-S000-C000-NAlif which we will build by 2035.",
    },
    {
      type: "p",
      text: "These Earthen citizens can participate in the building of such Zarra-C type traveling hollowed-asteroid cities and they can become citizens of such traveling asteroid cities and can thus travel across the kosmos.",
    },
    {
      type: "p",
      text: 'And when these people return to their Earthen societies they will bring back experiences and materials from there to these societies in a pan-human, democratic way so that these societies are intellectually enriched, materially enriched and contribute to humanity within the bounds of respect for Nature and a pan-human "Liberty, Equality, Fraternity, Evolution".',
    },
    {
      type: "p",
      text: "And our company's fee for enabling such a grand situation for Earthen societies, is just ten million dollar for every Earthen society.",
    },
    {
      type: "p",
      text: "Our ten million dollar license fee is a small fraction of what a single rich individual pays now for a single ticket to visit and stay, not on the Moon even which is about 380,000 kilometers away, but just the International Space Station which is orbiting only 400 kilometers above our heads.",
    },
    {
      type: "p",
      text: "The single person tickets presently cost at least 50 million dollars... and ours is ten million dollars for an entire space program which can transport many people at once throughout the Solar System.",
    },
    {
      type: "p",
      text: "Also in today's terms, our ten million dollar license fee is similar to the license fee for a company to acquire the design of a single type of commercial microprocessor for use in cell phones.",
    },
    {
      type: "p",
      text: "So, for just ten million dollars our client national space departments will acquire the design of our techno systems for an entire space program by which their citizens can travel and settle the entire Solar System in the intermediate term and this in a harmonious and pan-human way.",
    },
    {
      type: "p",
      text: 'We choose not to be "space trillionaires" who want to impose the evil ideas of feudalism, tax, money, profit and class even on Nature\'s creations in the vast kosmos.',
    },
    {
      type: "p",
      text: "We choose to be humanists working towards the unified human kosmik utopia which is also in harmony with Nature.",
    },
  ],
};

const newsPage: ChapterSection = {
  id: "news",
  heading: "News",
  blocks: [
    {
      type: "link",
      href: "https://youtube.com/@AlefResearch",
      label: "youtube.com/@AlefResearch",
    },
  ],
};

const thanks: ChapterSection = {
  id: "thanks",
  heading: "Thanks",
  blocks: [
    {
      type: "p",
      text: "We thank the following people who are not directly part of our organization but have helped us either in person or by their ideas and works we found on paper or on the internet. From our income we will contribute money and other help to these people or their descendents or their movements :",
    },
    {
      type: "point",
      marker: "(a0).",
      text: "Vikram for the logo, for the website design, for provoking the thought in us to have this Thanks topic and for reminding about water-powered turbine in a discussion which hours later led to us re-thinking about the idea of turbines powered by compressed air.",
    },
    {
      type: "p",
      text: "Thanks to him also for provoking the idea in us for our website's topic against free market, money and profit which is in the 'Our social system' chapter.",
    },
    {
      type: "p",
      text: "Thanks to him also for mentioning the need for vehicle-based short distance transportation for humans.",
    },
    {
      type: "point",
      marker: "(a1).",
      text: "Apoorva JR for presenting to us an Instagram page in 2023 which contained reports on eco-friendly ways of generating electricity and which led to our discovery of the 'sand battery'.",
    },
    {
      type: "p",
      text: "Apoorva's LinkedIn page: [LinkedIn](https://www.linkedin.com/in/apoorvajr)",
    },
    {
      type: "p",
      text: "Sadly we forgot that Insta page's name but we are thankful to that page's maintainer and also to Instagram. That Insta page spoke of the company Polar Night Energy which applied the sand battery in a real life setting despite there being no prior industry use of this method and we are thankful to this company.",
    },
    {
      type: "point",
      marker: "(a2).",
      text: "The 2009 Hindi film 'Rocket Singh : Salesman of the Year' for being one of the inspirations about the idea of Worker Cooperative",
    },
    {
      type: "p",
      text: "There is a line in this film said by the main character Harpreet Singh Bedi - 'Jo kaam kar sakta hai, woh partner bhi bann sakta hai' which in the context of the film translates to 'If an employee can do work required in this company, he can and should become partner in the company too'.",
    },
    {
      type: "point",
      marker: "(a3).",
      text: "YouTube and Wikipedia in general.",
    },
    {
      type: "point",
      marker: "(a4).",
      text: "Robert Murray-Smith on his YouTube channel 'ThinkingandTinkering' for the idea about using a simple electro-mechanical vibrator for amplification of electricity, made using an electro-magnetic relay.",
    },
    {
      type: "p",
      text: "This vid called '1026 The easiest inverter you will ever make' is on this page [YouTube](https://www.youtube.com/watch?v=L-vC9SvU2Lo). This we use in our design of the Faradn generator.",
    },
    {
      type: "p",
      text: "We also thank him for the idea of 'Local social empowerment' which he presents through the projects on his channel.",
    },
    {
      type: "point",
      marker: "(a5).",
      text: "[Bellows](https://en.wikipedia.org/wiki/Bellows)",
    },
    {
      type: "point",
      marker: "(a6).",
      text: "Farzad Zangeneh-Nejad and Romain Fleury at the Federal Institute of Technology ( EPFL ) in Lausanne, Switzerland, for the idea of using sound to do analog computing.",
    },
    {
      type: "point",
      marker: "(a7).",
      text: "RMIT University, Australia, for the idea that sound can be used to make electrolysis better and make use of cheaper electrode material. The article saying this is here [Power Engineering](https://www.power-eng.com/hydrogen/sound-waves-boost-green-hydrogen-production/#) so we also thank the website [power-eng.com](https://www.power-eng.com).",
    },
    {
      type: "p",
      text: "New Scientist online magazine for carrying an article about a wonderful research by Jacob Rosenstein and his colleagues at Brown University, Rhode Island. This research is about storing computer data into sugar molecules, amino acids and other small molecules.",
    },
    {
      type: "p",
      text: "This article we found while checking others' researches about storing computer data into sugar molecules which then can be ingested by humans and plants.",
    },
    {
      type: "p",
      text: "This article is on this link [New Scientist](https://www.newscientist.com/article/2208439-data-can-now-be-stored-inside-the-molecules-that-power-our-metabolism/).",
    },
    {
      type: "point",
      marker: "(a9).",
      text: "Planetary Science Division of NASA for the idea of creating an artificial magnetosphere for Red One.",
    },
    {
      type: "point",
      marker: "(b0).",
      text: "Coke Studio Bangla Season One for presenting the song 'Shob Lokey Koy' which is among our inspirations for our social system for the kosmos.",
    },
    {
      type: "p",
      text: "This song is in the Bengali and Hindi languages and is a celebration of two past South Asian humanitarian mystics, Lalon Fakir and Kabir Das, and calls for unity of humans because they all are the waters from the same well except for some differences in the vessels which then contain the waters.",
    },
    {
      type: "p",
      text: "The song is available on YouTube on this page [YouTube](https://www.youtube.com/watch?v=L-arhlgPiy8).",
    },
    {
      type: "point",
      marker: "(b1).",
      text: "The website [constitutionofindia.net](https://www.constitutionofindia.net) for the info about the discussions during the early years of the design of the Indian constitution, in particular the proposals by Socialists Hasrat Mohani and Brajeshwar Prasad.",
    },
    {
      type: "p",
      text: "Their proposals can be read here [Constitution debates](https://www.constitutionofindia.net/debates/17-oct-1949/).",
    },
    {
      type: "point",
      marker: "(b2).",
      text: "Ashok on the 'Nationalizer' account on [Medium](https://medium.com) for his essay about the Indian Socialist Brajeshwar Prasad who spoke in favour of Socialism during the design years of the Indian constitution",
    },
    {
      type: "p",
      text: "The essay can be read here [Nationalizer essay](https://nationalizer.medium.com/socialist-and-secular-but-not-sovereign-brajeshwar-prasad-s-amendment-to-preamble-1bb8a1e8142e) so we also thank the website [Medium](https://medium.com).",
    },
    {
      type: "point",
      marker: "(b3).",
      text: "Rabindranath Tagore for his essay that speaks against Nationalism. The essay can be read here [Tagore essay](https://mast.queensu.ca/~murty/Tagore-Nationalism-1915.pdf) so we also thank Queen's University of Canada.",
    },
    {
      type: "point",
      marker: "(b4).",
      text: " BR Ambedkar among other things, for saying in a 1953 vid interview with BBC that the so-called Democratic Process of five-yearly elections participated by multiple political parties and producing a stream of pompously titled bureaucrats, is not actual democracy and will never produce a society which brings proper food and other reasonable material needs to the masses and will never change society from feudalism to true democracy, but that change can be brought by Socialism.",
    },
    {
      type: "p",
      text: "This rejection of the fake-democratic process of elections and stuff has been stated later by other philosphers too.",
    },
    {
      type: "p",
      text: "BBC has carried this interview with Ambedkar on this page [BBC interview](https://www.youtube.com/watch?v=WS7P9TKDZ2k) so we thank BBC for this rare vid.",
    },
    {
      type: "point",
      marker: "(b5).",
      text: "Che Guevara for his 1964 speech in the United Nations General Assembly, from which we take our mention of Mammon, and the YouTube channel of United Nations which carries this speech on this page [United Nations](https://www.youtube.com/watch?v=bufHojkoGtw).",
    },
    {
      type: "point",
      marker: "(b6).",
      text: "The media agency 'The Atlantic' for this article about Yuri Gagarin's flight around Earth [The Atlantic](https://www.theatlantic.com/technology/archive/2011/04/yuri-gagarins-first-speech-about-his-flight-into-space/237134/).",
    },
    {
      type: "point",
      marker: "(b7).",
      text: "The website 'Go Physics' for this collection of Yuri Gagarin's quotes [Go Physics](https://thegophysics.com/yuri-gagarin-quotes/)",
    },
    {
      type: "point",
      marker: "(b8).",
      text: "The website [4lit](https://en.4lit.net) for sayings by Fidel Castro at this page [Fidel Castro quotes](https://en.4lit.net/citaty/people/1088/fidel_castro?page=2).",
    },
    {
      type: "point",
      marker: "(b9).",
      text: "The website [idcommunism](https://www.idcommunism.com) for sayings by Fidel Castro at this page [Fidel Castro quotes](https://www.idcommunism.com/2018/08/remembering-fidel-castro-ruz-quotes-on-capitalism.html).",
    },
    {
      type: "point",
      marker: "(c0).",
      text: "Jamal Abdul Nasser of Bangalore for the idea about having a social fund within our company. This social fund will be for helping citizens anywhere towards emergency situations like funeral expenses and medical expenses when the citizens are unable to find help otherwise.",
    },
    {
      type: "point",
      marker: "(c1).",
      text: "The Facebook page of the ECOSOCC department of the African Union for explaining the wonderful African concept of Ubuntu... and by extension our thanks to Facebook too. The said page is [Ubuntu post](https://www.facebook.com/africanunion.ecosocc/posts/ubuntu-is-a-concept-deeply-rooted-in-african-philosophy-and-culture-particularly/1210650454579928/).",
    },
    {
      type: "point",
      marker: "(c2).",
      text: " Rayees Kunnool for the idea about smell-based computer data communication.",
    },
    {
      type: "point",
      marker: "(c3).",
      text: " Mr. Swamy of Bangalore for the idea that water machines which produce water from air should be designed in a way where an area's localized air should not be so much extracted of its water that the air becomes dry.",
    },
    {
      type: "point",
      marker: "(c4).",
      text: " The cover art on our homepage is from the DeviantArt website's DreamUp AI picture generation facility.",
    },
    {
      type: "point",
      marker: "(c5).",
      text: "The cover art on our homepage was converted to sepia color tone using the website [sepia.imageonline.co](https://sepia.imageonline.co).",
    },
    {
      type: "point",
      marker: "(c6).",
      text: "In general we thank all the good thinkers of the past and present whose thoughts and works we use in our projects.",
    },
  ],
};

const contactPage: ChapterSection = {
  id: "contact",
  heading: "Contact us",
  blocks: [
    {
      type: "link",
      href: "mailto:kosmos.society.2033@gmail.com",
      label: "kosmos.society.2033@gmail.com",
    },
  ],
};

export const NEW_PAGES: Record<string, ChapterSection> = {
  founders: foundersPage,
  coworker: coworkerPage,
  bizplan: bizPlanPage,
  news: newsPage,
  thanks: thanks,
  contact: contactPage,
};
