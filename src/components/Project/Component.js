function Project(props) {
  return (
    <div className="flex flex-col text-left p-5">
      <h1 className="text-baseBlack text-4xl mb-1">{props.title}</h1>
      <div className="flex w-fit gap-2 flex-wrap">
        {props.tags.map((tag) => {
          return (
            <div className=" p-2 bg-baseGreenDark rounded-lg h-6 flex justify-center items-center mb-1 font-lgc">
              <p>{tag}</p>
            </div>
          );
        })}
      </div>
      <img className=" max-h-96 w-auto" src={props.image}></img>
      <p className="text-baseBlack font-lgc text-sm py-2">
        {props.description}
      </p>
      <div className="flex gap-2 flex-wrap w-fit ">
        {props.links.map((linkItem) => {
          return (
            <a
              className="h-fit bg-baseMid hover:bg-baseDark max-w-fit p-2 font-lgc flex justify-center items-center text-center rounded-lg text-mid "
              href={linkItem.link}
            >
              {props.currentLanguage === "en"
                ? linkItem.linkText
                : linkItem.linkTextNl}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
