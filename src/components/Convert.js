import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const setTranslatedText = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    setTranslatedText();
  }, [debouncedText, language]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;

//how to limit no. of requests in an app

//set a timer function for 500ms in useState no one return a cleanup function if time exceeds 500

// code to do that

// useEffect(() => {
//   const timerId = setTimeout(() => {
//     setDebouncedText(text);
//   }, 500);
//   return () => {
//     clearTimeout(timerId);
//   };
// }, [text]);
