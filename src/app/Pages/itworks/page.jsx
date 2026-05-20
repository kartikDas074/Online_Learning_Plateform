import Link from "next/link";

const steps = [
    {
      id: "01",
      title: "Register Account",
      desc: "Create your account in a few seconds using your email and password.",
      emoji: "📝",
    },
    {
      id: "02",
      title: "Login",
      desc: "Login to your account securely and access your dashboard.",
      emoji: "🔐",
    },
    {
      id: "03",
      title: "Select Your Course",
      desc: "Browse our premium courses and choose the perfect one for you.",
      emoji: "📚",
    },
    {
      id: "04",
      title: "Enroll & Start Learning",
      desc: "Enroll in your course and begin your learning journey instantly.",
      emoji: "🚀",
    },
  ];
const Workingpage = () => {
    return (
        <div className="min-h-screen bg-[black] text-white px-6 py-20">
     
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Get Started With <span className="text-blue-500">Our Platform</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Start your learning journey in just a few simple steps and unlock
          unlimited opportunities.
        </p>
      </div>

  
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-5xl">{step.emoji}</span>

              <span className="text-5xl font-bold text-white/10 group-hover:text-blue-500/30 transition">
                {step.id}
              </span>
            </div>

            <h2 className="mt-6 text-2xl font-semibold">{step.title}</h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

     
      <div className="text-center mt-24">
      <Link href={'/Authentication/signup'}>
        <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/20">
          Get Started Now
        </button>
      </Link>
        
      </div>
    </div>
    );
};

export default Workingpage;