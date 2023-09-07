import { createContext,ReactNode, useContext,useState } from "react";
import axios,{AxiosError} from 'axios';
import {toast} from 'react-hot-toast';
import { Chapter, Chapters, Slok } from "../types/Chapters";



interface Main{
    chapters?:Chapters[],
    chapter?:Chapter,
    getChapters:()=>Promise<void>,
    getChapter:(id:number)=>Promise<void>,
    slock?:Slok,
    getSlock:(id:number,verse:number)=>Promise<void>
}


const defaultValue:Main = {
    getChapters:async()=>{},
    getChapter:async(id:number)=>{},
    getSlock:async(id:number,verse:number)=>{}

}


const MainContext= createContext<Main>(defaultValue);

export const MainContextrovider = ({children}:{children:ReactNode})=>{

    const [Chapters,setChapters] = useState<Chapters[]>([]);
    const [FeSlok,setSlok] = useState<Slok>({
      chapter:0,
      verse:0,
      slok:'',
      transliteration:'',
      tej:{
        author:''
      },
      siva:{
        author:''
      },
      purohit:{
        author:''
      },
      chinmay:{
        author:''
      },
      san:{
        author:''
      },
      adi:{
        author:''
      },
      gambir:{
        author:''
      },
      madhav:{
        author:''
      },
      anand:{
        author:''
      },
      rams:{
        author:''
      },
      raman:{
        author:''
      },
      abhinav:{
        author:''
      },
      sankar:{
        author:''
      },
      jaya:{
        author:''
      },
      vallabh:{
        author:''
      },
      ms:{
        author:''
      },
      srid:{
        author:''
      },
      dhan:{
        author:''
      },
      venkat:{
        author:''
      },
      puru:{
        author:''
      },
      neel:{
        author:''
      },
    });
    const [Chapter,setChapter] = useState<Chapter>({
      name: "",
      summary_en:'',
      summary_hi:'',
      translation:'',
      verses_count:0,
      chapter_number:0    });
    const url:string = `//bhagavadgitaapi.in`;

    const fetchChapters = async()=>{
            try {
                const response = await axios.get(`${url}/chapters/`);

                // Assuming a successful response, you can access the data here
                const chapters = await response.data;
                setChapters(chapters)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    // Handle Axios errors
                    if (error.response) {
                      // The request was made, but the server responded with an error status code
                      toast.error(error.response.data.message);
                    } else if (error.request) {
                      // The request was made, but no response was received
                      toast.error('No response received from the server.');
                    } else {
                      // Something else happened while setting up the request
                      toast.error('An error occurred while making the request.');
                    }
                  } else {
                    // Handle other non-Axios errors
                    toast.error('An error occurred.');
                  }
            }
    }
    const fetchChapter = async(id:number)=>{
      setChapter({
        name: "",
        summary_en:'',
        summary_hi:'',
        translation:'',
        verses_count:0,
        chapter_number:0    })
      try {

          const response = await axios.get(`${url}/chapter/${id}`);

          // Assuming a successful response, you can access the data here
          const chapter = await response.data;
          setChapter({
            name:chapter.name,
            summary_en:chapter.summary?.en,
            summary_hi:chapter.summary?.hi,
            translation:chapter.translation,
            verses_count:chapter.verses_count,
            chapter_number:chapter.chapter_number
          })
          // setChapters(chapters)
      } catch (error) {
          if (axios.isAxiosError(error)) {
              // Handle Axios errors
              if (error.response) {
                // The request was made, but the server responded with an error status code
                toast.error(error.response.data.message);
              } else if (error.request) {
                // The request was made, but no response was received
                toast.error('No response received from the server.');
              } else {
                // Something else happened while setting up the request
                toast.error('An error occurred while making the request.');
              }
            } else {
              // Handle other non-Axios errors
              toast.error('An error occurred.');
            }
      }
}

const fetchSlocks = async(id:number,verse:number)=>{
  setSlok({
    chapter:0,
    verse:0,
    slok:'',
    transliteration:'',
    tej:{
      author:''
    },
    siva:{
      author:''
    },
    purohit:{
      author:''
    },
    chinmay:{
      author:''
    },
    san:{
      author:''
    },
    adi:{
      author:''
    },
    gambir:{
      author:''
    },
    madhav:{
      author:''
    },
    anand:{
      author:''
    },
    rams:{
      author:''
    },
    raman:{
      author:''
    },
    abhinav:{
      author:''
    },
    sankar:{
      author:''
    },
    jaya:{
      author:''
    },
    vallabh:{
      author:''
    },
    ms:{
      author:''
    },
    srid:{
      author:''
    },
    dhan:{
      author:''
    },
    venkat:{
      author:''
    },
    puru:{
      author:''
    },
    neel:{
      author:''
    },
  })
  try{

    const response = await axios.get(`${url}/slok/${id}/${verse}`);

    // Assuming a successful response, you can access the data here
    const sloks = await response.data;

    setSlok({
      chapter:sloks?.chapter,
      verse:sloks?.verse,
      slok:sloks?.slok,
      transliteration:sloks.transliteration,
      tej:{
        author:sloks?.tej?.author,
        slok:sloks?.tej?.ht
      },
      siva:{
        author:sloks?.siva?.author,
        slok:sloks?.siva?.et
      },
      purohit:{
        author:sloks?.purohit?.author,
        slok:sloks?.purohit?.et
      },
      chinmay:{
        author:sloks?.chinmay?.author,
        slok:sloks?.chinmay?.hc
      },
      san:{
        author:sloks?.san?.author,
        slok:sloks?.san?.et
      },
      adi:{
        author:sloks?.adi?.author,
        slok:sloks?.adi?.et
      },
      gambir:{
        author:sloks?.gambir?.author,
        slok:sloks?.gambir?.et
      },
      madhav:{
        author:sloks?.madhav?.author,
        slok:sloks?.madhav?.sc
      },
      anand:{
        author:sloks?.anand?.author,
        slok:sloks?.anand?.sc
      },
      rams:{
        author:sloks?.rams?.author,
        slok:sloks?.rams?.hc
      },
      raman:{
        author:sloks?.raman?.author,
        slok:sloks?.raman?.sc
      },
      abhinav:{
        author:sloks?.abhinav?.author,
        slok:sloks?.abhinav?.sc
      },
      sankar:{
        author:sloks?.sankar?.author,
        slok:sloks?.sankar?.sc
      },
      jaya:{
        author:sloks?.jaya?.author,
        slok:sloks?.jaya?.sc
      },
      vallabh:{
        author:sloks?.vallabh?.author,
        slok:sloks?.vallabh?.sc
      },
      ms:{
        author:sloks?.vallabh?.author,
        slok:sloks?.vallabh?.sc
      },
      srid:{
        author:sloks?.srid?.author,
        slok:sloks?.srid?.sc
      },
      dhan:{
        author:sloks?.dhan?.author,
        slok:sloks?.dhan?.sc
      },
      venkat:{
        author:sloks?.venkat?.author,
        slok:sloks?.venkat?.sc
      },
      puru:{
        author:sloks?.puru?.author,
        slok:sloks?.puru?.sc
      },
      neel:{
        author:sloks?.neel?.author,
        slok:sloks?.neel?.sc
      },
    })

  }catch(error){
    if (axios.isAxiosError(error)) {
      // Handle Axios errors
      if (error.response) {
        // The request was made, but the server responded with an error status code
        toast.error(error.response.data.message);
      } else if (error.request) {
        // The request was made, but no response was received
        toast.error('No response received from the server.');
      } else {
        // Something else happened while setting up the request
        toast.error('An error occurred while making the request.');
      }
    } else {
      // Handle other non-Axios errors
      toast.error('An error occurred.');
    }
  }
}




    const value:Main = {
chapters: Chapters ,
getChapters:fetchChapters,
getChapter:fetchChapter,
chapter:Chapter,
getSlock:fetchSlocks,
slock:FeSlok


    }

    return <MainContext.Provider value={value}>
        {children}
    </MainContext.Provider>
}

export const useMainContext = ()=>{
    return useContext(MainContext);
}