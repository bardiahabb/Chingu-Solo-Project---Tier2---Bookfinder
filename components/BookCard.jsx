export default function BookCard(props) {
  return (
    <>
      <div className="shadow-lg shadow-gray-500 mx-4 my-8 w-[400px] flex bg-white">
        <div className="mr-8 w-[140px]  relative">
          <img
          className="absolute top-[-15px] left-2 shadow-md shadow-gray-500"
            src={
              props.CoverImage == undefined
                ? ""
                : props.CoverImage.smallThumbnail
            }
            alt=""
          />
        </div>
        <div className="pt-2 pr-3 pb-20 relative">
          <div className="font-semibold text-2xl text-slate-500 mb-2">
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
          <button className="absolute bottom-4 bg-blue-500 rounded-md px-4 py-1 text-slate-50 shadow-md shadow-gray-500 active:shadow-sm active:shadow-gray-500 transition active:scale-[0.98]">
            see this book
          </button>
        </div>
      </div>
    </>
  );
}
