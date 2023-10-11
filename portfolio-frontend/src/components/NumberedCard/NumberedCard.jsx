function NumberedCard({ number, title, description }) {
  return (
    <div className="flex items-end justify-center">
      <div className="line relative bottom-3 mr-5 inline-block h-1 w-2/12 bg-orange-500"></div>
      <span className="font-number relative right-5 text-9xl text-[#63800f] opacity-30">
        {number}
      </span>
      <div className="line relative bottom-3 ml-5 inline-block h-1 w-10/12 bg-orange-500"></div>
    </div>
  );
}

export default NumberedCard;
