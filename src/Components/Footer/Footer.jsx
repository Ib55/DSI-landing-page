import React from "react";
import Image from "../../Assets";

function Footer() {
  return (
    <>
      <div className="container">
        <div class="grid  gap-4 w-11\12 m-auto md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
          <div>
            <div><img src={Image.logo} alt="" /></div>
            <p className="fw-bold">PT Dwidasa Samsara Indonesia</p>
            <p>Ruko Jalur Sutera 29A No. 53</p>
            <p>Alam Sutera Serpong, Tangerang 15323</p>
          </div>

          <div>
            <p className="fw-bold h4 mb-4">Contact</p>
            <p>Phone : +62.21.5314.1135</p>
            <p>Fax : +62.21.5314.1135</p>
            <p>Email : community@dwidasa.com</p>
          </div>
          <div>
               <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3">
                <div><img src={Image.f1} alt="" /></div>
                <div><img src={Image.f2} alt="" /></div>
                <div><img src={Image.f3} alt="" /></div>
                <div><img src={Image.f4} alt="" /></div>
                <div><img src={Image.f5} alt="" /></div>
                <div><img src={Image.f6} alt="" /></div>
               </div>
          </div>
        </div>
      </div>
      <div className="f_color h-12">
        <p className="md:text-center text-justify  text-white pt-2">Copyright © 2015 - Dwidasa Samsara Indonesia</p>
      </div>
    </>
  );
}

export default Footer;
