const SectionTitle = ({ title, story }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl underline font-semibold">{title}</h1>
      <p>{story}</p>
    </div>
  );
};

export default SectionTitle;
