export default function BookCard(props) {
  return (
    <>
      <div className="shadow-lg shadow-gray-500 mx-4 my-8 w-[400px] flex bg-white min-h-[250px]">
        <div className="mr-8 w-[140px]  relative">
          <img
            className="absolute top-[-15px] left-2 shadow-md shadow-gray-500 w-full"
            src={
              props.CoverImage == undefined ? "" : props.CoverImage.thumbnail
            }
            alt=""
          />
        </div>
        <div className="pt-4 pr-3 pb-20 relative w-[60%]">
          <div className="font-semibold text-2xl text-slate-500 mb-5">
            {props.Title == undefined ? "not found" : props.Title}
          </div>
          <div className="text-sm text-slate-500 font-medium">
            author : {props.Author == undefined ? "not found" : props.Author}
          </div>
          <div className="text-sm text-slate-500 font-medium">
            publisher :{" "}
            {props.Publisher == undefined ? "not found" : props.Publisher}
          </div>
          <div className="text-sm text-slate-500 font-medium">publishing?</div>
          <a href={props.BookUrl} target="_blank" rel="noreferrer">
            <button className="text-base absolute bottom-4 bg-blue-500 rounded-md px-4 py-1 text-slate-50 shadow-md shadow-gray-500 active:shadow-sm active:shadow-gray-500 transition active:scale-[0.98]">
              see this book
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
