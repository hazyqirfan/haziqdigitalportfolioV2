
export default function About() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">about me</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            hi👋
            <br />
            I&apos;m Haziq, turning ideas into reality through code. Over the past year, I&apos;ve immersed myself in web development, mastering <span className="font-bold bg-gradient-to-r from-purple-600 to-black text-transparent bg-clip-text"> typescipt, javascript, react, and node.js.</span> <br />
            My passion lies in creating web applications that dont just meet expectations—they exceed them.
            
            <br />
            <br />
            love creating a project that looks good and work great.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">background</h3>
              <p className="text-muted-foreground">
              I am a Software Development student at Politeknik Muadzam Shah. I enjoy transforming complex problems into simple, beautiful, and intuitive designs.<br />My passion lies in creating digital solutions that combine technical excellence with stunning visuals, ensuring every project delivers an exceptional user experience.👨‍💻
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">skills</h3>
              <p className="text-muted-foreground">
              My technical toolkit includes HTML, CSS, Python, and PHP for web development. I&apos;m experienced in database management and Android Studio for mobile development. My workflow is enhanced by Visual Studio Code, and I&apos;m proficient in automation tools like Power Automate, RPA, VBA, and Bomgar for streamlined solutions.🌌💻
              </p>
            </div>
    
          </div>
        </div>
      </section>
    )
  }
