import { useState } from "react";
import kimNgocImage from "@/assets/kim-ngoc.jpg";

export const HistoricalTooltip = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={kimNgocImage}
          alt="Kim Ngọc"
          className="w-64 h-80 object-cover rounded-lg shadow-lg border-4 border-card transition-transform duration-300 hover:scale-105"
        />
        
        {isHovered && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
            <div className="bg-card text-card-foreground px-6 py-4 rounded-lg shadow-xl border border-border">
              <p className="text-sm font-medium whitespace-nowrap">
                Bí thư Tỉnh ủy Vĩnh Phúc
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                (1917–1979)
              </p>
            </div>
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-card mx-auto"></div>
          </div>
        )}
      </div>
    </div>
  );
};
