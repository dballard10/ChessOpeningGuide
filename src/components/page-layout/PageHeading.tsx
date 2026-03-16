interface PageHeadingProps {
  title: string;
}

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <header className="bg-white/5 backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto max-w-4xl px-4 lg:px-0 py-6">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default PageHeading;
