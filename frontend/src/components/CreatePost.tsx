
const CreatePost = () => {
//   const handleFileSelect = (files) => {
//     // Process the selected files here
//     console.log('Selected files:', files);
//   };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className='bg-white w-full mx-3 md:w-3/5  p-8 rounded-lg shadow'>
      <p className='text-center font-semibold text-black text-5xl my-4 '>Create Post</p>
      <div className=" flex flex-col lg:flex-row lg:space-x-6">
        <div className="mb-6 lg:w-2/3">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full py-2 px-4 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Enter the title"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium bg-white text-gray-700 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="w-full py-2 px-4 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Enter the description"
              rows={3}
            ></textarea>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium bg-white text-gray-700 mb-2" htmlFor="tags">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              className="w-full py-2 px-4 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Enter the tags"
            />
          </div>
        </div>
        <div className="lg:w-1/3 flex justify-center items-center">
          <div className="w-full relative border-2 border-dashed border-gray-500 rounded-lg py-12 px-4 mb-6 bg-[#f5f7fd]">
            {/* <div className="bg-gray-100 border border-gray-300 rounded-lg p-4"> */}
              {/* <img src={AddIcon} width={50} alt="" className='mx-auto' /> */}
              <p className="text-gray-500 text-sm text-center mb-1">Add your images here</p>
              <p className="text-gray-500 text-xs text-center">Support .png .jpg .jpeg</p>
              <input className='flex justify-center items-center my-5 cursor-pointer' type="file" />
              
            {/* </div> */}

          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
      <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-lg px-4 py-2">Post the content
      </button>
      </div>
      </div>

    </div>
  );
};

export default CreatePost;
