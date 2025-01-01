import React from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CompanyEvent = {
  companyName: string;
  years: {
    year: string;
    customers: TimelineEvent[];
  }[];
};

type TimelineEvent = {
  customer: string;
  title: string;
  description: string;
  url: string;
  subcategories?: string[];
};

const companyEvents: CompanyEvent[] = [
  {
    companyName: "Passion",
    years: [
      {
        year: "2023",
        customers: [
          { customer: "Short film", title: "passion", description: " worked as Video Editor and Director.", url: "https://youtu.be/gMSKcbAYATk?si=AeR5L0iUf_ro57gQ" },
        ],
      },
    ],
  },
  {
    companyName: "Veerans",
    years: [
      {
        year: "2024",
        customers: [
          { customer: "Short film", title: "Veerans", description: "worked as a Video Editor and cinematographer.",  url: "https://youtu.be/OrOmtYUoh7g?si=2tAPH4sunSS3E-HJ" },
        ],
      },
    ],
  },
  {
    companyName: "Yen",
    years: [
      {
        year: "2024",
        customers: [
          { customer: "Shirt film", title: "Yen", description: " worked as Video Editor and Screenplay.",  url: "https://www.instagram.com/reel/CupD1y1g6GQ/?igsh=cHVmY2U5N2MxMm9o" },
        ],
      },
    ],
  },
  {
    companyName: "Learn Legacy",
    years: [
      {
        year: "2024",
        customers: [
          {
            customer: "Promotion content video ",
            title: "Learn Legacy",
            description: "worked as a Video Editor.",
            url: "https://youtube.com/shorts/hC1zkeSX7KM?si=Np_IZi4Yfxi8h8hd"
          },
        ],
      },
    ]
    },
    {
      companyName: "GENZ",
      years: [
        {
          year: "2024",
          customers: [
            { customer: "Promotion content video", title: "GENZ", description: " worked as Video Editor and Director.", url: "https://drive.google.com/drive/folders/186W3Q_voCZn6qWCD1A-Xu_dQfUJwOCIe" },
          ],
        },
      ],
    },
    {
      companyName: "LYNX EYE",
      years: [
        {
          year: "2024",
          customers: [
            { customer: "Promotion content video", title: "LYNX EYE", description: " worked as a Video Editor", url: "https://www.instagram.com/reel/C2LQ7cMqvOY/?igsh=MWZubDVqMGY2Mm9teg==" },
          ],
        },
      ],
    },
]
function Timeline() {
  return (
    <div>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="w-full max-w-3xl mx-auto">
            <h1 className=" pb-8 mb-4 text-3xl font-extrabold underline decoration-purple-800 leading-none tracking-tight md:text-3xl lg:text-6xl text-black">
            Portfolio
            </h1>
            <div className="relative">
              {/* <!-- Timeline Line --> */}
              <div className="absolute left-2 sm:left-0 w-px h-full bg-slate-300 sm:ml-[6.5rem]"></div>
              <div className="flex flex-col justify-center">
                {companyEvents.map((companyEvent, companyIndex) => (
                  <div key={companyIndex} className="py-4">
                    <div className="text-center font-caveat pb-4 font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                      {companyEvent.companyName}
                    </div>
                    {companyEvent.years.map((yearEvent, yearIndex) => (
                      <div key={yearIndex}>
                        {yearEvent.year && (
                          <time className="text-center block px-4 text-emerald-600 bg-emerald-100 rounded-full w-28 mx-auto my-4">
                            {yearEvent.year}
                          </time>
                        )}

                        <div className="-my-6">
                          {yearEvent.customers.map((event, index) => (
                            <div
                              key={index}
                              className="relative pl-8 sm:pl-32 py-6 group"
                            >
                              {/* <!-- Timeline Marker --> */}
                              <div className="absolute left-2 sm:left-0 w-2 h-2 bg-indigo-600 border-4 box-content border-slate-50 rounded-full sm:ml-[6.5rem] -translate-x-1/2 translate-y-1.5"></div>
                              {/* <!-- Timeline Content --> */}
                              <div className="text-xl text-left text-slate-900">
                                <span className="block transform">
                                  <span className="-skew-x-12 italic font-bold">
                                    {event.customer} - 
                                  </span>{" "}
                                  {event.url ? (
                                    <a href={event.url} className="link-with-icon">
                                      <span className="px-1">{event.title}</span>
                                      <FontAwesomeIcon icon={faLink} color="black" size="xs" />
                                    </a>
                                  ) : (
                                    <span className="">{event.title}</span>
                                  )}
                                </span>
                              </div>
                              <div className="text-slate-500 text-left">
                                {event.description}
                              </div>

                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Timeline;
