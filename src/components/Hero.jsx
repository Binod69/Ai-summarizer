import logo from '../assets/logo.svg';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img className="w-28 object-contain" src={logo} alt="logo.svg" />
        <button
          type="button"
          onClick={() => window.open('https://github.com/binod69')}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transform lengthy articles into clear and consice summaries
      </h2>
    </header>
  );
};

export default Hero;
