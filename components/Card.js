export default function Card({ path, title, subtitle, link, background }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        style={{ background: background }}
        className="flex items-center justify-center object-cover w-full h-20 border border-gray-200 rounded-lg shadow-md md:h-32 lg:h-48 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="w-6 h-6 md:h-10 md:w-10">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Twitter</title>
            <path d={path} fill="#fff" fillRule="evenodd" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="pt-2">
        <h2 className="mb-1 text-2xl font-bold tracking-tight text-textLight dark:text-textDark">
          {title}
        </h2>
        <p className="mb-3 font-normal text-textLight dark:text-textDark opacity-90">
          {subtitle}
        </p>
      </div>
    </a>
  );
}
