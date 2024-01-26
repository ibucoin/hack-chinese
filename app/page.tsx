import WordsForm from "./(home)/_components/words-form";

export default function Home() {
  return (
    <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent">
        Generate the Excel formulas in seconds using AI.
      </h1>
      <WordsForm></WordsForm>
    </div>
  );
}
