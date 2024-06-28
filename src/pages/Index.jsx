import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const text = "Welcome to the Bare-Bones App. This is a minimal web application setup. Start building your features here.";

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight.trim()) {
      return text;
    }
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="bg-yellow-300">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-1/2"
      />
      <div className="text-center">
        <h1 className="text-3xl">{getHighlightedText("Welcome to the Bare-Bones App", searchTerm)}</h1>
        <p>{getHighlightedText("This is a minimal web application setup. Start building your features here.", searchTerm)}</p>
      </div>
    </div>
  );
};

export default Index;