import { motion } from "framer-motion";


export default function SkillsIcons() {
  return (
    <section className="w-full flex items-center bg-light-100 dark:bg-dark-800 py-24">
      <article className="container mx-auto flex-col flex items-start">
        <div className="flex flex-col md:flex-row w-full items-center gap-x-8 gap-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            // variants={slideFromLeft}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
            className="flex flex-col w-full md:w-1/2 items-center md:items-start gap-y-4"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-0">
              Show off your <span className="text-brand">skills</span>
            </h2>
            <p className="text-lg text-center md:text-left mb-0">
              Select from over 60 core languages, frameworks, backend
              technologies and web 3 tech.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            // variants={slideFromRight}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
            className="flex flex-col gap-y-4 md:ml-auto"
          >
            <div className="flex gap-x-4 items-center">
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="C icon"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="HTML5"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="JavaScript"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Tailwind CSS"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="TypeScript"
                />
              </div>
            </div>

            <div className="flex gap-x-4 items-center">
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="PHP"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Vue JS"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Supabase"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Figma"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="React JS"
                />
              </div>
            </div>

            <div className="flex gap-x-4 items-center">
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Next JS"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Nest JS"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Angular JS"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored.svg"
                  width="100%"
                  className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Babel"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-dark.svg"
                  width="100%"
                  className="dark:flex hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Babel"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Python"
                />
              </div>
            </div>

            <div className="flex gap-x-4 items-center">
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Firebase"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Flutter"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
                  width="100%"
                  className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Express JS"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-dark.svg"
                  width="100%"
                  className="hidden dark:flex scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Express JS"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Gatbsy"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="GraphQL"
                />
              </div>
            </div>

            <div className="flex gap-x-4 items-center">
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Bootstrap"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/swift-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Swift"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Dart"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/svelte-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="Svelte"
                />
              </div>
              <div className="w-10 sm:w-12 md:w-12">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                  width="100%"
                  className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  alt="SaaS"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </section>
  );
}
