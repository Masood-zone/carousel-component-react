import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useState } from "react";
import { IMAGES } from "./data";

function Slider() {
  const [activeButton, setActiveButton] = useState("button1");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: "y" }, [
    Autoplay({ delay: 1000 }),
  ]);

  // Prev and Next button functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    setActiveButton("button1");
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    setActiveButton("button2");
  }, [emblaApi]);

  return (
    <div
      className="overflow-hidden bg-gray-300 w-96 mx-auto flex flex-col items-center justify-center h-auto relative rounded-2xl my-44"
      ref={emblaRef}
    >
      {/* Images */}
      <div className="flex flex-col w-[650px] h-96">
        {IMAGES.map((item) => {
          return (
            <div key={item.id} className="embla__slide relative h-full w-full ">
              <img className="w-full h-full " src={item.src} alt={item.alt} />
            </div>
          );
        })}
      </div>
      {/* Buttons */}
      <div className="mt-10 flex flex-col absolute right-0 gap-4">
        <button
          className={`mt-2 px-4 py-4 rounded-full ${
            activeButton === "button1" ? "bg-[#F2AA4C]" : "bg-[#F6D6AD]"
          }`}
          onClick={scrollPrev}
        ></button>
        <button
          className={`mt-2 px-4 py-4 rounded-full ${
            activeButton === "button1" ? "bg-[#F6D6AD]" : "bg-[#F2AA4C]"
          }`}
          onClick={scrollNext}
        ></button>
      </div>
    </div>
  );
}

export default Slider;
