import "../../index.css"
import { Dropdown, DropdownMenuItemType, IDropdownStyles,  } from '@fluentui/react/lib/Dropdown';
import { useEffect, useState } from "react";

const Quran: React.FC = () => {
// const endPoint ="http://api.alquran.cloud/v1/quran/en.asad"
const [quranText, setQuranText] = useState([])
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 , height:300},
};
const surahOptions = (quranText: any) =>{
  const option = quranText.map((name: any) =>{
    return { key: name.englishName, text: name.englishName ,data:name.ayahs}
  }  )
  
  return option
}

const getQuran = async () => {
    const response = await fetch("http://api.alquran.cloud/v1/quran/quran-uthmani ");
const movies = await response.json();
const {surahs} = movies.data
setQuranText(surahs)

}
useEffect(() => {
getQuran()
console.log(surahOptions(quranText))
},[])

    return (
      <div className="d-flex align-content-center h-100">
       
     <Dropdown 
     className=''
         placeholder="Select an option"
         label="Pick Your Surah"
         options={surahOptions(quranText)}
         styles={dropdownStyles}
       
      />
      
        {/* <audio controls src=""></audio> */}
      </div>
    );
  }
  
  export default Quran;