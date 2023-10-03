
const AboutMe = () => {
  return (
    <div>
      <div className="p-5">
        <div>
          <h1 className="text-[#8469f4] text-xl mt-4 font-medium">About Me</h1>
          <p className="text-[#ABAFB3] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            ipsum dolor aspernatur iure, deleniti non beatae labore temporibus
            ab adipisci ex deserunt nulla consequatur atque aliquam asperiores
            excepturi itaque amet. Quisquam deleniti, voluptatum eius odio
            laborum similique dignissimos minus fugit nemo maxime! Fugiat
            aliquam laudantium impedit, molestias fugit provident assumenda
            praesentium animi, minus illo, quo enim quae consequatur
            reprehenderit inventore! Molestiae mollitia error eligendi! Magni,
            doloribus consectetur iusto facilis, minus harum deleniti nulla
            reprehenderit maiores nihil tempora quaerat debitis incidunt
            reiciendis alias dolorem voluptatem quae officiis vel. Facilis,
            sapiente maiores. Obcaecati veritatis, explicabo natus sit tenetur
            aperiam excepturi odit quas aliquam iusto at laboriosam assumenda
            delectus nobis culpa magni amet voluptate eveniet ut? Doloremque id
            repudiandae minima nihil dolore tempora. Velit natus facere quasi
            quod eaque dolores itaque architecto earum voluptatem illo numquam,
            repudiandae delectus reprehenderit ducimus dicta quibusdam
            recusandae non modi praesentium deserunt sit? Corrupti numquam
            minima rerum cum?
          </p>
          <hr className="mt-12" />
        </div>
        <div>
          <p className="text-[#8469f4] mt-5 font-medium">Personality</p>
          <div className="mt-3 ">
            <div className="flex gap-x-3">
              <div className="border rounded-full p-2 px-4 text-black w-fit">
                Body
              </div>
              <div className="border rounded-full p-2 px-4 text-black w-fit">
                Befiles
              </div>
              <div className="border rounded-full p-2 px-4 text-black w-fit">
                Professional
              </div>
              <div className="border rounded-full p-2 px-4 text-black w-fit">
                Status
              </div>
              <div className="border rounded-full p-2 px-4 text-black w-fit">
                Files
              </div>
              <div className="border rounded-full p-2 px-4 text-black w-fit">
                Preferences
              </div>
            </div>
            <hr className="mt-8" />
          </div>
        </div>
        <div className="mt-5">
          <div>
            <p className="text-[#8469f4] font-medium">Languages</p>
            <div className="flex gap-x-5 mt-4">
              <p className="text-black">English</p>
              <p className="text-black">German</p>
              <p className="text-black">French</p>
            </div>
          </div>
          <hr className="mt-8" />
        </div>
        <div className="mt-5">
          <div>
            <p className="text-[#8469f4] font-medium">Personal Information</p>
            <div className="grid grid-cols-12 mt-4">   
              <div className="col-span-3">
                <p className="text-black">
                  Name
                </p>
              </div>   
              <div className="col-span-9">
                <p className="text-[#ABAFB3]">
                  :    Mitchel C Shay 
                </p>
              </div> 
            </div>
            <div className="grid grid-cols-12 mt-4">   
              <div className="col-span-3">
                <p className="text-black">
                  Email
                </p>
              </div>   
              <div className="col-span-9">
                <p className="text-[#ABAFB3]">
                 :    mitchel@ghdesigner.com 
                </p>
              </div> 
            </div>
            <div className="grid grid-cols-12 mt-4">   
              <div className="col-span-3">
                <p className="text-black">
                  Availability
                </p>
              </div>   
              <div className="col-span-9">
                <p className="text-[#ABAFB3]">
                  :    Full Time feelancer 
                </p>
              </div> 
            </div>
            <div className="grid grid-cols-12 mt-4">   
              <div className="col-span-3">
                <p className="text-black">
                  Age
                </p>
              </div>   
              <div className="col-span-9">
                <p className="text-[#ABAFB3]">
                  :    Mitchel C Shay 
                </p>
              </div> 
            </div>
            <div className="grid grid-cols-12 mt-4">   
              <div className="col-span-3">
                <p className="text-black">
                  Location
                </p>
              </div>   
              <div className="col-span-9">
                <p className="text-[#ABAFB3]">
                  :  Rosemont Avenue Florida
                </p>
              </div> 
            </div>
            <div className="grid grid-cols-12 mt-4">   
              <div className="col-span-3">
                <p className="text-black">
                  Year Experience
                </p>
              </div>   
              <div className="col-span-9">
                <p className="text-[#ABAFB3]">
                  :   07 Year Experience
                </p>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
