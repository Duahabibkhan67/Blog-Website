



export default function Contact () {
  return (
    <>
      
      <div className="text-center w-15 mt-3">
        <h2 className="font-extrabold text-[2rem] text-blue-950 sm:mt-16">Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services. Please Feel Free To Drop Us<br /> An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
     
    

        <div className="mt-6 flex justify-center ">
            <form className="sm:flex   sm:flex-col ... " action="" >
                <label htmlFor="">Name</label>
                <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[17rem]" placeholder="name" />
                <label htmlFor="">Email</label>
                <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[17rem]" placeholder="email" />
                <label htmlFor="">Subject</label>
                <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[17rem]" placeholder="optional" />
                <label htmlFor="">Message</label>
                <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[17rem]" placeholder="Hi! id like to ask about" />
                <button className="self-start bg-blue-950 text-white mt-6 p-3 sm:w-[10rem] rounded-md my-9">Submit</button>
            </form>
        </div>
        

      
    
    </>
  );
}